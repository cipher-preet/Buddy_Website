"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FaqItemProps = {
  q: string;
  a: string;
  defaultOpen?: boolean;
};

export function FaqItem({ q, a, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`faq-accordion-item${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="faq-accordion-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="faq-accordion-question">{q}</span>
        <span className="faq-accordion-icon" aria-hidden="true">
          <span className="faq-accordion-bar faq-accordion-bar--h" />
          <span className="faq-accordion-bar faq-accordion-bar--v" />
        </span>
      </button>

      {/* Answers stay in the DOM when collapsed so crawlers and AI engines can read them. */}
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: "hidden" }}
        aria-hidden={!open}
      >
        <p className="faq-accordion-answer">{a}</p>
      </motion.div>
    </div>
  );
}
