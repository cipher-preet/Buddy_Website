import type { Metadata } from "next";
import Link from "next/link";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

const title = "About KukuNotes (Kuku Notes) — AI Note Taker App";
const description =
  "KukuNotes (also written Kuku Notes) is an AI note taker, bot-free meeting recorder, and personal assistant app for Android, built for English, Hindi, and Hinglish conversations.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["KukuNotes", "Kuku Notes", "what is KukuNotes", "KukuNotes app", "KukuNotes AI", "about KukuNotes"],
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "About KukuNotes" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

const facts = [
  { label: "Name", value: "KukuNotes (one word; sometimes written “Kuku Notes”)" },
  { label: "What it is", value: "AI note taker, bot-free meeting recorder, and personal AI assistant" },
  { label: "Platform", value: "Android app on Google Play" },
  { label: "Package", value: siteConfig.androidPackage },
  { label: "Languages", value: "English, Hindi, Hinglish; 11 Indian languages on Business" },
  { label: "Pricing", value: "Free plan; Pro ₹799/month; Business ₹1,999/month" },
  { label: "Recording model", value: "Opt-in only, via Start Listening; no meeting bots" },
  { label: "Contact", value: siteConfig.email },
];

const aboutFaqs = [
  {
    q: "What is KukuNotes?",
    a: "KukuNotes is an Android app that records conversations when you tap Start Listening and turns them into summaries, decisions, and action items, organized into Spaces for each project, class, client, or life area. It also gives you a daily briefing and answers questions about your own notes.",
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
    a: "KukuNotes is available for Android on Google Play. Search for “KukuNotes” or use the official link on this website.",
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
      <main className="studio seo-page">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">About</span>
        </nav>

        <section className="seo-hero seo-hero-single" aria-labelledby="about-title">
          <div className="seo-hero-copy">
            <p className="studio-kicker">About KukuNotes</p>
            <h1 id="about-title">
              KukuNotes helps you keep <span className="brand-gradient-text">the day you actually lived.</span>
            </h1>
            <p className="studio-section-lead">
              Important things get said in meetings, classes, and calls, and then forgotten.
              KukuNotes exists so the useful parts of those conversations become notes, tasks,
              and plans you can trust.
            </p>
          </div>
        </section>

        <section className="seo-answer" aria-label="Quick answer">
          <p className="seo-answer-label">In one sentence</p>
          <p>
            KukuNotes is a private AI note taker and meeting recorder for Android that turns
            English, Hindi, and Hinglish conversations into summaries, action items, and a daily
            briefing, without ever sending a bot into your meetings.
          </p>
        </section>

        <section className="seo-block" aria-labelledby="about-facts-title">
          <h2 id="about-facts-title">KukuNotes at a glance</h2>
          <dl className="seo-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="seo-block" aria-labelledby="about-principles-title">
          <h2 id="about-principles-title">What we believe</h2>
          <ul className="seo-bullets">
            <li>Recording should always be your choice, so listening is strictly opt-in.</li>
            <li>A summary is only useful if you can check it, so every highlight links to its evidence.</li>
            <li>Notes belong in context, so everything lives in a Space.</li>
            <li>Indian conversations mix languages, so Hindi and Hinglish are first-class.</li>
          </ul>
        </section>

        <section className="seo-block" aria-labelledby="about-faq-title">
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
        </section>

        <nav className="seo-block seo-related" aria-labelledby="about-related-title">
          <h2 id="about-related-title">Explore KukuNotes</h2>
          <ul>
            <li><Link href="/ai-note-taker">AI note taker <span aria-hidden="true">-&gt;</span></Link></li>
            <li><Link href="/ai-meeting-recorder">AI meeting recorder <span aria-hidden="true">-&gt;</span></Link></li>
            <li><Link href="/hindi-speech-to-text">Hindi speech to text <span aria-hidden="true">-&gt;</span></Link></li>
            <li><Link href="/compare">Compare with other tools <span aria-hidden="true">-&gt;</span></Link></li>
          </ul>
        </nav>
      </main>
      <KukuNotesFooter />
    </div>
  );
}
