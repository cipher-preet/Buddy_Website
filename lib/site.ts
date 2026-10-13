import { allSeoKeywords } from "./seo-keywords";

export const siteConfig = {
  name: "KukuNotes",
  shortName: "KukuNotes",
  brandName: "KukuNotes",
  tagline: "Capture. Organize. Grow.",
  title: "KukuNotes — AI Note Taker, Meeting Recorder & Personal AI Assistant",
  titleTemplate: "%s | KukuNotes",
  description:
    "KukuNotes is your private personal AI assistant, AI note taker, and AI meeting recorder for Android, Windows, Chrome, and web. Capture live conversations without a bot, get AI notes in Hindi & English, extract action items, and organize Spaces with a daily briefing.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kukunotes.com").replace(/\/$/, ""),
  locale: "en_US",
  language: "en",
  email: "ps1535146@gmail.com",
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
  keywords: allSeoKeywords,
  alternateNames: ["Kuku Notes", "KukuNotes AI", "KukuNotes App", "KukuNotes AI Note Taker", "KukuNote"],
  contentUpdated: "2026-10-13",
  /** Bump when brand icons change so Google/Bing drop cached favicons. */
  assetVersion: "20261013",
  platforms: ["Android", "Web", "Windows", "Chrome Extension"],
  category: "ProductivityApplication",
  geo: {
    primaryMarket: "India",
    regionCode: "IN",
    coverage: "Worldwide",
    placename: "India",
    availableLanguages: ["English", "Hindi", "Hinglish"],
    cities: ["Bengaluru", "Mumbai", "Delhi", "Hyderabad", "Pune", "Chennai", "Ahmedabad", "Kolkata"],
  },
  pricing: {
    free: "Free Forever ($0 / ₹0)",
    proMonthly: "₹799 / month",
    proQuarterly: "₹1,870 / quarter (Save 22%)",
    businessMonthly: "₹1,999 / month",
  },
  features: [
    "Opt-in live meeting recording without bots",
    "AI note taker with confidence scores and evidence",
    "Automated task and action item extraction",
    "Hindi, English & 11 Indian regional languages speech-to-text",
    "Daily briefing with priorities, calendar, and focus time",
    "Context-aware Ask KukuNotes chat",
    "Dedicated Spaces for projects, life, and teams",
    "Goal monitor tracking space outcomes",
    "Selective note and task sharing",
    "Cross-platform real-time sync",
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) return `${siteConfig.url}/${path}`;
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
