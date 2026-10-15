"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProductScreen } from "./ProductScreen";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const acts = [
  {
    id: "conversation",
    kicker: "01 — The conversation",
    title: "Start when you mean to.",
    copy: "Recording begins when you start it. The live session stays on the phone, in the Space you chose.",
  },
  {
    id: "understanding",
    kicker: "02 — The understanding",
    title: "Come back to what mattered.",
    copy: "The meeting keeps the recording beside a summary and the key points. This one did not record decisions or action items.",
  },
  {
    id: "action",
    kicker: "03 — The action",
    title: "Give the next step a place.",
    copy: "Tasks hold a priority, a date, and a status. The Space keeps that work next to the notes from the same context.",
  },
];

const bars = [28, 46, 70, 38, 86, 54, 34, 62, 44, 22];

export function ProductStorySequence() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
        () => {
          const layout = root.current?.querySelector<HTMLElement>(".story-layout");
          const scenes = gsap.utils.toArray<HTMLElement>(".story-scene");
          const blurbs = gsap.utils.toArray<HTMLElement>(".story-blurb");
          const tabs = gsap.utils.toArray<HTMLButtonElement>(".story-tab");
          if (!layout || scenes.length < 3) return;

          const setAct = (act: number) => {
            layout.dataset.act = String(act);
            tabs.forEach((tab, index) => {
              const on = index === act;
              tab.setAttribute("aria-selected", on ? "true" : "false");
              tab.tabIndex = on ? 0 : -1;
            });
            blurbs.forEach((blurb, index) => {
              blurb.setAttribute("aria-hidden", index === act ? "false" : "true");
            });
          };

          gsap.set(scenes, { autoAlpha: 0, y: 18 });
          gsap.set(scenes[0], { autoAlpha: 1, y: 0 });
          gsap.set(blurbs, { autoAlpha: 0, y: 12 });
          gsap.set(blurbs[0], { autoAlpha: 1, y: 0 });
          setAct(0);

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              id: "product-story",
              trigger: layout,
              start: "top 92px",
              end: "+=200%",
              pin: true,
              scrub: 0.45,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const act = self.progress < 0.34 ? 0 : self.progress < 0.68 ? 1 : 2;
                if (layout.dataset.act !== String(act)) setAct(act);
              },
            },
          });

          tl.to(scenes[0], { autoAlpha: 0, y: -16, duration: 0.8 }, 1.4)
            .to(blurbs[0], { autoAlpha: 0, y: -8, duration: 0.6 }, 1.4)
            .fromTo(
              scenes[1],
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: 0.8 },
              1.4,
            )
            .to(blurbs[1], { autoAlpha: 1, y: 0, duration: 0.6 }, 1.55)
            .to(scenes[1], { autoAlpha: 0, y: -16, duration: 0.8 }, 3.5)
            .to(blurbs[1], { autoAlpha: 0, y: -8, duration: 0.6 }, 3.5)
            .fromTo(
              scenes[2],
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: 0.8 },
              3.5,
            )
            .to(blurbs[2], { autoAlpha: 1, y: 0, duration: 0.6 }, 3.65)
            .to({}, { duration: 1.2 }, 4.4);

          const go = (index: number) => {
            const trigger = ScrollTrigger.getById("product-story");
            if (!trigger) return;
            const points = [0.04, 0.46, 0.86];
            const top =
              trigger.start + (trigger.end - trigger.start) * points[index];
            window.scrollTo({ top, behavior: "smooth" });
          };

          const cleanups: Array<() => void> = [];
          tabs.forEach((tab, index) => {
            const onClick = () => go(index);
            const onKey = (event: KeyboardEvent) => {
              let next = index;
              if (event.key === "ArrowDown" || event.key === "ArrowRight")
                next = (index + 1) % tabs.length;
              else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
                next = (index + tabs.length - 1) % tabs.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = tabs.length - 1;
              else return;
              event.preventDefault();
              tabs[next]?.focus();
              go(next);
            };
            tab.addEventListener("click", onClick);
            tab.addEventListener("keydown", onKey);
            cleanups.push(() => {
              tab.removeEventListener("click", onClick);
              tab.removeEventListener("keydown", onKey);
            });
          });
          return () => {
            cleanups.forEach((fn) => fn());
            gsap.set([scenes, blurbs, layout], {
              clearProps: "all",
            });
          };
        },
      );
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section id="product" className="v3-story section" ref={root}>
      <div className="container">
        <header className="v3-story-heading">
          <p className="eyebrow">From a conversation</p>
          <h2>From a conversation to what happens next.</h2>
        </header>
        <div className="story-layout" id="listen" data-act="0">
          <div className="story-copy">
            <div className="story-blurbs">
              {acts.map((act, index) => (
                <div
                  className={`story-blurb${index === 0 ? " is-first" : ""}`}
                  key={act.id}
                  aria-hidden={index === 0 ? undefined : true}
                >
                  <p className="eyebrow">{act.kicker}</p>
                  <h3>{act.title}</h3>
                  <p>{act.copy}</p>
                </div>
              ))}
            </div>
            <div className="story-tabs" role="tablist" aria-label="Conversation story">
              {acts.map((act, index) => (
                <button
                  key={act.id}
                  type="button"
                  className="story-tab"
                  role="tab"
                  aria-selected={index === 0}
                  tabIndex={index === 0 ? 0 : -1}
                >
                  <span>0{index + 1}</span>
                  {act.kicker.split("— ")[1]}
                </button>
              ))}
            </div>
          </div>
          <div className="story-stage" aria-live="polite">
            <div className="story-scene story-scene-1 is-first">
              <div className="story-scene-copy">
                <p className="eyebrow">{acts[0].kicker}</p>
                <h3>{acts[0].title}</h3>
                <p>{acts[0].copy}</p>
              </div>
              <div className="story-capture">
                <div className="story-waveform" aria-hidden="true">
                  {bars.map((height, index) => (
                    <i key={index} style={{ height }} />
                  ))}
                </div>
                <ProductScreen
                  src="/screenshots/android/capture.webp"
                  alt="KukuNotes Android recording that the user started"
                  kind="phone"
                  sizes="230px"
                />
              </div>
            </div>
            <div className="story-scene story-scene-2">
              <div className="story-scene-copy">
                <p className="eyebrow">{acts[1].kicker}</p>
                <h3>{acts[1].title}</h3>
                <p>{acts[1].copy}</p>
              </div>
              <div className="story-meeting">
                <ProductScreen
                  src="/screenshots/desktop/meeting-detail.png"
                  alt="KukuNotes meeting with the recording, summary, and key points"
                  title="Meeting summary"
                  className="story-meeting-screen"
                  sizes="(max-width: 1000px) 92vw, 1024px"
                />
                <p className="story-caption">
                  Summary and key points stay beside the recording.
                </p>
              </div>
            </div>
            <div className="story-scene story-scene-3">
              <div className="story-scene-copy">
                <p className="eyebrow">{acts[2].kicker}</p>
                <h3>{acts[2].title}</h3>
                <p>{acts[2].copy}</p>
              </div>
              <div className="story-act3">
                <div className="story-tasks">
                  <ProductScreen
                    src="/screenshots/android/tasks.webp"
                    alt="KukuNotes tasks on Android, with status and the work that comes next"
                    kind="phone"
                    sizes="(max-width: 1000px) 68vw, 240px"
                  />
                </div>
                <div className="story-space">
                  <ProductScreen
                    src="/screenshots/desktop/workspace.webp"
                    alt="KukuNotes Space connecting notes and tasks"
                    title="Space"
                    sizes="(max-width: 1000px) 92vw, 860px"
                  />
                  <p className="story-caption">The Space that holds the work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
