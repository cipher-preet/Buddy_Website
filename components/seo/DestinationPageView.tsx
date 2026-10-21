import Image from "next/image";
import Link from "next/link";
import { AppFrame } from "@/components/home/AppFrame";
import { GooglePlayCta } from "@/components/home/GooglePlayCta";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import type { DestinationPage } from "@/lib/destination-pages";
import { siteConfig } from "@/lib/site";
import { HiArrowUpRight, HiCheck } from "react-icons/hi2";

type DestinationPageViewProps = {
  page: DestinationPage;
  jsonLd: Record<string, unknown>;
};

const updatedLabel = new Date(siteConfig.contentUpdated).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function DestinationPageView({ page, jsonLd }: DestinationPageViewProps) {
  const isPhoneScreenshot = page.image.src.startsWith("/screenshots/") && !page.image.src.includes("/desktop/");

  return (
    <div className="site-shell studio-page">
      <JsonLd data={jsonLd} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="studio seo-page destination-page">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/get-kukunotes">Get KukuNotes</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.kicker}</span>
        </nav>

        <section className="seo-hero" aria-labelledby="destination-title">
          <div className="seo-hero-copy">
            <p className="studio-kicker">{page.kicker}</p>
            <p className="destination-badge">{page.badge}</p>
            <h1 id="destination-title">
              {page.h1} <span className="brand-gradient-text">{page.h1Accent}</span>
            </h1>
            <p className="studio-section-lead">{page.lead}</p>
            <div className="seo-hero-actions">
              {page.slug === "android" ? (
                <GooglePlayCta placement="hero" pageSlug="android" />
              ) : (
                <a
                  className="studio-btn studio-btn-accent"
                  href={page.cta.href}
                  target={page.cta.isExternal ? "_blank" : undefined}
                  rel={page.cta.isExternal ? "noopener noreferrer" : undefined}
                >
                  {page.cta.label}
                  {page.cta.isExternal ? <HiArrowUpRight style={{ marginLeft: 6 }} aria-hidden="true" /> : null}
                </a>
              )}
              {page.secondaryCta ? (
                <Link className="studio-text-link" href={page.secondaryCta.href}>
                  {page.secondaryCta.label} <span aria-hidden="true">-&gt;</span>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="seo-hero-visual">
            {isPhoneScreenshot ? (
              <AppFrame src={page.image.src} alt={page.image.alt} size="hero" />
            ) : (
              <Image
                className="seo-hero-image"
                src={page.image.src}
                alt={page.image.alt}
                width={1200}
                height={700}
                sizes="(max-width: 980px) 100vw, 560px"
                priority
              />
            )}
          </div>
        </section>

        <section className="seo-answer" aria-label="Direct answer">
          <p className="seo-answer-label">In short</p>
          <p>{page.answer}</p>
          <p className="seo-updated">Updated {updatedLabel}</p>
        </section>

        <section className="seo-block destination-highlights" aria-labelledby="highlights-title">
          <h2 id="highlights-title">Key capabilities</h2>
          <ul className="destination-highlight-list" role="list">
            {page.highlights.map((item) => (
              <li key={item}>
                <HiCheck aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {page.sections.map((section) => (
          <Reveal key={section.heading} className="seo-block">
            <h2>{section.heading}</h2>
            {section.body.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </Reveal>
        ))}

        <section className="seo-block" aria-labelledby="destination-faq-title">
          <h2 id="destination-faq-title">FAQ</h2>
          <div className="destination-faq-list">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="destination-faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <nav className="seo-block seo-related" aria-labelledby="destination-related-title">
          <h2 id="destination-related-title">Related</h2>
          <ul>
            {page.related.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  {link.label} <span aria-hidden="true">-&gt;</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {page.slug === "android" ? (
          <section className="studio-invite-section" aria-labelledby="android-cta-title">
            <div className="studio-invite-card">
              <p className="studio-kicker studio-invite-kicker">Google Play</p>
              <h2 id="android-cta-title">Get KukuNotes for Android.</h2>
              <p className="studio-invite-lead">
                Record meetings and in-person conversations. The Android app does not record phone calls.
              </p>
              <div className="studio-invite-actions">
                <GooglePlayCta placement="bottom" pageSlug="android" />
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <KukuNotesFooter />
    </div>
  );
}
