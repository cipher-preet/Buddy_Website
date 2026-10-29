import { priceCopy } from "@/lib/product-facts";

export type SeoFaq = { q: string; a: string };

export type SeoSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ComparisonRow = {
  feature: string;
  kukunotes: string;
  competitor: string;
};

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  kicker: string;
  h1: string;
  h1Accent: string;
  lead: string;
  /** 40–70 word direct answer placed above the fold for featured snippets and AI answer engines. */
  answer: string;
  image: { src: string; alt: string };
  sections: SeoSection[];
  steps?: { title: string; copy: string }[];
  comparison?: {
    competitor: string;
    rows: ComparisonRow[];
    chooseKukuNotes: string[];
    chooseCompetitor: string[];
  };
  localized?: { lang: string; heading: string; body: string[] };
  faqs: SeoFaq[];
  related: { label: string; href: string }[];
};

const listenSteps = [
  {
    title: "Pick a Space",
    copy: "Choose the project, class, client, or life area the conversation belongs to.",
  },
  {
    title: "Tap Start Listening",
    copy: "KukuNotes uses your phone microphone only while listening is on. No bot joins anything.",
  },
  {
    title: "Get notes and tasks",
    copy: "A summary, key decisions, and action items appear in that Space, each linked to the evidence.",
  },
  {
    title: "Ask and follow up",
    copy: "Ask KukuNotes what was decided, plan tomorrow from your daily briefing, or share selected notes.",
  },
];

