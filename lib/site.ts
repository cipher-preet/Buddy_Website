import { planFacts } from "./product-facts";
import { allSeoKeywords } from "./seo-keywords";

export const siteConfig = {
  name: "KukuNotes",
  shortName: "KukuNotes",
  brandName: "KukuNotes",
  tagline: "Capture. Organize. Grow.",
  title: "KukuNotes — Bot-free AI Note Taker for Hindi & English",
  titleTemplate: "%s | KukuNotes",
  description:
    "Bot-free AI note taker and meeting recorder for Android. Capture Hindi, English, and Hinglish conversations into notes, tasks, and Spaces.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kukunotes.com").replace(/\/$/, ""),
  locale: "en_US",
  language: "en",
  email: "team@kukunotes.com",
  creator: "KukuNotes",
  publisher: "KukuNotes Technologies",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.aiassistantapp",
  microsoftStoreUrl:
    "https://apps.microsoft.com/detail/9NCZSN8SMPQ1?hl=en-us&gl=IN&ocid=pdpshare",
  chromeStoreUrl:
    "https://chromewebstore.google.com/detail/hjnhifmajfnlpalfgkfdjpllbobcpahl?utm_source=item-share-cb",
  androidPackage: "com.aiassistantapp",
  platformUrl: "https://platform.kukunotes.com",
  apiUrl: "https://buddy-node-backend-scz7pyp3ha-el.a.run.app",
  keywords: allSeoKeywords,
  alternateNames: ["Kuku Notes", "KukuNotes AI", "KukuNotes App", "KukuNotes AI Note Taker", "KukuNote"],
  contentUpdated: "2026-10-21",
  /** Bump when brand icons change so Google/Bing drop cached favicons. */
  assetVersion: "20261013",
  platforms: ["Android", "Web", "Windows", "Chrome Extension"],
  category: "ProductivityApplication",
  geo: {
    primaryMarket: "India",
    regionCode: "IN",
    coverage: "Worldwide",
    placename: "India",
    availableLanguages: [...planFacts.languageNames],
    cities: ["Bengaluru", "Mumbai", "Delhi", "Hyderabad", "Pune", "Chennai", "Ahmedabad", "Kolkata"],
  },
  features: [
    "Opt-in live meeting recording without bots",
    "AI note taker with confidence scores and evidence",
    "Automated task and action item extraction",
    `Speech-to-text in ${planFacts.languageNames.join(", ")}, plus Hinglish`,
    "Daily briefing with priorities, calendar, and focus time",
    "Context-aware Ask KukuNotes chat",
    "Dedicated Spaces for projects, life, and teams",
    "Goal monitor tracking space outcomes",
    "Selective note and task sharing",
    "Cross-platform real-time sync",
    "Android app records meetings and in-person conversations (not phone calls) into tasks, notes, calendar events, and reminders",
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) return `${siteConfig.url}/${path}`;
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
