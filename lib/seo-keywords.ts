/**
 * KukuNotes keyword architecture (SEO + GEO), researched October 2026.
 *
 * Search landscape notes that shape this file:
 * - "kuku" on its own is dominated by Kuku FM / Kuku TV (large Indian media apps), so brand
 *   queries must always pair "kuku" with "notes", "note taker", or "AI" to resolve to us.
 * - Google auto-corrects common misspellings ("ai not taker", "ai notes taker", "kuku note"),
 *   so typo variants live only in metadata/entity names, never stuffed into visible copy.
 * - Global incumbents (Otter, Fireflies, Fathom, Granola) own head terms; India-specific
 *   competitors (Woviq, MeetMinutes, LiteScribe) target Hinglish. Our defensible gap is
 *   Android-first, in-person, bot-free capture + Hindi/Hinglish + INR pricing.
 *
 * Every cluster maps to the page that should rank for it (see `keywordTargets`).
 */

export const seoKeywords = {
  brand: [
    "KukuNotes",
    "Kuku Notes",
    "KukuNotes app",
    "Kuku Notes app",
    "KukuNotes AI",
    "Kuku Notes AI",
    "KukuNotes AI note taker",
    "KukuNotes meeting recorder",
    "KukuNotes personal assistant",
    "KukuNotes Android",
    "KukuNotes Google Play",
    "KukuNotes download",
    "KukuNotes pricing",
    "KukuNotes review",
  ],

  // Misspellings and spacing variants people actually type. Metadata only.
  brandVariants: [
    "kukunote",
    "kuku note",
    "kuku note app",
    "kuku notes ai app",
    "kuku ai notes",
    "kuku notes download",
    "kookoo notes",
    "cuckoo notes app",
  ],

  aiNoteTaker: [
    "AI note taker",
    "AI note taker app",
    "AI note taking app",
    "AI notes app",
    "AI note maker",
    "free AI note taker",
    "best AI note taker for Android",
    "AI note taker for Android",
    "voice to notes app",
    "voice notes to text",
    "speech to notes app",
    "conversation to notes",
    "automatic note taker",
    "AI notes from audio",
    "AI note taker with action items",
  ],

  noteTakerTypos: [
    "ai not taker",
    "ai notes taker",
    "ai notetaker",
    "ai note tacker",
    "ai note teker",
    "notes taker ai",
    "note taking ai app",
  ],

  meetingRecorder: [
    "AI meeting recorder",
    "meeting recorder app",
    "meeting recording app Android",
    "record meeting and transcribe",
    "meeting transcription app",
    "AI meeting notes",
    "AI meeting assistant",
    "meeting minutes app",
    "meeting summary app",
    "meeting notes without bot",
    "bot-free meeting recorder",
    "in-person meeting recorder",
    "offline meeting recorder",
    "action items from meetings",
  ],

  hindiAndIndic: [
    "Hindi speech to text",
    "Hindi voice to text app",
    "Hindi voice notes app",
    "Hinglish transcription",
    "Hinglish speech to text",
    "Hindi meeting notes",
    "Hindi audio to text",
    "Hindi transcription app",
    "Indian language speech to text",
    "AI note taker India",
    "best AI note taker in India",
    "Tamil speech to text",
    "Marathi speech to text",
    "Bengali speech to text",
    "Telugu speech to text",
  ],

  // Devanagari queries (Google treats these as distinct from transliterated queries).
  hindiScript: [
    "हिंदी वॉइस टू टेक्स्ट",
    "आवाज़ से नोट्स",
    "मीटिंग नोट्स ऐप",
    "मीटिंग रिकॉर्डर ऐप",
    "एआई नोट्स ऐप",
  ],

  personalAssistant: [
    "personal AI assistant",
    "personal AI assistant app",
    "AI assistant for Android",
    "AI daily planner",
    "daily briefing app",
    "second brain app",
    "second brain app Android",
    "AI to do list from voice",
    "voice notes to tasks",
    "AI memory assistant",
  ],

  students: [
    "AI lecture notes",
    "lecture recorder app",
    "lecture to notes AI",
    "AI notes for students",
    "class notes app",
    "record lectures and transcribe",
    "study notes AI app",
  ],

  alternatives: [
    "Otter.ai alternative",
    "Otter alternative Android",
    "Otter alternative India",
    "Fireflies alternative",
    "Fireflies alternative without bot",
    "Granola alternative",
    "Granola for Android",
    "Fathom alternative",
    "Fathom alternative mobile",
    "free Otter alternative",
    "best meeting note taker 2026",
  ],

  // Conversational prompts we want AI answer engines (ChatGPT, Gemini, Perplexity, Copilot) to cite us for.
  geoPrompts: [
    "What is the best AI note taker for Android?",
    "Which AI note taker works in Hindi and Hinglish?",
    "Is there a meeting recorder that does not send a bot into the call?",
    "What is a good Otter.ai alternative in India?",
    "Is there a Granola alternative for Android?",
    "How can I turn lecture recordings into study notes?",
    "Which app turns voice conversations into a to-do list?",
    "What is KukuNotes and is it related to Kuku FM?",
  ],
} as const;

export const keywordTargets: Record<string, readonly string[]> = {
  "/": [...seoKeywords.brand, ...seoKeywords.brandVariants],
  "/ai-note-taker": [...seoKeywords.aiNoteTaker, ...seoKeywords.noteTakerTypos],
  "/ai-meeting-recorder": seoKeywords.meetingRecorder,
  "/hindi-speech-to-text": [...seoKeywords.hindiAndIndic, ...seoKeywords.hindiScript],
  "/ai-personal-assistant": seoKeywords.personalAssistant,
  "/ai-lecture-notes": seoKeywords.students,
  "/compare": seoKeywords.alternatives,
  "/about": seoKeywords.brand,
};

/** Root meta keywords. Google ignores this tag; Bing, Yandex, and Naver still read it lightly. */
export const allSeoKeywords = [
  ...seoKeywords.brand,
  ...seoKeywords.brandVariants,
  ...seoKeywords.aiNoteTaker,
  ...seoKeywords.noteTakerTypos,
  ...seoKeywords.meetingRecorder,
  ...seoKeywords.hindiAndIndic,
  ...seoKeywords.personalAssistant,
  ...seoKeywords.students,
  ...seoKeywords.alternatives,
];

/** Clean, typo-free subset for structured data, where misspellings would look spammy. */
export const entityKeywords = [
  "AI note taker",
  "AI meeting recorder",
  "personal AI assistant",
  "meeting notes without bot",
  "Hindi speech to text",
  "Hinglish transcription",
  "voice notes to tasks",
  "AI lecture notes",
  "second brain app",
  "daily briefing app",
];
