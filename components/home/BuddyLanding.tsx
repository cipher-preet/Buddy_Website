"use client";

import { faqItems } from "@/lib/home-data";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";
import { AppFrame } from "./AppFrame";
import { ProductTheater } from "./ProductTheater";
import { Reveal } from "./Reveal";

const dayBeats = [
  { time: "07:45", label: "Daily briefing ready" },
  { time: "10:30", label: "Listening in Product Launch" },
  { time: "14:10", label: "Notes captured" },
  { time: "16:40", label: "Tasks extracted" },
];

const captureSteps = [
  {
    number: "01",
    title: "Listen when it matters",
    copy: "Start capture for a meeting, a walk, or a working session. Listening is a choice, not a background habit.",
    image: "/screenshots/listen.png",
    alt: "Buddy live listening on the home screen",
    meta: "Opt-in capture",
  },
  {
    number: "02",
    title: "Keep the useful parts",
    copy: "Buddy turns the conversation into notes with confidence, dates, and the space they belong to.",
    image: "/screenshots/notes-board.jpeg",
    alt: "Buddy notes with confidence and space context",
    meta: "Searchable memory",
  },
  {
    number: "03",
    title: "Move the next step",
    copy: "Commitments become prioritized tasks, still attached to the original context so follow-through stays honest.",
    image: "/screenshots/tasks-board.jpeg",
    alt: "Buddy tasks with priority and space context",
    meta: "Clear next actions",
  },
];

const spacePrinciples = [
  {
    title: "One space, one context",
    copy: "A project, a person, a meeting series, or a part of life gets its own home—so notes do not bleed across work.",
  },
  {
    title: "Everything stays connected",
    copy: "Briefing, calendar, notes, tasks, and goals all point back to the same space instead of living in separate tools.",
  },
  {
    title: "Sharing stays selective",
    copy: "You choose the exact notes and tasks that belong in a handoff. The rest stays private to the space.",
  },
];

