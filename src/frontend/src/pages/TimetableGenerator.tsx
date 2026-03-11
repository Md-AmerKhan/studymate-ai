import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { createActorWithConfig } from "@/config";
import { Calendar, ChevronRight, Clock, Download, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

const SUBJECT_CHIP_COLORS = [
  "chip-sky",
  "chip-lavender",
  "chip-mint",
  "chip-rose",
  "chip-amber",
] as const;

interface StudyDay {
  dayNum: number;
  date: Date;
  subjects: Array<{ name: string; hours: number; colorIndex: number }>;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function generateTimetable(
  subjects: string[],
  examDate: string,
  hoursPerDay: number,
): StudyDay[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exam = new Date(examDate);
  exam.setHours(0, 0, 0, 0);

  const daysRemaining = Math.ceil(
    (exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );
  if (daysRemaining <= 0) return [];

  const days: StudyDay[] = [];
  const subjectsPerDay = Math.max(
    1,
    Math.ceil(subjects.length / Math.max(1, Math.ceil(daysRemaining / 2))),
  );
  const hoursPerSubject = Math.round((hoursPerDay / subjectsPerDay) * 10) / 10;

  for (let i = 0; i < daysRemaining; i++) {
    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() + i);

    // Pick subjects for this day using round-robin cycling
    const selectedSubjectIndices: number[] = [];
    for (let s = 0; s < subjectsPerDay && s < subjects.length; s++) {
      const idx = (i * subjectsPerDay + s) % subjects.length;
      if (!selectedSubjectIndices.includes(idx)) {
        selectedSubjectIndices.push(idx);
      }
    }

    // Ensure at least one subject even if overlap
    if (selectedSubjectIndices.length === 0) {
      selectedSubjectIndices.push(i % subjects.length);
    }

    days.push({
      dayNum: i + 1,
      date: dayDate,
      subjects: selectedSubjectIndices.map((idx) => ({
        name: subjects[idx],
        hours: hoursPerSubject,
        colorIndex: idx % SUBJECT_CHIP_COLORS.length,
      })),
    });
  }

  return days;
}

function timetableToText(days: StudyDay[]): string {
  return days
    .map(
      (d) =>
        `Day ${d.dayNum} — ${formatDate(d.date)}\n${d.subjects.map((s) => `  • ${s.name}: ${s.hours}h`).join("\n")}`,
    )
    .join("\n\n");
}

export function TimetableGenerator() {
  const [subjectInput, setSubjectInput] = useState("");
  const [subjects, setSubjects] = useState<string[]>([
    "Mathematics",
    "Physics",
    "Chemistry",
  ]);
  const [examDate, setExamDate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [timetable, setTimetable] = useState<StudyDay[]>([]);
  const [generated, setGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const addSubject = useCallback(() => {
    const trimmed = subjectInput.trim();
    if (trimmed && !subjects.includes(trimmed) && subjects.length < 10) {
      setSubjects((prev) => [...prev, trimmed]);
      setSubjectInput("");
    }
  }, [subjectInput, subjects]);

  const removeSubject = useCallback((name: string) => {
    setSubjects((prev) => prev.filter((s) => s !== name));
  }, []);

  const handleAddKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSubject();
    }
  };

  const handleGenerate = async () => {
    if (subjects.length === 0) {
      toast.error("Please add at least one subject.");
      return;
    }
    if (!examDate) {
      toast.error("Please select an exam date.");
      return;
    }

    const exam = new Date(examDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (exam <= today) {
      toast.error("Exam date must be in the future.");
      return;
    }

    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 600));

    const plan = generateTimetable(subjects, examDate, hoursPerDay);
    setTimetable(plan);
    setGenerated(true);
    setIsGenerating(false);

    // Fire-and-forget backend save
    const sessionId = crypto.randomUUID();
    const planText = timetableToText(plan);
    createActorWithConfig()
      .then((actor) => actor.saveTimetable(sessionId, planText))
      .catch(() => {
        // ignore backend errors
      });

    toast.success(`Generated ${plan.length}-day study plan!`);
  };

  const handleCopy = () => {
    const text = timetableToText(timetable);
    navigator.clipboard
      .writeText(text)
      .then(() => toast.success("Plan copied to clipboard!"))
      .catch(() => toast.error("Failed to copy. Please try manually."));
  };

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1);
  const minDateStr = minDate.toISOString().split("T")[0];

  return (
    <div className="space-y-5 pb-4">
      {/* Form Card */}
      <Card className="border-0 shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-display text-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4 text-study-lavender" />
            Build Your Study Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Subjects Input */}
          <div className="space-y-2">
            <Label className="font-body text-sm font-medium">
              Subjects{" "}
              <span className="text-muted-foreground font-normal">
                ({subjects.length}/10)
              </span>
            </Label>
            <div className="flex gap-2">
              <Input
                data-ocid="timetable.subject.input"
                value={subjectInput}
                onChange={(e) => setSubjectInput(e.target.value)}
                onKeyDown={handleAddKeyDown}
                placeholder="e.g. Biology"
                className="font-body text-sm flex-1"
              />
              <Button
                data-ocid="timetable.add_subject.button"
                onClick={addSubject}
                size="icon"
                variant="outline"
                className="flex-shrink-0 border-study-lavender/40 text-study-lavender hover:bg-study-lavender-light"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {/* Chips */}
            <AnimatePresence>
              {subjects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {subjects.map((sub, idx) => (
                    <motion.span
                      key={sub}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-body ${SUBJECT_CHIP_COLORS[idx % SUBJECT_CHIP_COLORS.length]}`}
                    >
                      {sub}
                      <button
                        type="button"
                        onClick={() => removeSubject(sub)}
                        className="hover:opacity-70 transition-opacity"
                        aria-label={`Remove ${sub}`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Exam Date */}
          <div className="space-y-2">
            <Label
              htmlFor="exam-date"
              className="font-body text-sm font-medium"
            >
              Exam Date
            </Label>
            <Input
              data-ocid="timetable.exam_date.input"
              id="exam-date"
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              min={minDateStr}
              className="font-body text-sm"
            />
          </div>

          {/* Study Hours per Day */}
          <div className="space-y-3">
            <Label className="font-body text-sm font-medium flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-study-sky" />
                Study hours per day
              </span>
              <span
                data-ocid="timetable.hours.input"
                className="text-study-sky font-bold font-display"
              >
                {hoursPerDay}h
              </span>
            </Label>
            <Slider
              min={1}
              max={12}
              step={0.5}
              value={[hoursPerDay]}
              onValueChange={([v]) => setHoursPerDay(v)}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground font-body">
              <span>1h</span>
              <span>6h</span>
              <span>12h</span>
            </div>
          </div>

          {/* Generate button */}
          <Button
            data-ocid="timetable.generate.button"
            onClick={handleGenerate}
            disabled={isGenerating || subjects.length === 0 || !examDate}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display"
          >
            {isGenerating ? (
              <>
                <span className="animate-spin mr-2">⏳</span> Generating Plan...
              </>
            ) : (
              <>
                Generate Study Plan
                <ChevronRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Timetable */}
      <AnimatePresence>
        {generated && timetable.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-bold font-display text-foreground">
                Your {timetable.length}-Day Study Plan
              </h2>
              <Button
                data-ocid="timetable.copy.button"
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="text-xs font-body border-study-sky/40 text-study-sky hover:bg-study-sky-light"
              >
                <Download className="w-3.5 h-3.5 mr-1.5" />
                Copy Plan
              </Button>
            </div>

            <ScrollArea className="h-[420px] pr-1">
              <div className="space-y-3 pr-2">
                {timetable.map((day) => (
                  <motion.div
                    key={day.dayNum}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: Math.min(day.dayNum * 0.04, 0.4) }}
                  >
                    <Card className="border border-border shadow-card">
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="text-xs font-bold font-display text-study-sky">
                              Day {day.dayNum}
                            </span>
                            <p className="text-sm font-semibold font-display text-foreground">
                              {formatDate(day.date)}
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground font-body bg-muted px-2 py-0.5 rounded-full">
                            {day.subjects.reduce((acc, s) => acc + s.hours, 0)}h
                            total
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {day.subjects.map((sub) => (
                            <span
                              key={sub.name}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium font-body ${SUBJECT_CHIP_COLORS[sub.colorIndex]}`}
                            >
                              {sub.name}
                              <span className="opacity-70">· {sub.hours}h</span>
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
