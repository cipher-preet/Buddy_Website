"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { faqItems, useCaseItems } from "@/lib/home-data";
import { formatInr, planFacts } from "@/lib/product-facts";
import { FaqItem } from "./FaqItem";
import { ExplainerVideo } from "@/components/seo/ExplainerVideo";
import { FeatureMotion, type MotionScene } from "@/components/seo/FeatureMotion";
import { useLiteMode } from "./useLiteMode";

const features = [
  {
    title: "Record from the device already in the room",
    body: "Android, Windows, or Chrome. You tap Start Listening. Nothing new joins Zoom, Meet, or Teams.",
    scene: "capture" as MotionScene,
  },
  {
    title: "Read it in the language people used",
    body: "Words land as people talk. You stay in the conversation.",
    scene: "notes" as MotionScene,
  },
  {
    title: "Leave with work, not a recording",
    body: "A summary, tasks, and a reminder. The Android app does not record phone or dialer calls.",
    scene: "tasks" as MotionScene,
  },
  {
    title: "Keep each project in its own Space",
    body: "A client, a class, or a product thread. Notes and tasks stay put.",
    scene: "spaces" as MotionScene,
  },
];

const platforms: { name: string; href: string; body: string; scene: MotionScene }[] = [
  { name: "Android", href: "/android", body: "Google Play. In-person talks, when you tap Start Listening.", scene: "capture" },
  { name: "Windows", href: "/windows", body: "Microsoft Store. Record on the desktop. No bot joins.", scene: "devices" },
  { name: "Chrome", href: "/chrome-extension", body: "The recorder for the browser tab you already have open.", scene: "notes" },
  { name: "Web", href: "/platform", body: "Review Spaces, notes, tasks, and Ask KukuNotes.", scene: "ask" },
];

