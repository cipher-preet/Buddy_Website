"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLiteMode } from "./useLiteMode";

const lines = [
  { who: "A", lang: "Speaker", text: "Ship the summary this week." },
  { who: "M", lang: "Speaker", text: "I’ll send the notes tomorrow." },
  { who: "R", lang: "Speaker", text: "Put the follow-up on Thursday." },
];

export function HeroStory() {
  const reduce = useReducedMotion();
  const lite = useLiteMode();
  const calm = Boolean(reduce || lite);
  const [step, setStep] = useState(calm ? 4 : 0);

  useEffect(() => {
    if (calm) return;
    const id = window.setInterval(() => setStep((n) => (n + 1) % 5), 2200);
    return () => window.clearInterval(id);
  }, [calm]);

  const shown = calm ? 4 : step;

  return (
    <figure className="theater">
      <div className="theater-stage" aria-hidden="true">
        <div className="theater-top">
          <span className="theater-live"><i /> Listening</span>
          <span>Sample meeting</span>
        </div>
        <div className="theater-avatars">
          <span>A</span>
          <span>M</span>
          <span>R</span>
        </div>
        <ul className="theater-lines">
          {lines.map((line, index) => (
            <motion.li
              key={line.lang}
              initial={false}
              animate={{ opacity: shown >= index ? 1 : 0, y: shown >= index ? 0 : 8 }}
              transition={{ duration: calm ? 0 : 0.35 }}
            >
              <b>{line.who}</b>
              <span>
                <small>{line.lang}</small>
                {line.text}
              </span>
            </motion.li>
          ))}
        </ul>
        <motion.div
          className="theater-summary"
          initial={false}
          animate={{ opacity: shown >= 3 ? 1 : 0, y: shown >= 3 ? 0 : 10 }}
          transition={{ duration: calm ? 0 : 0.35 }}
        >
          <small>Summary</small>
          <strong>Ship the summary. Send the pricing page tomorrow.</strong>
        </motion.div>
        <motion.ul
          className="theater-chips"
          initial={false}
          animate={{ opacity: shown >= 4 ? 1 : 0, y: shown >= 4 ? 0 : 10 }}
          transition={{ duration: calm ? 0 : 0.35 }}
        >
          <li>Task · Send pricing page</li>
          <li>Reminder · 9:00</li>
          <li>Thu · 10:00</li>
        </motion.ul>
      </div>
      <figcaption>Illustrated sample of a meeting becoming a transcript, a summary, and follow-ups. Not a customer recording.</figcaption>
    </figure>
  );
}