const topicPagesAll: SeoPage[] = [
  {
    slug: "ai-note-taker",
    title: "AI Note Taker for Talk, Notes, and Tasks",
    description:
      "KukuNotes is a free AI note taker and bot-free meeting recorder. Tap Start Listening and it turns talk into notes, decisions, and tasks. No bot joins.",
    keywords: [
      "AI note taker",
      "AI note taker app",
      "AI note taking app",
      "free AI note taker",
      "AI note taker for Android",
      "voice to notes app",
      "AI notes app",
      "AI note maker",
      "conversation to notes",
    ],
    kicker: "AI note taker",
    h1: "The AI note taker that turns talk into",
    h1Accent: "notes you can act on.",
    lead: "Stop typing while people talk. KukuNotes listens when you ask it to, then gives you a summary, the decisions that were made, and the tasks you agreed to, organized in the right Space.",
    answer:
      "KukuNotes is an AI note taker app for Android that records a conversation when you tap Start Listening and turns it into a structured note: a short summary, key decisions, highlights, and extracted action items. Every point links back to the part of the conversation it came from, with a confidence score. It is free to start and supports many languages.",
    image: { src: "/screenshots/notes-library.jpg", alt: "KukuNotes notes library grouped by space" },
    sections: [
      {
        heading: "What an AI note taker should actually do",
        body: [
          "Most voice recorders give you a long transcript and leave the hard part to you. A useful AI note taker does the reading for you: it separates what was decided from what was just discussed, notices when someone commits to doing something, and files everything where you will look for it later.",
          "KukuNotes is built around that idea. The transcript is there when you need it, but the first thing you see is a note you can understand in under a minute.",
        ],
        bullets: [
          "Executive summary of the conversation in plain language",
          "Key decisions and highlights, each with a confidence score",
          "Action items with owner, due date, and priority when they were mentioned",
          "Evidence links back to the original moment, so you can verify before you act",
        ],
      },
      {
        heading: "Notes that stay in context with Spaces",
        body: [
          "Instead of one endless feed of recordings, KukuNotes keeps notes inside Spaces: one for each class, client, project, or part of your life. When you open a Space you see its notes, tasks, goals, and conversations together, without unrelated threads mixed in.",
          "That structure is also what makes Ask KukuNotes useful. When you ask what was agreed with a client last week, the answer comes from that client's Space, not from everything you have ever recorded.",
        ],
      },
      {
        heading: "Built for real conversations, not just video calls",
        body: [
          "A lot of AI note takers only work when a meeting happens inside Zoom, Google Meet, or Microsoft Teams. Many of the conversations worth remembering happen elsewhere: a lecture, a doctor's appointment, a site visit, a quick chat in the corridor.",
          "Because KukuNotes runs on your Android phone and records only while you have listening on, it works in all of those places, with no meeting bot and no calendar integration required.",
        ],
      },
      {
        heading: "Private by default",
        body: [
          "Listening is strictly opt-in. The microphone is used only after you tap Start Listening and stops when you stop. Your notes stay in your Spaces, and sharing is selective: you choose exactly which notes and tasks to hand off.",
        ],
      },
    ],
    steps: listenSteps,
    faqs: [
      {
        q: "Is KukuNotes a free AI note taker?",
        a: `Yes. ${priceCopy.freeDetail}. ${priceCopy.pro} and adds the daily briefing and goal monitor.`,
      },
      {
        q: "Does the AI note taker work offline?",
        a: "You can start a recording without a connection. KukuNotes processes the audio into notes and tasks once your phone is back online and syncs the results to your Spaces.",
      },
      {
        q: "How accurate are the AI notes?",
        a: "Accuracy depends on audio quality, but KukuNotes shows a confidence score on each highlight and links it to the source moment, so you can check anything important instead of trusting the summary blindly.",
      },
      {
        q: "What is the difference between an AI note taker and a voice recorder?",
        a: "A voice recorder saves audio. An AI note taker like KukuNotes also transcribes it, summarizes it, pulls out decisions and action items, and files them in the right place so you can act on them later.",
      },
    ],
    related: [
      { label: "AI meeting recorder without bots", href: "/ai-meeting-recorder" },
      { label: "AI lecture notes for students", href: "/ai-lecture-notes" },
      { label: "Get KukuNotes", href: "/get-kukunotes" },
    ],
  },
  {
    slug: "ai-meeting-recorder",
    title: "AI Meeting Recorder Without a Bot",
    description:
      "KukuNotes records in-person and online meetings from your phone without a bot, then writes notes and action items into the right Space.",
    keywords: [
      "AI meeting recorder",
      "meeting recorder app",
      "meeting notes without bot",
      "bot-free meeting recorder",
      "record meeting and transcribe",
      "AI meeting assistant",
      "meeting minutes app",
      "in-person meeting recorder",
    ],
    kicker: "AI meeting recorder",
    h1: "Record meetings without",
    h1Accent: "a bot in the room.",
    lead: "KukuNotes records the meeting from your own phone when you choose to, then hands you minutes, decisions, owners, and next steps. Nobody has to admit a 'Notetaker' into the call.",
    answer:
      "KukuNotes is a bot-free AI meeting recorder for Android. Instead of sending a bot into Zoom, Google Meet, or Teams, you tap Start Listening on your phone and it records through the device microphone. After the meeting it produces a summary, decisions, and action items with owners and due dates, saved in the project's Space. It works equally well for in-person meetings.",
    image: { src: "/screenshots/tasks-day.jpg", alt: "KukuNotes tasks with dates, priority, and the space they belong to" },
    sections: [
      {
        heading: "Why bot-free meeting recording matters",
        body: [
          "Bot-based recorders join your call as a visible participant. That works for some teams, but it creates friction with clients, candidates, and anyone outside your company, and it does nothing for meetings that happen in a room.",
          "KukuNotes records from the device you already have with you. You stay in control of when recording starts and stops, and you should still tell participants you are taking notes, as you would with any recorder.",
        ],
      },
      {
        heading: "From meeting audio to meeting minutes",
        body: ["Every recording becomes a structured set of minutes you can forward or act on straight away:"],
        bullets: [
          "A short summary of what the meeting was about",
          "Decisions that were made, separated from open discussion",
          "Action items with owner, deadline, and priority",
          "Highlights with confidence scores and links back to the source moment",
          "Automatic filing into the project or client Space",
        ],
      },
      {
        heading: "Meetings that happen anywhere",
        body: [
          "Stand-ups, client visits, board meetings, interviews, and hybrid meetings where half the room is offline. If the room can be heard through the device microphone while Start Listening is on, KukuNotes can turn it into notes. The Android app does not record phone or dialer calls.",
        ],
      },
      {
        heading: "Follow-ups that do not slip",
        body: [
          "Extracted tasks land on the Space's task board and in your daily briefing, so promises made in a meeting show up the next morning. Before the next meeting, ask KukuNotes what was agreed last time and get an answer grounded in the actual conversation.",
        ],
      },
    ],
    steps: listenSteps,
    faqs: [
      {
        q: "Does KukuNotes join Zoom or Google Meet as a bot?",
        a: "No. KukuNotes never joins your calls. It records through your phone's microphone while Start Listening is active, so it works for online, hybrid, and in-person meetings alike.",
      },
      {
        q: "How many hours of meetings can I record?",
        a: priceCopy.summary,
      },
      {
        q: "Is it legal to record meetings with KukuNotes?",
        a: "Recording laws vary by country and state. KukuNotes is opt-in by design, and we recommend telling participants you are recording and following local consent rules.",
      },
      {
        q: "Can I share meeting notes with my team?",
        a: "Yes. You can share selected notes and tasks from a Space instead of exposing the whole recording, which keeps sensitive parts of a meeting private.",
      },
    ],
    related: [
      { label: "AI note taker", href: "/ai-note-taker" },
      { label: "AI note taker", href: "/ai-note-taker" },
      { label: "Get KukuNotes", href: "/get-kukunotes" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "ai-personal-assistant",
    title: "Personal AI Assistant and Daily Briefing",
    description:
      "KukuNotes is a personal AI assistant that turns conversations into tasks and a morning briefing. It runs on Android, Windows, Chrome, and the web.",
    keywords: [
      "personal AI assistant",
      "personal AI assistant app",
      "AI assistant for Android",
      "second brain app",
      "AI daily planner",
      "daily briefing app",
      "voice notes to tasks",
      "AI memory assistant",
    ],
    kicker: "Personal AI assistant",
    h1: "A personal AI assistant that",
    h1Accent: "remembers your day.",
    lead: "Chatbots know the internet. KukuNotes knows your meetings, classes, calls, and plans, and uses them to tell you what matters today.",
    answer:
      "KukuNotes is a personal AI assistant for Android that works from your own conversations rather than the open web. It captures meetings and calls when you choose to, turns commitments into tasks, organizes everything into Spaces, and each morning gives you a daily briefing of priorities, meetings, and free focus time. Ask KukuNotes answers questions using only what is in your Spaces.",
    image: { src: "/screenshots/home-spaces.jpg", alt: "KukuNotes home with spaces, notes, and live listening" },
    sections: [
      {
        heading: "An assistant grounded in your own context",
        body: [
          "General-purpose chatbots are good at answering questions about the world, but they do not know what your manager asked for on Tuesday or what the doctor said about your medication. KukuNotes does, because it is built from the conversations you chose to capture.",
          "Ask KukuNotes answers from your Spaces, so 'What did I promise the client?' or 'What is due this week for Biology?' returns an answer tied to real notes, not a guess.",
        ],
      },
      {
        heading: "A daily briefing that plans the day for you",
        body: [
          "Every morning KukuNotes pulls together your calendar, open tasks across all Spaces, and the blocks of time you have free for focused work. You start the day knowing what is important instead of rebuilding it from memory.",
        ],
      },
      {
        heading: "A second brain without the busywork",
        body: [
          "Second-brain systems usually fail because they take too much manual filing. KukuNotes files automatically: notes and tasks land in the Space they belong to, and the goal monitor shows whether each Space is moving toward its outcome.",
        ],
        bullets: [
          "Spaces for work projects, clients, classes, family, and health",
          "Voice to tasks: spoken commitments become tasks with dates",
          "Goal monitor to track outcomes per Space",
          "Calendar view with time-blocked plans",
        ],
      },
    ],
    steps: listenSteps,
    faqs: [
      {
        q: "How is KukuNotes different from ChatGPT or Gemini?",
        a: "ChatGPT and Gemini answer from general knowledge. KukuNotes answers from your own captured conversations, notes, and tasks, and it also organizes them and plans your day.",
      },
      {
        q: "Does the assistant listen all the time?",
        a: "No. KukuNotes only listens after you tap Start Listening. When listening is off, the microphone is off.",
      },
      {
        q: "Is the daily briefing included in the free plan?",
        a: `The daily briefing and goal monitor are part of KukuNotes Pro. ${priceCopy.freeHours}.`,
      },
      {
        q: "Can I use KukuNotes for personal life, not just work?",
        a: "Yes. Many people create Spaces for family plans, doctor visits, home projects, and personal goals alongside work.",
      },
    ],
    related: [
      { label: "AI note taker", href: "/ai-note-taker" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Download for Android", href: "/get-kukunotes" },
      { label: "About KukuNotes", href: "/about" },
    ],
  },
  {
    slug: "ai-lecture-notes",
    title: "AI Lecture Notes for Classes",
    description:
      "KukuNotes records lectures on your phone. Free AI note taker and bot-free meeting recorder: summaries, key concepts, and study tasks. Free plan. No bot joins.",
    keywords: [
      "AI lecture notes",
      "lecture recorder app",
      "lecture to notes AI",
      "AI notes for students",
      "record lectures and transcribe",
      "class notes app",
      "study notes AI app",
    ],
    kicker: "AI lecture notes",
    h1: "Listen in class.",
    h1Accent: "Let AI write the notes.",
    lead: "KukuNotes records your lecture, coaching class, or study group and turns it into a summary, key concepts, and a list of what to revise or submit next.",
    answer:
      `KukuNotes is an AI lecture notes app for students on Android. Tap Start Listening at the beginning of a class and KukuNotes records through your phone, then produces a summary, key concepts, and study tasks such as assignments and exam dates, all filed in a Space for that subject. It supports many languages. ${priceCopy.freeHours}.`,
    image: { src: "/use-cases/education.jpg", alt: "AI lecture notes and study tasks for students" },
    sections: [
      {
        heading: "Pay attention instead of copying slides",
        body: [
          "When you are busy writing, you miss the explanation. With KukuNotes recording, you can follow the lecture and ask questions, knowing the important points will be captured.",
        ],
      },
      {
        heading: "One Space per subject",
        body: [
          "Create a Space for each course, like 'Physics 101' or 'UPSC Polity'. Lecture notes, assignments, and exam dates stay with that subject, and Ask KukuNotes can answer questions like 'What did the professor say about the exam pattern?' from that Space alone.",
        ],
        bullets: [
          "Lecture summary and key concepts",
          "Assignments and deadlines extracted as tasks",
          "Searchable notes with evidence links to the moment in class",
          "Many languages supported",
        ],
      },
      {
        heading: "Good for teachers and tutors too",
        body: [
          "Educators use KukuNotes to capture mentoring sessions, parent meetings, and department discussions, then share selected notes with students or colleagues.",
        ],
      },
    ],
    steps: listenSteps,
    faqs: [
      {
        q: "Is KukuNotes free for students?",
        a: `Yes. ${priceCopy.freeHours}, which covers several lectures a week for most students.`,
      },
      {
        q: "Do I need permission to record a lecture?",
        a: "Policies differ between institutions. Check your college or coaching centre's rules and ask the lecturer when in doubt.",
      },
      {
        q: "Can I search old lecture notes?",
        a: "Yes. Notes are searchable within each subject Space, and Ask KukuNotes can answer questions using everything recorded in that Space.",
      },
    ],
    related: [
      { label: "AI note taker", href: "/ai-note-taker" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

export const topicPages = topicPagesAll;

export const competitorNote =
  "Competitor details are based on their public product pages as of October 2026 and may change; check their sites for the latest.";

export function getTopicPage(slug: string) {
  return topicPages.find((page) => page.slug === slug);
}
