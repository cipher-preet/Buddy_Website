"use client";

import { useId, useState, type ReactNode } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

type FocusOption = { id: string; label: string };

/** Focus controls move the genuine screenshot; they do not simulate app actions. */
export function ScreenshotSpotlight({
  children,
  options,
  initialFocus = "overview",
  src,
  label,
}: {
  children: ReactNode;
  options: FocusOption[];
  initialFocus?: string;
  src: string;
  label: string;
}) {
  const [focus, setFocus] = useState(initialFocus);
  const viewportId = useId();
  return (
    <div className="screenshot-spotlight" data-focus={focus}>
      <div className="screenshot-focus-controls" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={focus === option.id}
            aria-controls={viewportId}
            onClick={() => setFocus(option.id)}
          >{option.label}</button>
        ))}
        <a href={src} target="_blank" rel="noopener noreferrer" aria-label="View the full product screenshot in a new tab">
          View full screen <HiArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div id={viewportId} className="screenshot-focus-viewport">{children}</div>
      <p className="screenshot-focus-note">Actual KukuNotes screen · Identifying details hidden</p>
    </div>
  );
}
