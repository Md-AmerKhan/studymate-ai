import { Card, CardContent } from "@/components/ui/card";
import { getDailyQuote } from "@/data/quotes";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Flame,
  HelpCircle,
  MessageCircle,
  Quote,
  Trophy,
} from "lucide-react";
import { type Variants, motion } from "motion/react";

interface DashboardProps {
  onNavigate: (tab: number) => void;
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

const featureCards = [
  {
    icon: MessageCircle,
    label: "AI Chat",
    description: "Ask any academic question",
    tab: 1,
    colorClass: "bg-study-sky-light text-study-sky",
    ocid: "dashboard.chat.card",
  },
  {
    icon: Calendar,
    label: "Timetable",
    description: "Plan your study schedule",
    tab: 2,
    colorClass: "bg-study-lavender-light text-study-lavender",
    ocid: "dashboard.timetable.card",
  },
  {
    icon: BookOpen,
    label: "Exam Prep",
    description: "Roadmaps & daily targets",
    tab: 3,
    colorClass: "bg-study-mint-light text-study-mint",
    ocid: "dashboard.examprep.card",
  },
  {
    icon: HelpCircle,
    label: "MCQ Practice",
    description: "Test your knowledge",
    tab: 4,
    colorClass: "bg-study-rose-light text-study-rose",
    ocid: "dashboard.mcq.card",
  },
];

const stats = [
  {
    icon: Flame,
    label: "Study Streak",
    value: "7 days",
    color: "text-study-rose",
    bg: "bg-study-rose-light",
  },
  {
    icon: CheckCircle2,
    label: "Topics Covered",
    value: "12",
    color: "text-study-mint",
    bg: "bg-study-mint-light",
  },
  {
    icon: Trophy,
    label: "Quiz Score",
    value: "80%",
    color: "text-study-amber",
    bg: "bg-study-amber-light",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export function Dashboard({ onNavigate }: DashboardProps) {
  const quote = getDailyQuote();

  return (
    <motion.div
      className="space-y-6 pb-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Greeting */}
      <motion.div variants={itemVariants}>
        <p className="text-sm font-medium text-muted-foreground mb-1 font-body">
          {new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
          {getGreeting()}, Student! 👋
        </h1>
        <p className="text-muted-foreground text-sm mt-1 font-body">
          Ready to ace your exams today?
        </p>
      </motion.div>

      {/* Quote of the Day */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-study-sky-light to-study-lavender-light border-0 shadow-card overflow-hidden relative">
          <CardContent className="p-5">
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 p-2 rounded-lg bg-white/60 flex-shrink-0">
                <Quote className="w-4 h-4 text-study-sky" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-study-sky uppercase tracking-wider mb-2 font-display">
                  Quote of the Day
                </p>
                <p className="text-foreground font-medium text-base leading-relaxed font-body italic">
                  "{quote.text}"
                </p>
                <p className="text-muted-foreground text-sm mt-2 font-body">
                  — {quote.author}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Stats Row */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-0 shadow-card">
              <CardContent className="p-3 flex flex-col items-center text-center gap-1.5">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <p className={`text-lg font-bold font-display ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-body leading-tight">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Feature Cards */}
      <motion.div variants={itemVariants}>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 font-display">
          Quick Access
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {featureCards.map((card) => (
            <motion.button
              key={card.label}
              data-ocid={card.ocid}
              onClick={() => onNavigate(card.tab)}
              className="card-hover text-left p-4 rounded-xl bg-card border border-border shadow-card flex flex-col gap-3 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              whileTap={{ scale: 0.97 }}
            >
              <div className={`p-2.5 rounded-lg w-fit ${card.colorClass}`}>
                <card.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground font-display text-sm">
                  {card.label}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5 leading-tight">
                  {card.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Study Tip */}
      <motion.div variants={itemVariants}>
        <Card className="border border-study-amber/30 bg-study-amber-light/50 shadow-none">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div>
                <p className="font-semibold text-sm font-display text-foreground">
                  Study Tip of the Day
                </p>
                <p className="text-sm text-muted-foreground font-body mt-1 leading-relaxed">
                  Use the <strong>Pomodoro Technique</strong>: Study for 25
                  minutes, then take a 5-minute break. After 4 cycles, take a
                  longer break. Your brain retains information better with
                  regular rest!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
