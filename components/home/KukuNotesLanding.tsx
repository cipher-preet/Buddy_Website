import Image from "next/image";
import Link from "next/link";
import { faqItems } from "@/lib/home-data";
import {
  definitionFacts,
  definitionLead,
  formatInr,
  planFacts,
  supportedLanguages,
} from "@/lib/product-facts";
import { AppFrame } from "./AppFrame";
import { FaqItem } from "./FaqItem";
import { HowItWorks } from "./HowItWorks";
import { MeetingStage } from "./MeetingStage";
import { NoBotContrast } from "./NoBotContrast";

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

export function KukuNotesLanding() {
  const { free, pro, business } = planFacts;

  return (
    <main className="studio home" id="main-content">
      <section className="studio-hero" id="top" aria-labelledby="home-title">
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
          <p className="hero-for">
            For students, founders, and teams who work in Hindi, English, or Hinglish.
          </p>
          <p className="hero-platforms">
            <Link href="/android">Android</Link>
            <Link href="/windows">Windows</Link>
            <Link href="/chrome-extension">Chrome</Link>
            <Link href="/platform">Web</Link>
          </p>
        </div>
        <MeetingStage />
      </section>

      <section className="trust" aria-label="What KukuNotes is">
        <ul>
          <li>
            <strong>Opt-in</strong>
            <span>The mic is on only while you are listening.</span>
          </li>
          <li>
            <strong>No bot</strong>
            <span>It never joins Zoom, Meet, or Teams.</span>
          </li>
          <li>
            <strong>11 languages</strong>
            <span>Hindi, English, Hinglish, and more, on every plan.</span>
          </li>
          <li>
            <strong>Free to start</strong>
            <span>
              {free.notesRecording} of notes, {free.meetingRecording} of meetings.
            </span>
          </li>
        </ul>
      </section>

      <HowItWorks />
      <NoBotContrast />

      <section className="split band" id="listen" aria-labelledby="listen-title">
        <div className="split-copy">
          <h2 id="listen-title">Record the meeting from the device already in the room.</h2>
          <p>
            Tap Start Listening on Android, Windows, or Chrome. KukuNotes uses that device’s microphone or tab audio. It does not enter the call, and the Android app does not record phone or dialer calls.
          </p>
          <p>
            Online meetings, rooms, classes, and client visits all work the same way: you start it, you stop it, the notes are yours.
          </p>
          <Link className="text-link" href="/ai-meeting-recorder">
            AI meeting recorder
          </Link>
        </div>
        <AppFrame
          src="/screenshots/home-listening.jpg"
          alt="KukuNotes home screen with live listening turned on"
          size="hero"
          priority={false}
        />
      </section>

      <section className="split band is-flip" aria-labelledby="notes-title">
        <div className="split-copy">
          <h2 id="notes-title">A transcript, then notes and tasks you can check.</h2>
          <p>
            After the conversation, KukuNotes writes a summary, the decisions, and the commitments. Each point can be traced back to what was said.
          </p>
          <p>
            Tasks keep an owner, a priority, and a date. Calendar reminders follow the same thread, so the meeting does not die in a doc.
          </p>
          <Link className="text-link" href="/ai-note-taker">
            AI note taker
          </Link>
        </div>
        <figure className="shot">
          <Image
            src="/screenshots/tasks-day.jpg"
            alt="KukuNotes tasks with priority and dates"
            width={453}
            height={1024}
            sizes="(max-width: 800px) 80vw, 320px"
          />
        </figure>
      </section>

      <section className="split band" id="spaces" aria-labelledby="spaces-title">
        <div className="split-copy">
          <h2 id="spaces-title">Spaces keep one project from mixing with the next.</h2>
          <p>
            A Space is the home for a client, a class, a meeting series, or a part of life. Notes, tasks, and goals stay inside it.
          </p>
          <p>You choose what to share. Everything else stays in that Space.</p>
        </div>
        <figure className="shot shot-wide">
          <Image
            src="/screenshots/desktop/spaces-workspace.webp"
            alt="KukuNotes workspace with a space and its tasks"
            width={1440}
            height={900}
            sizes="(max-width: 800px) 100vw, 560px"
          />
        </figure>
      </section>

      <section className="split band is-flip" id="ask" aria-labelledby="ask-title">
        <div className="split-copy">
          <h2 id="ask-title">Ask what was decided. Get an answer from your notes.</h2>
          <p>
            Ask KukuNotes about a meeting, an open task, or the day ahead. Answers come from your Spaces, not from a generic chat.
          </p>
          <p>
            The daily briefing lines up priorities, your calendar, and time you can actually focus.
          </p>
        </div>
        <figure className="shot shot-wide">
          <Image
            src="/screenshots/desktop/ask-chat.webp"
            alt="Ask KukuNotes answering from a space"
            width={1440}
            height={900}
            sizes="(max-width: 800px) 100vw, 560px"
          />
        </figure>
      </section>

      <section className="product-band band" id="product" aria-labelledby="product-title">
        <div className="product-band-copy">
          <h2 id="product-title">The same notes on your phone and on the web.</h2>
          <p>
            Android, Windows, the Chrome extension, and the web workspace stay on one account. Open a Space wherever you left it.
          </p>
        </div>
        <div className="product-shots">
          <figure className="shot">
            <Image
              src="/screenshots/notes-library.jpg"
              alt="KukuNotes notes library grouped by space"
              width={453}
              height={1024}
              sizes="240px"
            />
            <figcaption>Notes</figcaption>
          </figure>
          <figure className="shot">
            <Image
              src="/screenshots/home-spaces.jpg"
              alt="KukuNotes home with spaces"
              width={453}
              height={1024}
              sizes="240px"
            />
            <figcaption>Spaces</figcaption>
          </figure>
          <figure className="shot shot-wide">
            <Image
              src="/screenshots/desktop/meetings-library.webp"
              alt="KukuNotes meetings library on a larger screen"
              width={1440}
              height={900}
              sizes="(max-width: 800px) 100vw, 520px"
            />
            <figcaption>Meetings</figcaption>
          </figure>
        </div>
      </section>

      <section className="langs band" aria-labelledby="langs-title">
        <h2 id="langs-title">Hindi, English, and Hinglish. Plus every language on the plan.</h2>
        <p>{definitionFacts}</p>
        <ul>
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
      </section>

      <section className="compare band" aria-labelledby="compare-title">
        <h2 id="compare-title">How it differs from Otter, Fireflies, Granola, and Fathom.</h2>
        <p className="compare-note">
          These are KukuNotes’ own notes on public product differences. They are not a scoreboard, and they are not customer reviews.
        </p>
        <div className="compare-list">
          {comparisons.map((item) => (
            <article key={item.name}>
              <h3>KukuNotes and {item.name}</h3>
              <p>{item.body}</p>
              <Link href={item.href}>Read the meeting recorder</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="prices band" aria-labelledby="prices-title">
        <div className="prices-intro">
          <h2 id="prices-title">Start free. Move up when the hours run out.</h2>
          <p>
            Free includes {free.notesRecording} of notes recording and {free.meetingRecording} of meeting recording. Every plan includes the same languages.
          </p>
        </div>
        <div className="price-grid">
          <article>
            <h3>Free</h3>
            <p className="price-amount">
              {formatInr(free.monthlyInr)}
              <span>/month</span>
            </p>
            <ul>
              <li>{free.notesRecording} of notes</li>
              <li>{free.meetingRecording} of meetings</li>
              <li>{free.mindmaps} mindmaps</li>
              <li>{free.goals} goals</li>
            </ul>
          </article>
          <article className="is-pro">
            <h3>Pro</h3>
            <p className="price-amount">
              {formatInr(pro.monthlyInr)}
              <span>/month</span>
            </p>
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
            <p className="price-amount">
              {formatInr(business.monthlyInr)}
              <span>/month</span>
            </p>
            <p className="price-year">{formatInr(business.yearlyInr)} billed yearly</p>
            <ul>
              <li>{business.notesRecording} notes</li>
              <li>{business.meetingRecording} meetings</li>
              <li>{business.mindmaps} mindmaps</li>
              <li>{business.goals} goals</li>
            </ul>
          </article>
        </div>
        <Link className="studio-btn studio-btn-ink" href="/pricing">
          See full pricing
        </Link>
      </section>

      <section className="studio-faq band" id="faq" aria-labelledby="faq-title">
        <h2 id="faq-title">Questions about recording and notes</h2>
        <div className="studio-faq-list">
          {faqItems.map((item, index) => (
            <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={index === 0} />
          ))}
        </div>
      </section>

      <section className="close band" id="cta" aria-labelledby="cta-title">
        <h2 id="cta-title">Record the next meeting without putting a bot in the room.</h2>
        <p>Android, Windows, Chrome, and the web. Free includes real recording time.</p>
        <div className="studio-hero-actions">
          <Link className="studio-btn studio-btn-accent" href="/get-kukunotes">
            Get KukuNotes free
          </Link>
          <Link className="studio-btn studio-btn-ghost" href="/pricing">
            Compare plans
          </Link>
        </div>
      </section>
    </main>
  );
}