const prompts = [
  "What did we decide in this morning’s sync?",
  "What are my open tasks in Product Launch?",
  "Help me plan tomorrow from today’s notes.",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function BuddyLanding() {
  return (
    <main className="studio">
      <section className="studio-hero" id="top">
        <div className="studio-hero-copy">
          <motion.p
            className="studio-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            Personal context, kept
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease }}
          >
            Listen.
            <br />
            Remember.
            <br />
            <em>Act.</em>
          </motion.h1>
          <motion.p
            className="studio-hero-lead"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
          >
            Buddy captures the conversations that fill your day, then turns them
            into notes, tasks, and a plan you can actually use.
          </motion.p>
          <motion.div
            className="studio-hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
          >
            <a
              className="studio-btn studio-btn-ink"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Buddy
            </a>
            <a className="studio-text-link" href="#product">
              See the product <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="studio-hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
        >
          <ol className="studio-dayline" aria-label="A day with Buddy">
            {dayBeats.map((beat) => (
              <li key={beat.time}>
                <time>{beat.time}</time>
                <span>{beat.label}</span>
              </li>
            ))}
          </ol>

          <div className="studio-hero-stage">
            <AppFrame src="/screenshots/daily-briefing.jpeg" alt="Buddy daily briefing" size="hero" />
            <div className="studio-hero-chips">
              <div className="studio-chip studio-chip-live">
                <i />
                Listening
              </div>
              <div className="studio-chip studio-chip-focus">
                <b>4h 30m</b>
                <span>focus time</span>
              </div>
              <div className="studio-chip studio-chip-priority">
                <b>3</b>
                <span>priorities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="studio-briefing" aria-labelledby="briefing-title">
        <Reveal className="studio-briefing-copy">
          <p className="studio-kicker">Daily briefing</p>
          <h2 id="briefing-title">Know what deserves your attention today.</h2>
          <p>
            Buddy brings focus time, priorities, and upcoming meetings into one
            opening view—so the day has a shape before it gets busy.
          </p>
          <ul>
            <li>Today’s priorities</li>
            <li>Available focus time</li>
            <li>Upcoming meetings</li>
          </ul>
        </Reveal>
        <Reveal className="studio-briefing-stage" variant="scale" delay={0.08}>
          <AppFrame
            src="/screenshots/daily-briefing.jpeg"
            alt="Buddy daily briefing with priorities and upcoming meetings"
            size="hero"
          />
        </Reveal>
      </section>

      <section className="studio-strip" aria-label="What Buddy holds">
        <p>Built for the shape of a real day</p>
        <ul>
          <li>Daily briefing</li>
          <li>Live listening</li>
          <li>Notes with context</li>
          <li>Prioritized tasks</li>
          <li>Space goals</li>
          <li>Selective sharing</li>
        </ul>
      </section>

      <ProductTheater />

      <section className="studio-capture" id="listen" aria-labelledby="capture-title">
        <Reveal className="studio-capture-intro">
          <p className="studio-kicker">From conversation to next step</p>
          <h2 id="capture-title">Capture once. Stay oriented.</h2>
          <p>
            When a conversation matters, Buddy listens with you, then keeps the
            details where the rest of your day already lives.
          </p>
        </Reveal>

        <div className="studio-capture-track">
          {captureSteps.map((step, index) => (
            <Reveal key={step.number} className="studio-capture-step" delay={index * 0.08}>
              <div className="studio-capture-meta">
                <span>{step.number}</span>
                <small>{step.meta}</small>
              </div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
              <div className="studio-capture-frame">
                <AppFrame src={step.image} alt={step.alt} size="showcase" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="studio-spaces" id="spaces" aria-labelledby="spaces-title">
        <Reveal className="studio-spaces-copy">
          <p className="studio-kicker">Spaces</p>
          <h2 id="spaces-title">Give each part of your life a place to land.</h2>
          <p>
            Buddy is organized around spaces, not a single infinite feed. Context
            stays where it belongs, and the rest of the app can stay quiet.
          </p>
          <ol>
            {spacePrinciples.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal className="studio-spaces-stage" variant="scale" delay={0.08}>
          <AppFrame src="/screenshots/home.png" alt="Buddy home with spaces and live listening" size="hero" />
        </Reveal>
      </section>

      <section className="studio-ask" id="ask" aria-labelledby="ask-title">
        <Reveal className="studio-ask-stage" variant="scale">
          <AppFrame src="/screenshots/chat.png" alt="Buddy AI chat grounded in your spaces" size="hero" />
        </Reveal>
        <Reveal className="studio-ask-copy" delay={0.08}>
          <p className="studio-kicker">Ask Buddy</p>
          <h2 id="ask-title">Ask from what you already lived, not a blank chat.</h2>
          <p>
            Questions are answered from the spaces, notes, and tasks Buddy already
            holds—so you spend less time reconstructing the day.
          </p>
          <ul className="studio-prompts">
            {prompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="studio-charter" aria-labelledby="charter-title">
        <Reveal>
          <p className="studio-kicker">You stay in control</p>
          <h2 id="charter-title">Useful only when it respects the room.</h2>
        </Reveal>
        <div className="studio-charter-grid">
          <Reveal delay={0.04}>
            <article>
              <span>01</span>
              <h3>Listening is opt-in</h3>
              <p>Capture starts when you decide a conversation is worth keeping, and it belongs to a specific space.</p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article>
              <span>02</span>
              <h3>Spaces stay separate</h3>
              <p>Projects, people, and personal planning do not collapse into one stream of memory.</p>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article>
              <span>03</span>
              <h3>Sharing is a choice</h3>
              <p>Select the exact notes and tasks someone else should see. Nothing else leaves the space.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="studio-faq" id="faq" aria-labelledby="faq-title">
        <Reveal>
          <p className="studio-kicker">Good to know</p>
          <h2 id="faq-title">A few questions, answered plainly.</h2>
        </Reveal>
        <div className="studio-faq-list">
          {faqItems.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary>
                {item.q}
                <span aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="studio-invite" id="cta">
        <Reveal>
          <p className="studio-kicker">Available on iOS & Android</p>
          <h2>Your next conversation, already useful.</h2>
          <p>Bring Buddy into the rooms where work actually happens, and leave with the day still intact.</p>
          <a
            className="studio-btn studio-btn-accent"
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get it on Google Play
          </a>
        </Reveal>
      </section>
    </main>
  );
}
