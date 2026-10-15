"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { FaAndroid, FaWindows, FaChrome } from "react-icons/fa6";
import { HiGlobeAlt, HiArrowUpRight } from "react-icons/hi2";
import { getKukuNotesPlatforms } from "@/lib/get-kukunotes-data";
import { ProductScreen } from "./ProductScreen";
const icons = [FaAndroid, FaWindows, FaChrome, HiGlobeAlt];
export function PlatformSelector({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const PlatformHeading = standalone ? "h2" : "h3";
  const [selected, setSelected] = useState(3);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const platform = getKukuNotesPlatforms[selected];
  const Icon = icons[selected];
  return (
    <div className="platform-selector" data-platform={platform.id}>
      <div
        className="platform-tabs"
        role="tablist"
        aria-label="Choose your platform"
      >
        {getKukuNotesPlatforms.map((p, i) => {
          const TabIcon = icons[i];
          return (
            <button
              type="button"
              key={p.id}
              id={`platform-tab-${i}`}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              aria-selected={selected === i}
              aria-controls="platform-panel"
              tabIndex={selected === i ? 0 : -1}
              onClick={() => setSelected(i)}
              onKeyDown={(event) => {
                let next = i;
                if (event.key === "ArrowRight") next = (i + 1) % 4;
                else if (event.key === "ArrowLeft") next = (i + 3) % 4;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = 3;
                else return;
                event.preventDefault();
                setSelected(next);
                refs.current[next]?.focus();
              }}
            >
              <TabIcon aria-hidden="true" />
              {p.title}
            </button>
          );
        })}
      </div>
      <div
        className="platform-panel"
        key={platform.id}
        role="tabpanel"
        id="platform-panel"
        aria-labelledby={`platform-tab-${selected}`}
        tabIndex={0}
      >
        <div className="platform-copy">
          <Icon className="platform-large-icon" aria-hidden="true" />
          <p className="eyebrow">
            {platform.category} · {platform.badge}
          </p>
          <PlatformHeading>{platform.tagline}</PlatformHeading>
          <ul className="check-list">
            {platform.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="button button-primary" href={platform.primaryCta.href}>
            {platform.primaryCta.label}
            <HiArrowUpRight aria-hidden="true" />
          </a>
          <Link className="text-link" href={platform.secondaryAction.href}>
            {platform.secondaryAction.label} <span aria-hidden="true">→</span>
          </Link>
          <p className="platform-requirements">{platform.compatibility}</p>
        </div>
        <div
          className={`launch-platform-visual launch-platform-visual-${platform.id}`}
        >
          <ProductScreen
            src={platform.image}
            alt={platform.alt}
            kind={platform.id === "android" ? "phone" : "desktop"}
            title={platform.title}
            sizes={
              platform.id === "android"
                ? "240px"
                : "(max-width: 680px) 90vw, 700px"
            }
          />
          <span>
            {platform.id === "chrome"
              ? "Actual meeting summary in KukuNotes"
              : "Actual KukuNotes product screens"}
          </span>
        </div>
      </div>
    </div>
  );
}
