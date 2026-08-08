"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { appScreens } from "@/lib/home-data";
import { AppFrame } from "./AppFrame";

const CARD_GAP = 20;
const VISIBLE_CARDS = 3;

export function ScreensShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    function measure() {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const cardWidth =
        (viewport.clientWidth - CARD_GAP * (VISIBLE_CARDS - 1)) / VISIBLE_CARDS;

      viewport.style.setProperty("--card-width", `${cardWidth}px`);

      const totalWidth =
        appScreens.length * cardWidth + (appScreens.length - 1) * CARD_GAP;
      setTravel(Math.max(0, totalWidth - viewport.clientWidth));
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const x = useSpring(rawX, {
    stiffness: 50,
    damping: 28,
    mass: 0.45,
    restDelta: 0.0005,
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="screens" className="screens-pin-section" ref={sectionRef}>
      <div className="screens-pin-sticky">
        <div className="section-heading centered">
          <p className="eyebrow">The app</p>
          <h2>A living gallery of Buddy screens.</h2>
          <p className="section-lead">
            Three screens across the full width first—keep scrolling to reveal the
            rest smoothly.
          </p>
        </div>

        <div className="screen-viewport" ref={viewportRef}>
          <motion.div className="screen-rail" style={{ x }}>
            {appScreens.map((screen) => (
              <article className="screen-rail-item" key={screen.title}>
                <div className="screenshot-frame rail">
                  <AppFrame src={screen.image} alt={screen.alt} size="showcase" />
                </div>
                <div className="screen-copy">
                  <h3>{screen.title}</h3>
                  <p>{screen.detail}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div className="screen-progress" aria-hidden="true">
          <motion.span style={{ width: progressWidth }} />
        </div>
      </div>
    </section>
  );
}
