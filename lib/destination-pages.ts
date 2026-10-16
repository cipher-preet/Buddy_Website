import { agreedProductFacts } from "./product-facts";
import { siteConfig } from "./site";

/**
 * Sitelink destination pages — short, high-intent routes Google can surface
 * under the brand result (Platform, Chrome, Windows, Android).
 * Each page is crawlable HTML that explains the product and deep-links the store.
 */

export type DestinationPage = {
  slug: "platform" | "chrome-extension" | "windows" | "android";
  title: string;
  description: string;
  keywords: string[];
  kicker: string;
  h1: string;
  h1Accent: string;
  lead: string;
  answer: string;
  cta: { label: string; href: string; isExternal: boolean };
  secondaryCta?: { label: string; href: string };
  badge: string;
  highlights: string[];
  sections: { heading: string; body: string[] }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  image: { src: string; alt: string };
};

export const destinationPages: DestinationPage[] = [
  {
    slug: "platform",
    title: "KukuNotes Web App — Spaces, Notes & AI Chat Online",
    description:
      "Open the KukuNotes web app at platform.kukunotes.com. Review Spaces, meeting notes, tasks, and Ask KukuNotes from any browser—synced with Android, Windows, and Chrome.",
    keywords: [
      "KukuNotes web app",
      "KukuNotes platform",
      "platform.kukunotes.com",
      "AI notes web app",
      "online AI note taker",
      "meeting notes dashboard",
      "KukuNotes login",
      "KukuNotes workspace",
    ],
    kicker: "Web workspace",
    h1: "Your KukuNotes workspace,",
    h1Accent: "in the browser.",
    lead: "platform.kukunotes.com is the full web app: Spaces, notes, tasks, meetings, calendar, and Ask KukuNotes—synced with whatever you capture on Android, Windows, or Chrome.",
    answer:
      "The KukuNotes web app (platform.kukunotes.com) is the cloud workspace for your conversations. Open it in any modern browser to review AI notes, action items, Spaces, and Ask KukuNotes chat. Everything syncs with the Android app, Windows app, and Chrome meeting recorder—no re-upload needed.",
    cta: {
      label: "Open platform.kukunotes.com",
      href: siteConfig.platformUrl,
      isExternal: true,
    },
    secondaryCta: { label: "See all download options", href: "/get-kukunotes" },
    badge: "Zero install",
    highlights: [
      "Spaces, notes, and tasks in one dashboard",
      "Ask KukuNotes from your full conversation history",
      "Works on desktop and tablet browsers",
      "Real-time sync with mobile and desktop apps",
    ],
    sections: [
      {
        heading: "What you can do on the web",
        body: [
          "After a meeting recorded on Chrome or a conversation captured on Android, open the web app to read the summary, check extracted tasks, and ask follow-up questions. The web workspace is built for review and planning, not for replacing in-person capture.",
          "Use Spaces to keep projects, classes, and clients separate. Switch context without mixing threads, and share only the notes or tasks someone else needs.",
        ],
      },
      {
        heading: "Who the web app is for",
        body: [
          "Teams and individuals who capture on the phone but prefer a larger screen for reviewing notes, planning the day, or exporting tasks. Students can study from lecture notes on a laptop; founders can clear action items after a client call.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is platform.kukunotes.com?",
        a: "It is the official KukuNotes web application—your Spaces, notes, tasks, meetings, and Ask KukuNotes chat in the browser, synced with the mobile and desktop apps.",
      },
      {
        q: "Do I need to install anything for the web app?",
        a: "No. Sign in at platform.kukunotes.com with the same account you use on Android or Windows. A modern browser is enough.",
      },
      {
        q: "Can I record meetings from the web app?",
        a: "Capture is designed for the Android app, Windows app, and Chrome extension. The web app is where you review, organize, and ask questions about what was already captured.",
      },
    ],
    related: [
      { label: "Chrome extension", href: "/chrome-extension" },
      { label: "Android app", href: "/android" },
      { label: "Windows app", href: "/windows" },
      { label: "Pricing", href: "/pricing" },
    ],
    image: {
      src: "/screenshots/desktop/spaces-workspace.png",
      alt: "KukuNotes web app showing Spaces and tasks on platform.kukunotes.com",
    },
  },
  {
    slug: "chrome-extension",
    title: "KukuNotes Chrome Extension — AI Meeting Recorder for Meet & Zoom",
    description:
      "Add the KukuNotes Chrome extension for bot-free meeting notes in Google Meet, Zoom Web, and Teams Web. One-click recording, AI summaries, and tasks—no bot joins your call.",
    keywords: [
      "KukuNotes Chrome extension",
      "Chrome meeting recorder",
      "Google Meet AI notes",
      "Zoom Web note taker",
      "bot-free Chrome meeting notes",
      "AI meeting recorder Chrome",
      "meeting notes without bot Chrome",
      "KukuNotes Meeting Recorder",
    ],
    kicker: "Chrome extension",
    h1: "Meeting notes in Chrome,",
    h1Accent: "without a bot.",
    lead: "The KukuNotes Meeting Recorder extension opens in Google Meet, Zoom Web, and Microsoft Teams Web so you can capture the call and get AI notes in one click—nothing joins as a participant.",
    answer:
      "KukuNotes Meeting Recorder is a free Chrome extension that records meeting audio from your browser tab (not by inviting a bot). It works with Google Meet, Zoom Web, and Microsoft Teams Web, then pushes summaries, decisions, and action items into your KukuNotes Spaces.",
    cta: {
      label: "Add to Chrome — Free",
      href: siteConfig.chromeStoreUrl,
      isExternal: true,
    },
    secondaryCta: { label: "Open web workspace", href: "/platform" },
    badge: "Chrome Web Store",
    highlights: [
      "Zero bot joins — tab audio only",
      "Google Meet, Zoom Web, Teams Web",
      "AI notes, decisions, and tasks after the call",
      "Syncs to Spaces on web, Android, and Windows",
    ],
    sections: [
      {
        heading: "How bot-free Chrome capture works",
        body: [
          "Traditional notetakers send a visible bot into Zoom or Meet. KukuNotes records from your active browser tab with your permission, so the meeting stays natural and private.",
          "When the call ends, notes and tasks land in the Space you chose. Open Ask KukuNotes later if you need a quick recap.",
        ],
      },
      {
        heading: "Install in under a minute",
        body: [
          "Open the Chrome Web Store listing, click Add to Chrome, pin the extension, then join your next Meet or Zoom Web call. Start recording when the conversation matters.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the KukuNotes Chrome extension join my meeting as a bot?",
        a: "No. It captures tab audio from your browser with your permission. No third-party participant appears in the call.",
      },
      {
        q: "Which meeting apps does it support?",
        a: "Google Meet, Zoom in the browser, and Microsoft Teams Web. For in-person conversations, use the Android or Windows apps.",
      },
      {
        q: "Is the Chrome extension free?",
        a: "Yes. Install it free from the Chrome Web Store. Recording minutes follow your KukuNotes plan (Free, Pro, or Business).",
      },
    ],
    related: [
      { label: "AI meeting recorder", href: "/ai-meeting-recorder" },
      { label: "Web app", href: "/platform" },
      { label: "Android app", href: "/android" },
      { label: "Get KukuNotes", href: "/get-kukunotes" },
    ],
    image: {
      src: "/screenshots/desktop/meetings-library.png",
      alt: "KukuNotes meetings library after Chrome extension recording",
    },
  },
  {
    slug: "windows",
    title: "KukuNotes for Windows — AI Meeting Notes from Microsoft Store",
    description:
      "Download KukuNotes for Windows from the Microsoft Store. Capture Zoom, Teams, and system audio without a meeting bot. AI notes, tasks, and Spaces sync across devices.",
    keywords: [
      "KukuNotes Windows",
      "KukuNotes Microsoft Store",
      "AI note taker Windows",
      "meeting recorder Windows 11",
      "bot-free meeting notes Windows",
      "Windows AI meeting assistant",
      "desktop AI note taker",
    ],
    kicker: "Windows app",
    h1: "KukuNotes on Windows,",
    h1Accent: "from the Microsoft Store.",
    lead: "Install the official Windows app to capture system audio from Zoom, Teams, and other calls—then get structured notes and tasks without inviting a notetaker bot.",
    answer:
      "KukuNotes for Windows is available on the Microsoft Store for Windows 10 and 11. It records system audio for meetings and conversations, generates AI notes and action items, and syncs Spaces with the web app, Android, and Chrome extension.",
    cta: {
      label: "Get on Microsoft Store",
      href: siteConfig.microsoftStoreUrl,
      isExternal: true,
    },
    secondaryCta: { label: "Open web workspace", href: "/platform" },
    badge: "Microsoft Store",
    highlights: [
      "Windows 10 / 11 · Microsoft Store",
      "System audio capture for Zoom & Teams",
      "Global shortcut to ask KukuNotes",
      "Syncs with Android, Chrome, and web",
    ],
    sections: [
      {
        heading: "Desktop capture without a bot",
        body: [
          "On Windows, KukuNotes listens through your device—not by joining the meeting. That means client calls and interviews stay free of awkward bot avatars while you still walk away with notes and tasks.",
          "Pair it with the Chrome extension for browser-only meetings, or use Android when conversations happen in person.",
        ],
      },
      {
        heading: "System requirements",
        body: [
          "Windows 10 or Windows 11 (64-bit). Install from the Microsoft Store for automatic updates. Microphone and system audio permissions are requested only when you start listening.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do I download KukuNotes for Windows?",
        a: "From the official Microsoft Store listing for KukuNotes. Avoid sideloaded APKs or unofficial installers.",
      },
      {
        q: "Does the Windows app work offline?",
        a: "You can record offline. When you reconnect, KukuNotes processes the transcript, builds notes and tasks, and syncs to your Spaces.",
      },
      {
        q: "Is there a Mac app?",
        a: "macOS is not live yet. Use the web app at platform.kukunotes.com, the Chrome extension for browser meetings, or Windows and Android for native capture.",
      },
    ],
    related: [
      { label: "Chrome extension", href: "/chrome-extension" },
      { label: "Android app", href: "/android" },
      { label: "Web app", href: "/platform" },
      { label: "Pricing", href: "/pricing" },
    ],
    image: {
      src: "/screenshots/desktop/ask-chat.png",
      alt: "KukuNotes Windows desktop workspace with AI chat",
    },
  },
  {
    slug: "android",
    title: "KukuNotes Android App — AI Note Taker on Google Play",
    description:
      "Download KukuNotes on Google Play. The Android AI note taker and meeting recorder for in-person talks, Hindi & Hinglish, tasks, Spaces, and a free plan to start.",
    keywords: [
      "KukuNotes Android",
      "KukuNotes Google Play",
      "AI note taker Android",
      "meeting recorder Android",
      "AI notes app Android",
      "Hindi voice notes Android",
      "download KukuNotes",
      "Kuku Notes app",
    ],
    kicker: "Android app",
    h1: "The AI note taker for",
    h1Accent: "the phone in your pocket.",
    lead: "KukuNotes on Android captures meetings, classes, and everyday conversations when you tap Start Listening—then turns them into notes, tasks, and Spaces. Free to start on Google Play.",
    answer:
      `KukuNotes is an AI note taker and meeting recorder for Android, available on Google Play. It records only when you opt in, supports English, Hindi, and Hinglish, and extracts action items into Spaces. ${agreedProductFacts.limitsSentence}`,
    cta: {
      label: "Get on Google Play",
      href: siteConfig.playStoreUrl,
      isExternal: true,
    },
    secondaryCta: { label: "Compare all platforms", href: "/get-kukunotes" },
    badge: "Google Play",
    highlights: [
      "Opt-in listening — never always-on",
      "English, Hindi, and Hinglish",
      "Notes, tasks, Spaces, daily briefing",
      "Free forever tier to start",
    ],
    sections: [
      {
        heading: "Built for in-person and phone-first talk",
        body: [
          "Most AI notetakers assume every meeting is on Zoom. KukuNotes is built for the conversations that happen in rooms, corridors, coaching classes, and client visits—the ones your laptop never hears.",
          "Tap Start Listening, finish the conversation, and leave with a summary, decisions, and tasks filed in the right Space.",
        ],
      },
      {
        heading: "Not the same as Kuku FM",
        body: [
          "KukuNotes (also written Kuku Notes) is a productivity AI note taker. It is a separate product from the Kuku FM audiobook app and Kuku TV. Search “KukuNotes” or “Kuku Notes AI” on Google Play to find the correct listing.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is KukuNotes free on Android?",
        a: `Yes. There is a free plan, and Pro and Business add more. ${agreedProductFacts.limitsSentence}`,
      },
      {
        q: "Does KukuNotes work in Hindi?",
        a: agreedProductFacts.languagesSentence,
      },
      {
        q: "What Android version do I need?",
        a: "Android 9.0 (Pie) or higher. Download from Google Play for the official build.",
      },
    ],
    related: [
      { label: "AI note taker", href: "/ai-note-taker" },
      { label: "Hindi speech to text", href: "/hindi-speech-to-text" },
      { label: "Chrome extension", href: "/chrome-extension" },
      { label: "Web app", href: "/platform" },
    ],
    image: {
      src: "/screenshots/home-spaces.jpg",
      alt: "KukuNotes Android app home screen with Spaces",
    },
  },
];

export function getDestinationPage(slug: string) {
  return destinationPages.find((page) => page.slug === slug);
}

export const sitelinkNav = destinationPages.map((page) => ({
  name:
    page.slug === "platform"
      ? "Web App"
      : page.slug === "chrome-extension"
        ? "Chrome Extension"
        : page.slug === "windows"
          ? "Windows"
          : "Android",
  path: `/${page.slug}`,
  description: page.description,
}));
