/**
 * Comprehensive SEO & GEO Keyword Architecture for Buddy AI
 * Engineered for high search volume, high conversion intent, and Generative Engine Optimization (GEO).
 */

export const seoKeywords = {
  // Brand & Entity
  brand: [
    "Buddy AI",
    "Buddy app",
    "Buddy AI assistant",
    "Buddy personal assistant",
    "Buddy AI meeting recorder",
    "Buddy AI note taker",
    "Buddy Android app",
    "Buddy Google Play",
    "Buddy companion app",
  ],

  // AI Assistant Cluster
  aiAssistant: [
    "AI assistant",
    "personal AI assistant",
    "best AI assistant app",
    "AI personal companion",
    "voice AI assistant",
    "conversational AI assistant",
    "AI assistant for Android",
    "second brain AI assistant",
    "daily briefing AI app",
    "AI assistant with voice notes",
    "private AI assistant",
    "context-aware AI assistant",
  ],

  // AI Note Taker Cluster
  aiNoteTaker: [
    "AI note taker",
    "AI note taking app",
    "best AI note taker for Android",
    "automatic note taker",
    "AI notes app",
    "voice notes to tasks",
    "conversation to notes",
    "lecture notes AI",
    "AI audio notes",
    "smart note taker",
    "AI note taker with action items",
    "meeting notes AI app",
  ],

  // Meeting Recording & Transcription Cluster
  meetingRecording: [
    "meeting recording",
    "AI meeting recorder",
    "meeting recorder app",
    "record meeting and transcribe",
    "meeting transcription AI",
    "meeting action items extractor",
    "in-person meeting recorder",
    "opt-in meeting recorder",
    "meeting notes without bot",
    "private meeting recorder app",
    "call recording and notes",
    "audio meeting summary app",
  ],

  // Multilingual & Indian Regional Language Intelligence
  multilingual: [
    "multilingual AI assistant",
    "Hindi AI assistant",
    "Hindi English speech to text",
    "Indian language voice notes",
    "AI assistant for Indian languages",
    "multilingual meeting recorder",
    "regional language note taker",
    "Hindi audio transcription app",
  ],

  // Competitive Alternative Keywords (GEO & Search Intent)
  alternatives: [
    "best Otter alternative Android",
    "Otter ai alternative with Hindi",
    "Fireflies alternative without bot",
    "Granola alternative for mobile",
    "Fathom alternative Android app",
    "best meeting recording app 2025 2026",
  ],

  // Long-Tail Intent Questions (GEO target prompts)
  geoPrompts: [
    "What is the best AI note taker for Android?",
    "Which AI assistant can record meetings in Hindi and English?",
    "How to record meetings and automatically extract tasks?",
    "Best AI meeting recorder that does not require an invite bot",
    "How does Buddy AI compare to Otter.ai?",
    "Top personal AI assistant for daily planning and meetings",
  ],
} as const;

export const allSeoKeywords = [
  ...seoKeywords.brand,
  ...seoKeywords.aiAssistant,
  ...seoKeywords.aiNoteTaker,
  ...seoKeywords.meetingRecording,
  ...seoKeywords.multilingual,
  ...seoKeywords.alternatives,
];
