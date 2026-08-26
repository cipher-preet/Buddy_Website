"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { AppFrame } from "./AppFrame";

const views = [
  {
    id: "briefing",
    label: "Briefing",
    kicker: "Start of day",
    title: "Know what deserves you before the day gets loud.",
    copy: "Focus time, priorities, and the next meetings sit in one opening view—so you begin oriented, not reconstructing.",
    points: ["Today’s priorities", "Available focus time", "Upcoming meetings"],
    image: "/screenshots/daily-briefing.jpeg",
    alt: "Buddy daily briefing with priorities and upcoming meetings",
  },
  {
    id: "calendar",
    label: "Calendar",
    kicker: "The working day",
    title: "See commitments as a plan, not a pile of events.",
    copy: "A simple time-blocked day keeps meetings, deep work, and follow-ups in one timeline you can actually read.",
    points: ["Time-blocked agenda", "Today at a glance", "Meeting context"],
    image: "/screenshots/calendar.jpeg",
    alt: "Buddy calendar showing a time-blocked day",
  },
  {
    id: "goals",
    label: "Goals",
    kicker: "Direction",
    title: "Give every space an outcome, then keep it in view.",
    copy: "Projects stop being folders. Each space can hold a meaningful result, a date, and a sense of whether you are still moving.",
    points: ["Space outcomes", "Momentum", "Goal dates"],
    image: "/screenshots/goal-monitor.jpeg",
    alt: "Buddy goal monitor for tracking space outcomes",
  },
  {
    id: "notes",
    label: "Notes",
    kicker: "Memory",
    title: "Keep the context, not a transcript you will never reread.",
    copy: "Conversations become searchable knowledge with confidence, dates, and the space they belong to.",
    points: ["Conversation notes", "Confidence at a glance", "Linked spaces"],
    image: "/screenshots/notes-board.jpeg",
    alt: "Buddy notes list with confidence and space filters",
  },
  {
    id: "tasks",
    label: "Tasks",
    kicker: "Next moves",
    title: "Turn what was promised into what happens next.",
    copy: "Action items arrive with priority, status, and the original context—so follow-through does not depend on memory.",
    points: ["Prioritized work", "Due dates", "Space context"],
    image: "/screenshots/tasks-board.jpeg",
    alt: "Buddy task list with spaces and priority cards",
  },
  {
    id: "share",
    label: "Share",
    kicker: "Handoff",
    title: "Share the useful parts, not the whole mess.",
    copy: "Choose the notes and tasks that belong in a handoff. A teammate or client gets a focused picture, not an inbox dump.",
    points: ["Select content", "Focused packages", "Clear shared context"],
    image: "/screenshots/share-space.jpeg",
    alt: "Buddy share space flow for selecting tasks and notes",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductTheater() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const view = views[active];

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % views.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, active]);

  return (
    <section
      className={`studio-theater${paused ? " is-paused" : ""}`}
      id="product"
      aria-labelledby="theater-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="studio-theater-head">
        <p>INSIDE THE APP</p>
        <h2 id="theater-title">One product. A full working day.</h2>
        <p className="studio-theater-lead">
          Briefing, calendar, goals, notes, tasks, and sharing—each view has its own job in the day.
        </p>
      </div>

      <div className="studio-theater-tabs" role="tablist" aria-label="Buddy product views">
        {views.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`theater-tab-${item.id}`}
            aria-selected={index === active}
            aria-controls="theater-panel"
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
            {index === active && !reduceMotion ? (
              <i className="studio-theater-progress" aria-hidden="true" />
            ) : null}
          </button>
        ))}
      </div>

      <div
        className="studio-theater-panel"
        id="theater-panel"
        role="tabpanel"
        aria-labelledby={`theater-tab-${view.id}`}
      >
        <div className="studio-theater-copy">
          <AnimatePresence mode="wait">
            <motion.div
              key={view.id}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease }}
            >
              <p className="studio-kicker">{view.kicker}</p>
              <h3>{view.title}</h3>
              <p>{view.copy}</p>
              <ul>
                {view.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="studio-theater-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={view.image}
              className="studio-theater-phone"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease }}
            >
              <AppFrame src={view.image} alt={view.alt} size="hero" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
