"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/site";
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
    title: "Ask KukuNotes",
    text: "Chat with context grounded in your spaces.",
  },
];

export function GetKukuNotes() {
  return (
    <section id="cta" className="get-kukunotes-section">
      <Reveal variant="fade-up">
        <div className="get-kukunotes-shell">
          <div className="get-kukunotes-copy">
            <p className="eyebrow light">Get KukuNotes</p>
            <h2>Ready for your next conversation.</h2>
            <p className="section-lead get-kukunotes-lead">
              Bring KukuNotes into meetings, brainstorms, and everyday talk—and leave
              with notes and tasks already waiting.
            </p>

            <div className="get-kukunotes-actions">
              <motion.a
                className="primary-button light"
                href={`mailto:${siteConfig.email}?subject=Get%20KukuNotes`}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get KukuNotes
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

            <ul className="get-kukunotes-perks">
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
            className="get-kukunotes-visual"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="get-kukunotes-phone">
              <Image
                src="/screenshots/home.png"
                alt="KukuNotes app home screen"
                fill
                sizes="260px"
                className="get-kukunotes-phone-image"
              />
            </div>
            <div className="get-kukunotes-float get-kukunotes-float-a">
              <strong>Listening</strong>
              <span>Weekly Sync</span>
            </div>
            <div className="get-kukunotes-float get-kukunotes-float-b">
              <strong>3 notes</strong>
              <span>Ready to review</span>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}
