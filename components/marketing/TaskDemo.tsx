"use client";
import { useId, useState } from "react";
import { HiCheck, HiFlag } from "react-icons/hi2";

export function TaskDemo({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState([false, false]);
  const count = done.filter(Boolean).length;
  const id = useId();
  return (
    <div className={`task-demo ${compact ? "task-demo-compact" : ""}`}>
      <div className="task-demo-heading">
        <span className="eyebrow">
          {compact ? "Try a little progress" : "From a promise to progress"}
        </span>
        <span>Illustrative demo</span>
      </div>
      <div className="task-demo-items">
        {[
          "Review the onboarding prototype",
          "Write the next release brief",
        ].map((task, i) => (
          <label className={done[i] ? "is-complete" : ""} key={task}>
            <input
              type="checkbox"
              checked={done[i]}
              onChange={() =>
                setDone((values) =>
                  values.map((value, index) => (index === i ? !value : value)),
                )
              }
            />
            <span className="task-demo-check" aria-hidden="true">
              <HiCheck />
            </span>
            <span>{task}</span>
          </label>
        ))}
      </div>
      <div className="task-demo-progress">
        <span id={id}>
          <HiFlag aria-hidden="true" /> A clearer first experience
        </span>
        <span aria-live="polite">{count} of 2 steps</span>
        <div
          className="task-demo-track"
          role="progressbar"
          aria-labelledby={id}
          aria-valuemin={0}
          aria-valuemax={2}
          aria-valuenow={count}
          aria-valuetext={`${count} of 2 example tasks complete`}
        >
          <span style={{ transform: `scaleX(${count / 2})` }} />
        </div>
      </div>
    </div>
  );
}
