"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { faqItems } from "@/lib/home-data";
import {
  definitionFacts,
  definitionLead,
  formatInr,
  planFacts,
  supportedLanguages,
} from "@/lib/product-facts";
import { FaqItem } from "./FaqItem";
import { FeatureTabs } from "./FeatureTabs";
import { HeroStory } from "./HeroStory";
import { NoBotScene, ShieldMark } from "./scenes";
import { useLiteMode } from "./useLiteMode";

const comparisons = [
  {
    name: "Otter",
    href: "/ai-meeting-recorder",
    body: "Both can record in person on Android. Otter is strongest at live transcription and uses a notetaker bot for virtual meetings. KukuNotes never uses a bot, focuses on Hindi and Hinglish, and turns the conversation into tasks, Spaces, and a daily briefing, priced in INR.",
  },
  {
    name: "Fireflies",
    href: "/ai-meeting-recorder",
    body: "Fireflies sends a bot into video calls and is built for team-wide search and CRM integrations. KukuNotes is personal and bot-free, and it is built for Android.",
  },
  {
    name: "Granola",
    href: "/android",
    body: "Both are bot-free. Granola runs on Mac, Windows, and iPhone and has no Android app. KukuNotes is built for Android, with Hindi and Hinglish plus task planning.",
  },
  {
    name: "Fathom",
    href: "/android",
    body: "Fathom records Zoom, Google Meet, and Teams calls with a bot, or a bot-free beta on Mac, and has no native mobile app yet. KukuNotes records in-person meetings on Android. It does not record phone or dialer calls.",
  },
];

const steps = [
  {
    n: "1",
    title: "Tap Start Listening",
    body: "Recording begins only when you choose. The microphone is off until then.",
  },
  {
    n: "2",
    title: "Stay in the conversation",
    body: "A live transcript builds in Hindi, English, or Hinglish while you talk.",
  },
  {
    n: "3",
    title: "Leave with the work",
    body: "Summary, tasks, reminders, and calendar items are waiting in the right Space.",
  },
];

