import type { ReactNode } from "react";
import { ProductFrame } from "./UI";

export type StageTone = "blue" | "violet" | "coral" | "teal";

export function AmbientGlow() {
  return <div className="ambient-glow" aria-hidden="true"><span /><span /></div>;
}

export function CinematicStage({
  children,
  tone = "blue",
  className = "",
  caption,
}: {
  children: ReactNode;
  tone?: StageTone;
  className?: string;
  caption?: string;
}) {
  return (
    <div className={`cinematic-stage ${className}`} data-tone={tone}>
      <AmbientGlow />
      <div className="stage-content">{children}</div>
      {caption && <p className="stage-caption">{caption}</p>}
    </div>
  );
}

export function HeroProductStage() {
  return (
    <CinematicStage tone="violet" className="hero-cinematic-stage">
      <div className="hero-desktop-layer">
        <ProductFrame
          src="/screenshots/desktop/spaces-tasks.png"
          alt="The real KukuNotes desktop workspace, with Spaces and contextual tasks; account details redacted"
          priority
          windowTitle="Your KukuNotes workspace"
          sizes="(max-width: 680px) 76vw, (max-width: 1280px) 72vw, 1000px"
        />
        <span className="device-caption">Desktop workspace</span>
      </div>
      <div className="hero-mobile-layer">
        <ProductFrame
          src="/screenshots/home.png"
          alt="The actual KukuNotes Android app with Spaces and user-controlled listening"
          priority
          sizes="(max-width: 680px) 90px, (max-width: 1023px) 130px, 172px"
        />
        <span className="device-caption">Android app</span>
      </div>
      <div className="stage-connection" aria-hidden="true"><i /><span>One thread. Across your devices.</span><i /></div>
    </CinematicStage>
  );
}

/** Decorative audio motif beside the screenshot, never presented as live data. */
export function CaptureWaveform() {
  return (
    <div className="capture-waveform" aria-hidden="true">
      {[12, 22, 38, 26, 52, 34, 66, 46, 28, 56, 38, 20, 34, 14].map((height, i) => (
        <i key={i} style={{ height }} />
      ))}
    </div>
  );
}
