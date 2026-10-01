"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

type LenisLike = {
  scrollTo: (target: number, options?: { immediate?: boolean; force?: boolean }) => void;
};

function resetScroll() {
  const lenis = (window as Window & { __lenis?: LenisLike }).__lenis;
  lenis?.scrollTo(0, { immediate: true, force: true });
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Hash links (e.g. /#product) should still land on their section.
    if (window.location.hash) return;

    resetScroll();
    // Lenis for the new page is created in a passive effect after this runs.
    const frame = requestAnimationFrame(resetScroll);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
