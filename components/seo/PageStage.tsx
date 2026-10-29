"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLiteMode } from "@/components/home/useLiteMode";

type StageCopy = {
  label: string;
  lines: { tag: string; text: string }[];
  summary: string;
  chips: string[];
};

const stages: Record<string, StageCopy> = {
  "ai-meeting-recorder": {
    label: "Meeting",
    lines: [
      { tag: "English", text: "No bot joins this call." },
      { tag: "Hinglish", text: "Notes yahin se nikalenge." },
      { tag: "हिंदी", text: "मीटिंग के बाद टास्क तैयार।" },
    ],
    summary: "Decisions and owners, without a guest in the room.",
    chips: ["Task", "Reminder", "Calendar"],
  },
  "ai-note-taker": {
    label: "Notes",
    lines: [
      { tag: "Talk", text: "Start Listening is on." },
      { tag: "Note", text: "The useful lines are kept." },
      { tag: "Task", text: "The next step is written down." },
    ],
    summary: "Talk becomes notes you can act on.",
    chips: ["Summary", "Task", "Space"],
  },
  "hindi-speech-to-text": {
    label: "Languages",
    lines: [
      { tag: "English", text: "Ship the summary this week." },
      { tag: "हिंदी", text: "कल नोट्स भेज दूंगा।" },
      { tag: "Hinglish", text: "Pricing page kal bhej dena." },
    ],
    summary: "One recording can mix Hindi and English.",
    chips: ["Hindi", "English", "Hinglish"],
  },
  "ai-lecture-notes": {
    label: "Lecture",
    lines: [
      { tag: "Class", text: "The lecture is recorded on your phone." },
      { tag: "Idea", text: "Key concepts are pulled out." },
      { tag: "Study", text: "A revision task is filed in the Space." },
    ],
    summary: "Leave class with notes, not a blank page.",
    chips: ["Summary", "Concepts", "Study task"],
  },
  "ai-personal-assistant": {
    label: "Briefing",
    lines: [
      { tag: "Morning", text: "Priorities from your Spaces." },
      { tag: "Calendar", text: "Follow-up at 10:00." },
      { tag: "Focus", text: "Time you can actually use." },
    ],
    summary: "The day starts from what you already said.",
    chips: ["Priorities", "Calendar", "Focus"],
  },
  android: {
    label: "Android",
    lines: [
      { tag: "Phone", text: "Tap Start Listening." },
      { tag: "Room", text: "The meeting stays in the room." },
      { tag: "After", text: "Notes sync to your account." },
    ],
    summary: "In-person talks. Not phone or dialer calls.",
    chips: ["Opt-in", "Hindi", "Free plan"],
  },
  windows: {
    label: "Windows",
    lines: [
      { tag: "Desktop", text: "Record from the Windows app." },
      { tag: "Call", text: "No bot joins the meeting." },
      { tag: "Sync", text: "Notes land in the same Spaces." },
    ],
    summary: "Desktop recording, same account as your phone.",
    chips: ["Microsoft Store", "No bot", "Sync"],
  },
  "chrome-extension": {
    label: "Chrome",
    lines: [
      { tag: "Tab", text: "The recorder sits in Chrome." },
      { tag: "Meet", text: "Zoom, Meet, or Teams stays bot-free." },
      { tag: "Notes", text: "The transcript is written after." },
    ],
    summary: "Browser recording. Nobody extra joins.",
    chips: ["Chrome", "No bot", "Tasks"],
  },
  platform: {
    label: "Web",
    lines: [
      { tag: "Spaces", text: "Open a project in the browser." },
      { tag: "Notes", text: "Review what was captured." },
      { tag: "Ask", text: "Questions stay inside your notes." },
    ],
    summary: "The workspace, synced with every device.",
    chips: ["Spaces", "Tasks", "Ask"],
  },
  about: {
    label: "KukuNotes",
    lines: [
      { tag: "Product", text: "A private meeting recorder." },
      { tag: "Not", text: "Not Kuku FM or Kuku TV." },
      { tag: "Model", text: "Opt-in. No bot in the call." },
    ],
    summary: "Notes, tasks, and Spaces from real conversations.",
    chips: ["Android", "Windows", "Web"],
  },
  download: {
    label: "Get it",
    lines: [
      { tag: "Android", text: "Google Play." },
      { tag: "Windows", text: "Microsoft Store." },
      { tag: "Chrome", text: "Browser recorder." },
    ],
    summary: "One account across phone, desktop, and web.",
    chips: ["Free plan", "No bot", "Sync"],
  },
  pricing: {
    label: "Plans",
    lines: [
      { tag: "Free", text: "2 hours of notes. 10 hours of meetings." },
      { tag: "Pro", text: "₹499 a month when you need more." },
      { tag: "Business", text: "₹999 a month for unlimited hours." },
    ],
    summary: "The same languages on every plan.",
    chips: ["Hindi", "English", "Hinglish"],
  },
  usecases: {
    label: "Use cases",
    lines: [
      { tag: "Class", text: "Lectures become study notes." },
      { tag: "Team", text: "Meetings become owners and tasks." },
      { tag: "Client", text: "Calls become the next follow-up." },
    ],
    summary: "One recorder. A different Space for each kind of talk.",
    chips: ["Students", "Teams", "Sales"],
  },
  contact: {
    label: "Contact",
    lines: [
      { tag: "Support", text: "Product questions and account help." },
      { tag: "Privacy", text: "Requests about your data." },
      { tag: "Partners", text: "A note for the team." },
    ],
    summary: "One inbox. We route it to the right person.",
    chips: ["Email", "Privacy", "Product"],
  },
};

export function PageStage({ variant }: { variant: string }) {
  const copy = stages[variant] ?? stages["ai-note-taker"];
  const reduce = useReducedMotion();
  const lite = useLiteMode();
  const calm = Boolean(reduce || lite);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (calm) return;
    const id = window.setInterval(() => setStep((n) => (n + 1) % 5), 2000);
    return () => window.clearInterval(id);
  }, [calm]);

  const shown = calm ? 4 : step;

  return (
    <figure className="page-stage">
      <div className="page-stage-card" aria-hidden="true">
        <div className="page-stage-top">
          <span className="page-stage-live"><i /> {copy.label}</span>
          <span>Sample</span>
        </div>
        <ul>
          {copy.lines.map((line, index) => (
            <motion.li
              key={line.tag}
              initial={false}
              animate={{ opacity: shown >= index ? 1 : 0, y: shown >= index ? 0 : 8 }}
              transition={{ duration: calm ? 0 : 0.3 }}
            >
              <small>{line.tag}</small>
              {line.text}
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="page-stage-summary"
          initial={false}
          animate={{ opacity: shown >= 3 ? 1 : 0, y: shown >= 3 ? 0 : 8 }}
          transition={{ duration: calm ? 0 : 0.3 }}
        >
          {copy.summary}
        </motion.div>
        <motion.div
          className="page-stage-chips"
          initial={false}
          animate={{ opacity: shown >= 4 ? 1 : 0 }}
          transition={{ duration: calm ? 0 : 0.3 }}
        >
          {copy.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </motion.div>
      </div>
      <figcaption>Illustrated sample of how this part of KukuNotes works. Not a customer recording.</figcaption>
    </figure>
  );
}
