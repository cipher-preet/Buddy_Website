export const navItems = [
  { label: "Why Buddy", href: "#product" },
  { label: "How it works", href: "#workflow" },
  { label: "App", href: "#screens" },
  { label: "Get Buddy", href: "#cta" },
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

export const appScreens = [
  {
    title: "Home",
    detail: "Create a space, start listening, and open any workspace.",
    image: "/screenshots/home.png",
    alt: "Buddy home screen",
  },
  {
    title: "Notes",
    detail: "Browse your library with confidence scores and tags.",
    image: "/screenshots/notes.png",
    alt: "Buddy notes screen",
  },
  {
    title: "Buddy AI",
    detail: "Ask Buddy to plan, summarize, or prepare.",
    image: "/screenshots/buddy.png",
    alt: "Buddy AI screen",
  },
  {
    title: "Tasks",
    detail: "Track next actions with clear priorities.",
    image: "/screenshots/tasks.png",
    alt: "Buddy tasks screen",
  },
  {
    title: "Note detail",
    detail: "Full write-ups with evidence and confidence.",
    image: "/screenshots/note-detail.png",
    alt: "Buddy note detail",
  },
  {
    title: "Chat",
    detail: "Continue conversations grounded in your spaces.",
    image: "/screenshots/chat.png",
    alt: "Buddy chat screen",
  },
];
