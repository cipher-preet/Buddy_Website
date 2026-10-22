"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useLiteMode } from "./useLiteMode";

export function ScrollProgress() {
  const lite = useLiteMode();
  if (lite) return null;
  return <ScrollProgressBar />;
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
