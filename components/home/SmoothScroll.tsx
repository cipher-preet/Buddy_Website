"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ScrollExperience = dynamic(
  () => import("@/components/motion/ScrollExperience"),
  { ssr: false },
);

// A single persistent shell; server-rendered children never wait for the engine.
export function SmoothScroll({ children }: { children?: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let idle = 0,
      timer = 0;
    const eligible = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const start = () => setReady(true);
    const schedule = () => {
      if (!eligible.matches) return;
      if (typeof window.requestIdleCallback === "function")
        idle = window.requestIdleCallback(start, { timeout: 1200 });
      else timer = window.setTimeout(start, 300);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    const intent = () => {
      if (eligible.matches) start();
    };
    eligible.addEventListener("change", schedule);
    window.addEventListener("wheel", intent, { once: true, passive: true });
    return () => {
      window.removeEventListener("load", schedule);
      window.removeEventListener("wheel", intent);
      eligible.removeEventListener("change", schedule);
      if (idle) window.cancelIdleCallback(idle);
      if (timer) window.clearTimeout(timer);
    };
  }, []);
  return (
    <div ref={rootRef} data-motion-root>
      {children}
      {ready && <ScrollExperience rootRef={rootRef} />}
    </div>
  );
}
