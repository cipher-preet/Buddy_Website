export const navItems = [
  { label: "Product", href: "/#product" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Get KukuNotes", href: "/get-kukunotes" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const productSectionLinks = [
  { label: "Inside the app", href: "/#product" },
  { label: "Live listening", href: "/#listen" },
  { label: "Spaces", href: "/#spaces" },
  { label: "Ask KukuNotes", href: "/#ask" },
];

export const solutionLinks = [
  { label: "AI note taker", href: "/ai-note-taker" },
  { label: "AI meeting recorder", href: "/ai-meeting-recorder" },
  { label: "Hindi speech to text", href: "/hindi-speech-to-text" },
  { label: "Personal AI assistant", href: "/ai-personal-assistant" },
  { label: "AI lecture notes", href: "/ai-lecture-notes" },
];

/** High-intent install destinations — also used as Google sitelink candidates. */
export const appDestinationLinks = [
  { label: "Web app", href: "/platform" },
  { label: "Chrome extension", href: "/chrome-extension" },
  { label: "Windows", href: "/windows" },
  { label: "Android", href: "/android" },
];

export const useCaseItems = [
  {
    title: "Students & educators",
    eyebrow: "Education",
    summary:
      "Lectures, study sessions, and mentoring become organized notes and study tasks.",
    bestFor:
      "Classes, coaching calls, research discussions, and group projects.",
    kukuNotesDoes:
      "Records only when you start listening, summarizes key ideas, and keeps follow-up tasks inside the right space.",
    outcome:
      "A searchable study memory with deadlines, decisions, and revision prompts ready after class.",
    visual: ["Lecture", "Notes", "Study task"],
    accent: "violet",
    image: "/use-cases/education.jpg",
    alt: "AI lecture notes and study tasks dashboard for students and educators",
  },
  {
    title: "Founders & teams",
    eyebrow: "Meetings",
    summary:
      "Turn planning calls into decisions, owners, priorities, and next actions.",
    bestFor: "Product reviews, daily syncs, client calls, and investor prep.",
    kukuNotesDoes:
      "Captures the useful parts of a conversation, extracts action items, and keeps them tied to the project space.",
    outcome:
      "Clear meeting memory, fewer lost commitments, and a cleaner handoff after every conversation.",
    visual: ["Sync", "Decision", "Owner"],
    accent: "indigo",
    image: "/use-cases/meetings.jpg",
    alt: "Startup meeting takeaways, sprint action items, and roadmap interface",
  },
  {
    title: "Sales & client work",
    eyebrow: "Follow-up",
    summary:
      "Keep client context, objections, requests, and promised next steps in one place.",
    bestFor:
      "Discovery calls, demos, onboarding sessions, and account check-ins.",
    kukuNotesDoes:
      "Summarizes the call, pulls out commitments, and helps you ask what happened before the next meeting.",
    outcome:
      "Better follow-ups that sound specific because they are grounded in the actual conversation.",
    visual: ["Client call", "Need", "Follow-up"],
    accent: "cyan",
    image: "/use-cases/sales.jpg",
    alt: "Client meeting intelligence dashboard with sentiment, commitments, and follow-up timeline",
  },
  {
    title: "Personal planning",
    eyebrow: "Life admin",
    summary:
      "Use KukuNotes for family plans, appointments, ideas, goals, and day-to-day reminders.",
    bestFor:
      "Doctor visits, home projects, travel planning, and personal goal tracking.",
    kukuNotesDoes:
      "Keeps each life area in a separate space with notes, tasks, calendar context, and daily briefing support.",
    outcome:
      "Less mental load because the details stop living only in your head.",
    visual: ["Appointment", "Plan", "Reminder"],
    accent: "green",
    image: "/use-cases/personal.jpg",
    alt: "Personal life admin dashboard with daily briefing, calendar blocks, and life spaces",
  },
  {
    title: "Creators & media",
    eyebrow: "Content",
    summary:
      "Interviews and brainstorms become themes, quotes to revisit, and production tasks.",
    bestFor:
      "Podcast interviews, video planning, writing sessions, and content research.",
    kukuNotesDoes:
      "Keeps raw conversation context connected to notes, ideas, tasks, and follow-up questions.",
    outcome:
      "A content pipeline that starts from real conversations instead of scattered voice memos.",
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
      "Separate meetings, projects, and personal threads so KukuNotes always knows the context you are working in.",
    image: "/screenshots/home.png",
    stack: [
      "/screenshots/home.png",
      "/screenshots/notes.png",
      "/screenshots/tasks.png",
    ],
    alt: "KukuNotes home screen with Create Space and My Spaces",
    accent: "indigo",
    cta: "Open Home",
  },
  {
    id: "listen",
    number: "02",
    title: "Start listening instantly",
    summary: "Talk naturally. KukuNotes captures what matters.",
    description:
      "Hit Start Listening and stay in the conversation. KukuNotes records decisions and details in the background.",
    image: "/screenshots/listen.png",
    stack: [
      "/screenshots/listen.png",
      "/screenshots/chat.png",
      "/screenshots/notes.png",
    ],
    alt: "KukuNotes home screen with live listening active",
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
    stack: [
      "/screenshots/notes.png",
      "/screenshots/note-detail.png",
      "/screenshots/home.png",
    ],
    alt: "KukuNotes notes library screen",
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
    stack: [
      "/screenshots/tasks.png",
      "/screenshots/task-detail.png",
      "/screenshots/notes.png",
    ],
    alt: "KukuNotes tasks progress screen",
    accent: "success",
    cta: "Open Tasks",
  },
  {
    id: "chat",
    number: "05",
    title: "Ask KukuNotes anything",
    summary: "Answers grounded in your spaces.",
    description:
      "Summarize a day, plan tomorrow, or prepare for a meeting—KukuNotes replies from what it already heard.",
    image: "/screenshots/chat.png",
    stack: [
      "/screenshots/chat.png",
      "/screenshots/ask-kukunotes.png",
      "/screenshots/note-detail.png",
    ],
    alt: "KukuNotes chat conversation",
    accent: "indigo",
    cta: "Start chatting",
  },
];

export const workflowSteps = [
  {
    title: "Create a space",
    description:
      "Start a focused workspace for a project, meeting, or life area.",
    image: "/screenshots/home.png",
  },
  {
    title: "Start listening",
    description:
      "Talk naturally while KukuNotes captures what matters in the background.",
    image: "/screenshots/listen.png",
  },
  {
    title: "Review notes & tasks",
    description:
      "Open organized notes, clear tasks, and ask KukuNotes anything about the space.",
    image: "/screenshots/tasks.png",
  },
];

export const faqItems = [
  {
    q: "What does KukuNotes do?",
    a: "KukuNotes helps turn conversations into notes, decisions, and action items. Keep them in Spaces, ask questions from your captured context, and return to your priorities and goals.",
  },
  {
    q: "Does a bot join my meeting?",
    a: "KukuNotes uses user-started capture on your device or in a supported browser meeting. You do not need to invite a recording bot. Capture options vary by platform; review the app permissions and inform participants before recording.",
  },
  {
    q: "What is a Space?",
    a: "A Space keeps the notes, tasks, and goals for a project, client, class, or life area together, so you can return to the right context.",
  },
  {
    q: "Can I start for free?",
    a: "Yes. Open the KukuNotes workspace to begin. Your account shows the current recording allowances, available features, and paid plan options.",
  },
  {
    q: "Which devices can I use?",
    a: "Explore the Android app, Windows app, Chrome extension, and web workspace. Official store listings show the current requirements and installation eligibility for your device.",
  },
  {
    q: "What should I know before recording?",
    a: "Start recording deliberately, review the permissions requested, and tell everyone in the conversation. Get the consent required for your meeting, class, workplace, and location.",
  },
];

export const appScreens = [
  {
    title: "Daily briefing",
    detail:
      "Start with focus time, priorities, and the meetings that need your attention.",
    image: "/screenshots/daily-briefing.jpeg",
    alt: "KukuNotes daily briefing with priorities and upcoming meetings",
  },
  {
    title: "Calendar",
    detail:
      "See your day as a time-blocked plan, with every event in its place.",
    image: "/screenshots/calendar.jpeg",
    alt: "KukuNotes calendar showing scheduled events",
  },
  {
    title: "Goal monitor",
    detail: "Set an outcome for each space and keep its momentum visible.",
    image: "/screenshots/goal-monitor.jpeg",
    alt: "KukuNotes goal monitor for tracking space outcomes",
  },
  {
    title: "Tasks",
    detail:
      "Turn commitments into prioritized work with status, dates, and context.",
    image: "/screenshots/tasks-board.jpeg",
    alt: "KukuNotes task list with spaces and priority cards",
  },
  {
    title: "Notes",
    detail:
      "Review conversation knowledge with confidence, dates, and linked spaces.",
    image: "/screenshots/notes-board.jpeg",
    alt: "KukuNotes notes list with confidence and space filters",
  },
  {
    title: "Share a space",
    detail:
      "Bundle the right notes and tasks into a deliberate, focused handoff.",
    image: "/screenshots/share-space.jpeg",
    alt: "KukuNotes share space flow for selecting tasks and notes",
  },
];
