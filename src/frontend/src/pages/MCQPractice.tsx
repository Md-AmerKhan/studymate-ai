import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  type MCQQuestion,
  type SubjectKey,
  getNextBatch,
  getTotalQuestions,
} from "@/data/mcqBank";
import {
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

const SUBJECTS: SubjectKey[] = [
  "Physics",
  "Chemistry",
  "Math",
  "Biology",
  "English",
  "History",
  "Computer Science",
];

const BATCH_SIZE = 5;

type QuizMode = "idle" | "one-at-a-time" | "all-at-once" | "batch-results";

interface AnswerState {
  questionId: string;
  selectedOption: number | null;
  isRevealed: boolean;
}

function ScoreEmoji(score: number, total: number): string {
  const pct = (score / total) * 100;
  if (pct === 100) return "🌟 Perfect!";
  if (pct >= 80) return "🎉 Excellent!";
  if (pct >= 60) return "👍 Good job!";
  if (pct >= 40) return "📚 Keep practicing!";
  return "💪 Keep going!";
}

const OPTION_LETTERS = ["A", "B", "C", "D"] as const;

interface QuestionCardProps {
  question: MCQQuestion;
  answerState: AnswerState;
  onSelect: (qId: string, optIdx: number) => void;
  mode: "one-at-a-time" | "all-at-once";
  questionNum: number;
  totalQuestions: number;
}

function QuestionCard({
  question,
  answerState,
  onSelect,
  mode,
  questionNum,
  totalQuestions,
}: QuestionCardProps) {
  const isRevealed = answerState.isRevealed;
  const selected = answerState.selectedOption;

  return (
    <Card className="border-0 shadow-card">
      <CardContent className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Badge className="bg-study-sky-light text-study-sky border-0 font-display text-xs px-2">
            Q{questionNum}/{totalQuestions}
          </Badge>
        </div>

        {/* Question */}
        <p className="text-sm font-medium text-foreground font-body leading-relaxed">
          {question.question}
        </p>

        {/* Options */}
        <div className="space-y-2">
          {question.options.map((option, idx) => {
            const isSelected = selected === idx;
            const isCorrect = idx === question.correct;
            const isWrong = isRevealed && isSelected && !isCorrect;
            const showCorrect = isRevealed && isCorrect;

            let className =
              "w-full text-left p-3 rounded-xl border text-sm font-body transition-all flex items-center gap-3 ";

            if (isRevealed) {
              if (showCorrect) {
                className +=
                  "bg-study-mint-light border-study-mint/50 text-study-mint";
              } else if (isWrong) {
                className +=
                  "bg-study-rose-light border-study-rose/50 text-study-rose";
              } else {
                className +=
                  "bg-muted border-border text-muted-foreground opacity-60";
              }
            } else if (isSelected) {
              className +=
                "bg-study-sky-light border-study-sky/50 text-study-sky";
            } else {
              className +=
                "bg-card border-border text-foreground hover:border-study-sky/30 hover:bg-study-sky-light/30";
            }

            return (
              <button
                type="button"
                key={`${question.id}-${idx}`}
                data-ocid="mcq.answer.button"
                onClick={() => {
                  if (!isRevealed || mode === "all-at-once") {
                    onSelect(question.id, idx);
                  }
                }}
                disabled={mode === "one-at-a-time" && isRevealed}
                className={className}
              >
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold font-display flex items-center justify-center ${
                    isRevealed
                      ? showCorrect
                        ? "bg-study-mint text-white"
                        : isWrong
                          ? "bg-study-rose text-white"
                          : "bg-muted text-muted-foreground"
                      : isSelected
                        ? "bg-study-sky text-white"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {OPTION_LETTERS[idx]}
                </span>
                <span className="flex-1">{option}</span>
                {isRevealed && (
                  <span className="flex-shrink-0 ml-auto">
                    {showCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-study-mint" />
                    ) : isWrong ? (
                      <XCircle className="w-4 h-4 text-study-rose" />
                    ) : null}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-lg bg-study-lavender-light border border-study-lavender/20"
          >
            <p className="text-xs font-semibold font-display text-study-lavender mb-1">
              Explanation
            </p>
            <p className="text-xs text-foreground font-body leading-relaxed">
              {question.explanation}
            </p>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}

export function MCQPractice() {
  const [subject, setSubject] = useState<SubjectKey | "">("");
  const [quizMode, setQuizMode] = useState<QuizMode>("idle");
  const [allAtOnce, setAllAtOnce] = useState(false);

  // Current batch
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

  // Cross-batch session tracking
  const [seenIds, setSeenIds] = useState<Set<string>>(new Set());
  const [batchNumber, setBatchNumber] = useState(1);
  const [sessionScore, setSessionScore] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [batchScore, setBatchScore] = useState(0);

  const loadBatch = useCallback(
    (currentSeenIds: Set<string>, currentBatchNum: number) => {
      if (!subject) return;
      const batch = getNextBatch(subject, currentSeenIds, BATCH_SIZE);
      if (batch.length === 0) return;

      const initialAnswers: Record<string, AnswerState> = {};
      for (const q of batch) {
        initialAnswers[q.id] = {
          questionId: q.id,
          selectedOption: null,
          isRevealed: false,
        };
      }
      setQuestions(batch);
      setAnswers(initialAnswers);
      setCurrentIndex(0);
      setBatchNumber(currentBatchNum);
      setQuizMode(allAtOnce ? "all-at-once" : "one-at-a-time");
    },
    [subject, allAtOnce],
  );

  const startQuiz = useCallback(() => {
    if (!subject) return;
    const newSeenIds = new Set<string>();
    setSeenIds(newSeenIds);
    setSessionScore(0);
    setSessionTotal(0);
    setBatchScore(0);
    loadBatch(newSeenIds, 1);
  }, [subject, loadBatch]);

  const handleSelectOption = useCallback(
    (qId: string, optIdx: number) => {
      if (quizMode === "one-at-a-time") {
        setAnswers((prev) => ({
          ...prev,
          [qId]: { ...prev[qId], selectedOption: optIdx, isRevealed: true },
        }));
      } else {
        setAnswers((prev) => ({
          ...prev,
          [qId]: { ...prev[qId], selectedOption: optIdx },
        }));
      }
    },
    [quizMode],
  );

  const finishBatch = useCallback(
    (finalAnswers: Record<string, AnswerState>, qs: MCQQuestion[]) => {
      const batchSc = qs.filter(
        (q) => finalAnswers[q.id]?.selectedOption === q.correct,
      ).length;
      setBatchScore(batchSc);
      setSessionScore((prev) => prev + batchSc);
      setSessionTotal((prev) => prev + qs.length);

      // Mark batch questions as seen
      setSeenIds((prev) => {
        const next = new Set(prev);
        for (const q of qs) next.add(q.id);
        return next;
      });

      setQuizMode("batch-results");
    },
    [],
  );

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishBatch(answers, questions);
    }
  };

  const handleSubmitAll = () => {
    const revealed: Record<string, AnswerState> = {};
    for (const q of questions) {
      revealed[q.id] = { ...answers[q.id], isRevealed: true };
    }
    setAnswers(revealed);
    finishBatch(revealed, questions);
  };

  const handleNextBatch = useCallback(() => {
    setBatchScore(0);
    setSeenIds((prevSeen) => {
      const nextBatchNum = batchNumber + 1;
      loadBatch(prevSeen, nextBatchNum);
      return prevSeen;
    });
  }, [batchNumber, loadBatch]);

  const handleRetry = useCallback(() => {
    setQuizMode("idle");
    setQuestions([]);
    setAnswers({});
    setCurrentIndex(0);
    setSeenIds(new Set());
    setSessionScore(0);
    setSessionTotal(0);
    setBatchScore(0);
    setBatchNumber(1);
  }, []);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const canGoNext = currentAnswer?.isRevealed && quizMode === "one-at-a-time";
  const allAnswered =
    quizMode === "all-at-once" &&
    questions.every((q) => answers[q.id]?.selectedOption !== null);

  const totalQuestionsInSubject = subject ? getTotalQuestions(subject) : 0;
  const hasMoreBatches = subject
    ? getNextBatch(
        subject,
        new Set([...seenIds, ...questions.map((q) => q.id)]),
        1,
      ).length > 0
    : false;

  return (
    <div className="space-y-5 pb-4">
      {/* Setup */}
      {quizMode === "idle" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-5"
        >
          <Card className="border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-display text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-study-rose" />
                MCQ Practice Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Subject */}
              <div className="space-y-2">
                <Label className="font-body text-sm font-medium">
                  Select Subject
                </Label>
                <Select
                  value={subject}
                  onValueChange={(v) => setSubject(v as SubjectKey)}
                >
                  <SelectTrigger
                    data-ocid="mcq.subject.select"
                    className="font-body text-sm"
                  >
                    <SelectValue placeholder="Choose a subject..." />
                  </SelectTrigger>
                  <SelectContent>
                    {SUBJECTS.map((s) => (
                      <SelectItem key={s} value={s} className="font-body">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-muted border border-border">
                <div>
                  <p className="text-sm font-semibold font-display text-foreground">
                    All at once mode
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    See all 5 questions before submitting
                  </p>
                </div>
                <Switch checked={allAtOnce} onCheckedChange={setAllAtOnce} />
              </div>

              {subject && (
                <p className="text-xs text-muted-foreground font-body text-center">
                  {getTotalQuestions(subject as SubjectKey)} questions available
                  — taken 5 at a time, no repeats
                </p>
              )}

              <Button
                data-ocid="mcq.start.button"
                onClick={startQuiz}
                disabled={!subject}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display"
              >
                Start Quiz — 5 Questions
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Subject info cards */}
          <div className="grid grid-cols-2 gap-3">
            {SUBJECTS.map((sub) => (
              <button
                type="button"
                key={sub}
                onClick={() => setSubject(sub)}
                className={`card-hover p-3 rounded-xl text-left border transition-all ${
                  subject === sub
                    ? "border-study-sky/50 bg-study-sky-light"
                    : "border-border bg-card shadow-card"
                }`}
              >
                <p
                  className={`text-sm font-semibold font-display ${subject === sub ? "text-study-sky" : "text-foreground"}`}
                >
                  {sub}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">
                  {getTotalQuestions(sub)} questions
                </p>
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* One-at-a-time mode */}
      {quizMode === "one-at-a-time" && currentQuestion && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground font-body">
              <span>
                Batch {batchNumber} — Q{currentIndex + 1}/{questions.length}
              </span>
              <span>{subject}</span>
            </div>
            <Progress
              value={((currentIndex + 1) / questions.length) * 100}
              className="h-1.5"
            />
          </div>

          {sessionTotal > 0 && (
            <div className="flex items-center gap-2 px-1">
              <Badge className="bg-study-mint-light text-study-mint border-0 font-body text-xs">
                Session: {sessionScore}/{sessionTotal} correct
              </Badge>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${batchNumber}-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <QuestionCard
                question={currentQuestion}
                answerState={answers[currentQuestion.id]}
                onSelect={handleSelectOption}
                mode="one-at-a-time"
                questionNum={currentIndex + 1}
                totalQuestions={questions.length}
              />
            </motion.div>
          </AnimatePresence>

          <Button
            data-ocid="mcq.next.button"
            onClick={handleNext}
            disabled={!canGoNext}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display disabled:opacity-40"
          >
            {currentIndex < questions.length - 1 ? (
              <>
                Next Question <ChevronRight className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                See Batch Results <Trophy className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </motion.div>
      )}

      {/* All-at-once mode */}
      {quizMode === "all-at-once" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-bold font-display text-foreground">
              Batch {batchNumber} — {subject}
            </h2>
            <Badge className="bg-study-lavender-light text-study-lavender border-0 font-body text-xs">
              All at once
            </Badge>
          </div>

          {sessionTotal > 0 && (
            <Badge className="bg-study-mint-light text-study-mint border-0 font-body text-xs">
              Session: {sessionScore}/{sessionTotal} correct
            </Badge>
          )}

          {questions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              answerState={answers[q.id]}
              onSelect={handleSelectOption}
              mode="all-at-once"
              questionNum={idx + 1}
              totalQuestions={questions.length}
            />
          ))}

          <Button
            data-ocid="mcq.submit.button"
            onClick={handleSubmitAll}
            disabled={!allAnswered}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display disabled:opacity-40"
          >
            Submit & See Results <Trophy className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      )}

      {/* Batch Results */}
      {quizMode === "batch-results" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="space-y-4"
        >
          <Card className="border-0 shadow-card overflow-hidden">
            <div className="bg-gradient-to-br from-study-sky-light to-study-lavender-light p-6 text-center">
              <div className="text-4xl mb-2">
                {batchScore === questions.length
                  ? "🌟"
                  : batchScore >= 3
                    ? "🎉"
                    : "💪"}
              </div>
              <p className="text-3xl font-bold font-display text-foreground mb-1">
                {batchScore} / {questions.length}
              </p>
              <p className="text-lg font-semibold font-display text-study-sky">
                {ScoreEmoji(batchScore, questions.length)}
              </p>
              <p className="text-sm text-muted-foreground font-body mt-1">
                {Math.round((batchScore / questions.length) * 100)}% correct
                this batch
              </p>

              {/* Session running total */}
              <div className="mt-3 p-2 rounded-lg bg-white/40 inline-block">
                <p className="text-xs font-semibold font-display text-foreground">
                  Session total: {sessionScore} / {sessionTotal} correct
                </p>
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              {/* Question-by-question breakdown */}
              <p className="text-sm font-semibold font-display text-foreground">
                Review — Batch {batchNumber}
              </p>
              <div className="space-y-2">
                {questions.map((q) => {
                  const ans = answers[q.id];
                  const isCorrect = ans?.selectedOption === q.correct;
                  return (
                    <div
                      key={q.id}
                      className={`flex items-start gap-3 p-2.5 rounded-lg ${isCorrect ? "bg-study-mint-light/50" : "bg-study-rose-light/50"}`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-study-mint" />
                        ) : (
                          <XCircle className="w-4 h-4 text-study-rose" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-body text-foreground line-clamp-2">
                          {q.question}
                        </p>
                        {!isCorrect && (
                          <p className="text-xs text-study-mint font-body mt-0.5">
                            ✓ {q.options[q.correct]}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 pt-1">
                {hasMoreBatches ? (
                  <Button
                    data-ocid="mcq.next_batch.button"
                    onClick={handleNextBatch}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Next 5 Questions (Batch {batchNumber + 1})
                  </Button>
                ) : (
                  <div className="p-3 rounded-xl bg-study-mint-light border border-study-mint/20 text-center">
                    <p className="text-sm font-semibold font-display text-study-mint">
                      All {totalQuestionsInSubject} questions completed!
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      Final score: {sessionScore} / {sessionTotal} correct
                    </p>
                  </div>
                )}

                <Button
                  data-ocid="mcq.retry.button"
                  onClick={handleRetry}
                  variant="outline"
                  className="w-full font-display"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Start Over / Change Subject
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
