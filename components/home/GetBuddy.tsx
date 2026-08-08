"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "./Reveal";

const perks = [
  {
    title: "Listen live",
    text: "Capture conversations without stopping to take notes.",
  },
  {
    title: "Notes & tasks",
    text: "Walk away with clear memory and next actions ready.",
  },
  {
    title: "Ask Buddy",
    text: "Chat with context grounded in your spaces.",
  },
];

export function GetBuddy() {
  return (
    <section id="cta" className="get-buddy-section">
      <Reveal variant="fade-up">
        <div className="get-buddy-shell">
          <div className="get-buddy-copy">
            <p className="eyebrow light">Get Buddy</p>
            <h2>Ready for your next conversation.</h2>
            <p className="section-lead get-buddy-lead">
              Bring Buddy into meetings, brainstorms, and everyday talk—and leave
              with notes and tasks already waiting.
            </p>

            <div className="get-buddy-actions">
              <motion.a
                className="primary-button light"
                href="mailto:hello@buddy.ai?subject=Get%20Buddy"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Buddy
              </motion.a>
              <motion.a
                className="secondary-button ghost"
                href="#screens"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                See the app
              </motion.a>
            </div>

            <ul className="get-buddy-perks">
              {perks.map((perk, index) => (
                <motion.li
                  key={perk.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <strong>{perk.title}</strong>
                  <span>{perk.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            className="get-buddy-visual"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="get-buddy-phone">
              <Image
                src="/screenshots/home.png"
                alt="Buddy app home screen"
                fill
                sizes="260px"
                className="get-buddy-phone-image"
              />
            </div>
            <div className="get-buddy-float get-buddy-float-a">
              <strong>Listening</strong>
              <span>Weekly Sync</span>
            </div>
            <div className="get-buddy-float get-buddy-float-b">
              <strong>3 notes</strong>
              <span>Ready to review</span>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
