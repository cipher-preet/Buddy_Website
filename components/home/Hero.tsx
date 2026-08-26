"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MouseEvent } from "react";
import Image from "next/image";
import { AppFrame } from "./AppFrame";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const phoneTransform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;

  function handleMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(px * 24);
    mouseY.set(py * 18);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="top"
      className="hero-section"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className="hero-glow"
        aria-hidden="true"
        animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 28, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span /> THE CONTEXT ENGINE FOR REAL LIFE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Your day, <em>in focus.</em>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            Buddy catches the ideas, commitments, and details that move through
            your day—then turns them into a workspace you can actually use.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              className="primary-button"
              href="#product"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              See how it works <span aria-hidden="true">↗</span>
            </motion.a>
            <motion.a
              className="secondary-button"
              href="#screens"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore the app
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-proof"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="proof-avatars" aria-hidden="true"><i>R</i><i>M</i><i>J</i></div>
            <p><strong>One space for every thought.</strong><br />From the conversation to the next move.</p>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          aria-label="Buddy app preview"
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="hero-phone-main" style={{ transform: phoneTransform }}>
            <AppFrame
              src="/screenshots/home.png"
              alt="Buddy home screen showing spaces and listening"
              size="hero"
            />
          </motion.div>
          <motion.div className="hero-orbit hero-orbit-notes" aria-hidden="true">
            <Image src="/screenshots/notes.png" alt="" fill sizes="130px" />
          </motion.div>
          <motion.div className="hero-orbit hero-orbit-listen" aria-hidden="true">
            <Image src="/screenshots/listen.png" alt="" fill sizes="116px" />
          </motion.div>
          <motion.div className="hero-signal" aria-hidden="true"><span>LIVE CONTEXT</span><b>●</b></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
