"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

function isReload() {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  return nav?.type === "reload";
}

export function SmoothScroll() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (isReload()) {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const hoverNone = window.matchMedia("(hover: none)").matches;
    const narrowViewport = window.matchMedia("(max-width: 980px)").matches;
    const lite = document.documentElement.classList.contains("lite");

    // Native scrolling on touch/narrow viewports: Lenis + nested overflow was
    // stopping the page around the FAQ and before the bottom invite section.
    if (reduceMotion || coarsePointer || hoverNone || narrowViewport || lite) return;

    const lenis = new Lenis({
      autoRaf: true,
      autoResize: true,
      allowNestedScroll: true,
      overscroll: true,
      syncTouch: false,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      prevent: (node) =>
        Boolean(node.closest(".studio-theater-tabs, .studio-dayline, .nav-drawer")),
    });

    lenis.on("scroll", (event) => {
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", {
          detail: {
            scroll: event.scroll,
            direction: event.direction,
            velocity: event.velocity,
          },
        })
      );
    });

    const browser = window as Window & { __lenis?: Lenis };
    browser.__lenis = lenis;

    if (isReload()) {
      lenis.scrollTo(0, { immediate: true });
    }

    const refresh = () => lenis.resize();
    window.addEventListener("load", refresh);
    window.addEventListener("orientationchange", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("orientationchange", refresh);
      lenis.destroy();
      delete (window as Window & { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
