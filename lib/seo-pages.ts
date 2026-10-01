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

export const topicPages: SeoPage[] = [
  {
    slug: "ai-note-taker",
    title: "AI Note Taker App — Turn Talk into Notes & Tasks",
    description:
      "KukuNotes is a free AI note taker for Android. Record any conversation, get a clean summary, key decisions, and action items with source evidence. Works in English, Hindi, and Hinglish.",
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
      "KukuNotes is an AI note taker app for Android that records a conversation when you tap Start Listening and turns it into a structured note: a short summary, key decisions, highlights, and extracted action items. Every point links back to the part of the conversation it came from, with a confidence score. It is free to start and understands English, Hindi, and Hinglish.",
    image: { src: "/screenshots/notes.png", alt: "KukuNotes AI note taker showing a notes library with confidence scores" },
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
          "A lot of AI note takers only work when a meeting happens inside Zoom, Google Meet, or Microsoft Teams. Many of the conversations worth remembering happen elsewhere: a lecture, a doctor's appointment, a site visit, a call on speakerphone, a quick chat in the corridor.",
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
        a: "Yes. The Free plan includes 5 Spaces, 5 hours of recording per month, and unlimited note and task extraction in English and Hindi. Pro (₹799/month) raises recording to 100 hours and adds the daily briefing and goal monitor.",
      },
      {
        q: "Does the AI note taker work offline?",
        a: "You can start a recording without a connection. KukuNotes processes the audio into notes and tasks once your phone is back online and syncs the results to your Spaces.",
      },
      {
        q: "Can KukuNotes take notes in Hindi or Hinglish?",
        a: "Yes. English, Hindi, and mixed Hindi-English (Hinglish) are supported on every plan. The Business plan adds a pack of 11 Indian languages including Tamil, Telugu, Marathi, Bengali, and Gujarati.",
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
      { label: "Hindi speech to text", href: "/hindi-speech-to-text" },
      { label: "AI lecture notes for students", href: "/ai-lecture-notes" },
      { label: "Compare KukuNotes with Otter.ai", href: "/compare/otter-ai-alternative" },
    ],
  },
  {
    slug: "ai-meeting-recorder",
    title: "AI Meeting Recorder Without Bots — Notes & Action Items",
    description:
      "Record in-person and online meetings from your Android phone without inviting a bot. KukuNotes transcribes, summarizes, and extracts action items into the right project Space.",
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
    image: { src: "/screenshots/tasks.png", alt: "KukuNotes meeting recorder showing action items extracted from a meeting" },
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
          "Stand-ups, client visits, board meetings, interviews, sales calls on speaker, and hybrid meetings where half the room is offline. If you can hear it on your phone, KukuNotes can turn it into notes.",
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
        a: "The Free plan includes 5 hours per month, Pro includes 100 hours per month, and Business has unlimited recording.",
      },
      {
        q: "Is it legal to record meetings with KukuNotes?",
        a: "Recording laws vary by country and state. KukuNotes is opt-in by design, and we recommend telling participants you are recording and following local consent rules.",
      },
      {
        q: "Can KukuNotes record meetings held in Hindi?",
        a: "Yes. Meetings in English, Hindi, or a mix of both are supported on all plans, and the Business plan adds 11 Indian languages.",
      },
      {
        q: "Can I share meeting notes with my team?",
        a: "Yes. You can share selected notes and tasks from a Space instead of exposing the whole recording, which keeps sensitive parts of a meeting private.",
      },
    ],
    related: [
      { label: "AI note taker", href: "/ai-note-taker" },
      { label: "Fireflies alternative without a bot", href: "/compare/fireflies-alternative" },
      { label: "Fathom alternative for mobile", href: "/compare/fathom-alternative" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    slug: "hindi-speech-to-text",
    title: "Hindi Speech to Text & Hinglish Meeting Notes App",
    description:
      "Convert Hindi and Hinglish speech to text, notes, and tasks with KukuNotes. Built for Indian conversations that mix Hindi and English, with 11 Indian languages on the Business plan.",
    keywords: [
      "Hindi speech to text",
      "Hindi voice to text app",
      "Hinglish transcription",
      "Hindi meeting notes",
      "Hindi voice notes app",
      "Hindi audio to text",
      "AI note taker India",
      "हिंदी वॉइस टू टेक्स्ट",
    ],
    kicker: "Hindi & Hinglish speech to text",
    h1: "Hindi speech to text that understands",
    h1Accent: "how India really talks.",
    lead: "Real meetings in India switch between Hindi and English mid-sentence. KukuNotes is built for that, turning Hindi and Hinglish conversations into clear notes and tasks.",
    answer:
      "KukuNotes converts Hindi, English, and mixed Hinglish speech into text, then goes further than plain transcription: it writes a summary, lists decisions, and extracts action items. Hindi and Hinglish work on every plan, including the free one. The Business plan adds 11 Indian languages such as Tamil, Telugu, Marathi, Bengali, Gujarati, Kannada, Malayalam, Punjabi, Odia, and Assamese.",
    image: { src: "/screenshots/listen.png", alt: "KukuNotes listening to a Hindi and English conversation" },
    sections: [
      {
        heading: "Why most speech-to-text apps struggle with Hinglish",
        body: [
          "Many transcription tools expect you to pick one language before you start. A typical Indian conversation does not work that way: a review might start in English, move to Hindi to debate priorities, and come back to English for the action items.",
          "KukuNotes handles that code-switching inside the same recording, so you do not lose the parts of the conversation that happened in the 'other' language.",
        ],
      },
      {
        heading: "More than a transcript",
        body: [
          "A Hindi transcript is only the starting point. KukuNotes turns it into something you can use:",
        ],
        bullets: [
          "A clear summary of the conversation",
          "Decisions and commitments, with who agreed to what",
          "Action items with due dates on your task board",
          "Answers to follow-up questions through Ask KukuNotes",
        ],
      },
      {
        heading: "Supported Indian languages",
        body: [
          "English, Hindi, and Hinglish are included on every plan. The Business plan unlocks an Indian languages pack covering Hindi (हिंदी), Marathi (मराठी), Gujarati (ગુજરાતી), Tamil (தமிழ்), Telugu (తెలుగు), Kannada (ಕನ್ನಡ), Bengali (বাংলা), Punjabi (ਪੰਜਾਬੀ), Malayalam (മലയാളം), Odia (ଓଡ଼ିଆ), and Assamese (অসমীয়া).",
        ],
      },
      {
        heading: "Priced for India",
        body: [
          "Start free. Pro costs ₹799 per month and Business ₹1,999 per month, with quarterly plans that save 22%. Payments go through Razorpay with UPI, cards, and NetBanking.",
        ],
      },
    ],
    localized: {
      lang: "hi",
      heading: "हिंदी में: आवाज़ से नोट्स और टास्क",
      body: [
        "KukuNotes आपकी हिंदी, अंग्रेज़ी और हिंग्लिश बातचीत को टेक्स्ट, साफ़ नोट्स और टास्क में बदलता है। मीटिंग, क्लास या क्लाइंट कॉल के दौरान बस “Start Listening” दबाएँ। बातचीत खत्म होते ही आपको सारांश, लिए गए फ़ैसले और करने वाले काम मिल जाते हैं।",
        "रिकॉर्डिंग पूरी तरह आपकी मर्ज़ी से होती है। माइक्रोफ़ोन तभी चालू होता है जब आप सुनना शुरू करते हैं। शुरुआत मुफ़्त है, और Android पर Google Play से डाउनलोड किया जा सकता है।",
      ],
    },
    faqs: [
      {
        q: "Can KukuNotes convert Hindi audio to text for free?",
        a: "Yes. Hindi, English, and Hinglish speech to text are included in the Free plan, along with 5 hours of recording per month.",
      },
      {
        q: "Does KukuNotes understand Hinglish (mixed Hindi and English)?",
        a: "Yes. KukuNotes is designed for conversations that switch between Hindi and English in the same sentence, so you do not need to choose one language before recording.",
      },
      {
        q: "Which Indian languages does KukuNotes support?",
        a: "Every plan supports English, Hindi, and Hinglish. The Business plan adds 11 Indian languages: Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, Bengali, Punjabi, Malayalam, Odia, and Assamese.",
      },
      {
        q: "Can I get the summary in English for a Hindi meeting?",
        a: "KukuNotes produces structured notes and tasks from Hindi and Hinglish conversations. Ask KukuNotes can then answer questions about the conversation in plain English.",
      },
      {
        q: "Is there a Hindi voice notes app for Android?",
        a: "KukuNotes is available on Android through Google Play and works as a Hindi voice notes app that also extracts tasks and organizes notes into Spaces.",
      },
    ],
    related: [
      { label: "AI note taker", href: "/ai-note-taker" },
      { label: "AI meeting recorder", href: "/ai-meeting-recorder" },
      { label: "Otter.ai alternative for India", href: "/compare/otter-ai-alternative" },
      { label: "Pricing in ₹", href: "/pricing" },
    ],
  },
  {
    slug: "ai-personal-assistant",
    title: "Personal AI Assistant App — Daily Briefing & Second Brain",
    description:
      "KukuNotes is a personal AI assistant that remembers your conversations, turns them into tasks, and plans your day with a morning briefing. A private second brain for Android.",
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
    image: { src: "/screenshots/daily-briefing.jpeg", alt: "KukuNotes daily briefing with priorities, meetings, and focus time" },
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
        a: "The daily briefing and goal monitor are part of KukuNotes Pro. The Free plan includes Spaces, recording, and unlimited note and task extraction.",
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
    title: "AI Lecture Notes App — Record Classes, Get Study Notes",
    description:
      "Record lectures and coaching classes on your phone and get summaries, key concepts, and study tasks automatically. KukuNotes is a free AI lecture notes app with Hindi support.",
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
      "KukuNotes is an AI lecture notes app for students on Android. Tap Start Listening at the beginning of a class and KukuNotes records through your phone, then produces a summary, key concepts, and study tasks such as assignments and exam dates, all filed in a Space for that subject. It supports English, Hindi, and Hinglish, and the Free plan includes 5 hours of recording per month.",
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
          "Hindi and Hinglish lectures supported",
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
        a: "Yes. The Free plan includes 5 Spaces and 5 hours of recording per month, which covers several lectures a week for most students.",
      },
      {
        q: "Can it record lectures in Hindi?",
        a: "Yes. KukuNotes supports English, Hindi, and Hinglish lectures on every plan.",
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
      { label: "Hindi speech to text", href: "/hindi-speech-to-text" },
      { label: "Use cases", href: "/use-cases" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

export const competitorNote =
  "Competitor details are based on their public product pages as of October 2026 and may change; check their sites for the latest.";

export const comparePages: SeoPage[] = [
  {
    slug: "otter-ai-alternative",
    title: "Otter.ai Alternative for Android & India",
    description:
      "Looking for an Otter.ai alternative? Compare KukuNotes and Otter on bot-free recording, Hindi and Hinglish support, task extraction, Spaces, and INR pricing.",
    keywords: [
      "Otter.ai alternative",
      "Otter alternative Android",
      "Otter alternative India",
      "free Otter alternative",
      "KukuNotes vs Otter",
    ],
    kicker: "Otter.ai alternative",
    h1: "An Otter.ai alternative built for",
    h1Accent: "Hindi, tasks, and in-person talk.",
    lead: "Otter is a strong transcription tool. If you mainly need Hinglish support, action items that turn into a plan, and pricing in rupees, KukuNotes is worth a look.",
    answer:
      "KukuNotes is an Otter.ai alternative for people who work in India or switch between Hindi and English. Both can record in person on Android. Otter is strongest at live transcription and joins virtual meetings with its notetaker bot. KukuNotes never uses a bot, is built around Hindi and Hinglish, turns conversations into tasks inside project Spaces, and is priced in rupees with a free plan.",
    image: { src: "/screenshots/notes-board.jpeg", alt: "KukuNotes notes board compared with Otter.ai transcripts" },
    comparison: {
      competitor: "Otter.ai",
      rows: [
        { feature: "Android app for in-person recording", kukunotes: "Yes", competitor: "Yes" },
        { feature: "Joins video calls as a bot", kukunotes: "Never", competitor: "Yes, for virtual meetings" },
        { feature: "Hindi & Hinglish", kukunotes: "Core focus, every plan", competitor: "Check Otter's current language list" },
        { feature: "Extra Indian languages", kukunotes: "11 on Business plan", competitor: "Limited" },
        { feature: "Live transcript while recording", kukunotes: "Notes after capture", competitor: "Yes, a key strength" },
        { feature: "Tasks & daily briefing", kukunotes: "Task boards, briefing, goal monitor", competitor: "Action items in notes" },
        { feature: "Organization", kukunotes: "Spaces per project/class/client", competitor: "Folders & channels" },
        { feature: "Pricing", kukunotes: "Free; Pro ₹799/mo; UPI", competitor: "Free tier; paid plans in USD" },
      ],
      chooseKukuNotes: [
        "Your meetings mix Hindi and English",
        "You want action items to become a daily plan, not just a list in a transcript",
        "You never want a bot appearing in a client call",
        "You prefer paying in rupees via UPI",
      ],
      chooseCompetitor: [
        "You need a live transcript on screen during the meeting",
        "Your team already standardizes on Otter for Zoom and Teams",
        "Your conversations are almost entirely in English",
      ],
    },
    sections: [
      {
        heading: "Where KukuNotes and Otter differ",
        body: [
          "Otter started as a transcription product and is excellent at it, especially with live captions. KukuNotes starts from a different question: what should happen after a conversation? It focuses on summaries, decisions, and tasks that flow into your Spaces and your daily briefing.",
          "The other big difference is language. KukuNotes is designed around Hindi and Hinglish code-switching, which is common in Indian workplaces and classrooms.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is KukuNotes a free Otter.ai alternative?",
        a: "Yes. KukuNotes has a Free plan with 5 Spaces, 5 hours of recording per month, and unlimited note and task extraction.",
      },
      {
        q: "Can I move from Otter to KukuNotes?",
        a: "You can start using KukuNotes alongside Otter right away. Create Spaces for your main projects and record new conversations there.",
      },
      {
        q: "Does KukuNotes have live transcription like Otter?",
        a: "KukuNotes focuses on structured notes and tasks after capture rather than live on-screen captions. If live captions are essential, Otter may suit you better.",
      },
    ],
    related: [
      { label: "Fireflies alternative", href: "/compare/fireflies-alternative" },
      { label: "Granola alternative for Android", href: "/compare/granola-alternative" },
      { label: "Hindi speech to text", href: "/hindi-speech-to-text" },
      { label: "All comparisons", href: "/compare" },
    ],
  },
  {
    slug: "fireflies-alternative",
    title: "Fireflies.ai Alternative Without a Bot",
    description:
      "Compare KukuNotes and Fireflies.ai. KukuNotes records meetings from your phone without a bot, works for in-person conversations, and turns them into tasks inside project Spaces.",
    keywords: [
      "Fireflies alternative",
      "Fireflies alternative without bot",
      "Fireflies.ai alternative",
      "KukuNotes vs Fireflies",
      "meeting recorder without bot",
    ],
    kicker: "Fireflies.ai alternative",
    h1: "A Fireflies alternative with",
    h1Accent: "no bot in your calls.",
    lead: "Fireflies is built for teams that want a bot in every video call and deep CRM integrations. KukuNotes is for people who want to capture conversations personally, including in person, without a visible notetaker.",
    answer:
      "KukuNotes is a Fireflies.ai alternative for people who do not want a notetaker bot joining their meetings. Fireflies sends a bot into Zoom, Meet, and Teams and is strong at team-wide search and CRM integrations. KukuNotes records from your Android phone only when you tap Start Listening, so it also works for in-person meetings, and it turns each conversation into tasks inside a project Space.",
    image: { src: "/screenshots/tasks-board.jpeg", alt: "KukuNotes task board compared with Fireflies meeting notes" },
    comparison: {
      competitor: "Fireflies.ai",
      rows: [
        { feature: "Joins video calls as a bot", kukunotes: "Never", competitor: "Yes" },
        { feature: "In-person conversations", kukunotes: "Core use case on Android", competitor: "Supported via mobile app" },
        { feature: "Hindi & Hinglish", kukunotes: "Every plan", competitor: "Multilingual support" },
        { feature: "CRM & sales integrations", kukunotes: "Selective sharing and exports", competitor: "Extensive, a key strength" },
        { feature: "Personal planning", kukunotes: "Daily briefing, goal monitor", competitor: "Team-focused" },
        { feature: "Organization", kukunotes: "Spaces per project/client/life area", competitor: "Workspace & channels" },
        { feature: "Pricing", kukunotes: "Free; Pro ₹799/mo; UPI", competitor: "Free tier; paid plans in USD" },
      ],
      chooseKukuNotes: [
        "Clients or candidates are uncomfortable with a bot in the call",
        "Many of your conversations happen in person",
        "You want your meeting notes connected to your personal tasks and day plan",
      ],
      chooseCompetitor: [
        "Your sales team needs automatic CRM updates from every call",
        "You want a bot to record every meeting on the company calendar automatically",
      ],
    },
    sections: [
      {
        heading: "Personal capture vs. team-wide bots",
        body: [
          "Fireflies is designed for organizations that want every scheduled call recorded and searchable. KukuNotes is designed for an individual who decides which conversations matter, captures them on their own device, and gets a plan out of them.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can KukuNotes record a Google Meet call without a bot?",
        a: "Yes. KukuNotes records through your phone's microphone while listening is on, so nothing joins the call. Let participants know you are taking notes.",
      },
      {
        q: "Is KukuNotes cheaper than Fireflies?",
        a: "KukuNotes has a Free plan and Pro costs ₹799 per month, billed in rupees. Compare against Fireflies' current USD pricing for your team size.",
      },
    ],
    related: [
      { label: "AI meeting recorder without bots", href: "/ai-meeting-recorder" },
      { label: "Otter.ai alternative", href: "/compare/otter-ai-alternative" },
      { label: "Fathom alternative", href: "/compare/fathom-alternative" },
      { label: "All comparisons", href: "/compare" },
    ],
  },
  {
    slug: "granola-alternative",
    title: "Granola Alternative for Android",
    description:
      "Like Granola's bot-free notes but use Android? KukuNotes is a bot-free AI note taker for Android with Hindi and Hinglish support, task extraction, and project Spaces.",
    keywords: [
      "Granola alternative",
      "Granola for Android",
      "Granola alternative Android",
      "KukuNotes vs Granola",
      "bot-free note taker Android",
    ],
    kicker: "Granola alternative",
    h1: "The bot-free Granola alternative",
    h1Accent: "for Android.",
    lead: "Granola made bot-free meeting notes popular on Mac, Windows, and iPhone. KukuNotes brings the same no-bot approach to Android, plus Hindi support and task planning.",
    answer:
      "KukuNotes is a Granola alternative for Android users. Both are bot-free: neither sends a notetaker into your calls. Granola runs on Mac, Windows, and iPhone and is known for polished notes from desktop calls. KukuNotes runs on Android, focuses on in-person and phone-first capture, supports Hindi and Hinglish, and turns conversations into tasks, Spaces, and a daily briefing.",
    image: { src: "/screenshots/note-detail.png", alt: "KukuNotes note detail compared with Granola notes" },
    comparison: {
      competitor: "Granola",
      rows: [
        { feature: "Bot-free capture", kukunotes: "Yes", competitor: "Yes" },
        { feature: "Android app", kukunotes: "Yes", competitor: "No" },
        { feature: "Platforms", kukunotes: "Android first", competitor: "Mac, Windows, iPhone" },
        { feature: "Hindi & Hinglish", kukunotes: "Every plan", competitor: "Check Granola's current language list" },
        { feature: "Notes style", kukunotes: "AI summary, decisions, tasks with evidence", competitor: "AI-enhanced notes you write alongside" },
        { feature: "Tasks & planning", kukunotes: "Task boards, daily briefing, goal monitor", competitor: "Focused on notes" },
        { feature: "Pricing", kukunotes: "Free; Pro ₹799/mo; UPI", competitor: "Free tier; paid plans in USD" },
      ],
      chooseKukuNotes: [
        "You use an Android phone",
        "You need Hindi or Hinglish support",
        "You want notes to become tasks and a daily plan automatically",
      ],
      chooseCompetitor: [
        "Most of your meetings are video calls on a Mac or Windows laptop",
        "You like typing your own notes and having AI enhance them",
      ],
    },
    sections: [
      {
        heading: "Same philosophy, different devices",
        body: [
          "Granola and KukuNotes agree that a meeting bot is unnecessary. The difference is where they live: Granola is desktop-first with an iPhone app, while KukuNotes is built for the phone in your pocket, which is what most people in India carry into meetings, classes, and client visits.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a Granola app for Android?",
        a: "As of October 2026, Granola lists Mac, Windows, and iPhone apps but no Android app. KukuNotes is a bot-free AI note taker available for Android on Google Play.",
      },
      {
        q: "Does KukuNotes work without a bot like Granola?",
        a: "Yes. KukuNotes never joins your calls. It records through your device microphone only while Start Listening is active.",
      },
    ],
    related: [
      { label: "AI note taker", href: "/ai-note-taker" },
      { label: "Otter.ai alternative", href: "/compare/otter-ai-alternative" },
      { label: "Download for Android", href: "/get-kukunotes" },
      { label: "All comparisons", href: "/compare" },
    ],
  },
  {
    slug: "fathom-alternative",
    title: "Fathom Alternative for In-Person & Mobile Meetings",
    description:
      "Need a Fathom alternative that records in-person meetings on your phone? KukuNotes is a bot-free Android meeting recorder with Hindi support and automatic task extraction.",
    keywords: [
      "Fathom alternative",
      "Fathom alternative mobile",
      "Fathom alternative in-person",
      "KukuNotes vs Fathom",
      "AI meeting recorder Android",
    ],
    kicker: "Fathom alternative",
    h1: "A Fathom alternative for meetings",
    h1Accent: "that are not on a screen.",
    lead: "Fathom is a popular free notetaker for Zoom, Meet, and Teams. When your meetings happen in a room, on a phone, or in Hindi, KukuNotes fills the gap.",
    answer:
      "KukuNotes is a Fathom alternative for in-person and mobile meetings. Fathom records Zoom, Google Meet, and Microsoft Teams calls, mainly with a bot, and at the time of writing has no native mobile app for in-person recording. KukuNotes is an Android app that records any conversation through your phone, with no bot, and turns it into notes, decisions, and tasks with Hindi and Hinglish support.",
    image: { src: "/use-cases/meetings.jpg", alt: "In-person team meeting recorded with KukuNotes" },
    comparison: {
      competitor: "Fathom",
      rows: [
        { feature: "In-person recording on a phone", kukunotes: "Yes, Android", competitor: "No native mobile app yet" },
        { feature: "Video call capture", kukunotes: "Via phone microphone, no bot", competitor: "Bot, or bot-free beta on Mac" },
        { feature: "Hindi & Hinglish", kukunotes: "Every plan", competitor: "Check Fathom's current language list" },
        { feature: "Tasks & planning", kukunotes: "Task boards, daily briefing, goal monitor", competitor: "Action items, CRM sync" },
        { feature: "Free plan", kukunotes: "5 hrs/month, unlimited notes", competitor: "Generous free plan for calls" },
        { feature: "Pricing", kukunotes: "Pro ₹799/mo; UPI", competitor: "Paid plans in USD" },
      ],
      chooseKukuNotes: [
        "Your meetings happen in person or on the phone",
        "You work in Hindi or Hinglish",
        "You want notes linked to a personal task plan",
      ],
      chooseCompetitor: [
        "Nearly all your meetings are Zoom, Meet, or Teams calls on a laptop",
        "You want unlimited free recording of video calls",
      ],
    },
    sections: [
      {
        heading: "When video-call notetakers are not enough",
        body: [
          "Video-call notetakers are great at the meetings they can see. Site visits, coaching classes, client lunches, and doctor appointments are invisible to them. KukuNotes was built for exactly those conversations.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does Fathom have a mobile app?",
        a: "At the time of writing, Fathom has announced an iOS app for in-person meetings but it is not live. KukuNotes is available on Android today.",
      },
      {
        q: "Can I use Fathom and KukuNotes together?",
        a: "Yes. Some people use Fathom for laptop video calls and KukuNotes for in-person and phone conversations.",
      },
    ],
    related: [
      { label: "AI meeting recorder", href: "/ai-meeting-recorder" },
      { label: "Fireflies alternative", href: "/compare/fireflies-alternative" },
      { label: "Granola alternative", href: "/compare/granola-alternative" },
      { label: "All comparisons", href: "/compare" },
    ],
  },
];

export function getTopicPage(slug: string) {
  return topicPages.find((page) => page.slug === slug);
}

export function getComparePage(slug: string) {
  return comparePages.find((page) => page.slug === slug);
}
