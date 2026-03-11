import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createActorWithConfig } from "@/config";
import { getAIResponse } from "@/data/aiEngine";
import { BookOpen, Bot, Lightbulb, Send, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  simpleContent?: string;
  subject?: string;
  showSimple?: boolean;
  timestamp: number;
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-4">
      <div className="w-7 h-7 rounded-full bg-study-sky-light flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-study-sky" />
      </div>
      <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3 shadow-card">
        <div className="flex items-center gap-1.5 h-4">
          <span className="typing-dot w-1.5 h-1.5 rounded-full bg-study-sky inline-block" />
          <span className="typing-dot w-1.5 h-1.5 rounded-full bg-study-sky inline-block" />
          <span className="typing-dot w-1.5 h-1.5 rounded-full bg-study-sky inline-block" />
        </div>
      </div>
    </div>
  );
}

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(
      /`([^`]+)`/g,
      '<code class="bg-muted px-1 py-0.5 rounded text-xs font-mono">$1</code>',
    )
    .replace(
      /^### (.+)$/gm,
      '<h3 class="font-semibold text-sm mt-2 mb-1 font-display">$1</h3>',
    )
    .replace(
      /^## (.+)$/gm,
      '<h2 class="font-bold text-base mt-3 mb-1.5 font-display">$2</h2>',
    )
    .replace(
      /^# (.+)$/gm,
      '<h1 class="font-bold text-lg mt-3 mb-2 font-display">$1</h1>',
    )
    .replace(/^\| (.+) \|$/gm, (match) => {
      const cells = match.split("|").filter((c) => c.trim() !== "");
      return `<tr class="border-b border-border">${cells.map((c) => `<td class="px-2 py-1 text-sm">${c.trim()}</td>`).join("")}</tr>`;
    })
    .replace(
      /^- (.+)$/gm,
      '<li class="flex gap-1.5 text-sm"><span class="text-study-sky mt-1">•</span><span>$1</span></li>',
    )
    .replace(
      /^(\d+)\. (.+)$/gm,
      '<li class="flex gap-1.5 text-sm"><span class="text-study-sky font-bold mt-0.5">$1.</span><span>$2</span></li>',
    )
    .replace(/\n\n/g, '</p><p class="mt-2">')
    .replace(/\n/g, "<br/>");
}

interface MessageBubbleProps {
  message: ChatMessage;
  onExplainSimply: (id: string) => void;
}

function MessageBubble({ message, onExplainSimply }: MessageBubbleProps) {
  const content =
    message.showSimple && message.simpleContent
      ? message.simpleContent
      : message.content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex items-end gap-2 mb-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      {message.role === "assistant" && (
        <div className="w-7 h-7 rounded-full bg-study-sky-light flex items-center justify-center flex-shrink-0 mb-0.5">
          <Bot className="w-4 h-4 text-study-sky" />
        </div>
      )}
      {message.role === "user" && (
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mb-0.5">
          <User className="w-4 h-4 text-primary-foreground" />
        </div>
      )}

      <div
        className={`max-w-[82%] flex flex-col gap-2 ${message.role === "user" ? "items-end" : "items-start"}`}
      >
        {/* Subject badge */}
        {message.role === "assistant" && message.subject && (
          <Badge
            variant="outline"
            className="text-xs px-2 py-0.5 font-body border-study-sky/30 text-study-sky bg-study-sky-light"
          >
            <BookOpen className="w-3 h-3 mr-1" />
            {message.subject}
          </Badge>
        )}

        {/* Bubble */}
        <div
          className={`rounded-2xl px-4 py-3 shadow-card text-sm leading-relaxed font-body ${
            message.role === "user"
              ? "bg-primary text-primary-foreground rounded-br-sm"
              : "bg-card border border-border text-foreground rounded-bl-sm"
          } ${message.showSimple ? "border-study-mint/40 bg-study-mint-light/30" : ""}`}
        >
          {message.role === "assistant" ? (
            <div
              className="prose-sm max-w-none"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: controlled markdown rendering
              dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
            />
          ) : (
            <p>{content}</p>
          )}
        </div>

        {/* Explain Simply button */}
        {message.role === "assistant" && message.simpleContent && (
          <button
            type="button"
            data-ocid="chat.explain_simple.button"
            onClick={() => onExplainSimply(message.id)}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full transition-all font-body font-medium ${
              message.showSimple
                ? "bg-study-mint text-white"
                : "bg-study-mint-light text-study-mint hover:bg-study-mint hover:text-white"
            }`}
          >
            <Lightbulb className="w-3 h-3" />
            {message.showSimple ? "Showing simple version" : "Explain Simply"}
          </button>
        )}
      </div>
    </motion.div>
  );
}