function Rise({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const lite = useLiteMode();
  const calm = Boolean(reduce || lite);
  return (
    <motion.div
      className={className}
      initial={calm ? false : { y: 22 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function KukuNotesLanding() {
  const { free, pro, business } = planFacts;

  return (
    <main className="studio home" id="main-content">
      <section className="studio-hero home-hero" id="top" aria-labelledby="home-title">
        <div className="studio-hero-copy">
          <h1 id="home-title">
            Capture.
            <br />
            Organize.
            <br />
            Grow.
          </h1>
          <p className="studio-hero-lead">
            Record meetings on your device. {definitionLead}
          </p>
          <p className="hero-next">
            You leave with a transcript, a summary, tasks, notes, calendar events, and reminders.
          </p>
          <div className="studio-hero-actions">
            <Link className="studio-btn studio-btn-accent" href="/get-kukunotes">
              Get KukuNotes free
            </Link>
            <a className="studio-btn studio-btn-ghost" href="#how">
              See how it works
            </a>
          </div>
          <p className="hero-for">For students, founders, and teams working in Hindi, English, or Hinglish.</p>
          <p className="hero-platforms">
            <Link href="/android">Android</Link>
            <Link href="/windows">Windows</Link>
            <Link href="/chrome-extension">Chrome</Link>
            <Link href="/platform">Web</Link>
          </p>
        </div>
        <HeroStory />
      </section>

      <section className="trust-band" aria-label="What you can count on">
        <ul>
          <li>
            <ShieldMark className="trust-icon" />
            <div>
              <strong>Opt-in</strong>
              <span>The mic is on only while you are listening.</span>
            </div>
          </li>
          <li>
            <span className="trust-icon trust-icon-bot" aria-hidden="true" />
            <div>
              <strong>No bot in the call</strong>
              <span>It never joins Zoom, Meet, or Teams.</span>
            </div>
          </li>
          <li>
            <span className="trust-icon trust-icon-lang" aria-hidden="true">अ</span>
            <div>
              <strong>Every plan, same languages</strong>
              <span>11 languages, including Hindi and English, plus Hinglish.</span>
            </div>
          </li>
          <li>
            <span className="trust-icon trust-icon-free" aria-hidden="true">₹0</span>
            <div>
              <strong>{free.notesRecording} notes · {free.meetingRecording} meetings</strong>
              <span>Free to start. Upgrade only when you need more hours.</span>
            </div>
          </li>
        </ul>
      </section>

      <section className="how-band" id="how" aria-labelledby="how-title">
        <Rise>
          <div className="section-intro">
            <h2 id="how-title">Three steps. Then the meeting is written down.</h2>
            <p>KukuNotes stays on your device. You start it, you talk, and the notes are ready when you stop.</p>
          </div>
          <ol className="how-row">
            {steps.map((step) => (
              <li key={step.n}>
                <div className={`how-visual how-visual-${step.n}`} aria-hidden="true" />
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </Rise>
      </section>

      <section className="feature-band" id="product" aria-labelledby="product-title">
        <Rise>
          <div className="section-intro">
            <h2 id="product-title">From the words in the room to the work after it.</h2>
            <p id="listen">Pick a part of the product. Each one is the same meeting, a step further along.</p>
          </div>
          <FeatureTabs />
          <p className="feature-links">
            <Link href="/ai-meeting-recorder">AI meeting recorder</Link>
            <Link href="/ai-note-taker">AI note taker</Link>
          </p>
        </Rise>
      </section>

      <section className="nobot-band" id="no-bot" aria-labelledby="nobot-title">
        <Rise>
          <div className="section-intro">
            <h2 id="nobot-title">No bot in your Zoom, Meet, or Teams call.</h2>
            <p>
              Other tools add a notetaker that sits in the participant list. KukuNotes never does. You record on your own device. The Android app does not record phone or dialer calls.
            </p>
          </div>
          <NoBotScene idPrefix="nobot" className="nobot-svg" />
          <div className="nobot-captions">
            <p>A bot joins the room.</p>
            <p>Same people. Recording stays on your device.</p>
          </div>
        </Rise>
      </section>

      <section className="lang-band" aria-labelledby="lang-title">
        <Rise>
          <div className="section-intro">
            <h2 id="lang-title">Built for the way meetings in India actually sound.</h2>
            <p>{definitionFacts}</p>
          </div>
          <ul className="lang-grid">
            {supportedLanguages.map((language) => (
              <li key={language.code}>
                {language.en}
                {"native" in language ? <span>{language.native}</span> : null}
              </li>
            ))}
            <li>
              Hinglish
              <span>Hindi and English together</span>
            </li>
          </ul>
          <Link className="text-link" href="/hindi-speech-to-text">
            Hindi speech to text
          </Link>
        </Rise>
      </section>

      <section className="split-band" id="spaces">
        <Rise className="split-card">
          <h2>Spaces keep one project from mixing with the next.</h2>
          <p>A client, a class, or a product thread gets its own notes, tasks, and goals. Sharing is a choice, not the default.</p>
        </Rise>
        <Rise className="split-card" >
          <h2 id="ask">A briefing before the day runs ahead of you.</h2>
          <p>Priorities, calendar, and focus time in one morning view. Ask what was decided, and the answer comes from your Spaces.</p>
        </Rise>
      </section>

      <section className="compare-band" aria-labelledby="compare-title">
        <Rise>
          <div className="section-intro">
            <h2 id="compare-title">How it differs from Otter, Fireflies, Granola, and Fathom.</h2>
            <p>These are KukuNotes’ own notes on public product differences. They are not a scoreboard or customer reviews.</p>
          </div>
          <div className="compare-grid">
            {comparisons.map((item) => (
              <article key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
                <Link href={item.href}>Read more</Link>
              </article>
            ))}
          </div>
        </Rise>
      </section>

      <section className="price-band" aria-labelledby="price-title">
        <Rise>
          <div className="section-intro light">
            <h2 id="price-title">Start free. Add hours when the work needs them.</h2>
            <p>Every plan includes the same languages. Prices are in rupees.</p>
          </div>
          <div className="price-row">
            <article>
              <h3>Free</h3>
              <p className="price-figure">{formatInr(free.monthlyInr)}<span>/month</span></p>
              <ul>
                <li>{free.notesRecording} of notes</li>
                <li>{free.meetingRecording} of meetings</li>
                <li>{free.mindmaps} mindmaps</li>
                <li>{free.goals} goals</li>
              </ul>
            </article>
            <article className="is-pro">
              <h3>Pro</h3>
              <p className="price-figure">{formatInr(pro.monthlyInr)}<span>/month</span></p>
              <p className="price-year">{formatInr(pro.yearlyInr)} billed yearly</p>
              <ul>
                <li>{pro.notesRecording} of notes</li>
                <li>{pro.meetingRecording} of meetings</li>
                <li>{pro.mindmaps} mindmaps</li>
                <li>{pro.goals} goals</li>
              </ul>
            </article>
            <article>
              <h3>Business</h3>
              <p className="price-figure">{formatInr(business.monthlyInr)}<span>/month</span></p>
              <p className="price-year">{formatInr(business.yearlyInr)} billed yearly</p>
              <ul>
                <li>{business.notesRecording} notes</li>
                <li>{business.meetingRecording} meetings</li>
                <li>{business.mindmaps} mindmaps</li>
                <li>{business.goals} goals</li>
              </ul>
            </article>
          </div>
          <Link className="studio-btn studio-btn-accent" href="/pricing">See full pricing</Link>
        </Rise>
      </section>

      <section className="studio-faq faq-band" id="faq" aria-labelledby="faq-title">
        <h2 id="faq-title">Questions about recording and notes</h2>
        <div className="studio-faq-list">
          {faqItems.map((item, index) => (
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={index === 0} />
          ))}
        </div>
      </section>

      <section className="close-band" id="cta" aria-labelledby="cta-title">
        <h2 id="cta-title">Record the next meeting without putting a bot in the room.</h2>
        <p>Android, Windows, Chrome, and the web. The free plan includes real recording time.</p>
        <div className="studio-hero-actions">
          <Link className="studio-btn studio-btn-accent" href="/get-kukunotes">Get KukuNotes free</Link>
          <Link className="studio-btn studio-btn-ghost close-ghost" href="/pricing">Compare plans</Link>
        </div>
      </section>
    </main>
  );
}
