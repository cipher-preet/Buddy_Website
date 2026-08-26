"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { smartListItems } from "@/lib/home-data";
import { Reveal } from "./Reveal";

const AUTO_MS = 5000;

export function SmartList() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const hoverTimer = useRef<number | null>(null);
  const current = smartListItems[active];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % smartListItems.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    };
  }, []);

  function selectItem(index: number) {
    if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      setActive(index);
    }, 80);
  }

  return (
    <section
      id="product"
      className="smart-list-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Reveal variant="fade-up">
        <div className="section-heading">
          <p className="eyebrow">Why Buddy</p>
          <h2>Hover the list. Watch the product come alive.</h2>
          <p className="section-lead">
            Move through each capability and the preview updates smoothly—spaces,
            notes, tasks, and chat.
          </p>
        </div>
      </Reveal>

      <div className="smart-list-layout">
        <div className="smart-list">
          {smartListItems.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.id}
                type="button"
                className={`smart-list-item accent-${item.accent} ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => selectItem(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={isActive}
              >
                <span className="smart-list-indicator" aria-hidden="true" />
                <div className="smart-list-row">
                  <span className="smart-list-num">{item.number}</span>
                  <div className="smart-list-text">
                    <strong>{item.title}</strong>
                    <span className="smart-list-summary">{item.summary}</span>
                  </div>
                  <span className={`smart-list-chevron ${isActive ? "open" : ""}`} aria-hidden="true" />
                </div>

                <div className={`smart-list-panel ${isActive ? "open" : ""}`}>
                  <div className="smart-list-panel-inner">
                    <p>{item.description}</p>
                    <div className="smart-list-actions">
                      <span className="smart-list-cta">{item.cta}</span>
                      {isActive && (
                        <div className="smart-list-progress" aria-hidden="true">
                          <motion.span
                            key={`${item.id}-${paused}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: paused ? 0 : 1 }}
                            transition={{
                              duration: paused ? 0.2 : AUTO_MS / 1000,
                              ease: "linear",
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="smart-list-preview">
          <div className={`smart-preview-stage accent-${current.accent}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="smart-preview-main"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="smart-phone">
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="280px"
                    className="smart-stack-image"
                    priority
                  />
                </div>

                <div className="smart-side-thumbs">
                  {current.stack.slice(1).map((src, i) => (
                    <motion.div
                      key={src}
                      className={`smart-thumb thumb-${i}`}
                      initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                      animate={{ opacity: 0.92, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image src={src} alt="" fill sizes="120px" className="smart-stack-image" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="smart-preview-label">
              <span>{current.number}</span>
              <strong>{current.title}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
