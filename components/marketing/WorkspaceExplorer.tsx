"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import { ProductScreen } from "./ProductScreen";

const views = [
  {
    id: "spaces",
    name: "Spaces",
    icon: HiOutlineSquares2X2,
    src: "/screenshots/desktop/workspace.webp",
    copy: "Each project has a Space. Notes and tasks stay with the work they belong to.",
    alt: "KukuNotes workspace showing Spaces and their tasks",
    focus: "The Space list",
  },
  {
    id: "notes",
    name: "Notes",
    icon: HiOutlineDocumentText,
    src: "/screenshots/android/notes.webp",
    copy: "Notes grouped by Space, ready to open again.",
    alt: "KukuNotes notes grouped by Space",
    focus: "Notes",
    phone: true,
  },
  {
    id: "tasks",
    name: "Tasks",
    icon: HiOutlineCheckCircle,
    src: "/screenshots/details/workspace-tasks.webp",
    copy: "Priorities, dates, and status sit with the work from that Space.",
    alt: "KukuNotes tasks with priorities, dates, and completion status",
    focus: "Task list",
  },
  {
    id: "ask",
    name: "Ask KukuNotes",
    icon: HiOutlineChatBubbleLeftRight,
    src: "/screenshots/desktop/context-chat.webp",
    copy: "Ask with a Space as context, then review the answer against what you captured.",
    alt: "Ask KukuNotes answering a question with a Space attached as context",
    focus: "Answer with context",
  },
] as const;

export function WorkspaceExplorer() {
  const [selected, setSelected] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = views[selected];

  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#ask") setSelected(3);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <div className="v3-explorer-tool">
      <div
        className="explorer-tabs"
        role="tablist"
        aria-label="Explore the workspace"
      >
        {views.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              type="button"
              key={item.id}
              id={item.id === "ask" ? "ask" : undefined}
              ref={(el) => {
                refs.current[index] = el;
              }}
              role="tab"
              aria-selected={index === selected}
              aria-controls="workspace-preview"
              tabIndex={index === selected ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % views.length;
                else if (event.key === "ArrowLeft")
                  next = (index + views.length - 1) % views.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = views.length - 1;
                else return;
                event.preventDefault();
                setSelected(next);
                refs.current[next]?.focus();
              }}
            >
              <Icon aria-hidden="true" />
              {item.name}
            </button>
          );
        })}
      </div>
      <div
        id="workspace-preview"
        role="tabpanel"
        aria-labelledby={view.id === "ask" ? "ask" : undefined}
        className="explorer-stage"
      >
        <div className="explorer-swap" key={view.id}>
          {"phone" in view && view.phone ? (
            <div className="explorer-phone-well">
              <ProductScreen
                src={view.src}
                alt={view.alt}
                kind="phone"
                sizes="(max-width: 700px) 70vw, 280px"
              />
            </div>
          ) : (
            <ProductScreen
              src={"src" in view ? view.src : undefined}
              alt={view.alt}
              title={view.name}
              fill
              sizes="(max-width: 700px) 92vw, 1200px"
            />
          )}
        </div>
      </div>
      <p className="explorer-copy">
        <span>{view.focus}</span>
        {view.copy}
      </p>
    </div>
  );
}

