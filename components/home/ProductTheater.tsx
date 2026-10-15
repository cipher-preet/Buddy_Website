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
    copy: "Pick a space and its tasks and notes open side by side. Due dates and priorities stay on the item, so the next step is obvious.",
    points: ["Spaces sidebar", "Due dates and priority", "Tasks and notes per space"],
    image: "/screenshots/desktop/spaces-workspace.png",
    alt: "KukuNotes workspace with a spaces sidebar and the tasks inside one space",
  },
  {
    id: "chat",
    label: "AI Chat",
    path: "chat",
    kicker: "Ask KukuNotes",
    title: "Ask with a space attached, and get a structured answer.",
    copy: "Tag the space that holds the conversation. The reply comes back organized, from the notes already in that space.",
    points: ["@space context", "Structured answers", "Grounded in your notes"],
    image: "/screenshots/desktop/ask-chat.png",
    alt: "KukuNotes chat answering a question with a space attached as context",
  },
  {
    id: "meetings",
    label: "Meetings",
    path: "meetings",
    kicker: "Recordings",
    title: "Every meeting in one library, recorded without a bot.",
    copy: "Google Meet and Zoom sessions land with date, time, and duration. Filter by space to find the conversation you need.",
    points: ["Google Meet and Zoom", "Filter by space", "Grid or list view"],
    image: "/screenshots/desktop/meetings-library.png",
    alt: "KukuNotes meetings library with recorded Google Meet and Zoom sessions",
  },
  {
    id: "documents",
    label: "Documents",
    path: "documents",
    kicker: "Templates",
    title: "Start from a template instead of a blank page.",
    copy: "Meeting recaps, weekly plans, status reports, and decision logs are ready to fill. The structure is already there.",
    points: ["Meeting recaps", "Weekly planners", "Status reports"],
    image: "/screenshots/desktop/documents.png",
    alt: "KukuNotes document templates for meeting recaps, planners, and status reports",
  },
  {
    id: "goals",
    label: "Goals",
    path: "goals",
    kicker: "Achieve a goal",
    title: "A goal with steps, strategy, and progress in one view.",
    copy: "Set the outcome, then work the recommended steps. Progress and the tasks already done stay visible for the whole space.",
    points: ["Recommended steps", "Strategies", "Progress you can see"],
    image: "/screenshots/desktop/goals.png",
    alt: "KukuNotes goal view with recommended steps, strategies, and progress",
  },
  {
    id: "mindmap",
    label: "Mindmap",
    path: "mindmap",
    kicker: "Connected work",
    title: "See how tasks, notes, and meetings connect.",
    copy: "The mindmap lays a space out as a map. Each task and note stays linked, so the shape of the work is visible at a glance.",
    points: ["Tasks and notes linked", "Meetings on the map", "One view of the space"],
    image: "/screenshots/desktop/mindmap.png",
    alt: "KukuNotes mindmap connecting tasks, notes, and meetings in a space",
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
            Spaces, chat, meetings, documents, goals, and mindmaps in one window. Open it
            in the browser or install it on your desktop.
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
