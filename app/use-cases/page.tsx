import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/marketing/SiteLayout";
import {
  PageHero,
  Action,
  FinalCTA,
  ProductFrame,
} from "@/components/marketing/UI";
import { JsonLd } from "@/components/seo/JsonLd";
import { useCasesJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
export const metadata: Metadata = {
  title: "Use Cases — AI Notes for Teams, Students, Sales & Creators",
  description:
    "Turn team meetings, lectures, client calls, and everyday plans into useful notes and next steps with KukuNotes.",
  keywords: [
    "AI note taker for students",
    "AI meeting recorder for teams",
    "AI sales call notes",
    "lecture transcription app",
    "AI task extractor from conversations",
    "second brain personal planning",
    "creator interview notes AI",
    "meeting summary app without bots",
    "KukuNotes use cases",
    "client visit meeting notes app",
    "dealer meeting notes AI",
    "college lecture notes AI",
    "minutes of meeting app",
  ],
  alternates: { canonical: "/use-cases" },
  openGraph: {
    title: "KukuNotes for the Way You Work",
    description:
      "Useful notes and next steps for teams, students, client work, and personal plans.",
    url: "/use-cases",
    type: "website",
    images: [
      {
        url: `/opengraph-image?v=${siteConfig.assetVersion}`,
        width: 1200,
        height: 630,
        alt: "KukuNotes use cases",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KukuNotes Use Cases",
    description: "Conversations into notes and action for real work.",
    images: [`/opengraph-image?v=${siteConfig.assetVersion}`],
  },
};
const cases = [
  {
    id: "teams",
    audience: "Founders & teams",
    title: "The decision is made. Keep the team moving.",
    pain: "Planning calls create decisions faster than anyone can write them down. Keep a useful record of what changed and what needs to happen next.",
    outcomes: [
      "A Space for each project or workstream",
      "Meeting summaries to revisit before the next sync",
      "Action items that keep commitments in view",
    ],
    image: "/screenshots/desktop/meeting-detail.png",
    alt: "KukuNotes meeting detail with summary and source conversation",
    href: "/ai-meeting-recorder",
    cta: "Bring clarity to your meetings",
  },
  {
    id: "education",
    audience: "Students & educators",
    title: "Stay in the lesson. Return to the learning.",
    pain: "You should not have to choose between following an explanation and writing it down. With permission to record, turn a class or study discussion into notes you can come back to.",
    outcomes: [
      "A Space for each subject",
      "Key points and study tasks together",
      "Questions grounded in your captured class context",
    ],
    image: "/screenshots/notes.png",
    alt: "KukuNotes notes library organized into Spaces",
    href: "/ai-lecture-notes",
    cta: "Make more of your lecture notes",
  },
  {
    id: "sales",
    audience: "Sales & client work",
    title: "A better follow-up starts with a better memory.",
    pain: "The small details make the next conversation better: the request behind an objection, the question still open, the commitment you made.",
    outcomes: [
      "Keep each client’s context in its own Space",
      "Review requests and promises after a call",
      "Prepare from the conversation before your next meeting",
    ],
    image: "/screenshots/desktop/spaces-tasks.png",
    alt: "KukuNotes Spaces with contextual tasks for follow-up",
    href: "/ai-note-taker",
    cta: "Keep the context behind the call",
  },
  {
    id: "personal",
    audience: "Personal planning",
    title: "Give your own plans a little more room.",
    pain: "A home project, a learning goal, an idea on the way to somewhere else. Capture the thought, then give it a next step when you have the time.",
    outcomes: [
      "Separate work and personal Spaces",
      "Return to priorities with your daily briefing",
      "Keep meaningful goals in view",
    ],
    image: "/screenshots/daily-briefing.jpeg",
    alt: "KukuNotes daily briefing with priorities and focus time",
    href: "/ai-personal-assistant",
    cta: "Find your next useful step",
  },
  {
    id: "creators",
    audience: "Creators",
    title: "Keep the spark after the brainstorm.",
    pain: "Interviews and creative conversations are full of threads worth following. Keep the original context close as ideas become notes and next steps.",
    outcomes: [
      "One Space for each story or project",
      "Return to ideas from captured conversations",
      "Organize research notes and production tasks together",
    ],
    image: "/screenshots/note-detail.png",
    alt: "A detailed KukuNotes note with conversation highlights",
    href: "/ai-note-taker",
    cta: "Give your next idea a home",
  },
];
export default function UseCasesPage() {
  return (
    <SiteLayout>
      <JsonLd data={useCasesJsonLd()} />
      <PageHero
        eyebrow="For conversations like yours"
        title={
          <>
            Different work.
            <br />
            <span className="accent-text">The same need for clarity.</span>
          </>
        }
        description="From a project’s first brainstorm to the next thing on your own list. Make the useful part of every conversation easier to come back to."
      >
        <div className="hero-actions">
          <Action />
          <Action href="/get-kukunotes" secondary>
            Choose your app
          </Action>
        </div>
      </PageHero>
      <nav className="container use-case-nav" aria-label="Choose your use case">
        {cases.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.audience}
          </a>
        ))}
      </nav>
      <div className="container">
        {cases.map((item, i) => (
          <section id={item.id} key={item.id} className="use-case-section">
            <div className="use-case-copy">
              <p className="eyebrow">
                0{i + 1} / {item.audience}
              </p>
              <h2>{item.title}</h2>
              <p>{item.pain}</p>
              <ul className="check-list">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
              <Link href={item.href} className="text-link">
                {item.cta} <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="use-case-visual">
              <ProductFrame src={item.image} alt={item.alt} />
            </div>
          </section>
        ))}
      </div>
      <FinalCTA />
    </SiteLayout>
  );
}
