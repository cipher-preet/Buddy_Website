import Link from "next/link";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import type { DestinationPage } from "@/lib/destination-pages";
import { siteConfig } from "@/lib/site";
import { HiArrowUpRight, HiCheck } from "react-icons/hi2";
import { ExplainerVideo, type ExplainerClip } from "./ExplainerVideo";
import { FeatureMotion, type MotionScene } from "./FeatureMotion";

function firstSentence(text: string) {
  const match = text.match(/^.{1,160}?[.!?](\s|$)/);
  return match ? match[0].trim() : text.slice(0, 140).trim();
}

type DestinationPageViewProps = {
  page: DestinationPage;
  jsonLd: Record<string, unknown>;
};

const sectionScenes: MotionScene[] = ["capture", "notes", "tasks", "devices"];

function clipFor(slug: string): ExplainerClip {
  if (slug === "android" || slug === "windows" || slug === "chrome-extension") return "meeting";
  return "notes";
}

const updatedLabel = new Date(siteConfig.contentUpdated).toLocaleDateString("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function DestinationPageView({ page, jsonLd }: DestinationPageViewProps) {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={jsonLd} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="studio seo-page destination-page" id="main-content">
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
            <p className="studio-section-lead">{firstSentence(page.lead)}</p>
            <div className="seo-hero-actions">
              <a
                className="studio-btn studio-btn-accent"
                href={page.cta.href}
                target={page.cta.isExternal ? "_blank" : undefined}
                rel={page.cta.isExternal ? "noopener noreferrer" : undefined}
              >
                {page.cta.label}
                {page.cta.isExternal ? <HiArrowUpRight style={{ marginLeft: 6 }} aria-hidden="true" /> : null}
              </a>
              {page.secondaryCta ? (
                <Link className="studio-text-link" href={page.secondaryCta.href}>
                  {page.secondaryCta.label} <span aria-hidden="true">-&gt;</span>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="hero-visuals">
            <ExplainerVideo clip={clipFor(page.slug)} />
          </div>
        </section>

        <section className="seo-answer seo-split" aria-label="Direct answer">
          <div>
            <p className="seo-answer-label">In short</p>
            <p>{firstSentence(page.answer)}</p>
            <p className="seo-updated">Updated {updatedLabel}</p>
          </div>
          <FeatureMotion scene="shield" />
        </section>

        <section className="seo-block destination-highlights seo-split" aria-labelledby="highlights-title">
          <div>
          <h2 id="highlights-title">Key capabilities</h2>
          <ul className="destination-highlight-list" role="list">
            {page.highlights.map((item) => (
              <li key={item}>
                <HiCheck aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          </div>
          <FeatureMotion scene="devices" />
        </section>

        {page.sections.map((section, index) => (
          <Reveal key={section.heading} className="seo-block seo-split">
            <div>
              <h2>{section.heading}</h2>
              <p>{firstSentence(section.body[0] ?? "")}</p>
            </div>
            <FeatureMotion scene={sectionScenes[index % sectionScenes.length]} />
          </Reveal>
        ))}

        <section className="seo-block seo-split" aria-labelledby="destination-faq-title">
          <div>
          <h2 id="destination-faq-title">FAQ</h2>
          <div className="destination-faq-list">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="destination-faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
          </div>
          <FeatureMotion scene="ask" />
        </section>

        <nav className="seo-block seo-related seo-split" aria-labelledby="destination-related-title">
          <div>
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
          </div>
          <FeatureMotion scene="spaces" />
        </nav>
      </main>
      <KukuNotesFooter />
    </div>
  );
}
