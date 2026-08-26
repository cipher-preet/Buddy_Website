export const navItems = [
  { label: "Product", href: "/#product" },
  { label: "Listen", href: "/#listen" },
  { label: "Spaces", href: "/#spaces" },
  { label: "Ask", href: "/#ask" },
];

export const smartListItems = [
  {
    id: "spaces",
    number: "01",
    title: "Create a focused space",
    summary: "Keep every project in its own memory.",
    description:
      "Separate meetings, projects, and personal threads so Buddy always knows the context you are working in.",
    image: "/screenshots/home.png",
    stack: ["/screenshots/home.png", "/screenshots/notes.png", "/screenshots/tasks.png"],
    alt: "Buddy home screen with Create Space and My Spaces",
    accent: "indigo",
    cta: "Open Home",
  },
  {
    id: "listen",
    number: "02",
    title: "Start listening instantly",
    summary: "Talk naturally. Buddy captures what matters.",
    description:
      "Hit Start Listening and stay in the conversation. Buddy records decisions and details in the background.",
    image: "/screenshots/listen.png",
    stack: ["/screenshots/listen.png", "/screenshots/chat.png", "/screenshots/notes.png"],
    alt: "Buddy home screen with live listening active",
    accent: "violet",
    cta: "See listening",
  },
  {
    id: "notes",
    number: "03",
    title: "Get clear notes",
    summary: "Highlights with confidence and evidence.",
    description:
      "Open searchable notes with confidence scores, tags, and source evidence—ready the moment you need them.",
    image: "/screenshots/notes.png",
    stack: ["/screenshots/notes.png", "/screenshots/note-detail.png", "/screenshots/home.png"],
    alt: "Buddy notes library screen",
    accent: "cyan",
    cta: "Browse Notes",
  },
  {
    id: "tasks",
    number: "04",
    title: "Extract useful tasks",
    summary: "Action items with priority and status.",
    description:
      "Commitments become a clean task list you can finish, filter by space, and open in full detail.",
    image: "/screenshots/tasks.png",
    stack: ["/screenshots/tasks.png", "/screenshots/task-detail.png", "/screenshots/notes.png"],
    alt: "Buddy tasks progress screen",
    accent: "success",
    cta: "Open Tasks",
  },
  {
    id: "chat",
    number: "05",
    title: "Ask Buddy anything",
    summary: "Answers grounded in your spaces.",
    description:
      "Summarize a day, plan tomorrow, or prepare for a meeting—Buddy replies from what it already heard.",
    image: "/screenshots/chat.png",
    stack: ["/screenshots/chat.png", "/screenshots/buddy.png", "/screenshots/note-detail.png"],
    alt: "Buddy AI chat conversation",
    accent: "indigo",
    cta: "Start chatting",
  },
];

export const workflowSteps = [
  {
    title: "Create a space",
    description: "Start a focused workspace for a project, meeting, or life area.",
    image: "/screenshots/home.png",
  },
  {
    title: "Start listening",
    description: "Talk naturally while Buddy captures what matters in the background.",
    image: "/screenshots/listen.png",
  },
  {
    title: "Review notes & tasks",
    description: "Open organized notes, clear tasks, and ask Buddy anything about the space.",
    image: "/screenshots/tasks.png",
  },
];

export const faqItems = [
  {
    q: "What is Buddy?",
    a: "Buddy is a personal AI companion for iOS and Android. It listens to conversations when you choose, then turns them into notes, tasks, goals, a calendar, and a daily briefing inside Spaces.",
  },
  {
    q: "What is a Buddy space?",
    a: "A space is a focused home for one project, relationship, meeting series, or part of your life—where its notes, tasks, goals, and conversations stay connected.",
  },
  {
    q: "Does Buddy listen all the time?",
    a: "No. Listening starts when you choose to capture a conversation, and it stays attached to a specific space. You decide when a moment is worth keeping.",
  },
  {
    q: "Is Buddy available worldwide?",
    a: "Yes. Buddy is built for iOS and Android and is available to people worldwide. Contact hello@buddy.ai to get Buddy.",
  },
  {
    q: "What can I share with someone else?",
    a: "The share flow lets you select the relevant tasks and notes from a space, so a handoff can be focused instead of overwhelming.",
  },
  {
    q: "How does the daily briefing help?",
    a: "It gives you one starting view of planned meetings, available focus time, and the priorities waiting for your attention.",
  },
];

export const appScreens = [
  {
    title: "Daily briefing",
    detail: "Start with focus time, priorities, and the meetings that need your attention.",
    image: "/screenshots/daily-briefing.jpeg",
    alt: "Buddy daily briefing with priorities and upcoming meetings",
  },
  {
    title: "Calendar",
    detail: "See your day as a time-blocked plan, with every event in its place.",
    image: "/screenshots/calendar.jpeg",
    alt: "Buddy calendar showing scheduled events",
  },
  {
    title: "Goal monitor",
    detail: "Set an outcome for each space and keep its momentum visible.",
    image: "/screenshots/goal-monitor.jpeg",
    alt: "Buddy goal monitor for tracking space outcomes",
  },
  {
    title: "Tasks",
    detail: "Turn commitments into prioritized work with status, dates, and context.",
    image: "/screenshots/tasks-board.jpeg",
    alt: "Buddy task list with spaces and priority cards",
  },
  {
    title: "Notes",
    detail: "Review conversation knowledge with confidence, dates, and linked spaces.",
    image: "/screenshots/notes-board.jpeg",
    alt: "Buddy notes list with confidence and space filters",
  },
  {
    title: "Share a space",
    detail: "Bundle the right notes and tasks into a deliberate, focused handoff.",
    image: "/screenshots/share-space.jpeg",
    alt: "Buddy share space flow for selecting tasks and notes",
  },
];
