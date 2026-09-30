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
  pricingPlans,
  comparisonCategories,
  pricingFaqs,
  ALL_INDIAN_LANGUAGES,
  type BillingCycle,
} from "@/lib/pricing-data";

// ─── Official React Icons ───────────────────────────────────────────────────
import {
  HiCheck,
  HiXMark,
  HiSparkles,
  HiShieldCheck,
  HiArrowUpRight,
  HiArrowRight,
} from "react-icons/hi2";
import { FaCrown, FaGooglePlay } from "react-icons/fa6";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaqItem } from "@/components/home/FaqItem";

// ─── Billing Toggle ───────────────────────────────────────────────────────────

function BillingToggle({ value, onChange }: { value: BillingCycle; onChange: (v: BillingCycle) => void }) {
  return (
    <div className="plan-toggle" role="group" aria-label="Billing cycle">
      {(["monthly", "quarterly"] as BillingCycle[]).map((cycle) => (
        <button
          key={cycle}
          type="button"
          className={`plan-toggle-btn${value === cycle ? " is-active" : ""}`}
          onClick={() => onChange(cycle)}
          aria-pressed={value === cycle}
        >
          <span>{cycle === "monthly" ? "Monthly" : "Quarterly"}</span>
          {cycle === "quarterly" && <span className="plan-toggle-discount">Save 22%</span>}
        </button>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  return (
    <div className="site-shell studio-page">
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />

      <main className="studio pricing-page">

        {/* ── Hero ── */}
        <section className="pricing-hero" aria-labelledby="pricing-title">
          <Reveal className="pricing-hero-copy" style={{ textAlign: "center", margin: "0 auto" }}>
            <p className="studio-kicker" style={{ textAlign: "center" }}>Simple, Transparent Pricing</p>
            <h1 id="pricing-title" style={{ textAlign: "center" }}>
              Start free.<br />
              Upgrade when you&apos;re ready.
            </h1>
            <p className="pricing-hero-lead" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", display: "block" }}>
              Capture conversations, extract actions, and organize spaces.
              Start completely free on Android, upgrade for unlimited intelligence.
            </p>
          </Reveal>
          <Reveal className="pricing-hero-toggle" variant="scale" delay={0.06}>
            <BillingToggle value={billing} onChange={setBilling} />
          </Reveal>
        </section>

        {/* ── Plan Cards Grid ── */}
        <section className="plan-cards-section" aria-label="Available plans">
          <div className="plan-cards-grid">
            {pricingPlans.map((plan, i) => {
              const price = billing === "monthly" ? plan.formattedPrices.monthly : plan.formattedPrices.quarterly;
              const cadence = plan.id === "free" ? "forever" : billing === "monthly" ? "/ mo" : "/ quarter";
              const effective = billing === "quarterly" && plan.id !== "free" ? `${plan.effectiveMonthly.quarterly} / mo effective` : null;

              return (
                <Reveal
                  key={plan.id}
                  className={`plan-card plan-card--${plan.id}${plan.isPopular ? " plan-card--popular" : ""}`}
                  variant="scale"
                  delay={i * 0.07}
                >
                  {/* Top Badge Header */}
                  <div className="plan-card-topbar">
                    {plan.badge ? (
                      <span className="plan-card-badge">
                        {plan.id === "business" ? (
                          <FaCrown className="plan-badge-icon" />
                        ) : (
                          <HiSparkles className="plan-badge-icon" />
                        )}
                        {plan.badge}
                      </span>
                    ) : (
                      <span className="plan-card-badge-placeholder" aria-hidden="true" />
                    )}
                  </div>

                  {/* Plan Name & Tagline */}
                  <div className="plan-card-header">
                    <h2 className="plan-card-name">{plan.name}</h2>
                    <p className="plan-card-tagline">{plan.tagline}</p>
                  </div>

                  {/* Price Block */}
                  <div className="plan-card-price-block">
                    <div className="plan-card-price-row">
                      <span className="plan-card-amount">{price}</span>
                      <span className="plan-card-cadence">{cadence}</span>
                    </div>
                    <div className="plan-card-subprice">
                      {plan.id === "free" ? (
                        <span className="plan-subprice-muted">No credit card required</span>
                      ) : effective ? (
                        <span className="plan-subprice-save">{effective} · {plan.savings}</span>
                      ) : (
                        <span className="plan-subprice-muted">Billed monthly, cancel anytime</span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    className={`plan-card-cta${
                      plan.isPopular ? " plan-cta--popular" :
                      plan.id === "business" ? " plan-cta--business" :
                      " plan-cta--free"
                    }`}
                    href={plan.ctaHref}
                    target={plan.isExternal ? "_blank" : undefined}
                    rel={plan.isExternal ? "noopener noreferrer" : undefined}
                    id={`pricing-cta-${plan.id}`}
                  >
                    <span>{plan.ctaLabel}</span>
                    {plan.isExternal && <HiArrowUpRight className="plan-cta-arrow-icon" />}
                  </a>

                  {/* Key Limits Bar */}
                  <div className="plan-limits-strip">
                    <div className="plan-limit-item">
                      <span className="plan-limit-val">{plan.limits.spaces}</span>
                      <span className="plan-limit-key">Spaces</span>
                    </div>
                    <span className="plan-limit-dot" aria-hidden="true">·</span>
                    <div className="plan-limit-item">
                      <span className="plan-limit-val">{plan.limits.recording}</span>
                      <span className="plan-limit-key">Audio</span>
                    </div>
                    <span className="plan-limit-dot" aria-hidden="true">·</span>
                    <div className="plan-limit-item">
                      <span className="plan-limit-val">{plan.limits.notes}</span>
                      <span className="plan-limit-key">Notes</span>
                    </div>
                  </div>

                  {/* Feature Section */}
                  <div className="plan-features-heading">
                    <span>What&apos;s included</span>
                  </div>

                  <ul className="plan-features-list" role="list">
                    {plan.features.map((feat) => (
                      <li
                        key={feat.text}
                        className={`plan-feature-item${!feat.included ? " is-disabled" : ""}${feat.highlight ? " is-highlight" : ""}`}
                      >
                        <span className="plan-feature-icon" aria-hidden="true">
                          {feat.included ? (
                            feat.highlight ? (
                              <BsCheckCircleFill className="plan-icon-check" />
                            ) : (
                              <HiCheck className="plan-icon-check" />
                            )
                          ) : (
                            <HiXMark className="plan-icon-cross" />
                          )}
                        </span>
                        <span className="plan-feature-text">{feat.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Languages Footer */}
                  <div className="plan-card-footer">
                    <p className="plan-langs-title">
                      {plan.id === "business" ? "All 11 Indian Languages Included" : "Languages Included"}
                    </p>
                    <div className="plan-langs-wrap">
                      {plan.id === "business" ? (
                        <>
                          <span className="plan-lang-chip plan-lang-chip--gold">English</span>
                          <span className="plan-lang-chip plan-lang-chip--gold">Hindi</span>
                          <span className="plan-lang-chip plan-lang-chip--gold">+ 9 Regional Languages</span>
                        </>
                      ) : (
                        <>
                          <span className="plan-lang-chip">English</span>
                          <span className="plan-lang-chip">Hindi</span>
                        </>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Trust Banner */}
          <Reveal className="plan-trust-banner">
            <div className="plan-trust-item">
              <HiShieldCheck className="plan-trust-icon" />
              <span>Payments secured by <strong>Razorpay</strong></span>
            </div>
            <span className="plan-trust-sep" aria-hidden="true">•</span>
            <div className="plan-trust-item">
              <span>UPI, Cards, NetBanking, & Wallets</span>
            </div>
            <span className="plan-trust-sep" aria-hidden="true">•</span>
            <div className="plan-trust-item">
              <span>Opt-in recording privacy · Cancel anytime</span>
            </div>
          </Reveal>
        </section>

        {/* ── Language Pack Section ── */}
        <section className="pricing-language-section" aria-labelledby="pricing-lang-title">
          <Reveal className="pricing-language-card">
            <div className="pricing-language-copy">
              <p className="studio-kicker">Regional AI Intelligence</p>
              <h2 id="pricing-lang-title">
                11 Indian languages,<br />
                one seamless memory.
              </h2>
              <p>
                Business plan unlocks Buddy&apos;s multilingual speech understanding.
                Listen, transcribe, and extract structured notes natively in your preferred regional language.
              </p>
              <a
                className="pricing-lang-action-btn"
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-lang-cta"
              >
                <span>Try Buddy free on Android</span>
                <HiArrowUpRight className="pricing-btn-arrow" />
              </a>
            </div>
            <div className="pricing-language-visual" aria-hidden="true">
              <div className="pricing-lang-grid">
                {ALL_INDIAN_LANGUAGES.map((lang) => (
                  <span key={lang} className="pricing-lang-pill">{lang}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Compare Table ── */}
        <section className="pricing-compare-section" aria-labelledby="pricing-compare-title">
          <Reveal className="pricing-compare-header">
            <p className="studio-kicker">Full Feature Breakdown</p>
            <h2 id="pricing-compare-title">Compare every detail.</h2>
            <p>
              Explore capacity, AI capabilities, language support, and team features across each plan.
            </p>
          </Reveal>

          <Reveal className="pricing-compare-wrap" delay={0.06}>
            <div className="pricing-compare-table" role="table" aria-label="Plan comparison">
              {/* Column headers */}
              <div className="pricing-compare-cols" role="row">
                <div className="pricing-compare-col-label" role="columnheader">Features</div>
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`pricing-compare-col-plan${plan.isPopular ? " pricing-compare-col-plan--popular" : ""}`}
                    role="columnheader"
                  >
                    {plan.isPopular && <span className="pricing-compare-popular-dot" />}
                    <span>{plan.name}</span>
                  </div>
                ))}
              </div>

              {/* Categories */}
              {comparisonCategories.map((cat) => (
                <div key={cat.category} className="pricing-compare-category" role="rowgroup">
                  <div className="pricing-compare-category-label">{cat.category}</div>
                  {cat.items.map((item) => (
                    <div key={item.name} className="pricing-compare-row" role="row">
                      <div className="pricing-compare-feature" role="cell">
                        <span className="pricing-compare-feature-name">{item.name}</span>
                        <span className="pricing-compare-feature-desc">{item.description}</span>
                      </div>
                      {(["free", "pro", "business"] as const).map((planId) => {
                        const plan = pricingPlans.find((p) => p.id === planId)!;
                        const val = item[planId];
                        return (
                          <div
                            key={planId}
                            className={`pricing-compare-val${plan.isPopular ? " pricing-compare-val--popular" : ""}`}
                            role="cell"
                          >
                            {typeof val === "boolean" ? (
                              val ? (
                                <span className="pricing-compare-check">
                                  <HiCheck className="compare-icon-check" />
                                </span>
                              ) : (
                                <span className="pricing-compare-cross">
                                  <HiXMark className="compare-icon-cross" />
                                </span>
                              )
                            ) : (
                              <span className="pricing-compare-text">{val}</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── FAQ ── */}
        <section className="pricing-faq-section" aria-labelledby="pricing-faq-title">
          <Reveal className="pricing-faq-header">
            <p className="studio-kicker">Frequently Asked</p>
            <h2 id="pricing-faq-title">Got questions about Buddy plans?</h2>
          </Reveal>
          <Reveal className="pricing-faq-list" delay={0.06}>
            {pricingFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </Reveal>
        </section>

        {/* ── CTA Band (100% Full Width Section) ── */}
        <section className="pricing-cta-fullwidth" aria-labelledby="pricing-cta-title">
          <div className="pricing-cta-container">
            <Reveal className="pricing-cta-inner" variant="scale">
              <p className="studio-kicker pricing-cta-kicker">Get started today</p>
              <h2 id="pricing-cta-title" className="pricing-cta-heading">
                Ready to give your conversations a reliable memory?
              </h2>
              <p className="pricing-cta-description">
                Download Buddy on Android and start organizing your work, projects, and ideas with intelligent listening.
              </p>
              <div className="pricing-cta-button-group">
                <a
                  className="pricing-cta-btn-primary"
                  href={siteConfig.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="pricing-cta-download"
                >
                  <FaGooglePlay className="pricing-cta-icon-googleplay" />
                  <span>Download Buddy for Android</span>
                  <HiArrowUpRight className="pricing-cta-icon-arrow" />
                </a>
                <Link className="pricing-cta-btn-secondary" href="/contact" id="pricing-cta-contact">
                  <span>Have custom team requirements? Contact us</span>
                  <HiArrowRight className="pricing-cta-icon-arrow" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <BuddyFooter />
    </div>
  );
}
