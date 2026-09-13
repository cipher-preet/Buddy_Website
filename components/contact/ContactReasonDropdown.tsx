"use client";

import { useEffect, useId, useRef, useState } from "react";

const reasonOptions = [
  "Product question",
  "Support",
  "Partnership",
  "Privacy request",
  "Feedback",
];

export function ContactReasonDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(reasonOptions[0]);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="contact-dropdown" ref={rootRef}>
      <input type="hidden" name="reason" value={selected} />
      <button
        type="button"
        className="contact-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{selected}</span>
        <i aria-hidden="true" />
      </button>
      <div className="contact-dropdown-menu" id={listboxId} role="listbox" hidden={!open}>
        {reasonOptions.map((option) => (
          <button
            key={option}
            type="button"
            role="option"
            aria-selected={option === selected}
            className={option === selected ? "is-selected" : ""}
            onClick={() => {
              setSelected(option);
              setOpen(false);
            }}
          >
            <span>{option}</span>
            <i aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}
