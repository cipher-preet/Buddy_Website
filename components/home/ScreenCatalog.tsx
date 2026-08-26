"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { appScreens } from "@/lib/home-data";
import { AppFrame } from "./AppFrame";

const categories = ["Plan your day", "Organize", "Collaborate", "Explore"];
const screenAreas = ["Plan", "Plan", "Goals", "Tasks", "Knowledge", "Share"];

export function ScreenCatalog() {
  const [active, setActive] = useState(0);

  return (
    <section id="screens" className="screen-catalog-section">
      <div className="catalog-heading">
        <div>
          <p className="eyebrow">The Buddy catalogue</p>
          <h2>Every part of your day, beautifully connected.</h2>
        </div>
        <div className="catalog-intro">
          <span className="catalog-screen-count"><b>{String(appScreens.length).padStart(2, "0")}</b> mobile screens</span>
          <p>
            Move through the complete Buddy experience: from the first thought to a
            clear decision, with the context still attached.
          </p>
        </div>
      </div>

      <div className="catalog-filter" role="tablist" aria-label="Product areas">
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span> {category}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {appScreens.map((screen, index) => (
          <motion.article
            key={screen.title}
            className={`catalog-card catalog-card-${(index % 8) + 1}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
          >
            <div className="catalog-card-meta">
              <span>0{index + 1}</span>
              <span>{screenAreas[index] ?? "Explore"}</span>
            </div>
            <AppFrame src={screen.image} alt={screen.alt} size="showcase" />
            <div className="catalog-card-copy">
              <h3>{screen.title}</h3>
              <p>{screen.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
