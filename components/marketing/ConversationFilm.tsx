"use client";

import { useEffect, useRef, useState } from "react";
import {
  HiArrowDown,
  HiOutlineMicrophone,
  HiOutlineDocumentText,
  HiOutlineCheckCircle,
  HiOutlineSquares2X2,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2";
import { ProductScreen } from "./ProductScreen";

const chapters = [
  {
    label: "Capture",
    title: "Be in the conversation.",
    copy: "Start listening when you choose. Keep your attention on the people and ideas in front of you.",
    src: "/screenshots/android/capture.webp",
    alt: "KukuNotes Android app with an active, user-started recording",
    kind: "phone" as const,
    icon: HiOutlineMicrophone,
    caption: "User-started capture · Android",
  },
  {
    label: "Understand",
    title: "Return to what mattered.",
    copy: "A meeting summary brings the key points into view, with the recording and transcript close by.",
    src: "/screenshots/desktop/meeting-detail.png",
    mobileSrc: "/screenshots/details/meeting-summary.webp",
    alt: "Actual KukuNotes meeting recording and summary",
    kind: "desktop" as const,
    icon: HiOutlineDocumentText,
    caption: "Recording, summary, and transcript · Web workspace",
  },
  {
    label: "Take action",
    title: "Give the next step a place.",
    copy: "Review the tasks that come out of the conversation. Keep priorities and follow-ups inside their Space.",
    src: "/screenshots/details/workspace-tasks.webp",
    mobileSrc: "/screenshots/android/tasks.webp",
    alt: "Actual KukuNotes tasks with priorities and completion status",
    kind: "detail" as const,
    icon: HiOutlineCheckCircle,
    caption: "Tasks, priorities, and status · Spaces",
  },
  {
    label: "Organize",
    title: "See how it all connects.",
    copy: "Bring notes and tasks into one context. Switch to the mindmap to see the connections across your work.",
    src: "/screenshots/desktop/mindmap.webp",
    alt: "Actual KukuNotes mindmap connecting meeting notes and tasks",
    kind: "desktop" as const,
    icon: HiOutlineSquares2X2,
    caption: "Notes and tasks, connected · Mindmap",
  },
  {
    label: "Move forward",
    title: "Keep the bigger picture close.",
    copy: "Turn your Space’s goal into recommended steps and strategies, then follow the progress.",
    src: "/screenshots/desktop/goals.webp",
    mobileSrc: "/screenshots/goal-monitor.jpeg",
    alt: "Actual KukuNotes goal view with recommended steps and progress",
    kind: "desktop" as const,
    icon: HiOutlineArrowTrendingUp,
    caption: "Recommended steps and strategies · Achieve Goal",
  },
];

export function ConversationFilm() {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1000px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!query.matches || !rootRef.current) return;
      const center = window.innerHeight * 0.49;
      const distances = stepRefs.current.map((step) =>
        step
          ? Math.abs(
              step.getBoundingClientRect().top + step.offsetHeight / 2 - center,
            )
          : Infinity,
      );
      setActive(distances.indexOf(Math.min(...distances)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
      } else window.removeEventListener("scroll", onScroll);
    });
    observer.observe(rootRef.current!);
    query.addEventListener("change", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      query.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, []);
  const choose = (index: number) => {
    setActive(index);
    if (window.matchMedia("(min-width: 1000px)").matches)
      stepRefs.current[index]?.scrollIntoView({
        block: "center",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  };
  const chapter = chapters[active];
  return (
    <div className="conversation-film" ref={rootRef}>
      <div className="film-chapters" aria-label="Product walkthrough chapters">
        {chapters.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              className={`film-chapter ${active === index ? "is-active" : ""}`}
              key={item.label}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
            >
              <button
                type="button"
                onClick={() => choose(index)}
                aria-pressed={active === index}
                aria-controls="film-screen"
              >
                <span className="film-number">0{index + 1}</span>
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </button>
              <div className="film-chapter-copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="film-stage"
        id="film-screen"
        role="region"
        aria-label={`${chapter.label}: actual KukuNotes product screen`}
      >
        <div className="film-stage-top">
          <span>THE CONVERSATION, CONTINUED</span>
          <span>
            0{active + 1}
            <i> / 05</i>
          </span>
        </div>
        <div className={`film-visual film-visual-${active}`}>
          <ProductScreen
            key={chapter.src}
            src={chapter.src}
            mobileSrc={chapter.mobileSrc}
            alt={chapter.alt}
            kind={chapter.kind}
            title={chapter.label}
            sizes={
              chapter.kind === "phone"
                ? "220px"
                : "(max-width: 700px) 90vw, 850px"
            }
          />
          {active === 0 && (
            <div className="film-waveform" aria-hidden="true">
              {[12, 24, 17, 36, 55, 32, 70, 46, 27, 62, 38, 50, 23, 12].map(
                (height, index) => (
                  <i key={index} style={{ height }} />
                ),
              )}
            </div>
          )}
        </div>
        <div className="film-mobile-copy">
          <h3>{chapter.title}</h3>
          <p>{chapter.copy}</p>
        </div>
        <div className="film-stage-bottom">
          <span>{chapter.caption}</span>
          <HiArrowDown aria-hidden="true" />
        </div>
        <div className="film-progress" aria-hidden="true">
          {chapters.map((item, index) => (
            <i
              key={item.label}
              className={index <= active ? "is-filled" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
