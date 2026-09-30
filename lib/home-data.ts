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
    q: "What is Buddy AI and how does it work as a personal AI assistant?",
    a: "Buddy AI is a private personal AI assistant, AI note taker, and meeting recorder available on Android, desktop, and web. It helps you capture real-world conversations and meetings, auto-generates structured notes with source evidence, extracts prioritized action items, and organizes your life into dedicated Spaces with an intelligent daily briefing.",
  },
  {
    q: "How does Buddy AI record meetings and take notes without an invite bot?",
    a: "Unlike tools that send awkward third-party recording bots into your Zoom or Google Meet calls, Buddy operates on-device and opt-in. You simply start listening whenever a meeting, class, or discussion begins. Buddy securely transcribes the audio, generates bulleted executive summaries, and isolates commitments without intruding into the meeting invite.",
  },
  {
    q: "Can Buddy AI transcribe Hindi, English, and other Indian languages?",
    a: "Yes. Buddy AI natively supports Hindi, English, and mixed Hinglish code-switching out of the box. In addition, the Business plan unlocks an 11 Indian regional languages pack (including Marathi, Gujarati, Tamil, Telugu, Kannada, Bengali, and Punjabi) for seamless regional meeting recording and speech-to-text intelligence.",
  },
  {
    q: "How is Buddy AI different from tools like Otter.ai, Fireflies, or Granola?",
    a: "While legacy note takers focus solely on meeting transcripts and require calendar-bot invites, Buddy is a complete second brain and daily companion. It connects meeting notes directly to prioritized task boards, calendar focus blocks, goal monitors, and an AI chat that answers questions grounded in your historical conversations—with zero awkward bots.",
  },
  {
    q: "Is Buddy AI free to use?",
    a: "Yes. Buddy is completely free to start on Android with 5 dedicated spaces, 5 hours of monthly meeting recording, and unlimited note and task extraction. Users requiring extensive capacity can upgrade to Buddy Pro (100 recording hours) or Business (unlimited recording & 11 Indian languages) anytime.",
  },
  {
    q: "Does Buddy AI listen to my conversations all the time?",
    a: "No. Privacy is Buddy's primary design principle. Listening is strictly opt-in and only captures audio when you explicitly tap 'Start Listening'. When capture is inactive, the microphone is off, and no audio leaves your device.",
  },
  {
    q: "What is a Buddy Space and how does it organize notes and tasks?",
    a: "A Space is a dedicated contextual workspace for a specific project, client, meeting series, or life area. Each space keeps its own notes, prioritized action items, goals, and conversations isolated, preventing unrelated work threads from bleeding together.",
  },
  {
    q: "How does Buddy extract action items and tasks from conversations?",
    a: "Buddy's AI identifies verbal commitments, deadlines, and assigned owners during conversation analysis. It extracts them into an interactive task board with priority badges and direct links back to the note evidence so you can verify exactly what was promised.",
  },
  {
    q: "How does the daily briefing feature help plan the day?",
    a: "Every morning, Buddy synthesizes your upcoming calendar schedule, open action items across all Spaces, and available uninterrupted focus time into a clear executive briefing so you start each day oriented and prepared.",
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
