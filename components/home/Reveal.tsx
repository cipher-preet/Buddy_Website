"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale" | "clip-up" | "blur";
  delay?: number;
  once?: boolean;
};

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -48 },
    show: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 48 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
  "clip-up": {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    show: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 24 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export function Reveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
