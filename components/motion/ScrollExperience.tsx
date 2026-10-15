"use client";

import { type RefObject } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollExperience({
  rootRef,
}: {
  rootRef: RefObject<HTMLDivElement | null>;
}) {
  const pathname = usePathname();
  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const media = gsap.matchMedia();
      media.add(
        {
          desktop: "(min-width: 1024px) and (pointer: fine)",
          story: "(min-width: 1024px) and (min-height: 650px) and (pointer: fine)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (match) => {
          if (!match.conditions?.motion) {
            document.documentElement.dataset.scrollMode = "native";
            return;
          }
          const desktop = Boolean(match.conditions.desktop);
          const events = new AbortController();
          let alive = true;
          let lenis: Lenis | undefined;
          const refresh = gsap
            .delayedCall(0.12, () => {
              if (!alive) return;
              lenis?.resize();
              ScrollTrigger.refresh();
            })
            .pause();
          const scheduleRefresh = () => refresh.restart(true);
          const resize = new ResizeObserver(scheduleRefresh);
          resize.observe(root);
          root.addEventListener("load", scheduleRefresh, {
            capture: true,
            signal: events.signal,
          });
          root.addEventListener("toggle", scheduleRefresh, {
            capture: true,
            signal: events.signal,
          });
          document.fonts.ready.then(() => {
            if (alive) scheduleRefresh();
          });

          if (desktop) {
            lenis = new Lenis({
              autoRaf: false,
              lerp: 0.12,
              smoothWheel: true,
              syncTouch: false,
              wheelMultiplier: 0.95,
              autoResize: true,
              anchors: false,
              stopInertiaOnNavigate: true,
              prevent: (node) =>
                Boolean(
                  node.closest(
                    "[data-lenis-prevent], textarea, select, .table-scroll, .mobile-navigation, dialog, [role=dialog]",
                  ),
                ),
            });
            document.documentElement.dataset.scrollMode = "smooth";
            const update = () => ScrollTrigger.update();
            const tick = (time: number) => lenis?.raf(time * 1000);
            lenis.on("scroll", update);
            gsap.ticker.add(tick);
            gsap.ticker.lagSmoothing(0);

            // Same-document links get one scroll owner. Next still owns route changes.
            root.addEventListener(
              "click",
              (event) => {
                if (
                  event.button ||
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return;
                const link = (
                  event.target as Element
                ).closest<HTMLAnchorElement>("a[href]");
                if (
                  !link ||
                  link.target === "_blank" ||
                  link.hasAttribute("download")
                )
                  return;
                const url = new URL(link.href);
                if (
                  url.origin !== location.origin ||
                  url.pathname !== location.pathname ||
                  url.search !== location.search ||
                  !url.hash
                )
                  return;
                let id: string;
                try {
                  id = decodeURIComponent(url.hash.slice(1));
                } catch {
                  return;
                }
                const target = document.getElementById(id);
                if (!target) return;
                event.preventDefault();
                event.stopPropagation();
                if (location.hash !== url.hash)
                  history.pushState(history.state, "", url.hash);
                lenis?.scrollTo(target, {
                  // Lenis already accounts for CSS scroll-padding. Cancel any
                  // per-target margin so the shared header offset applies once.
                  offset:
                    Number.parseFloat(
                      getComputedStyle(target).scrollMarginTop,
                    ) || 0,
                  immediate: event.detail === 0,
                  lerp: 0,
                  duration: 0.72,
                  easing: (t: number) => 1 - Math.pow(1 - t, 3),
                  onComplete: () => {
                    const hadTabIndex = target.hasAttribute("tabindex");
                    if (!hadTabIndex) target.setAttribute("tabindex", "-1");
                    target.focus({ preventScroll: true });
                    if (!hadTabIndex)
                      target.addEventListener(
                        "blur",
                        () => target.removeAttribute("tabindex"),
                        { once: true, signal: events.signal },
                      );
                  },
                });
              },
              { capture: true, signal: events.signal },
            );
            window.addEventListener(
              "keydown",
              (event) => {
                if (
                  [
                    "ArrowDown",
                    "ArrowUp",
                    "PageDown",
                    "PageUp",
                    "Home",
                    "End",
                    " ",
                  ].includes(event.key) &&
                  !(event.target as Element)?.closest(
                    "input, textarea, select, [contenteditable=true]",
                  )
                )
                  lenis?.scrollTo(window.scrollY, { immediate: true });
              },
              { signal: events.signal },
            );
            const restore = gsap
              .delayedCall(0.1, () =>
                lenis?.scrollTo(window.scrollY, { immediate: true }),
              )
              .pause();
            window.addEventListener(
              "popstate",
              () => {
                lenis?.scrollTo(window.scrollY, { immediate: true });
                restore.restart(true);
                scheduleRefresh();
              },
              { signal: events.signal },
            );
            window.addEventListener(
              "pageshow",
              () => {
                restore.restart(true);
                scheduleRefresh();
              },
              { signal: events.signal },
            );
            document.addEventListener(
              "kuku:overlay",
              (event) => {
                if ((event as CustomEvent<boolean>).detail) lenis?.stop();
                else {
                  lenis?.start();
                  scheduleRefresh();
                }
              },
              { signal: events.signal },
            );
            // This cleanup is retained by matchMedia, including live preference/viewport changes.
            match.add(() => () => {
              restore.kill();
              gsap.ticker.remove(tick);
              lenis?.off("scroll", update);
              lenis?.destroy();
              document.documentElement.dataset.scrollMode = "native";
            });
          } else document.documentElement.dataset.scrollMode = "native";

          // Content stays visible; only a few existing compositions move.
          root
            .querySelectorAll<HTMLElement>("[data-scroll-reveal]")
            .forEach((element) => {
              if (element.getBoundingClientRect().top < innerHeight) return;
              gsap.fromTo(
                element,
                { y: 18 },
                {
                  y: 0,
                  duration: 0.75,
                  ease: "power2.out",
                  clearProps: "transform",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 92%",
                    once: true,
                  },
                },
              );
            });

          const story = root.querySelector<HTMLElement>(".product-story");
          if (story && desktop && match.conditions?.story) {
            const panels = [
              ...story.querySelectorAll<HTMLElement>("[data-story-panel]"),
            ];
            const steps = [
              ...story.querySelectorAll<HTMLElement>("[data-story-index]"),
            ];
            const accents = ["blue", "violet", "coral", "teal", "violet"];
            let current = -1;
            const selectStep = (index: number) => {
              if (index === current) return;
              current = index;
              story.dataset.storyStep = String(index);
              story.dataset.storyAccent = accents[index];
              steps.forEach((step, i) => {
                step.dataset.storyActive = String(i === index);
              });
              panels.forEach((panel, i) =>
                panel.setAttribute("aria-hidden", String(i !== index)),
              );
              const counter = story.querySelector(".story-counter b");
              if (counter) counter.textContent = `0${index + 1}`;
              const label = story.querySelector(".story-stage-label");
              if (label) label.textContent = steps[index].dataset.storyLabel || "";
            };
            gsap.set(panels, { autoAlpha: 0, y: 40, rotationX: 4, scale: 0.97 });
            gsap.set(panels[0], { autoAlpha: 1, y: 0, rotationX: 0, scale: 1 });
            selectStep(0);
            // One scrubbed timeline owns the complete story. CSS sticky keeps
            // document flow intact; no pin spacer, snapping, or scroll trapping.
            const storyTimeline = gsap.timeline({
              defaults: { ease: "power2.inOut" },
              scrollTrigger: {
                id: "kuku-product-story",
                trigger: story.querySelector(".story-steps"),
                start: () => `top+=${steps[0].offsetHeight / 2} 50%`,
                end: () => `bottom-=${steps[steps.length - 1].offsetHeight / 2} 50%`,
                scrub: 0.32,
                invalidateOnRefresh: true,
                onUpdate: (self) => selectStep(Math.floor(self.progress * (panels.length - 1) + 0.45)),
                onRefresh: (self) => selectStep(Math.floor(self.progress * (panels.length - 1) + 0.45)),
              },
            });
            panels.slice(1).forEach((panel, i) => {
              const index = i + 1;
              storyTimeline.fromTo(panels[index - 1], {
                autoAlpha: 1, y: 0, x: 0, scale: 1, rotationX: 0,
              }, {
                autoAlpha: 0, y: -26, scale: 0.96, rotationX: -3, duration: 0.15, immediateRender: false,
              }, index - 0.6);
              storyTimeline.fromTo(panel, {
                autoAlpha: 0, y: 40, x: index % 2 ? 20 : -20, rotationX: 4, scale: 0.97,
              }, {
                autoAlpha: 1, y: 0, x: 0, rotationX: 0, scale: 1, duration: 0.2, immediateRender: false,
              }, index - 0.55);
            });
            storyTimeline.fromTo(story.querySelector(".story-rail span"), { scaleY: 0 }, {
              scaleY: 1, duration: panels.length - 1, ease: "none",
            }, 0);
            storyTimeline.fromTo(story.querySelector(".story-chapter-progress span"), { scaleX: 0 }, {
              scaleX: 1, duration: panels.length - 1, ease: "none",
            }, 0);
          }
          if (desktop) {
            const scene = (
              target: string,
              trigger: string,
              from: gsap.TweenVars,
              to: gsap.TweenVars,
            ) => {
              const element = root.querySelector(target),
                section = root.querySelector(trigger);
              if (element && section)
                gsap.fromTo(element, from, {
                  ...to,
                  ease: "none",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 88%",
                    end: "center 38%",
                    scrub: 0.55,
                  },
                });
            };
            scene(
              ".meeting-product-stage .stage-content",
              "#listen",
              { y: 32, rotationX: 3, scale: 0.98 },
              { y: 0, rotationX: 0, scale: 1 },
            );
            scene(
              ".paired-phones .phone-frame:nth-child(2)",
              ".tasks-section",
              { y: 24 },
              { y: -7 },
            );
            scene(".assistant-product-stage .stage-content", "#ask", { y: 24 }, { y: 0 });
            scene(".spaces-product-stage .stage-content", "#spaces", { y: 24, rotationY: -3 }, { y: 0, rotationY: 0 });
            scene(".digest-result", ".meeting-digest", { x: 16 }, { x: 0 });
            scene(
              ".briefing-card .phone-frame",
              ".daily-section",
              { y: 24 },
              { y: 0 },
            );
            scene(".goal-card .phone-frame", ".daily-section", { y: 38 }, { y: 0 });
          }
          scheduleRefresh();
          return () => {
            alive = false;
            events.abort();
            resize.disconnect();
            refresh.kill();
            if (story) {
              story.dataset.storyStep = "0";
              story.dataset.storyAccent = "blue";
              const label = story.querySelector(".story-stage-label");
              if (label) label.textContent = "Capture";
              const counter = story.querySelector(".story-counter b");
              if (counter) counter.textContent = "01";
              story
                .querySelectorAll<HTMLElement>("[data-story-index]")
                .forEach((step, i) => {
                  step.dataset.storyActive = String(i === 0);
                });
              story
                .querySelectorAll("[data-story-panel]")
                .forEach((panel, i) =>
                  panel.setAttribute("aria-hidden", String(i !== 0)),
                );
            }
          };
        },
      );
      return () => {
        media.revert();
        delete document.documentElement.dataset.scrollMode;
      };
    },
    { scope: rootRef, dependencies: [pathname], revertOnUpdate: true },
  );
  return null;
}
