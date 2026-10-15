import { siteConfig } from "./site";
export const getKukuNotesPlatforms = [
  {
    id: "android",
    title: "Android",
    category: "Mobile app",
    tagline: "Keep useful conversations close, wherever the day takes you.",
    badge: "Google Play",
    compatibility: "Check device eligibility on Google Play.",
    highlights: [
      "Capture conversations when you choose",
      "Review notes and next steps",
      "Keep your Spaces close at hand",
    ],
    primaryCta: {
      label: "Download for Android",
      href: siteConfig.playStoreUrl,
      isExternal: true,
    },
    secondaryAction: { label: "Explore Android", href: "/android" },
    image: "/screenshots/android/capture.webp",
    alt: "KukuNotes Android app showing Spaces and user-controlled listening",
  },
  {
    id: "windows",
    title: "Windows",
    category: "Desktop app",
    tagline: "A dedicated place for conversations and focused work on your PC.",
    badge: "Microsoft Store",
    compatibility: "See current Windows requirements in the Microsoft Store.",
    highlights: [
      "A workspace on your desktop",
      "Meeting notes and action items",
      "Spaces for each part of your work",
    ],
    primaryCta: {
      label: "Get Windows App",
      href: siteConfig.microsoftStoreUrl,
      isExternal: true,
    },
    secondaryAction: { label: "Explore Windows", href: "/windows" },
    image: "/screenshots/desktop/workspace.webp",
    alt: "KukuNotes desktop workspace with Spaces and tasks",
  },
  {
    id: "chrome",
    title: "Chrome",
    category: "Browser extension",
    tagline: "Turn browser meetings into notes you can come back to.",
    badge: "Chrome Web Store",
    compatibility:
      "Install eligibility and permissions are shown in the Chrome Web Store.",
    highlights: [
      "For Google Meet, Zoom Web, and Teams Web",
      "Start recording with your permission",
      "Review summaries and extracted tasks",
    ],
    primaryCta: {
      label: "Add to Chrome",
      href: siteConfig.chromeStoreUrl,
      isExternal: true,
    },
    secondaryAction: {
      label: "Explore the extension",
      href: "/chrome-extension",
    },
    image: "/screenshots/desktop/meeting-detail.png",
    alt: "A KukuNotes meeting summary with transcript and task tabs",
  },
  {
    id: "web",
    title: "Web workspace",
    category: "In your browser",
    tagline:
      "Pick up the thread. Your notes, tasks, and context in one workspace.",
    badge: "No installation",
    compatibility:
      "Open in a modern browser and sign in to your KukuNotes account.",
    highlights: [
      "Review notes and tasks together",
      "Organize your work into Spaces",
      "Ask questions with your context",
    ],
    primaryCta: {
      label: "Open Web Workspace",
      href: siteConfig.platformUrl,
      isExternal: true,
    },
    secondaryAction: { label: "Explore the web app", href: "/platform" },
    image: "/screenshots/desktop/context-chat.webp",
    alt: "Ask KukuNotes in the web workspace",
  },
] as const;
export const getKukuNotesFaqs = [
  {
    q: "Where should I start?",
    a: "Open the web workspace to explore your notes and tasks, choose Android for conversations on the go, Windows for a dedicated PC app, or Chrome for browser meetings.",
  },
  {
    q: "Do I need a separate account on each device?",
    a: "Use the same KukuNotes account on your devices to return to your Spaces and captured context.",
  },
  {
    q: "Can I use KukuNotes on a Mac or iPhone?",
    a: "This website links to the Android and Windows apps, the Chrome extension, and the web workspace. For other devices, try the web workspace in a compatible browser. No native Mac or iPhone download is listed here.",
  },
  {
    q: "What do I need to know before recording?",
    a: "Start capture deliberately, review the permissions your app or browser requests, and get the consent required for your conversation. Features and capture options can vary by platform.",
  },
];
