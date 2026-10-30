"use client";

import { useEffect, useState } from "react";

/** True after mount when the early script marked this browser as low-end or on a slow connection. */
export function useLiteMode() {
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setLite(document.documentElement.classList.contains("lite"));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return lite;
}
