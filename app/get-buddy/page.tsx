"use client";

import Link from "next/link";
import { useState } from "react";
import { BuddyFooter } from "@/components/home/BuddyFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { siteConfig } from "@/lib/site";
import {
  getBuddyPlatforms,
  getBuddyEcosystemFeatures,
  getBuddyFaqs,
  getBuddyRequirements,
  type PlatformItem,
} from "@/lib/get-buddy-data";

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

export default function GetBuddyPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "android" | "desktop" | "chrome" | "web">("all");

  const filteredPlatforms =
    activeFilter === "all"
      ? getBuddyPlatforms
      : getBuddyPlatforms.filter((p) => p.id === activeFilter);

  return (
    <div className="site-shell studio-page">
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />

      <main className="studio get-buddy-page">

        {/* ── Hero ── */}
        <section className="get-buddy-hero" aria-labelledby="get-buddy-title">
          <Reveal className="get-buddy-hero-copy">
            <div className="get-buddy-kicker-wrap">
              <span className="get-buddy-beacon" aria-hidden="true" />
              <p className="studio-kicker">Cross-Platform AI Companion</p>
            </div>
            <h1 id="get-buddy-title">
              Available wherever you<br />
              talk, think, and work.
            </h1>
            <p className="studio-section-lead get-buddy-hero-lead">
              Capture live conversations, auto-generate action items, and sync
              dedicated spaces seamlessly across your phone, desktop, browser, and cloud.
            </p>
          </Reveal>

          {/* Platform Filters */}
          <Reveal className="get-buddy-filter-bar" variant="scale" delay={0.06}>
            <div className="get-buddy-filters" role="group" aria-label="Filter platforms">
              <button
                type="button"
                className={`get-buddy-filter-btn${activeFilter === "all" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                <TbDevices className="filter-icon" />
                <span>All Platforms (4)</span>
              </button>
              <button
                type="button"
                className={`get-buddy-filter-btn${activeFilter === "android" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("android")}
              >
                <FaGooglePlay className="filter-icon" />
                <span>Mobile App</span>
              </button>
              <button
                type="button"
                className={`get-buddy-filter-btn${activeFilter === "desktop" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("desktop")}
              >
                <HiComputerDesktop className="filter-icon" />
                <span>Desktop (Mac/Win)</span>
              </button>
              <button
                type="button"
                className={`get-buddy-filter-btn${activeFilter === "chrome" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("chrome")}
              >
                <FaChrome className="filter-icon" />
                <span>Chrome Extension</span>
              </button>
              <button
                type="button"
                className={`get-buddy-filter-btn${activeFilter === "web" ? " is-active" : ""}`}
                onClick={() => setActiveFilter("web")}
              >
                <TbWorld className="filter-icon" />
                <span>Web App</span>
              </button>
            </div>
          </Reveal>

          {/* Quick Value Metrics */}
          <Reveal className="get-buddy-trust-row" delay={0.1}>
            <div className="get-buddy-trust-pill">
              <HiShieldCheck className="trust-icon" />
              <span>Zero-Bot Privacy</span>
            </div>
            <span className="get-buddy-trust-dot" aria-hidden="true">•</span>
            <div className="get-buddy-trust-pill">
              <HiGlobeAlt className="trust-icon" />
              <span>11 Indian Languages</span>
            </div>
            <span className="get-buddy-trust-dot" aria-hidden="true">•</span>
            <div className="get-buddy-trust-pill">
              <RiRefreshLine className="trust-icon" />
              <span>Real-Time Cloud Sync</span>
            </div>
            <span className="get-buddy-trust-dot" aria-hidden="true">•</span>
            <div className="get-buddy-trust-pill">
              <HiSparkles className="trust-icon" />
              <span>Free to Start</span>
            </div>
          </Reveal>
        </section>

        {/* ── 4 Platform Showcase Cards Grid ── */}
        <section className="get-buddy-grid-section" aria-label="Download options">
          <div className="get-buddy-grid">
            {filteredPlatforms.map((platform, i) => (
              <Reveal
                key={platform.id}
                className={`get-buddy-card get-buddy-card--${platform.id}${
                  platform.id === "android" ? " get-buddy-card--featured" : ""
                }`}
                variant="scale"
                delay={i * 0.08}
              >
                {/* Header with platform brand icon & status badge */}
                <div className="get-buddy-card-top">
                  <PlatformBrandIcon id={platform.id} />
                  <div className="get-buddy-badge-wrap">
                    <span className={`get-buddy-badge get-buddy-badge--${platform.badgeType}`}>
                      {platform.badgeType === "live" && <span className="badge-beacon-dot" />}
                      {platform.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Platform Tagline */}
                <div className="get-buddy-card-header">
                  <p className="get-buddy-card-category">{platform.category}</p>
                  <h2 className="get-buddy-card-title">{platform.title}</h2>
                  <p className="get-buddy-card-tagline">{platform.tagline}</p>
                </div>

                {/* Metrics / Compatibility banner */}
                <div className="get-buddy-card-meta">
                  <span className="get-buddy-meta-highlight">{platform.metrics}</span>
                  <span className="get-buddy-meta-compat">{platform.compatibility}</span>
                </div>

                {/* Primary CTA Button */}
                <div className="get-buddy-card-actions">
                  <a
                    className={`get-buddy-cta-btn${
                      platform.id === "android"
                        ? " get-buddy-cta-btn--primary"
                        : platform.id === "desktop"
                        ? " get-buddy-cta-btn--desktop"
                        : platform.id === "chrome"
                        ? " get-buddy-cta-btn--chrome"
                        : " get-buddy-cta-btn--ghost"
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
                <div className="get-buddy-highlights-wrap">
                  <p className="get-buddy-highlights-title">Key Capabilities</p>
                  <ul className="get-buddy-highlights-list" role="list">
                    {platform.highlights.map((item) => (
                      <li key={item} className="get-buddy-highlight-item">
                        <span className="highlight-check-wrap" aria-hidden="true">
                          <HiCheck className="highlight-check-icon" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags Footer */}
                <div className="get-buddy-card-footer">
                  <div className="get-buddy-tags">
                    {platform.tags.map((tag) => (
                      <span key={tag} className="get-buddy-tag-pill">
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
        <section className="get-buddy-ecosystem-section" aria-labelledby="ecosystem-title">
          <Reveal className="get-buddy-ecosystem-header">
            <p className="studio-kicker">Unified Architecture</p>
            <h2 id="ecosystem-title">One Buddy. Everywhere you go.</h2>
            <p className="studio-section-lead">
              Your conversations are never locked to a single device. Start recording on
              Chrome during a team standup, review your action list on your Android commute,
              and organize long-term space goals on Desktop.
            </p>
          </Reveal>

          <div className="get-buddy-ecosystem-grid">
            {getBuddyEcosystemFeatures.map((feat, i) => (
              <Reveal
                key={feat.title}
                className="get-buddy-ecosystem-card"
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
          className="get-buddy-specs-section"
          aria-labelledby="specs-title"
        >
          <Reveal className="get-buddy-specs-header">
            <p className="studio-kicker">Specifications</p>
            <h2 id="specs-title">System & Compatibility Guide</h2>
            <p className="studio-section-lead">
              Engineered for low battery impact, lightweight memory footprint, and high-speed local processing.
            </p>
          </Reveal>

          <Reveal className="get-buddy-specs-table-wrap" delay={0.06}>
            <div className="get-buddy-specs-table" role="table" aria-label="System requirements">
              <div className="specs-table-row specs-table-row--head" role="row">
                <div className="specs-col specs-col--platform" role="columnheader">Platform</div>
                <div className="specs-col specs-col--spec" role="columnheader">Min Operating System</div>
                <div className="specs-col specs-col--size" role="columnheader">App Footprint</div>
                <div className="specs-col specs-col--perms" role="columnheader">Audio & Permissions</div>
              </div>
              {getBuddyRequirements.map((req) => (
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
        <section id="faq-permissions" className="pricing-faq-section" aria-labelledby="get-buddy-faq-title">
          <Reveal className="pricing-faq-header">
            <p className="studio-kicker">Got Questions?</p>
            <h2 id="get-buddy-faq-title">Installation & Privacy FAQ</h2>
          </Reveal>
          <Reveal className="pricing-faq-list" delay={0.06}>
            {getBuddyFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </Reveal>
        </section>

        {/* ── Bottom CTA Card ── */}
        <section className="studio-invite-section" aria-labelledby="get-buddy-cta-title">
          <Reveal className="studio-invite-card" variant="scale">
            <p className="studio-kicker studio-invite-kicker">Get Started in Seconds</p>
            <h2 id="get-buddy-cta-title">
              Ready to bring Buddy into your next conversation?
            </h2>
            <p className="studio-invite-lead">
              Install Buddy on Android and experience the power of opt-in AI listening, automated note synthesis, and structured space memory.
            </p>
            <div className="studio-invite-actions">
              <a
                className="studio-btn studio-btn-accent"
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-buddy-bottom-download"
              >
                <FaGooglePlay style={{ marginRight: 8, fontSize: "1.1rem" }} />
                <span>Download on Google Play</span>
                <HiArrowUpRight style={{ marginLeft: 6 }} />
              </a>
              <Link className="studio-btn studio-btn-ink" href="/pricing" id="get-buddy-bottom-pricing">
                <span>Explore Pro & Business Plans</span>
                <HiArrowRight style={{ marginLeft: 6 }} />
              </Link>
            </div>
          </Reveal>
        </section>

      </main>
      <BuddyFooter />
    </div>
  );
}
