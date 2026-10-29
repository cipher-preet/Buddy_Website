import type { Metadata } from "next";
import Link from "next/link";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutJsonLd } from "@/lib/json-ld";
import { languageNote, priceCopy } from "@/lib/product-facts";
import { pageAlternates, socialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site";
import { ExplainerVideo } from "@/components/seo/ExplainerVideo";
import { FeatureMotion } from "@/components/seo/FeatureMotion";

const title = "About KukuNotes, the AI Note Taker";
const description =
  "KukuNotes is a private AI note taker and bot-free meeting recorder for Android, Windows, Chrome, and web. It is not Kuku FM.";

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
    "KukuNotes vs Kuku FM",
    "KukuNotes Technologies",
    "KukuNotes official website",
  ],
  alternates: pageAlternates("/about"),
  ...socialMetadata(title, description, "/about"),
};

const facts = [
  { label: "Name", value: "KukuNotes (one word; sometimes written “Kuku Notes”)" },
  { label: "What it is", value: "AI note taker, bot-free meeting recorder, and personal AI assistant" },
  { label: "Platform", value: "Android, Windows, Chrome, and web" },
  { label: "Package", value: siteConfig.androidPackage },
  { label: "Languages", value: languageNote },
  { label: "Pricing", value: priceCopy.summary },
  { label: "Recording model", value: "Opt-in only, via Start Listening; no meeting bots" },
  { label: "Contact", value: siteConfig.email },
];

const aboutFaqs = [
  {
    q: "What is KukuNotes?",
    a: "KukuNotes records conversations when you tap Start Listening and turns them into summaries, decisions, and action items, organized into Spaces for each project, class, client, or life area. It also gives you a daily briefing and answers questions about your own notes. It runs on Android, Windows, Chrome, and the web.",
  },
  {
    q: "Is it KukuNotes or Kuku Notes?",
    a: "The official name is KukuNotes, written as one word with a capital K and N. “Kuku Notes” refers to the same app.",
  },
  {
    q: "Is KukuNotes related to Kuku FM or Kuku TV?",
    a: "No. KukuNotes is a productivity app for notes, meetings, and tasks. It is a separate product from the Kuku FM audiobook app and the Kuku TV short-drama app.",
  },
  {
    q: "Where can I download KukuNotes?",
    a: "Android is on Google Play, Windows is on the Microsoft Store, the meeting recorder is on the Chrome Web Store, and the web workspace is at platform.kukunotes.com. Every option is listed on the download page.",
  },
  {
    q: "Who is KukuNotes for?",
    a: "Students recording lectures, founders and teams capturing meetings, sales and client-facing professionals, creators doing interviews, and anyone who wants a private second brain for daily life.",
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={aboutJsonLd(aboutFaqs)} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="studio seo-page" id="main-content">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">About</span>
        </nav>

        <section className="seo-hero" aria-labelledby="about-title">
          <div className="seo-hero-copy">
            <p className="studio-kicker">About KukuNotes</p>
            <h1 id="about-title">
              KukuNotes helps you keep <span className="brand-gradient-text">the day you actually lived.</span>
            </h1>
            <p className="studio-section-lead">
              Meetings and classes become notes, tasks, and plans you can trust.
            </p>
          </div>
          <ExplainerVideo clip="notes" />
        </section>

        <section className="seo-answer seo-split" aria-label="Quick answer">
          <div>
            <p className="seo-answer-label">In one sentence</p>
            <p>
              KukuNotes is a private AI note taker and meeting recorder for Android, Windows, Chrome, and web.
            </p>
          </div>
          <FeatureMotion scene="shield" />
        </section>

        <section className="seo-block seo-split" aria-labelledby="about-facts-title">
          <div>
          <h2 id="about-facts-title">KukuNotes at a glance</h2>
          <dl className="seo-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          </div>
          <FeatureMotion scene="devices" />
        </section>

        <section className="seo-block seo-split" aria-labelledby="about-principles-title">
          <div>
          <h2 id="about-principles-title">What we believe</h2>
          <ul className="seo-bullets">
            <li>Recording should always be your choice, so listening is strictly opt-in.</li>
            <li>A summary is only useful if you can check it, so every highlight links to its evidence.</li>
            <li>Notes belong in context, so everything lives in a Space.</li>
            <li>It supports many languages on every plan.</li>
          </ul>
          </div>
          <FeatureMotion scene="languages" />
        </section>

        <section className="seo-block seo-split" aria-labelledby="about-faq-title">
          <div>
          <h2 id="about-faq-title">Common questions about KukuNotes</h2>
          <div className="studio-faq-list">
            {aboutFaqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
          </div>
          <FeatureMotion scene="ask" />
        </section>

        <nav className="seo-block seo-related seo-split" aria-labelledby="about-related-title">
          <div>
          <h2 id="about-related-title">Explore KukuNotes</h2>
          <ul>
            <li><Link href="/ai-note-taker">AI note taker <span aria-hidden="true">-&gt;</span></Link></li>
            <li><Link href="/ai-meeting-recorder">AI meeting recorder <span aria-hidden="true">-&gt;</span></Link></li>
            <li><Link href="/android">Android app <span aria-hidden="true">-&gt;</span></Link></li>
            <li><Link href="/chrome-extension">Chrome extension <span aria-hidden="true">-&gt;</span></Link></li>
            <li><Link href="/platform">Web app <span aria-hidden="true">-&gt;</span></Link></li>
            <li><Link href="/pricing">Pricing <span aria-hidden="true">-&gt;</span></Link></li>
          </ul>
          </div>
          <FeatureMotion scene="spaces" />
        </nav>
      </main>
      <KukuNotesFooter />
    </div>
  );
}
