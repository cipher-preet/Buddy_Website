"use client";

import gsap from "gsap";
import Lenis from "lenis";
import { useEffect } from "react";

/** Keeps the product story tactile while respecting reduced-motion settings. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.25,
    });
    const tick = (time: number) => lenis.raf(time * 1000);

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
