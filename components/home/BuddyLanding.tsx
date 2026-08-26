"use client";

import { motion } from "framer-motion";
import { AppFrame } from "./AppFrame";

const chapters = [
  {
    id: "day",
    eyebrow: "DAILY BRIEFING",
    title: "Know what deserves your attention today.",
    copy: "Buddy brings your focus time, priorities, and upcoming meetings into one calm starting point—so your day has a shape before it gets busy.",
    points: ["Top priorities", "Focus time", "Upcoming meetings"],
    image: "/screenshots/daily-briefing.jpeg",
    alt: "Buddy daily briefing screen",
    tone: "peach",
  },
  {
    id: "organize",
    eyebrow: "CALENDAR",
    title: "Give every commitment a place to land.",
    copy: "See your working day as a simple visual plan. Buddy keeps meetings, deep work, and the things you promised to do in one clear timeline.",
    points: ["Time-blocked day", "Today at a glance", "Meeting context"],
    image: "/screenshots/calendar.jpeg",
    alt: "Buddy calendar screen",
    tone: "sky",
  },
  {
    id: "goals",
    eyebrow: "GOAL MONITOR",
    title: "Turn spaces into outcomes, not just folders.",
    copy: "Set a meaningful outcome for every project, team, or life area. Keep its progress visible and give the work a direction to move toward.",
    points: ["Space outcomes", "Momentum tracking", "Goal dates"],
    image: "/screenshots/goal-monitor.jpeg",
    alt: "Buddy goal monitor screen",
    tone: "mint",
  },
  {
    id: "capture",
    eyebrow: "NOTES & TASKS",
    title: "Keep the context. Make the next move obvious.",
    copy: "Conversations become useful knowledge and action items. Review clear notes, see confidence at a glance, and move priorities forward without losing the why.",
    points: ["Smart notes", "Prioritized tasks", "Space context"],
    image: "/screenshots/tasks-board.jpeg",
    companion: "/screenshots/notes-board.jpeg",
    alt: "Buddy tasks screen",
    tone: "lilac",
  },
  {
    id: "share",
    eyebrow: "SHARE SPACES",
    title: "Share the useful parts, not the whole mess.",
    copy: "Select the right notes and tasks, then turn a space into a focused handoff for a teammate, client, or collaborator.",
    points: ["Choose content", "Focused handoffs", "Clear shared context"],
    image: "/screenshots/share-space.jpeg",
    alt: "Buddy share space screen",
    tone: "butter",
  },
];