const SUGGESTED_QUESTIONS = [
  "Explain Newton's laws of motion",
  "What is photosynthesis?",
  "How do I solve quadratic equations?",
  "Explain DNA and genetics",
  "What are Newton's laws?",
  "Explain OOP concepts",
];

export function ChatAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm **StudyMate AI**, your personal study assistant! 🎓\n\nI can help you understand topics in **Mathematics**, **Physics**, **Chemistry**, **Biology**, **History**, **Computer Science**, and **English**.\n\nAsk me anything — I'm here to make learning easy and fun!",
      simpleContent:
        "Hi! I'm StudyMate AI! 👋 I'm like a super smart study buddy.\n\nAsk me questions about school subjects and I'll explain them in a simple, easy-to-understand way. What would you like to learn today?",
      subject: "Welcome",
      showSimple: false,
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef(crypto.randomUUID());

  // Scroll to bottom after every render (efficient for small chat lists)
  useEffect(() => {
    if (scrollRef.current) {
      const el = scrollRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }
  });

  const handleExplainSimply = useCallback((id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, showSimple: !m.showSimple } : m)),
    );
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      const question = text.trim();
      if (!question || isLoading) return;

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content: question,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      // Fire-and-forget backend save
      createActorWithConfig()
        .then((actor) =>
          actor.saveMessage(
            sessionId.current,
            "user",
            question,
            BigInt(userMessage.timestamp),
          ),
        )
        .catch(() => {
          // ignore backend errors
        });

      // Artificial delay 800-1200ms
      const delay = 800 + Math.random() * 400;
      await new Promise((resolve) => setTimeout(resolve, delay));

      const response = getAIResponse(question);

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.text,
        simpleContent: response.simpleText,
        subject: response.subject,
        showSimple: false,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);

      // Fire-and-forget backend save
      createActorWithConfig()
        .then((actor) =>
          actor.saveMessage(
            sessionId.current,
            "assistant",
            response.text,
            BigInt(assistantMessage.timestamp),
          ),
        )
        .catch(() => {
          // ignore backend errors
        });
    },
    [isLoading],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat area */}
      <ScrollArea ref={scrollRef} className="flex-1 min-h-0">
        <div className="px-1 py-2">
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                onExplainSimply={handleExplainSimply}
              />
            ))}
          </AnimatePresence>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              data-ocid="chat.loading_state"
            >
              <TypingIndicator />
            </motion.div>
          )}
        </div>
      </ScrollArea>

      {/* Suggested questions (only when fresh) */}
      {messages.length <= 1 && !isLoading && (
        <div className="px-1 py-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-2 font-body">
            Try asking:
          </p>
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.slice(0, 4).map((q) => (
              <button
                type="button"
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs px-3 py-1.5 rounded-full bg-study-sky-light text-study-sky hover:bg-study-sky hover:text-white transition-colors font-body"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input bar */}
      <div className="border-t border-border bg-card/80 backdrop-blur-sm px-1 py-3">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            ref={inputRef}
            data-ocid="chat.input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask your question..."
            disabled={isLoading}
            className="flex-1 min-w-0 h-10 px-4 rounded-full bg-muted border border-border text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent disabled:opacity-50 transition-all"
          />
          <Button
            data-ocid="chat.send.button"
            type="submit"
            disabled={!input.trim() || isLoading}
            size="icon"
            className="rounded-full h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0 shadow-nav-active"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
