import { Toaster } from "@/components/ui/sonner";
import { ChatAssistant } from "@/pages/ChatAssistant";
import { Dashboard } from "@/pages/Dashboard";
import { ExamPrep } from "@/pages/ExamPrep";
import { MCQPractice } from "@/pages/MCQPractice";
import { TimetableGenerator } from "@/pages/TimetableGenerator";
import {
  BookOpen,
  Calendar,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

const TABS = [
  { id: 0, label: "Home", icon: LayoutDashboard, ocid: "nav.dashboard.tab" },
  { id: 1, label: "Chat", icon: MessageCircle, ocid: "nav.chat.tab" },
  { id: 2, label: "Timetable", icon: Calendar, ocid: "nav.timetable.tab" },
  { id: 3, label: "Exam Prep", icon: BookOpen, ocid: "nav.examprep.tab" },
  { id: 4, label: "MCQ", icon: HelpCircle, ocid: "nav.mcq.tab" },
] as const;

const PAGE_TITLES = [
  "Dashboard",
  "AI Chat",
  "Timetable",
  "Exam Prep",
  "MCQ Practice",
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleNavigate = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="min-h-screen bg-study-mesh flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-card/90 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-study-sky-light">
              <GraduationCap className="w-5 h-5 text-study-sky" />
            </div>
            <div>
              <h1 className="text-base font-bold font-display text-foreground leading-tight">
                StudyMate AI
              </h1>
              <p className="text-[10px] text-muted-foreground font-body leading-none">
                Your personal study assistant
              </p>
            </div>
          </div>

          {/* Page title on mobile */}
          <div className="text-sm font-semibold font-display text-muted-foreground">
            {PAGE_TITLES[activeTab]}
          </div>
        </div>
      </header>

      {/* Main layout — desktop sidebar + mobile bottom nav */}
      <div className="flex flex-1 max-w-2xl mx-auto w-full">
        {/* Desktop sidebar */}
        <nav className="hidden md:flex flex-col w-52 flex-shrink-0 border-r border-border bg-sidebar py-6 px-3 gap-1 sticky top-14 h-[calc(100vh-3.5rem)] self-start">
          {TABS.map((tab) => (
            <button
              type="button"
              key={tab.id}
              data-ocid={tab.ocid}
              onClick={() => handleNavigate(tab.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium font-body transition-all text-left ${
                activeTab === tab.id
                  ? "bg-study-sky-light text-study-sky font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4 flex-shrink-0" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="sidebar-indicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-study-sky"
                />
              )}
            </button>
          ))}

          {/* Sidebar footer */}
          <div className="mt-auto pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground font-body text-center leading-relaxed px-2">
              🎓 StudyMate AI
              <br />
              <span className="opacity-70">Made by Amer for students 🙌</span>
            </p>
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 min-w-0 flex flex-col">
          {/* Page content */}
          <div
            className={`flex-1 px-4 pt-5 overflow-y-auto ${activeTab === 1 ? "flex flex-col" : ""}`}
            style={
              activeTab === 1 ? { height: "calc(100vh - 3.5rem - 4rem)" } : {}
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={activeTab === 1 ? "flex flex-col h-full" : ""}
              >
                {activeTab === 0 && <Dashboard onNavigate={handleNavigate} />}
                {activeTab === 1 && <ChatAssistant />}
                {activeTab === 2 && <TimetableGenerator />}
                {activeTab === 3 && <ExamPrep />}
                {activeTab === 4 && <MCQPractice />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer — visible on all non-chat pages on desktop */}
          {activeTab !== 1 && (
            <footer className="hidden md:block px-4 py-3 border-t border-border text-center">
              <p className="text-xs text-muted-foreground font-body">
                © {new Date().getFullYear()}.{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-study-sky transition-colors"
                >
                  Built with love using caffeine.ai
                </a>
              </p>
            </footer>
          )}
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="max-w-2xl mx-auto flex">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                type="button"
                key={tab.id}
                data-ocid={tab.ocid}
                onClick={() => handleNavigate(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-2 transition-all relative ${
                  isActive ? "nav-active" : "text-muted-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-indicator"
                    className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-study-sky rounded-full"
                  />
                )}
                <tab.icon
                  className={`w-5 h-5 ${isActive ? "text-study-sky" : ""}`}
                />
                <span
                  className={`text-[10px] font-medium font-body leading-none ${isActive ? "text-study-sky font-semibold" : ""}`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
        {/* Safe area spacer for mobile */}
        <div className="h-safe-area-inset-bottom bg-card/95" />
      </nav>

      {/* Mobile bottom padding to avoid nav overlap */}
      <div className="md:hidden h-16" />

      {/* Mobile footer */}
      <div className="md:hidden pb-1 text-center">
        <p className="text-xs text-muted-foreground font-body py-2">
          Made by Amer for students 🙌 · ❤️{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-study-sky transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}
