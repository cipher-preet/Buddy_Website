"use client";
import { useState } from "react";
import { HiSparkles, HiArrowUpRight } from "react-icons/hi2";
const examples = [
  {
    q: "What did we decide?",
    a: "Keep the next release focused on the onboarding experience. Review the prototype together before the next planning session.",
  },
  {
    q: "What’s my next step?",
    a: "Review the onboarding prototype, then write the next release brief. Both next steps belong to your Product planning example.",
  },
];
export function AssistantDemo() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="assistant-demo">
      <div className="assistant-demo-header">
        <HiSparkles aria-hidden="true" />
        <strong>Ask from your context</strong>
        <span>Illustrative demo</span>
      </div>
      <div
        className="assistant-prompts"
        role="group"
        aria-label="Try an example question"
      >
        {examples.map((example, i) => (
          <button
            type="button"
            aria-pressed={selected === i}
            key={example.q}
            onClick={() => setSelected(i)}
          >
            {example.q}
            <HiArrowUpRight aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="assistant-answer" key={selected} aria-live="polite">
        <p>{examples[selected].a}</p>
        <span>
          <span className="status-dot" /> Example source · Product planning
        </span>
      </div>
      <p className="assistant-demo-note">
        Sample context. This demo is not connected to your account.
      </p>
    </div>
  );
}
