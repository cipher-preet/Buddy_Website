"use client";

import Link from "next/link";
import { useState } from "react";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { siteConfig } from "@/lib/site";
import {
  getKukuNotesPlatforms,
  getKukuNotesEcosystemFeatures,
  getKukuNotesFaqs,
  getKukuNotesRequirements,
  type PlatformItem,
} from "@/lib/get-kukunotes-data";

// ─── Official React Icons ───────────────────────────────────────────────────
import {
  FaGooglePlay,
  FaAndroid,
  FaApple,
  FaWindows,
  FaChrome,
} from "react-icons/fa6";
import {
  HiCheck,
  HiShieldCheck,
  HiArrowUpRight,
  HiArrowRight,
  HiSparkles,
  HiDevicePhoneMobile,
  HiComputerDesktop,
  HiGlobeAlt,
} from "react-icons/hi2";
import {
  RiCloudLine,
  RiRefreshLine,
  RiFlashlightLine,
} from "react-icons/ri";
import { TbWorld, TbDevices } from "react-icons/tb";
import { FaqItem } from "@/components/home/FaqItem";

// ─── Platform Icon Component ──────────────────────────────────────────────────

function PlatformBrandIcon({ id }: { id: PlatformItem["id"] }) {
  switch (id) {
    case "android":
      return (
        <div className="platform-brand-badge platform-brand-badge--android">
          <FaGooglePlay className="platform-icon" />
          <FaAndroid className="platform-sub-icon" />
        </div>
      );
    case "desktop":
      return (
        <div className="platform-brand-badge platform-brand-badge--desktop">
          <FaApple className="platform-icon" />
          <FaWindows className="platform-sub-icon" />
        </div>
      );
    case "chrome":
      return (
        <div className="platform-brand-badge platform-brand-badge--chrome">
          <FaChrome className="platform-icon" />
        </div>
      );
    case "web":
      return (
        <div className="platform-brand-badge platform-brand-badge--web">
          <TbWorld className="platform-icon" />
          <RiCloudLine className="platform-sub-icon" />
        </div>
      );
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GetKukuNotesPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "android" | "desktop" | "chrome" | "web">("all");

  const filteredPlatforms =
    activeFilter === "all"
      ? getKukuNotesPlatforms
      : getKukuNotesPlatforms.filter((p) => p.id === activeFilter);

  return (
    <div className="site-shell studio-page">
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />

      <main className="studio get-kukunotes-page">

        {/* ── Hero ── */}
        <section className="get-kukunotes-hero" aria-labelledby="get-kukunotes-title">
          <Reveal className="get-kukunotes-hero-copy">
            <div className="get-kukunotes-kicker-wrap">
              <span className="get-kukunotes-beacon" aria-hidden="true" />
              <p className="studio-kicker">Cross-Platform AI Companion</p>
            </div>
            <h1 id="get-kukunotes-title">
              Available wherever you<br />
              <span className="brand-gradient-text">talk, think, and work.</span>
            </h1>
            <p className="studio-section-lead get-kukunotes-hero-lead">
              Capture live conversations, auto-generate action items, and sync
              dedicated spaces seamlessly across your phone, desktop, browser, and cloud.
            </p>
          </Reveal>

          {/* Platform Filters */}
          <Reveal className="get-kukunotes-filter-bar" variant="scale" delay={0.06}>
            <div className="get-kukunotes-filters" role="group" aria-label="Filter platforms">
              <button
                type="button"
                className={`get-kukunotes-filter-btn${activeFilter === "all" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                <TbDevices className="filter-icon" />
                <span>All Platforms (4)</span>
              </button>
              <button
                type="button"
                className={`get-kukunotes-filter-btn${activeFilter === "android" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("android")}
              >
                <FaGooglePlay className="filter-icon" />
                <span>Mobile App</span>
              </button>
              <button
                type="button"
                className={`get-kukunotes-filter-btn${activeFilter === "desktop" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("desktop")}
              >
                <HiComputerDesktop className="filter-icon" />
                <span>Desktop (Mac/Win)</span>
              </button>
              <button
                type="button"
                className={`get-kukunotes-filter-btn${activeFilter === "chrome" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("chrome")}
              >
                <FaChrome className="filter-icon" />
                <span>Chrome Extension</span>
              </button>
              <button
                type="button"
                className={`get-kukunotes-filter-btn${activeFilter === "web" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("web")}
              >
                <TbWorld className="filter-icon" />
                <span>Web App</span>
              </button>
            </div>
          </Reveal>

          {/* Quick Value Metrics */}
          <Reveal className="get-kukunotes-trust-row" delay={0.1}>
            <div className="get-kukunotes-trust-pill">
              <HiShieldCheck className="trust-icon" />
              <span>Zero-Bot Privacy</span>
            </div>
            <span className="get-kukunotes-trust-dot" aria-hidden="true">•</span>
            <div className="get-kukunotes-trust-pill">
              <HiGlobeAlt className="trust-icon" />
              <span>11 Indian Languages</span>
            </div>
            <span className="get-kukunotes-trust-dot" aria-hidden="true">•</span>
            <div className="get-kukunotes-trust-pill">
              <RiRefreshLine className="trust-icon" />
              <span>Real-Time Cloud Sync</span>
            </div>
            <span className="get-kukunotes-trust-dot" aria-hidden="true">•</span>
            <div className="get-kukunotes-trust-pill">
              <HiSparkles className="trust-icon" />
              <span>Free to Start</span>
            </div>
          </Reveal>
        </section>

        {/* ── 4 Platform Showcase Cards Grid ── */}
        <section className="get-kukunotes-grid-section" aria-label="Download options">
          <div className="get-kukunotes-grid">
            {filteredPlatforms.map((platform, i) => (
              <Reveal
                key={platform.id}
                className={`get-kukunotes-card get-kukunotes-card--${platform.id}${
                  platform.id === "android" ? " get-kukunotes-card--featured" : ""
                }`}
                variant="scale"
                delay={i * 0.08}
              >
                {/* Header with platform brand icon & status badge */}
                <div className="get-kukunotes-card-top">
                  <PlatformBrandIcon id={platform.id} />
                  <div className="get-kukunotes-badge-wrap">
                    <span className={`get-kukunotes-badge get-kukunotes-badge--${platform.badgeType}`}>
                      {platform.badgeType === "live" && <span className="badge-beacon-dot" />}
                      {platform.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Platform Tagline */}
                <div className="get-kukunotes-card-header">
                  <p className="get-kukunotes-card-category">{platform.category}</p>
                  <h2 className="get-kukunotes-card-title">{platform.title}</h2>
                  <p className="get-kukunotes-card-tagline">{platform.tagline}</p>
                </div>

                {/* Metrics / Compatibility banner */}
                <div className="get-kukunotes-card-meta">
                  <span className="get-kukunotes-meta-highlight">{platform.metrics}</span>
                  <span className="get-kukunotes-meta-compat">{platform.compatibility}</span>
                </div>

                {/* Primary CTA Button */}
                <div className="get-kukunotes-card-actions">
                  <a
                    className={`get-kukunotes-cta-btn${
                      platform.id === "android"
                        ? " get-kukunotes-cta-btn--primary"
                        : platform.id === "desktop"
                        ? " get-kukunotes-cta-btn--desktop"
                        : platform.id === "chrome"
                        ? " get-kukunotes-cta-btn--chrome"
                        : " get-kukunotes-cta-btn--ghost"
                    }`}
                    href={platform.primaryCta.href}
                    target={platform.primaryCta.isExternal ? "_blank" : undefined}
                    rel={platform.primaryCta.isExternal ? "noopener noreferrer" : undefined}
                    id={`download-cta-${platform.id}`}
                  >
                    {platform.id === "android" && <FaGooglePlay className="cta-icon" />}
                    {platform.id === "desktop" && <HiComputerDesktop className="cta-icon" />}
                    {platform.id === "chrome" && <FaChrome className="cta-icon" />}
                    {platform.id === "web" && <TbWorld className="cta-icon" />}
                    <span>{platform.primaryCta.label}</span>
                    <HiArrowUpRight className="cta-arrow" />
                  </a>
                </div>

                {/* Feature Highlights */}
                <div className="get-kukunotes-highlights-wrap">
                  <p className="get-kukunotes-highlights-title">Key Capabilities</p>
                  <ul className="get-kukunotes-highlights-list" role="list">
                    {platform.highlights.map((item) => (
                      <li key={item} className="get-kukunotes-highlight-item">
                        <span className="highlight-check-wrap" aria-hidden="true">
                          <HiCheck className="highlight-check-icon" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags Footer */}
                <div className="get-kukunotes-card-footer">
                  <div className="get-kukunotes-tags">
                    {platform.tags.map((tag) => (
                      <span key={tag} className="get-kukunotes-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Unified Ecosystem Architecture Strip ── */}
        <section className="get-kukunotes-ecosystem-section" aria-labelledby="ecosystem-title">
          <Reveal className="get-kukunotes-ecosystem-header">
            <p className="studio-kicker">Unified Architecture</p>
            <h2 id="ecosystem-title">Your notes. Everywhere you go.</h2>
            <p className="studio-section-lead">
              Your conversations are never locked to a single device. Start recording on
              Chrome during a team standup, review your action list on your Android commute,
              and organize long-term space goals on Desktop.
            </p>
          </Reveal>

          <div className="get-kukunotes-ecosystem-grid">
            {getKukuNotesEcosystemFeatures.map((feat, i) => (
              <Reveal
                key={feat.title}
                className="get-kukunotes-ecosystem-card"
                variant="fade-up"
                delay={i * 0.06}
              >
                <div className="ecosystem-icon-box">
                  {feat.icon === "sync" && <RiRefreshLine className="ecosystem-icon" />}
                  {feat.icon === "shield" && <HiShieldCheck className="ecosystem-icon" />}
                  {feat.icon === "globe" && <HiGlobeAlt className="ecosystem-icon" />}
                  {feat.icon === "zap" && <RiFlashlightLine className="ecosystem-icon" />}
                </div>
                <h3 className="ecosystem-card-title">{feat.title}</h3>
                <p className="ecosystem-card-desc">{feat.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── System Requirements Matrix ── */}
        <section
          id="system-requirements"
          className="get-kukunotes-specs-section"
          aria-labelledby="specs-title"
        >
          <Reveal className="get-kukunotes-specs-header">
            <p className="studio-kicker">Specifications</p>
            <h2 id="specs-title">System & Compatibility Guide</h2>
            <p className="studio-section-lead">
              Engineered for low battery impact, lightweight memory footprint, and high-speed local processing.
            </p>
          </Reveal>

          <Reveal className="get-kukunotes-specs-table-wrap" delay={0.06}>
            <div className="get-kukunotes-specs-table" role="table" aria-label="System requirements">
              <div className="specs-table-row specs-table-row--head" role="row">
                <div className="specs-col specs-col--platform" role="columnheader">Platform</div>
                <div className="specs-col specs-col--spec" role="columnheader">Min Operating System</div>
                <div className="specs-col specs-col--size" role="columnheader">App Footprint</div>
                <div className="specs-col specs-col--perms" role="columnheader">Audio & Permissions</div>
              </div>
              {getKukuNotesRequirements.map((req) => (
                <div key={req.platform} className="specs-table-row" role="row">
                  <div className="specs-col specs-col--platform" role="cell">
                    <strong>{req.platform}</strong>
                  </div>
                  <div className="specs-col specs-col--spec" role="cell">
                    {req.spec}
                  </div>
                  <div className="specs-col specs-col--size" role="cell">
                    <span className="specs-size-badge">{req.storage}</span>
                  </div>
                  <div className="specs-col specs-col--perms" role="cell">
                    {req.features}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── FAQ Section ── */}
        <section id="faq-permissions" className="pricing-faq-section" aria-labelledby="get-kukunotes-faq-title">
          <Reveal className="pricing-faq-header">
            <p className="studio-kicker">Got Questions?</p>
            <h2 id="get-kukunotes-faq-title">Installation & Privacy FAQ</h2>
          </Reveal>
          <Reveal className="pricing-faq-list" delay={0.06}>
            {getKukuNotesFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </Reveal>
        </section>

        {/* ── Bottom CTA Card ── */}
        <section className="studio-invite-section" aria-labelledby="get-kukunotes-cta-title">
          <Reveal className="studio-invite-card" variant="scale">
            <p className="studio-kicker studio-invite-kicker">Get Started in Seconds</p>
            <h2 id="get-kukunotes-cta-title">
              Ready to bring KukuNotes into your next conversation?
            </h2>
            <p className="studio-invite-lead">
              Install KukuNotes on Android and experience the power of opt-in AI listening, automated note synthesis, and structured space memory.
            </p>
            <div className="studio-invite-actions">
              <a
                className="studio-btn studio-btn-accent"
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-kukunotes-bottom-download"
              >
                <FaGooglePlay style={{ marginRight: 8, fontSize: "1.1rem" }} />
                <span>Download on Google Play</span>
                <HiArrowUpRight style={{ marginLeft: 6 }} />
              </a>
              <Link className="studio-btn studio-btn-ink" href="/pricing" id="get-kukunotes-bottom-pricing">
                <span>Explore Pro & Business Plans</span>
                <HiArrowRight style={{ marginLeft: 6 }} />
              </Link>
            </div>
          </Reveal>
        </section>

      </main>
      <KukuNotesFooter />
    </div>
  );
}
