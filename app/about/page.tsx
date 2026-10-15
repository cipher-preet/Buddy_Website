import type { Metadata } from "next";
import { SiteLayout } from "@/components/marketing/SiteLayout";
import {
  PageHero,
  Action,
  FAQ,
  FinalCTA,
  ProductFrame,
} from "@/components/marketing/UI";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
const title = "About KukuNotes — Conversations into Notes & Action";
const description =
  "KukuNotes helps turn important conversations into notes, tasks, and connected context. Learn why we build around presence, clarity, and follow-through.";
export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "KukuNotes",
    "Kuku Notes",
    "what is KukuNotes",
    "KukuNotes app",
    "KukuNotes AI",
    "about KukuNotes",
    "KukuNotes Technologies",
    "KukuNotes official website",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "website",
    images: [
      {
        url: `/opengraph-image?v=${siteConfig.assetVersion}`,
        width: 1200,
        height: 630,
        alt: "About KukuNotes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`/opengraph-image?v=${siteConfig.assetVersion}`],
  },
};
const faqs = [
  {
    q: "What is KukuNotes?",
    a: "KukuNotes is an AI productivity workspace that helps turn conversations into summaries, notes, and action items. Spaces keep related work together, and Ask KukuNotes helps you return to captured context.",
  },
  {
    q: "Is it KukuNotes or Kuku Notes?",
    a: "The official name is KukuNotes, written as one word. Kuku Notes refers to the same product.",
  },
  {
    q: "Is KukuNotes related to Kuku FM or Kuku TV?",
    a: "No. KukuNotes is a productivity product for conversations, notes, and tasks. It is separate from the Kuku FM and Kuku TV entertainment apps.",
  },
  {
    q: "Where can I get it?",
    a: "Explore the Android app, Windows app, Chrome extension, and web workspace on our downloads page. Store listings show current device requirements.",
  },
];
export default function AboutPage() {
  return (
    <SiteLayout>
      <JsonLd data={aboutJsonLd(faqs)} />
      <PageHero
        eyebrow="Why KukuNotes exists"
        title={
          <>
            Good conversations
            <br />
            <span className="accent-text">deserve a future.</span>
          </>
        }
        description="The idea in a meeting. The promise on a call. The plan you talked through. Too much useful context disappears as soon as the conversation ends."
      >
        <div className="hero-actions">
          <Action href="/#product">Meet KukuNotes</Action>
          <Action href="/contact" secondary>
            Talk to the team
          </Action>
        </div>
      </PageHero>
      <section className="section about-statement">
        <div className="container">
          <p className="eyebrow">Our purpose</p>
          <p>
            Help people be present in the moment, remember what mattered, and
            make the next useful step a little clearer.
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="about-values">
          {[
            [
              "01 / Presence",
              "Be in the conversation.",
              "Recording should be a deliberate choice. Start when you need to capture, inform the people involved, and give your attention to the conversation.",
            ],
            [
              "02 / Context",
              "Keep the story together.",
              "A note makes more sense beside the project, person, or goal it belongs to. Spaces give related conversations and tasks a place to stay connected.",
            ],
            [
              "03 / Follow-through",
              "Make room for action.",
              "Remembering is a beginning. Summaries, extracted tasks, questions, and goals help you return to what was discussed and decide what comes next.",
            ],
          ].map(([label, heading, body]) => (
            <article key={label}>
              <p className="eyebrow">{label}</p>
              <h3>{heading}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="about-product">
          <ProductFrame
            src="/screenshots/desktop/spaces-tasks.png"
            alt="The KukuNotes workspace brings Spaces and actionable tasks together"
          />
        </div>
      </section>
      <FAQ items={faqs} title="A little more about KukuNotes." />
      <FinalCTA />
    </SiteLayout>
  );
}
