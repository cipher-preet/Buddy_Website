import { brandSplit, captureFact, definitionLead, languageNote, priceCopy } from "./product-facts";

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
    summary: "Lectures, study sessions, and mentoring become organized notes and study tasks.",
    bestFor: "Classes, coaching calls, research discussions, and group projects.",
    kukuNotesDoes: "Records only when you start listening, summarizes key ideas, and keeps follow-up tasks inside the right space.",
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
    kukuNotesDoes: "Captures the useful parts of a conversation, extracts action items, and keeps them tied to the project space.",
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
    kukuNotesDoes: "Summarizes the call, pulls out commitments, and helps you ask what happened before the next meeting.",
    outcome: "Better follow-ups that sound specific because they are grounded in the actual conversation.",
    visual: ["Client call", "Need", "Follow-up"],
    accent: "cyan",
    image: "/use-cases/sales.jpg",
    alt: "Client meeting intelligence dashboard with sentiment, commitments, and follow-up timeline",
  },
  {
    title: "Personal planning",
    eyebrow: "Life admin",
    summary: "Use KukuNotes for family plans, appointments, ideas, goals, and day-to-day reminders.",
    bestFor: "Doctor visits, home projects, travel planning, and personal goal tracking.",
    kukuNotesDoes: "Keeps each life area in a separate space with notes, tasks, calendar context, and daily briefing support.",
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
    kukuNotesDoes: "Keeps raw conversation context connected to notes, ideas, tasks, and follow-up questions.",
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
      "Separate meetings, projects, and personal threads so KukuNotes always knows the context you are working in.",
    image: "/screenshots/home-spaces.jpg",
    stack: ["/screenshots/home-spaces.jpg", "/screenshots/notes-library.jpg", "/screenshots/tasks-day.jpg"],
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
    image: "/screenshots/home-listening.jpg",
    stack: ["/screenshots/home-listening.jpg", "/screenshots/desktop/ask-chat.webp", "/screenshots/notes-library.jpg"],
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
    image: "/screenshots/notes-library.jpg",
    stack: ["/screenshots/notes-library.jpg", "/screenshots/home-spaces.jpg", "/screenshots/tasks-day.jpg"],
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
    image: "/screenshots/tasks-day.jpg",
    stack: ["/screenshots/tasks-day.jpg", "/screenshots/tasks-week.jpg", "/screenshots/notes-library.jpg"],
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
    image: "/screenshots/desktop/ask-chat.webp",
    stack: ["/screenshots/desktop/ask-chat.webp", "/screenshots/notes-library.jpg", "/screenshots/home-spaces.jpg"],
    alt: "KukuNotes chat conversation",
    accent: "indigo",
    cta: "Start chatting",
  },
];

export const workflowSteps = [
  {
    title: "Create a space",
    description: "Start a focused workspace for a project, meeting, or life area.",
    image: "/screenshots/home-spaces.jpg",
  },
  {
    title: "Start listening",
    description: "Talk naturally while KukuNotes captures what matters in the background.",
    image: "/screenshots/home-listening.jpg",
  },
  {
    title: "Review notes & tasks",
    description: "Open organized notes, clear tasks, and ask KukuNotes anything about the space.",
    image: "/screenshots/tasks-day.jpg",
  },
];

export const faqItems = [
  {
    q: "What is KukuNotes and how does it work as a personal AI assistant?",
    a: `${definitionLead} Notes and tasks are filed in Spaces.`,
  },
  {
    q: "How does KukuNotes record meetings and take notes without an invite bot?",
    a: captureFact,
  },
  {
    q: "Can KukuNotes transcribe Hindi, English, and other Indian languages?",
    a: `Yes. ${languageNote}`,
  },
  {
    q: "How is KukuNotes different from tools like Otter.ai, Fireflies, or Granola?",
    a: "While legacy note takers focus solely on meeting transcripts and require calendar-bot invites, KukuNotes is a complete second brain and daily companion. It connects meeting notes directly to prioritized task boards, calendar focus blocks, goal monitors, and an AI chat that answers questions grounded in your historical conversations—with zero awkward bots.",
  },
  {
    q: "Is KukuNotes free to use?",
    a: `Yes. ${priceCopy.freeDetail}. ${priceCopy.pro}. ${priceCopy.business}.`,
  },
  {
    q: "Does KukuNotes listen to my conversations all the time?",
    a: "No. Listening starts only when you tap Start Listening. When capture is inactive, the microphone is off.",
  },
  {
    q: "What is a KukuNotes Space and how does it organize notes and tasks?",
    a: "A Space is a dedicated contextual workspace for a specific project, client, meeting series, or life area. Each space keeps its own notes, prioritized action items, goals, and conversations isolated, preventing unrelated work threads from bleeding together.",
  },
  {
    q: "How does KukuNotes extract action items and tasks from conversations?",
    a: "KukuNotes' AI identifies verbal commitments, deadlines, and assigned owners during conversation analysis. It extracts them into an interactive task board with priority badges and direct links back to the note evidence so you can verify exactly what was promised.",
  },
  {
    q: "Is KukuNotes (Kuku Notes) related to Kuku FM?",
    a: brandSplit,
  },
  {
    q: "How does the daily briefing feature help plan the day?",
    a: "Every morning, KukuNotes synthesizes your upcoming calendar schedule, open action items across all Spaces, and available uninterrupted focus time into a clear executive briefing so you start each day oriented and prepared.",
  },
  {
    q: "Where can I get KukuNotes — Android, Windows, Chrome, or web?",
    a: "Download Android from Google Play, Windows from the Microsoft Store, add the Chrome Meeting Recorder from the Chrome Web Store, or open the web workspace at platform.kukunotes.com. All four stay synced under one account. See kukunotes.com/get-kukunotes for every option.",
  },
  {
    q: "What is the best way to search for KukuNotes vs Kuku FM?",
    a: "Search for KukuNotes, Kuku Notes, or KukuNotes AI note taker. KukuNotes is a productivity meeting recorder and note taker. It is not related to the Kuku FM or Kuku TV entertainment apps.",
  },
];

export const appScreens = [
  {
    title: "Home",
    detail: "Start listening, open a space, and see notes and tasks in one place.",
    image: "/screenshots/home-spaces.jpg",
    alt: "KukuNotes home with live listening and spaces",
  },
  {
    title: "Spaces",
    detail: "Each project keeps its own notes, tasks, and listening session.",
    image: "/screenshots/home-listening.jpg",
    alt: "KukuNotes spaces on the home screen",
  },
  {
    title: "Notes",
    detail: "Review what was captured, dated and filed in the right space.",
    image: "/screenshots/notes-library.jpg",
    alt: "KukuNotes notes library grouped by space",
  },
  {
    title: "Tasks",
    detail: "Turn commitments into prioritized work with status and dates.",
    image: "/screenshots/tasks-day.jpg",
    alt: "KukuNotes tasks with priority and dates",
  },
  {
    title: "Task board",
    detail: "See the week, the space, and what is still open.",
    image: "/screenshots/tasks-week.jpg",
    alt: "KukuNotes weekly task list",
  },
  {
    title: "Workspace",
    detail: "On the big screen, a space opens with its tasks beside it.",
    image: "/screenshots/desktop/spaces-workspace.webp",
    alt: "KukuNotes desktop workspace with spaces and tasks",
  },
];
