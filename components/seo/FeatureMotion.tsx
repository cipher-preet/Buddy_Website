"use client";

import { useReducedMotion } from "framer-motion";
import { useLiteMode } from "@/components/home/useLiteMode";

export type MotionScene =
  | "capture"
  | "notes"
  | "tasks"
  | "spaces"
  | "lecture"
  | "ask"
  | "devices"
  | "languages"
  | "shield";

function Bars({ count = 5 }: { count?: number }) {
  return (
    <div className="motion-bars" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <i key={index} style={{ animationDelay: `${index * 0.12}s` }} />
      ))}
    </div>
  );
}

export function FeatureMotion({
  scene = "capture",
  compact = false,
}: {
  scene?: MotionScene;
  compact?: boolean;
}) {
  const reduce = useReducedMotion();
  const lite = useLiteMode();
  const calm = Boolean(reduce || lite);

  return (
    <div
      className={`motion-card motion-${scene}${compact ? " is-compact" : ""}${calm ? " is-calm" : ""}`}
      aria-hidden="true"
    >
      {scene === "capture" ? (
        <>
          <div className="motion-phone"><Bars /></div>
          <span className="motion-chip">Start Listening</span>
        </>
      ) : null}
      {scene === "notes" ? (
        <>
          <div className="motion-lines"><i /><i /><i /></div>
          <div className="motion-note">Summary</div>
        </>
      ) : null}
      {scene === "tasks" ? (
        <ul className="motion-checks">
          <li>Send the recap</li>
          <li>Book the follow-up</li>
          <li>File it in the Space</li>
        </ul>
      ) : null}
      {scene === "spaces" ? (
        <div className="motion-folders">
          <span>Client</span>
          <span>Class</span>
          <span>Product</span>
        </div>
      ) : null}
      {scene === "lecture" ? (
        <>
          <Bars count={7} />
          <div className="motion-note">Key concepts</div>
        </>
      ) : null}
      {scene === "ask" ? (
        <>
          <p className="motion-q">What did we decide?</p>
          <p className="motion-a">Ship the recap on Friday.</p>
        </>
      ) : null}
      {scene === "devices" ? (
        <div className="motion-devices">
          <i className="motion-laptop" />
          <i className="motion-handset" />
        </div>
      ) : null}
      {scene === "languages" ? (
        <>
          <div className="motion-orb" />
          <span className="motion-chip">Many languages</span>
        </>
      ) : null}
      {scene === "shield" ? (
        <>
          <svg className="motion-shield" viewBox="0 0 64 72" width="72" height="84" aria-hidden="true">
            <path d="M32 4 L58 16 V40 C58 54 32 68 32 68 C32 68 6 54 6 40 V16 Z" fill="#1c62fc" />
            <path d="M22 36 L30 44 L46 26" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="motion-chip">Opt-in only</span>
        </>
      ) : null}
    </div>
  );
}
