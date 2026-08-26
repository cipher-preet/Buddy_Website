export const siteConfig = {
  name: "Buddy",
  shortName: "Buddy",
  tagline: "Listen. Remember. Act.",
  title: "Buddy — Listen. Remember. Act.",
  description:
    "Buddy is an AI companion for iOS and Android. It listens to conversations when you choose, then turns them into notes, tasks, goals, a calendar, and a daily briefing inside Spaces.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://buddy.ai").replace(/\/$/, ""),
  locale: "en_US",
  language: "en",
  email: "hello@buddy.ai",
  creator: "Buddy",
  keywords: [
    "Buddy AI",
    "AI companion app",
    "AI listening app",
    "conversation to notes",
    "meeting notes AI",
    "daily briefing app",
    "AI tasks from conversations",
    "voice notes to tasks",
    "personal AI assistant",
    "iOS Android notes app",
    "AI spaces",
  ],
  platforms: ["iOS", "Android"],
  features: [
    "Opt-in live listening",
    "Daily briefing",
    "Calendar",
    "Conversation notes",
    "Prioritized tasks",
    "Space goals",
    "Ask Buddy chat",
    "Selective sharing",
  ],
} as const;

export function absoluteUrl(path = "/") {
  if (!path.startsWith("/")) return `${siteConfig.url}/${path}`;
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
