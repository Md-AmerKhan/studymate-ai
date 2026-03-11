export const motivationalQuotes: Array<{ text: string; author: string }> = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Education is the most powerful weapon you can use to change the world.",
    author: "Nelson Mandela",
  },
  {
    text: "The more that you read, the more things you will know.",
    author: "Dr. Seuss",
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
  },
  {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    text: "The beautiful thing about learning is that nobody can take it from you.",
    author: "B.B. King",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Study hard what interests you the most, in the most undisciplined, irreverent way possible.",
    author: "Richard Feynman",
  },
  {
    text: "The more I study, the more insatiable do I feel my genius for knowledge.",
    author: "Ada Lovelace",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  { text: "Great things never come from comfort zones.", author: "Unknown" },
  { text: "Dream it. Wish it. Do it.", author: "Unknown" },
  {
    text: "Success doesn't just find you. You have to go out and get it.",
    author: "Unknown",
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown",
  },
  {
    text: "Wake up with determination. Go to bed with satisfaction.",
    author: "Unknown",
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
  { text: "Little things make big days.", author: "Unknown" },
  {
    text: "It's going to be hard, but hard is not impossible.",
    author: "Unknown",
  },
  {
    text: "Don't stop when you're tired. Stop when you're done.",
    author: "Unknown",
  },
  {
    text: "If you're going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    text: "Learning is not attained by chance; it must be sought for with ardor.",
    author: "Abigail Adams",
  },
  {
    text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    author: "Brian Herbert",
  },
  {
    text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Knowledge is power. Information is liberating.",
    author: "Kofi Annan",
  },
  {
    text: "Education is not preparation for life; education is life itself.",
    author: "John Dewey",
  },
  {
    text: "The mind is not a vessel to be filled but a fire to be kindled.",
    author: "Plutarch",
  },
];

export function getDailyQuote(): { text: string; author: string } {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return motivationalQuotes[dayOfYear % motivationalQuotes.length];
}
