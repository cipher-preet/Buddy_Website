"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { RoomScene } from "./scenes";
import { useLiteMode } from "./useLiteMode";

const phases = ["Listening", "Transcript", "Summary", "Tasks"] as const;

export function HeroStory() {
  const reduce = useReducedMotion();
  const lite = useLiteMode();
  const calm = Boolean(reduce || lite);
  const [phase, setPhase] = useState(0);
  const shown = calm ? 3 : phase;

  useEffect(() => {
    if (calm) return;
    const id = window.setInterval(() => {
      setPhase((current) => (current + 1) % 4);
    }, 2800);
    return () => window.clearInterval(id);
  }, [calm]);

  const visible = (step: number) => shown >= step;

  return (
    <figure className="story">
      <div className="story-stage">
        <RoomScene idPrefix="hero" />
        <div className={`story-stack ${visible(1) ? "is-on" : ""}`}>
          <p className="bubble bubble-en"><span>English</span>Ship the Hindi summary this week.</p>
          <p className="bubble bubble-hi"><span>हिंदी</span>कल नोट्स भेज दूंगा।</p>
          <p className="bubble bubble-mix"><span>Hinglish</span>Pricing page kal bhej dena.</p>
        </div>
        <div className={`story-summary ${visible(2) ? "is-on" : ""}`}>
          <p>Summary</p>
          <strong>Ship the summary. Send the pricing page tomorrow.</strong>
        </div>
        <ul className={`story-chips ${visible(3) ? "is-on" : ""}`}>
          <li><span>Task</span>Send pricing page<em>Tomorrow</em></li>
          <li><span>Reminder</span>Morning follow-up<em>9:00</em></li>
          <li><span>Calendar</span>Review notes<em>Thu 10:00</em></li>
        </ul>
      </div>
      <div className="story-controls" role="group" aria-label="Meeting story">
        {phases.map((label, index) => (
          <button
            key={label}
            type="button"
            className={shown === index ? "is-on" : ""}
            aria-pressed={shown === index}
            onClick={() => setPhase(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <figcaption>
        Illustrated sample. A meeting on the table becomes a transcript, a summary, tasks, a reminder, and a calendar item. Not a customer recording.
      </figcaption>
    </figure>
  );
}
