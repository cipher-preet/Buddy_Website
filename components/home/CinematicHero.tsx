"use client";

import Link from "next/link";
import { useRef } from "react";
import { FaAndroid, FaChrome, FaWindows } from "react-icons/fa6";
import { HiGlobeAlt } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Action } from "@/components/marketing/UI";
import { ProductScreen } from "@/components/marketing/ProductScreen";

gsap.registerPlugin(useGSAP);

const platforms = [
  { href: "/android", label: "Android", icon: FaAndroid },
  { href: "/windows", label: "Windows", icon: FaWindows },
  { href: "/chrome-extension", label: "Chrome", icon: FaChrome },
  { href: "/platform", label: "Web", icon: HiGlobeAlt },
];

export function CinematicHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".v3-hero-copy", { y: 18, autoAlpha: 0, duration: 0.55 })
        .from(
          ".v3-hero-desktop",
          { y: 22, autoAlpha: 0, duration: 0.7 },
          0.12,
        )
        .from(
          ".v3-hero-phone",
          { y: 18, autoAlpha: 0, duration: 0.5 },
          0.28,
        );
    },
    { scope: root },
  );

  return (
    <section className="launch-hero v3-hero" aria-labelledby="home-title" ref={root}>
      <div className="container v3-hero-inner">
        <div className="v3-hero-grid">
          <div className="v3-hero-copy">
            <p className="eyebrow">KukuNotes</p>
            <h1 id="home-title">
              <span>Every conversation </span>
              <span>moves you forward.</span>
            </h1>
            <p>
              Turn conversations into notes, tasks, and connected progress.
            </p>
            <div className="v3-hero-actions">
              <Action>Start for free</Action>
              <a className="v3-hero-secondary" href="#product">
                See how it works
              </a>
            </div>
          </div>
          <div className="v3-hero-product">
            <div className="v3-hero-desktop">
              <ProductScreen
                src="/screenshots/desktop/workspace.webp"
                alt="KukuNotes workspace with Spaces, tasks, and progress"
                priority
                title="Workspace"
                sizes="(max-width: 700px) 1px, (max-width: 1100px) 62vw, 920px"
              />
            </div>
            <div className="v3-hero-phone">
              <ProductScreen
                src="/screenshots/android/capture.webp"
                alt="KukuNotes on Android during a user-started recording"
                kind="phone"
                priority
                sizes="(max-width: 700px) 270px, 200px"
              />
            </div>
          </div>
        </div>
        <div className="v3-hero-platforms">
          <span>Wherever the conversation happens.</span>
          <div>
            {platforms.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <Icon aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
