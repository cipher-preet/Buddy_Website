import { siteConfig } from "./site";

export const navItems = [
  { label: "Product", href: "/#product" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Get Buddy", href: "/get-buddy" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const productSectionLinks = [
  { label: "Inside the app", href: "/#product" },
  { label: "Live listening", href: "/#listen" },
  { label: "Spaces", href: "/#spaces" },
  { label: "Ask Buddy", href: "/#ask" },
];

export const useCaseItems = [
  {
    title: "Students & educators",
    eyebrow: "Education",
    summary: "Lectures, study sessions, and mentoring become organized notes and study tasks.",
    bestFor: "Classes, coaching calls, research discussions, and group projects.",
    buddyDoes: "Records only when you start listening, summarizes key ideas, and keeps follow-up tasks inside the right space.",
    outcome: "A searchable study memory with deadlines, decisions, and revision prompts ready after class.",
    visual: ["Lecture", "Notes", "Study task"],
    accent: "violet",
    image: "/use-cases/education.jpg",
    alt: "AI lecture notes and study tasks dashboard for students and educators",
  },
  {
    title: "Founders & teams",
    eyebrow: "Meetings",
    summary: "Turn planning calls into decisions, owners, priorities, and next actions.",
    bestFor: "Product reviews, daily syncs, client calls, and investor prep.",
    buddyDoes: "Captures the useful parts of a conversation, extracts action items, and keeps them tied to the project space.",
    outcome: "Clear meeting memory, fewer lost commitments, and a cleaner handoff after every conversation.",
    visual: ["Sync", "Decision", "Owner"],
    accent: "indigo",
    image: "/use-cases/meetings.jpg",
    alt: "Startup meeting takeaways, sprint action items, and roadmap interface",
  },
  {
    title: "Sales & client work",
    eyebrow: "Follow-up",
    summary: "Keep client context, objections, requests, and promised next steps in one place.",
    bestFor: "Discovery calls, demos, onboarding sessions, and account check-ins.",
    buddyDoes: "Summarizes the call, pulls out commitments, and helps you ask what happened before the next meeting.",
    outcome: "Better follow-ups that sound specific because they are grounded in the actual conversation.",
    visual: ["Client call", "Need", "Follow-up"],
    accent: "cyan",
    image: "/use-cases/sales.jpg",
    alt: "Client meeting intelligence dashboard with sentiment, commitments, and follow-up timeline",
  },
  {
    title: "Personal planning",
    eyebrow: "Life admin",
    summary: "Use Buddy for family plans, appointments, ideas, goals, and day-to-day reminders.",
    bestFor: "Doctor visits, home projects, travel planning, and personal goal tracking.",
    buddyDoes: "Keeps each life area in a separate space with notes, tasks, calendar context, and daily briefing support.",
    outcome: "Less mental load because the details stop living only in your head.",
    visual: ["Appointment", "Plan", "Reminder"],
    accent: "green",
    image: "/use-cases/personal.jpg",
    alt: "Personal life admin dashboard with daily briefing, calendar blocks, and life spaces",
  },
  {
    title: "Creators & media",
    eyebrow: "Content",
    summary: "Interviews and brainstorms become themes, quotes to revisit, and production tasks.",
    bestFor: "Podcast interviews, video planning, writing sessions, and content research.",
    buddyDoes: "Keeps raw conversation context connected to notes, ideas, tasks, and follow-up questions.",
    outcome: "A content pipeline that starts from real conversations instead of scattered voice memos.",
    visual: ["Interview", "Idea", "Publish"],
    accent: "rose",
    image: "/use-cases/creators.jpg",
    alt: "Creator studio AI dashboard with podcast waveform, quotes, story themes, and content pipeline",
  },
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
    a: `Yes. Buddy is built for iOS and Android and is available worldwide. Download the Android app on Google Play, or contact ${siteConfig.email} for access.`,
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
