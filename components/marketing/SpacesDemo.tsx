"use client";
import { useRef, useState } from "react";
import {
  HiFolder,
  HiDocumentText,
  HiCheck,
  HiArrowRight,
} from "react-icons/hi2";
const spaces = [
  {
    name: "Product",
    summary: "From the weekly sync to the next release.",
    note: "Product planning · Key decisions",
    body: "Keep the next release focused on the onboarding experience. Review the prototype together before the next planning session.",
    tasks: ["Review the onboarding prototype", "Write the next release brief"],
    goal: "A clearer first experience",
  },
  {
    name: "Client work",
    summary: "Every client conversation, in its own context.",
    note: "Project check-in · Follow-up",
    body: "Align on the scope before moving into the next phase. Share the revised proposal and collect feedback on the initial direction.",
    tasks: ["Share the revised proposal", "Prepare the next client check-in"],
    goal: "Move the project forward",
  },
  {
    name: "Personal planning",
    summary: "Give your own plans room to grow.",
    note: "Weekly reflection · What matters",
    body: "Make room for a learning project this week. Keep the first step small and choose a time to come back to it.",
    tasks: ["Choose the first lesson", "Set aside time to practise"],
    goal: "Build a learning habit",
  },
];
export function SpacesDemo() {
  const [selected, setSelected] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const space = spaces[selected];
  return (
    <div className="spaces-demo">
      <div className="demo-topline">
        <span>
          <span className="status-dot" /> A space for every part of your day
        </span>
        <span>Illustrative demo</span>
      </div>
      <div className="demo-layout">
        <div
          className="space-tabs"
          role="tablist"
          aria-label="Explore example Spaces"
          aria-orientation="vertical"
        >
          {spaces.map((item, i) => (
            <button
              type="button"
              role="tab"
              id={`space-tab-${i}`}
              aria-controls="space-panel"
              aria-selected={selected === i}
              tabIndex={selected === i ? 0 : -1}
              key={item.name}
              ref={(el) => {
                refs.current[i] = el;
              }}
              onClick={() => setSelected(i)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowDown" || event.key === "ArrowRight")
                  next = (i + 1) % spaces.length;
                else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
                  next = (i + spaces.length - 1) % spaces.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = spaces.length - 1;
                else return;
                event.preventDefault();
                setSelected(next);
                refs.current[next]?.focus();
              }}
            >
              <HiFolder aria-hidden="true" />
              {item.name}
              <HiArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>
        <div
          className="space-panel"
          role="tabpanel"
          id="space-panel"
          aria-labelledby={`space-tab-${selected}`}
          tabIndex={0}
          key={selected}
        >
          <p className="eyebrow">Your {space.name.toLowerCase()} space</p>
          <h3>{space.summary}</h3>
          <div className="demo-note">
            <span>
              <HiDocumentText aria-hidden="true" />
              {space.note}
            </span>
            <p>{space.body}</p>
          </div>
          <div className="demo-tasks">
            <p className="eyebrow">Next steps</p>
            {space.tasks.map((task) => (
              <p key={task}>
                <span className="task-circle" />
                {task}
              </p>
            ))}
          </div>
          <div className="demo-goal">
            <HiCheck aria-hidden="true" />
            <span>Working toward</span>
            <strong>{space.goal}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