const related = [
  { label: "AI meeting recorder", href: "/ai-meeting-recorder" },
  { label: "AI note taker", href: "/ai-note-taker" },
  { label: "Lecture notes", href: "/ai-lecture-notes" },
  { label: "Personal assistant", href: "/ai-personal-assistant" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/get-kukunotes" },
];

function Rise({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const lite = useLiteMode();
  const calm = Boolean(reduce || lite);
  return (
    <motion.div
      className={className}
      initial={calm ? false : { y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function KukuNotesLanding() {
  const { free, pro, business } = planFacts;
  const [useCase, setUseCase] = useState(0);
  const activeCase = useCaseItems[useCase];

  return (
    <main className="studio home" id="main-content">
      <section className="studio-hero home-hero" id="top">
        <div className="studio-hero-copy">
          <h1 id="home-title">
            Capture.
            <br />
            Organize.
            <br />
            Grow.
          </h1>
          <p className="hero-kicker">Meeting notes, without a bot in the room.</p>
          <p className="studio-hero-lead">
            Record on your device. Tap Start Listening. No bot joins the call.
          </p>
          <div className="studio-hero-actions">
            <Link className="studio-btn studio-btn-accent" href="/get-kukunotes">Get KukuNotes free</Link>
            <a className="studio-btn studio-btn-ghost" href="#product">See it work</a>
          </div>
          <p className="hero-fact">
            Private and opt-in. Many languages. The Android app does not record phone or dialer calls.
          </p>
        </div>
        <ExplainerVideo />
      </section>

      <section className="logo-band" aria-label="Platforms and languages">
        <ul>
          <li>Android</li>
          <li>Windows</li>
          <li>Chrome</li>
          <li>Web</li>
          <li>Many languages</li>
          <li>Opt-in</li>
          <li>No bot</li>
        </ul>
      </section>

      <section className="promise" id="listen">
        <div className="promise-grid">
          <Rise>
            <h2>Before the meeting. During it. After it.</h2>
            <p>Start listening on your own device. Leave with a summary, tasks, and a reminder.</p>
            <a className="studio-btn studio-btn-ghost" href="#product">Watch the flow</a>
          </Rise>
          <ExplainerVideo clip="tasks" />
        </div>
      </section>

      <section className="feature-grid" id="product" aria-labelledby="feature-title">
        <h2 id="feature-title" className="sr-only">What happens to the meeting</h2>
        {features.map((feature) => (
          <article key={feature.title} className={`feat feat-${feature.scene}`}>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
            <FeatureMotion scene={feature.scene} />
          </article>
        ))}
        <div className="feature-cta">
          <Link className="studio-btn studio-btn-accent" href="/get-kukunotes">Get KukuNotes free</Link>
        </div>
      </section>

      <section className="usecases" id="spaces" aria-labelledby="usecase-title">
        <h2 id="usecase-title">Whoever is talking, the notes still land.</h2>
        <div className="usecase-pills" role="tablist" aria-label="Use cases">
          {useCaseItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={index === useCase}
              className={index === useCase ? "is-on" : ""}
              onClick={() => setUseCase(index)}
            >
              {item.title.split(" ")[0]}
            </button>
          ))}
        </div>
        <div className="usecase-stage" role="tabpanel">
          <div className="usecase-orb" aria-hidden="true" />
          <h3>{activeCase.title}</h3>
          <p>{activeCase.summary}</p>
          <div className="usecase-nav">
            <button type="button" aria-label="Previous use case" onClick={() => setUseCase((n) => (n + useCaseItems.length - 1) % useCaseItems.length)}>←</button>
            <Link href="/use-cases">See use cases</Link>
            <button type="button" aria-label="Next use case" onClick={() => setUseCase((n) => (n + 1) % useCaseItems.length)}>→</button>
          </div>
        </div>
      </section>

      <section className="bento" aria-labelledby="bento-title">
        <h2 id="bento-title">What you can count on.</h2>
        <p className="bento-lead">No customer logos and no made-up numbers. These are the product facts.</p>
        <div className="bento-grid">
          <article className="bento-dark">
            <h3>No bot in the call</h3>
            <p>KukuNotes never joins Zoom, Google Meet, or Teams. Recording stays on your device.</p>
            <FeatureMotion scene="shield" compact />
          </article>
          <article className="bento-light">
            <h3>Many languages</h3>
            <p>Every plan can transcribe more than one language.</p>
            <FeatureMotion scene="languages" compact />
          </article>
          <article className="bento-grad">
            <p className="bento-stat">{free.meetingRecording}</p>
            <h3>of meetings on the free plan</h3>
            <p>Plus {free.notesRecording} of notes. Pro is {formatInr(pro.monthlyInr)}/month. Business is {formatInr(business.monthlyInr)}/month.</p>
          </article>
          <article className="bento-dark">
            <h3>Not a phone-call recorder</h3>
            <p>The Android app does not record phone or dialer calls. It records meetings and in-person conversations when you ask.</p>
            <FeatureMotion scene="capture" compact />
          </article>
        </div>
      </section>

      <section className="platforms" id="ask" aria-labelledby="platform-title">
        <h2 id="platform-title">On the devices you already use.</h2>
        <p>One account. Android, Windows, Chrome, and the web.</p>
        <div className="platform-grid">
          {platforms.map((item) => (
            <Link key={item.name} href={item.href} className="platform-card">
              <strong>{item.name}</strong>
              <span>{item.body}</span>
              <FeatureMotion scene={item.scene} compact />
            </Link>
          ))}
        </div>
      </section>

      <section className="price-band" aria-labelledby="price-title">
        <h2 id="price-title">Free for the first hours. Clear prices after that.</h2>
        <p>Every plan includes the same languages. Prices are shown in INR.</p>
        <div className="price-row">
          <article>
            <h3>Free</h3>
            <p className="price-figure">{formatInr(free.monthlyInr)}<span>/month</span></p>
            <ul>
              <li>{free.notesRecording} of notes</li>
              <li>{free.meetingRecording} of meetings</li>
              <li>{free.mindmaps} mindmaps · {free.goals} goals</li>
            </ul>
            <Link href="/get-kukunotes">Get KukuNotes free</Link>
          </article>
          <article>
            <h3>Pro</h3>
            <p className="price-figure">{formatInr(pro.monthlyInr)}<span>/month</span></p>
            <p className="price-note">{formatInr(pro.yearlyInr)} billed yearly</p>
            <ul>
              <li>{pro.notesRecording} of notes</li>
              <li>{pro.meetingRecording} of meetings</li>
              <li>{pro.goals} goals</li>
            </ul>
            <Link href="/pricing">See Pro</Link>
          </article>
          <article>
            <h3>Business</h3>
            <p className="price-figure">{formatInr(business.monthlyInr)}<span>/month</span></p>
            <p className="price-note">{formatInr(business.yearlyInr)} billed yearly</p>
            <ul>
              <li>{business.notesRecording} notes</li>
              <li>{business.meetingRecording} meetings</li>
              <li>{business.goals} goals</li>
            </ul>
            <Link href="/pricing">See Business</Link>
          </article>
        </div>
      </section>

      <section className="studio-faq faq-band" id="faq" aria-labelledby="faq-title">
        <div className="faq-grid">
          <div>
            <h2 id="faq-title">Questions, answered plainly.</h2>
            <div className="studio-faq-list">
              {faqItems.map((item, index) => (
                <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={index === 0} />
              ))}
            </div>
          </div>
          <FeatureMotion scene="ask" />
        </div>
      </section>

      <section className="closer" id="cta">
        <div className="closer-ovals" aria-hidden="true">
          <i /><i /><i /><i /><i /><i /><i />
        </div>
        <h2>The next meeting can leave the notes behind.</h2>
        <div className="studio-hero-actions">
          <Link className="studio-btn closer-primary" href="/get-kukunotes">Get KukuNotes free</Link>
          <Link className="studio-btn closer-secondary" href="/pricing">Compare plans</Link>
        </div>
        <div className="related">
          <h3>Keep reading</h3>
          <ul>
            {related.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
