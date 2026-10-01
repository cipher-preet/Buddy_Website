export type PlatformItem = {
  id: "android" | "desktop" | "chrome" | "web";
  title: string;
  category: string;
  tagline: string;
  badge: string;
  badgeType: "live" | "popular" | "featured" | "cloud";
  compatibility: string;
  highlights: string[];
  primaryCta: {
    label: string;
    href: string;
    isExternal: boolean;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  tags: string[];
  metrics: string;
};

export const getKukuNotesPlatforms: PlatformItem[] = [
  {
    id: "android",
    title: "KukuNotes for Android",
    category: "Mobile App",
    tagline: "Your daily conversation companion. Capture voice notes, meeting audio, and morning briefings on the go.",
    badge: "Official Release",
    badgeType: "live",
    compatibility: "Android 9.0 and up · Google Play",
    metrics: "4.8 ★ on Play Store",
    highlights: [
      "Opt-in ambient listening with space-targeted memory",
      "11 Indian languages supported natively",
      "Morning daily briefing widget for home screen",
      "Offline recording with automatic background sync",
    ],
    primaryCta: {
      label: "Get on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.aiassistantapp",
      isExternal: true,
    },
    secondaryAction: {
      label: "View APK details",
      href: "#system-requirements",
    },
    tags: ["Android", "Play Store", "Live Speech AI"],
  },
  {
    id: "desktop",
    title: "KukuNotes for Desktop",
    category: "macOS & Windows",
    tagline: "Capture Zoom, Teams, and Slack Huddles with system audio without inviting annoying meeting bots.",
    badge: "Power Users",
    badgeType: "popular",
    compatibility: "macOS 12+ (Apple Silicon / Intel) · Windows 10/11",
    metrics: "Zero-Bot Audio Capture",
    highlights: [
      "Direct system sound recording with crystal-clear stereo audio",
      "Global shortcut (Cmd+K / Ctrl+K) to query KukuNotes anytime",
      "Auto-detects calendar events and links transcripts to spaces",
      "Local caching with instant full-text search",
    ],
    primaryCta: {
      label: "Download for Desktop",
      href: "https://play.google.com/store/apps/details?id=com.aiassistantapp",
      isExternal: true,
    },
    secondaryAction: {
      label: "Mac & Windows builds",
      href: "#system-requirements",
    },
    tags: ["macOS", "Windows", "Global Hotkeys"],
  },
  {
    id: "chrome",
    title: "KukuNotes for Chrome",
    category: "Browser Extension",
    tagline: "One-click meeting transcriptions and live takeaways inside Google Meet, Microsoft Teams, and Zoom Web.",
    badge: "Meeting Assistant",
    badgeType: "featured",
    compatibility: "Google Chrome 100+ · Edge · Brave · Arc",
    metrics: "One-Click In-Call Capture",
    highlights: [
      "Zero bot joins — records audio directly from your active browser tab",
      "Floating live notes sidebar with real-time commitment extraction",
      "Instant push to your KukuNotes spaces the moment the call ends",
      "Works seamlessly across Google Meet & Teams Web",
    ],
    primaryCta: {
      label: "Add to Chrome — Free",
      href: "https://play.google.com/store/apps/details?id=com.aiassistantapp",
      isExternal: true,
    },
    secondaryAction: {
      label: "Extension permissions",
      href: "#faq-permissions",
    },
    tags: ["Chrome Web Store", "Google Meet", "Zero-Bot"],
  },
  {
    id: "web",
    title: "KukuNotes Web Workspace",
    category: "Cloud Dashboard",
    tagline: "Review spaces, query past meetings, refine extracted tasks, and collaborate with your team from any browser.",
    badge: "Zero Install",
    badgeType: "cloud",
    compatibility: "Any modern web browser (Desktop & Tablet)",
    metrics: "Instant Cloud Access",
    highlights: [
      "Deep semantic retrieval across all historical conversations",
      "Rich Markdown editor with timestamped audio playback sync",
      "Multi-space goal tracking and team project boards",
      "One-click exports to Notion, Linear, Slack, and Docs",
    ],
    primaryCta: {
      label: "Open Web Workspace",
      href: "https://play.google.com/store/apps/details?id=com.aiassistantapp",
      isExternal: true,
    },
    secondaryAction: {
      label: "Supported browsers",
      href: "#system-requirements",
    },
    tags: ["Web App", "Deep Search", "No Install"],
  },
];

export const getKukuNotesEcosystemFeatures = [
  {
    title: "Unified Memory Sync",
    description:
      "Record a call in Chrome, review the extracted tasks on Desktop, and check your morning briefing on Android. Everything syncs instantly.",
    icon: "sync",
  },
  {
    title: "Zero-Bot Privacy",
    description:
      "KukuNotes never invites awkward bot avatars to your meetings. Audio is captured locally and opt-in via your verified device microphone or tab audio.",
    icon: "shield",
  },
  {
    title: "11 Indian Languages Everywhere",
    description:
      "Multilingual speech engine works seamlessly across mobile, desktop, and extension — transcribing Hindi, Tamil, Bengali, Telugu, and more.",
    icon: "globe",
  },
  {
    title: "Instant Export & Integrations",
    description:
      "Connect your spaces to Notion, Google Calendar, Slack, and Linear so notes and tasks flow directly into your existing toolchain.",
    icon: "zap",
  },
];

export const getKukuNotesFaqs = [
  {
    q: "How does KukuNotes capture audio without inviting a meeting bot?",
    a: "Unlike traditional AI note-takers that send bot attendees into your calls, KukuNotes operates as a native companion on your device or browser. It captures incoming audio directly from your audio device or browser tab with your permission, keeping your meetings natural and private.",
  },
  {
    q: "Do I need separate accounts for mobile, desktop, and Chrome?",
    a: "No. A single KukuNotes account works across all platforms. Any meeting recorded on Chrome or Desktop is immediately synchronized to your Android app and Web workspace.",
  },
  {
    q: "Can I use KukuNotes offline?",
    a: "Yes. KukuNotes' mobile and desktop apps can record audio offline. As soon as your device reconnects to the internet, KukuNotes processes the transcript, generates notes and tasks, and syncs everything across your spaces.",
  },
  {
    q: "What permissions does KukuNotes require?",
    a: "KukuNotes only requests access to microphone/audio capture strictly when you tap Start Listening. We never access your contacts, private files, or location, and microphone access is entirely opt-in.",
  },
];

export const getKukuNotesRequirements = [
  {
    platform: "Android App",
    spec: "Android 9.0 (Pie) or higher",
    storage: "~45 MB download",
    features: "Microphone permission, Background audio service",
  },
  {
    platform: "Desktop (macOS)",
    spec: "macOS 12.0 (Monterey) or later (Apple Silicon M1/M2/M3/M4 & Intel)",
    storage: "~110 MB",
    features: "System audio capture, Global hotkey shortcut",
  },
  {
    platform: "Desktop (Windows)",
    spec: "Windows 10 / 11 (64-bit)",
    storage: "~95 MB",
    features: "WASAPI loopback audio, Notification tray companion",
  },
  {
    platform: "Chrome Extension",
    spec: "Google Chrome, Brave, Arc, or Microsoft Edge v100+",
    storage: "~12 MB",
    features: "Tab audio capture, Google Meet in-page overlay",
  },
];
