"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState, type KeyboardEvent } from "react";
import { ActionsScene, BriefingScene, RoomScene, SpacesScene, TranscriptScene } from "./scenes";
import { useLiteMode } from "./useLiteMode";

const tabs = [
  {
    id: "record",
    label: "Record",
    title: "The meeting stays in the room.",
    body: "Set your phone or laptop on the table and tap Start Listening. KukuNotes records through that device. It never joins Zoom, Google Meet, or Teams, and the Android app does not record phone or dialer calls.",
    Scene: RoomScene,
  },
  {
    id: "transcript",
    label: "Transcript",
    title: "Hindi, English, and Hinglish, as people talk.",
    body: "You stay in the conversation. The words land in the language they were spoken, including Hindi and English mixed in the same meeting.",
    Scene: TranscriptScene,
  },
  {
    id: "actions",
    label: "Tasks",
    title: "The meeting leaves you work, not a recording.",
    body: "A summary, tasks, reminders, and calendar items come out of what was said. Each one can be checked against the conversation.",
    Scene: ActionsScene,
  },
  {
    id: "spaces",
    label: "Spaces",
    title: "One Space for each client, class, or project.",
    body: "Notes and tasks stay with the work they belong to. You choose what to share. The rest stays private.",
    Scene: SpacesScene,
  },
  {
    id: "briefing",
    label: "Briefing",
    title: "Start the day knowing what matters.",
    body: "The daily briefing lines up priorities, your calendar, and time you can focus. Ask KukuNotes about a meeting and the answer comes from your own notes.",
    Scene: BriefingScene,
  },
] as const;

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const lite = useLiteMode();
  const calm = Boolean(reduce || lite);
  const current = tabs[active];
  const Scene = current.Scene;

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = (active + direction + tabs.length) % tabs.length;
    setActive(next);
    const button = event.currentTarget.querySelectorAll<HTMLButtonElement>("[role='tab']")[next];
    button?.focus();
  }

  return (
    <div className="feature-tabs">
      <div className="feature-tablist" role="tablist" aria-label="Product features" onKeyDown={onKeyDown}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`feature-tab-${tab.id}`}
            aria-selected={index === active}
            aria-controls={`feature-panel-${tab.id}`}
            tabIndex={index === active ? 0 : -1}
            className={index === active ? "is-on" : ""}
            onClick={() => setActive(index)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      <div
        className="feature-panel"
        role="tabpanel"
        id={`feature-panel-${current.id}`}
        aria-labelledby={`feature-tab-${current.id}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="feature-panel-inner"
            initial={calm ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={calm ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={calm ? { duration: 0 } : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Scene idPrefix={`tab-${current.id}`} />
            <div className="feature-copy">
              <h3>{current.title}</h3>
              <p>{current.body}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
