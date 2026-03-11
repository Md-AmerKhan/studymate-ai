import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  type ExamType,
  type RoadmapTopic,
  examRoadmaps,
} from "@/data/examRoadmaps";
import {
  BookOpen,
  CheckSquare,
  ChevronRight,
  Square,
  Target,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

const EXAM_OPTIONS: Array<{ value: ExamType; label: string }> = [
  { value: "EAPCET", label: "AP EAPCET" },
  { value: "TS_EAPCET", label: "TS EAPCET" },
  { value: "JEE_MAINS", label: "JEE Mains" },
  { value: "JEE_ADVANCED", label: "JEE Advanced" },
  { value: "SEMESTER", label: "Semester Exams" },
];

const SUBJECT_COLORS: Record<string, string> = {
  Physics: "chip-sky",
  Chemistry: "chip-lavender",
  Mathematics: "chip-mint",
  Math: "chip-mint",
  "Engineering Mathematics": "chip-mint",
  "Engineering Physics": "chip-sky",
  "Engineering Chemistry": "chip-lavender",
  "Programming in C": "chip-rose",
  "Basic Electronics": "chip-amber",
  "Communication Skills": "chip-sky",
  Strategy: "chip-rose",
};

function getSubjectColor(subject: string): string {
  return SUBJECT_COLORS[subject] || "chip-sky";
}

const PRIORITY_COLORS = {
  high: "text-study-rose bg-study-rose-light border border-study-rose/20",
  medium: "text-study-amber bg-study-amber-light border border-study-amber/20",
  low: "text-study-mint bg-study-mint-light border border-study-mint/20",
};

// Get unique subjects from topics
function getSubjects(topics: RoadmapTopic[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const t of topics) {
    if (!seen.has(t.subject)) {
      seen.add(t.subject);
      result.push(t.subject);
    }
  }
  return result;
}

const STORAGE_KEY = "studymate_exam_progress";

function loadProgress(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Record<string, boolean>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function ExamPrep() {
  const [examType, setExamType] = useState<ExamType | "">("");
  const [examDate, setExamDate] = useState("");
  const [roadmapVisible, setRoadmapVisible] = useState(false);
  const [completedTopics, setCompletedTopics] =
    useState<Record<string, boolean>>(loadProgress);
  const [activeSubject, setActiveSubject] = useState<string>("All");

  const roadmap = examType ? examRoadmaps[examType] : null;

  const daysRemaining = examDate
    ? Math.max(
        0,
        Math.ceil(
          (new Date(examDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
        ),
      )
    : null;

  const topicsPerDay =
    daysRemaining && roadmap
      ? Math.ceil(roadmap.totalTopics / daysRemaining)
      : null;

  const handleGenerate = () => {
    if (!examType) return;
    setRoadmapVisible(true);
    setActiveSubject("All");
  };

  const toggleTopic = useCallback((topicId: string) => {
    setCompletedTopics((prev) => {
      const updated = { ...prev, [topicId]: !prev[topicId] };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const filteredTopics = roadmap
    ? activeSubject === "All"
      ? roadmap.topics
      : roadmap.topics.filter((t) => t.subject === activeSubject)
    : [];

  const completedCount = roadmap
    ? roadmap.topics.filter((t) => completedTopics[t.id]).length
    : 0;

  const progressPercent = roadmap
    ? Math.round((completedCount / roadmap.totalTopics) * 100)
    : 0;

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  const subjects = roadmap ? getSubjects(roadmap.topics) : [];

  return (
    <div className="space-y-5 pb-4">
      {/* Form */}
      <Card className="border-0 shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-display text-foreground flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-study-mint" />
            Exam Preparation Roadmap
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Exam Type */}
          <div className="space-y-2">
            <Label className="font-body text-sm font-medium">Select Exam</Label>
            <Select
              value={examType}
              onValueChange={(v) => {
                setExamType(v as ExamType);
                setRoadmapVisible(false);
              }}
            >
              <SelectTrigger
                data-ocid="examprep.exam_type.select"
                className="font-body text-sm"
              >
                <SelectValue placeholder="Choose your exam..." />
              </SelectTrigger>
              <SelectContent>
                {EXAM_OPTIONS.map((opt) => (
                  <SelectItem
                    key={opt.value}
                    value={opt.value}
                    className="font-body"
                  >
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Exam Date */}
          <div className="space-y-2">
            <Label
              htmlFor="prep-exam-date"
              className="font-body text-sm font-medium"
            >
              Exam Date{" "}
              <span className="text-muted-foreground font-normal">
                (optional)
              </span>
            </Label>
            <Input
              data-ocid="examprep.exam_date.input"
              id="prep-exam-date"
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              min={minDateStr}
              className="font-body text-sm"
            />
          </div>

          <Button
            data-ocid="examprep.generate.button"
            onClick={handleGenerate}
            disabled={!examType}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display"
          >
            Generate Roadmap
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </CardContent>
      </Card>

      {/* Roadmap */}
      <AnimatePresence>
        {roadmapVisible && roadmap && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-4"
          >
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="border-0 shadow-card">
                <CardContent className="p-3 text-center">
                  <p className="text-2xl font-bold font-display text-study-sky">
                    {roadmap.totalTopics}
                  </p>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">
                    Total Topics
                  </p>
                </CardContent>
              </Card>

              {daysRemaining !== null ? (
                <Card className="border-0 shadow-card">
                  <CardContent className="p-3 text-center">
                    <p className="text-2xl font-bold font-display text-study-lavender">
                      {daysRemaining}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      Days Remaining
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-card">
                  <CardContent className="p-3 text-center">
                    <p className="text-2xl font-bold font-display text-study-mint">
                      {completedCount}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      Completed
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Daily target */}
            {topicsPerDay !== null && (
              <Card className="border border-study-sky/20 bg-study-sky-light/50 shadow-none">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-study-sky-light">
                    <Target className="w-4 h-4 text-study-sky" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm font-display text-foreground">
                      Daily Target: {topicsPerDay} topic
                      {topicsPerDay !== 1 ? "s" : ""}/day
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">
                      Complete {topicsPerDay} topics daily to finish before the
                      exam
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Progress */}
            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold font-display text-foreground">
                    Your Progress
                  </p>
                  <p className="text-sm font-bold font-display text-study-sky">
                    {completedCount}/{roadmap.totalTopics}
                  </p>
                </div>
                <Progress value={progressPercent} className="h-2" />
                <p className="text-xs text-muted-foreground font-body mt-1.5 text-right">
                  {progressPercent}% complete
                </p>
              </CardContent>
            </Card>

            {/* Subject filter tabs */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {["All", ...subjects].map((sub) => (
                <button
                  type="button"
                  key={sub}
                  onClick={() => setActiveSubject(sub)}
                  className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium font-body transition-all ${
                    activeSubject === sub
                      ? "bg-primary text-primary-foreground shadow-nav-active"
                      : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Topic list */}
            <ScrollArea className="h-[420px] pr-1">
              <div className="space-y-2 pr-2">
                {filteredTopics.map((topic: RoadmapTopic, index: number) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: Math.min(index * 0.03, 0.3) }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleTopic(topic.id)}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        completedTopics[topic.id]
                          ? "bg-study-mint-light/60 border-study-mint/30"
                          : "bg-card border-border hover:border-study-sky/30"
                      } shadow-card`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0">
                          {completedTopics[topic.id] ? (
                            <CheckSquare className="w-4 h-4 text-study-mint" />
                          ) : (
                            <Square className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <p
                              className={`text-sm font-medium font-body leading-tight ${
                                completedTopics[topic.id]
                                  ? "text-study-mint line-through opacity-70"
                                  : "text-foreground"
                              }`}
                            >
                              {index + 1}. {topic.topic}
                            </p>
                            <Badge
                              className={`text-xs flex-shrink-0 px-1.5 py-0 h-5 font-body border-0 ${PRIORITY_COLORS[topic.priority]}`}
                            >
                              {topic.priority}
                            </Badge>
                          </div>
                          <span
                            className={`mt-1 inline-block text-xs px-2 py-0.5 rounded-full font-body ${getSubjectColor(topic.subject)}`}
                          >
                            {topic.subject}
                          </span>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {!roadmapVisible && (
        <div
          data-ocid="examprep.empty_state"
          className="text-center py-12 text-muted-foreground"
        >
          <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p className="font-body text-sm">
            Select an exam type above to generate your personalized roadmap
          </p>
        </div>
      )}
    </div>
  );
}