export function BuddyLanding() {
  return (
    <main className="buddy-landing">
      <section className="buddy-hero" id="top">
        <div className="buddy-hero-copy">
          <motion.p className="buddy-pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span /> YOUR DAY, WITH CONTEXT
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
            Make space for<br /><em>what matters.</em>
          </motion.h1>
          <motion.p className="buddy-hero-lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>
            Buddy turns the conversations, plans, and promises that fill your day into notes, tasks, goals, and a plan you can trust.
          </motion.p>
          <motion.div className="buddy-hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.28 }}>
            <a href="#day" className="buddy-button buddy-button-dark">Explore Buddy <span>↓</span></a>
            <a href="#app" className="buddy-text-link">See every screen <span>↗</span></a>
          </motion.div>
        </div>
        <motion.div className="buddy-hero-art" initial={{ opacity: 0, scale: 0.93, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
          <div className="buddy-sun buddy-sun-a" />
          <div className="buddy-sun buddy-sun-b" />
          <div className="buddy-hero-phone"><AppFrame src="/screenshots/daily-briefing.jpeg" alt="Buddy daily briefing" size="hero" /></div>
          <div className="buddy-hero-note buddy-hero-note-top"><b>4h 30m</b><span>focus time available</span></div>
          <div className="buddy-hero-note buddy-hero-note-bottom"><i>✦</i><span>Today is ready</span></div>
        </motion.div>
      </section>

      <section className="buddy-statement">
        <p>MEET BUDDY</p>
        <h2>One place for the thoughts you need to remember, the work you need to move, and the life you want to make room for.</h2>
        <div className="buddy-statement-tags"><span>Plan</span><span>Capture</span><span>Organize</span><span>Share</span><span>Grow</span></div>
      </section>

      <section className="buddy-system" aria-labelledby="buddy-system-title">
        <div className="buddy-system-intro">
          <p>THE BUDDY SYSTEM</p>
          <h2 id="buddy-system-title">From a busy moment to a useful next step.</h2>
          <p>Buddy is designed around the real rhythm of a day: capture what happens, understand why it matters, and keep moving with the right context close by.</p>
        </div>
        <ol className="buddy-system-steps">
          <li><span>01</span><div><h3>Make a space</h3><p>Give a project, person, meeting, or life area a place of its own.</p></div></li>
          <li><span>02</span><div><h3>Capture the moment</h3><p>Listen, add a note, or bring a task into the space while it is still fresh.</p></div></li>
          <li><span>03</span><div><h3>Keep what matters</h3><p>Turn the useful parts into clear notes, priorities, and meaningful goals.</p></div></li>
          <li><span>04</span><div><h3>Move with clarity</h3><p>Use your briefing and calendar to decide what deserves attention next.</p></div></li>
        </ol>
      </section>

      {chapters.map((chapter, index) => (
        <section className={`buddy-chapter buddy-chapter-${chapter.tone} ${index % 2 ? "is-reversed" : ""}`} id={chapter.id} key={chapter.id}>
          <motion.div className="buddy-chapter-copy" initial={{ opacity: 0, x: index % 2 ? 34 : -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <p className="buddy-chapter-eyebrow">{chapter.eyebrow}</p>
            <h2>{chapter.title}</h2>
            <p className="buddy-chapter-lead">{chapter.copy}</p>
            <ul>{chapter.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <a href="#app" className="buddy-text-link">Explore this feature <span>↗</span></a>
          </motion.div>
          <motion.div className="buddy-chapter-art" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}>
            <div className="buddy-chapter-orb" />
            <AppFrame src={chapter.image} alt={chapter.alt} size="hero" />
            {chapter.companion && <div className="buddy-companion"><AppFrame src={chapter.companion} alt="Buddy notes screen" size="compact" /></div>}
          </motion.div>
        </section>
      ))}

      <section className="buddy-intelligence" id="intelligence">
        <div className="buddy-intelligence-copy">
          <p>BUDDY INTELLIGENCE</p>
          <h2>Less searching.<br />More remembering.</h2>
          <span className="buddy-intelligence-star">✦</span>
          <p className="buddy-intelligence-lead">Start listening when a conversation matters. Buddy helps you preserve the useful details, then gives those details a place in your day.</p>
          <div className="buddy-intelligence-list"><span>Live listening</span><span>Context-rich notes</span><span>Ask Buddy</span></div>
        </div>
        <div className="buddy-intelligence-art">
          <div className="buddy-wave"><i /><i /><i /><i /><i /><i /><i /></div>
          <AppFrame src="/screenshots/listen.png" alt="Buddy live listening screen" size="hero" />
          <div className="buddy-ai-card"><span>Capturing context</span><b>Meeting notes are ready to review.</b></div>
        </div>
      </section>

      <section className="buddy-ai-capabilities" aria-labelledby="ai-capabilities-title">
        <div className="buddy-ai-capabilities-heading">
          <p>WHAT BUDDY INTELLIGENCE HELPS WITH</p>
          <h2 id="ai-capabilities-title">Context should do more than sit in a folder.</h2>
        </div>
        <div className="buddy-ai-capability-grid">
          <article><span className="buddy-capability-icon">01</span><h3>Capture a conversation</h3><p>Keep a meeting or brainstorm moving while Buddy helps preserve the details that would otherwise disappear.</p><b>Live listening</b></article>
          <article><span className="buddy-capability-icon">02</span><h3>Find the signal</h3><p>Bring notes, commitments, and discussion points back to their original space instead of scattering them across tools.</p><b>Context-rich notes</b></article>
          <article><span className="buddy-capability-icon">03</span><h3>Prepare the next move</h3><p>Use Buddy as a place to orient yourself before a meeting, a task, or the start of a new day.</p><b>Ask Buddy</b></article>
        </div>
      </section>

      <section className="buddy-app-explorer" id="app">
        <p className="buddy-app-pretitle">THE BUDDY APP</p>
        <div className="buddy-app-showcase">
          <motion.div className="buddy-app-copy" initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <p>YOUR EVERYDAY COMPANION</p>
            <h2>Every mode of your day,<br /><em>in your pocket.</em></h2>
            <p className="buddy-app-lead">A gentle place to begin your day, remember what happened, and stay close to the work and people that matter to you.</p>
            <a className="buddy-button buddy-button-dark" href="mailto:hello@buddy.ai?subject=Get%20Buddy">Get Buddy <span>↗</span></a>
            <div className="buddy-app-availability"><span>Available for</span><b>iOS & Android</b></div>
          </motion.div>
          <motion.div className="buddy-app-device" initial={{ opacity: 0, scale: 0.93, rotate: 3 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}>
            <div className="buddy-app-device-halo" /><AppFrame src="/screenshots/daily-briefing.jpeg" alt="Buddy daily briefing in the mobile app" size="hero" />
            <div className="buddy-app-device-chip buddy-chip-one"><i>✦</i><span>Plan your day</span></div>
            <div className="buddy-app-device-chip buddy-chip-two"><b>3</b><span>priorities ready</span></div>
          </motion.div>
        </div>
        <div className="buddy-app-benefits">
          <article><span>01</span><h3>Start in one clear place</h3><p>See your priorities, focus time, and upcoming moments before the day takes over.</p></article>
          <article><span>02</span><h3>Keep every detail connected</h3><p>Move naturally from a conversation to its notes, tasks, space, and goal.</p></article>
          <article><span>03</span><h3>Return whenever you need clarity</h3><p>Your day stays available as a quiet, useful reference in your pocket.</p></article>
        </div>
      </section>

      <section className="buddy-control">
        <div className="buddy-control-copy"><p>BUILT AROUND YOUR CONTEXT</p><h2>You decide what becomes part of the picture.</h2><p>Buddy is most useful when it respects the boundaries of your work and life. Create separate spaces, choose when listening begins, and share only the notes or tasks that belong in a handoff.</p><a href="#share" className="buddy-text-link">See how sharing works <span>↗</span></a></div>
        <div className="buddy-control-cards"><div><span>01</span><b>Separate spaces</b><p>Keep projects, people, and personal planning distinct.</p></div><div><span>02</span><b>Intentional capture</b><p>Start listening only when a conversation needs to be remembered.</p></div><div><span>03</span><b>Focused sharing</b><p>Select the exact notes and tasks you want someone else to see.</p></div></div>
      </section>

      <section className="buddy-questions" aria-labelledby="questions-title"><div><p>GOOD TO KNOW</p><h2 id="questions-title">Questions, already considered.</h2></div><div className="buddy-question-list"><details open><summary>What is a Buddy space?<span>+</span></summary><p>A space is a focused home for one project, relationship, meeting series, or part of your life—where its notes, tasks, goals, and conversations can stay connected.</p></details><details><summary>What can I share with someone else?<span>+</span></summary><p>Buddy’s sharing flow lets you select the relevant tasks and notes from a space, so a handoff can be focused instead of overwhelming.</p></details><details><summary>How does the daily briefing help?<span>+</span></summary><p>It gives you one starting view of planned meetings, available focus time, and the priorities waiting for your attention.</p></details></div></section>

      <section className="buddy-closing" id="cta">
        <p>YOUR NEXT DAY STARTS HERE</p>
        <h2>Clear head.<br /><em>Full context.</em></h2>
        <a className="buddy-button buddy-button-light" href="mailto:hello@buddy.ai?subject=Get%20Buddy">Get Buddy <span>↗</span></a>
      </section>
    </main>
  );
}
