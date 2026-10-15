"use client";

import { useRef, useState } from "react";
import { ProductScreen } from "./ProductScreen";

const screens = [
  {
    name: "Daily Briefing",
    src: "/screenshots/daily-briefing.jpeg",
    copy: "The day at a glance: calendar, priorities, and time to focus.",
    alt: "KukuNotes daily briefing with calendar, priorities, and focus time",
  },
  {
    name: "Notes",
    src: "/screenshots/android/notes.webp",
    copy: "Notes grouped by Space, with the latest ones ready to open.",
    alt: "KukuNotes notes grouped by Space",
  },
  {
    name: "Tasks",
    src: "/screenshots/android/tasks.webp",
    copy: "Tasks on the phone, with the status of what comes next.",
    alt: "KukuNotes tasks on Android",
  },
  {
    name: "Goal Monitor",
    src: "/screenshots/goal-monitor.jpeg",
    copy: "A goal for each Space, and a place to follow it.",
    alt: "KukuNotes goal monitor for Spaces",
  },
];

export function MobileProductGallery() {
  const [selected, setSelected] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = screens[selected];
  const behind = screens[(selected + 1) % screens.length];

  const choose = (index: number) => {
    setSelected(index);
    refs.current[index]?.focus();
  };

  return (
    <div className="v3-gallery-tool">
      <div className="gallery-tabs" role="tablist" aria-label="Mobile screens">
        {screens.map((screen, index) => (
          <button
            key={screen.name}
            type="button"
            role="tab"
            ref={(el) => {
              refs.current[index] = el;
            }}
            aria-selected={index === selected}
            tabIndex={index === selected ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => {
              let next = index;
              if (event.key === "ArrowRight") next = (index + 1) % screens.length;
              else if (event.key === "ArrowLeft")
                next = (index + screens.length - 1) % screens.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = screens.length - 1;
              else return;
              event.preventDefault();
              choose(next);
            }}
          >
            {screen.name}
          </button>
        ))}
      </div>
      <div className="gallery-stage">
        <div className="gallery-back" aria-hidden="true">
          <ProductScreen
            src={behind.src}
            alt=""
            kind="phone"
            sizes="240px"
          />
        </div>
        <div className="gallery-front" key={active.src}>
          <ProductScreen
            src={active.src}
            alt={active.alt}
            kind="phone"
            sizes="(max-width: 700px) 270px, 300px"
          />
        </div>
      </div>
      <p className="gallery-copy">{active.copy}</p>
    </div>
  );
}
