import { allSeoKeywords } from "./seo-keywords";

export const siteConfig = {
  name: "KukuNotes",
  shortName: "KukuNotes",
  brandName: "KukuNotes",
  tagline: "Capture. Organize. Grow.",
  title: "KukuNotes — Personal AI Assistant, Meeting Recorder & AI Note Taker",
  titleTemplate: "%s | KukuNotes",
  description:
    "KukuNotes is your private personal AI assistant, AI note taker, and meeting recorder for Android and cross-platform. Capture live conversations, transcribe Hindi & English, auto-extract action items, and organize your spaces with smart daily briefings.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kukunotes.com").replace(/\/$/, ""),
  locale: "en_US",
  language: "en",
  email: "ps1535146@gmail.com",
  creator: "KukuNotes",
  publisher: "KukuNotes Technologies",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.aiassistantapp",
  androidPackage: "com.aiassistantapp",
  keywords: allSeoKeywords,
  alternateNames: ["Kuku Notes", "KukuNotes AI", "KukuNotes App", "KukuNotes AI Note Taker", "KukuNote"],
  contentUpdated: "2026-10-01",
  platforms: ["Android", "Web", "Desktop (Mac & Windows)", "Chrome Extension"],
  category: "ProductivityApplication",
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
