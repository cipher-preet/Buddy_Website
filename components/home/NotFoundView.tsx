"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BrandMark } from "./BrandMark";

const ease = [0.22, 1, 0.36, 1] as const;
const MotionLink = motion.create(Link);

export function NotFoundView() {
  return (
    <div className="site-shell not-found-shell">
      <header className="site-header not-found-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <BrandMark href="/" />
          <Link className="nav-cta" href="/">
            Back home
          </Link>
        </nav>
      </header>

      <main className="not-found-main">
        <motion.div
          className="not-found-glow not-found-glow-a"
          aria-hidden="true"
          animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="not-found-glow not-found-glow-b"
          aria-hidden="true"
          animate={{ opacity: [0.35, 0.7, 0.35], x: [0, 24, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="not-found-inner">
          <div className="not-found-code-wrap" aria-hidden="true">
            <motion.p
              className="not-found-code"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 0.12, scale: 1 }}
              transition={{ duration: 0.9, ease }}
            >
              404
            </motion.p>
          </div>

          <motion.p
            className="brand-lockup"
            initial={{ opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            Buddy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
          >
            This page didn’t make it into your notes.
          </motion.h1>

          <motion.p
            className="not-found-copy"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.28, ease }}
          >
            The link may be outdated, or the page moved. Let’s get you back to
            something Buddy can help with.
          </motion.p>

          <motion.div
            className="not-found-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            <MotionLink
              className="primary-button"
              href="/"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Back to home
            </MotionLink>
            <MotionLink
              className="secondary-button"
              href="/#product"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              See the product
            </MotionLink>
          </motion.div>

          <motion.nav
            className="not-found-links"
            aria-label="Helpful links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Link href="/#listen">Listen</Link>
            <Link href="/#product">Product</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </motion.nav>
        </div>
      </main>
    </div>
  );
}
