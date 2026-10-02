"use client";

import { siteConfig } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const views = [
  {
    id: "spaces",
    label: "Spaces & Tasks",
    path: "home",
    kicker: "Workspace",
    title: "Every project in its own space, with tasks front and center.",
    copy: "Pick a space and its tasks and notes open side by side. Overdue items, priorities, and due dates surface on their own, so nothing slips.",
    points: ["Spaces sidebar", "Overdue & priority flags", "Tasks and notes per space"],
    image: "/screenshots/desktop/spaces-tasks.png",
    alt: "KukuNotes web app home with spaces list and overdue tasks",
  },
  {
    id: "chat",
    label: "AI Chat",
    path: "chat",
    kicker: "Ask KukuNotes",
    title: "Chat with everything you have already captured.",
    copy: "Tag one or more spaces as context and ask in plain language. Answers come back structured, with overviews and the notes they came from.",
    points: ["@space context", "Structured answers", "Grounded in your notes"],
    image: "/screenshots/desktop/ai-chat.png",
    alt: "KukuNotes AI chat answering a question about a space",
  },
  {
    id: "meetings",
    label: "Meetings",
    path: "meetings",
    kicker: "Recordings",
    title: "Every meeting in one library, recorded without a bot.",
    copy: "Google Meet and Zoom sessions land with date, time, and duration. Filter by space to find the conversation you need.",
    points: ["Google Meet & Zoom", "Filter by space", "Grid or list view"],
    image: "/screenshots/desktop/meetings.png",
    alt: "KukuNotes meetings library with recorded Google Meet and Zoom sessions",
  },
  {
    id: "summary",
    label: "Meeting Summary",
    path: "meetings/summary",
    kicker: "After the call",
    title: "Replay it, read the summary, ask a follow-up.",
    copy: "Each recording comes with video, summary, key takeaways, transcript, tasks, and notes, plus a chat that answers questions about that exact meeting.",
    points: ["Video playback", "Summary & transcript", "Per-meeting AI chat"],
    image: "/screenshots/desktop/meeting-detail.png",
    alt: "KukuNotes meeting detail with video, summary, and meeting chat",
  },
  {
    id: "calendar",
    label: "Calendar",
    path: "calendar",
    kicker: "Month view",
    title: "See what you captured, day by day.",
    copy: "The month view shows meetings, notes, tasks, and recordings on every date, each linked back to the space it belongs to.",
    points: ["Activity on every day", "Linked spaces", "Add events"],
    image: "/screenshots/desktop/calendar.png",
    alt: "KukuNotes calendar month view with meetings, notes, and tasks per day",
  },
];

const platforms = ["Web", "Mac", "Windows"];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductTheater() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const view = views[active];
  const platformHost = siteConfig.platformUrl.replace(/^https?:\/\//, "");

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
      <div className="studio-desk-head">
        <div className="studio-theater-head">
          <p className="studio-kicker">Desktop & web app</p>
          <h2 id="theater-title">Your whole workspace, on the big screen.</h2>
          <p className="studio-theater-lead">
            Spaces, AI chat, meetings, and calendar in one window. Open it in the browser or
            install it on your desktop.
          </p>
        </div>
        <div className="studio-desk-platforms">
          <ul aria-label="Available platforms">
            {platforms.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
          <a className="studio-text-link" href={siteConfig.platformUrl}>
            Open the web app <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="studio-theater-tabs" role="tablist" aria-label="KukuNotes desktop views">
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
        className="studio-desk-panel"
        id="theater-panel"
        role="tabpanel"
        aria-labelledby={`theater-tab-${view.id}`}
      >
        <div className="studio-desk-stage">
          <div className="studio-desk-window">
            <div className="studio-desk-bar" aria-hidden="true">
              <span className="studio-desk-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="studio-desk-url">
                <b>{platformHost}</b>/{view.path}
              </span>
              <span className="studio-desk-bar-end" />
            </div>
            <div className="studio-desk-screen">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={view.image}
                  className="studio-desk-shot"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <Image
                    src={view.image}
                    alt={view.alt}
                    fill
                    sizes="(max-width: 980px) 100vw, 1040px"
                    priority={active === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={view.id}
            className="studio-desk-caption"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease }}
          >
            <div>
              <p className="studio-kicker">{view.kicker}</p>
              <h3>{view.title}</h3>
            </div>
            <div>
              <p>{view.copy}</p>
              <ul>
                {view.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
