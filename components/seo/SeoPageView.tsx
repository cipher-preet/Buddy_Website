import Link from "next/link";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { definitionFacts, definitionLead, priceCopy } from "@/lib/product-facts";
import { competitorNote, type SeoPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";
import { ExplainerVideo, type ExplainerClip } from "./ExplainerVideo";
import { FeatureMotion, type MotionScene } from "./FeatureMotion";

function firstSentence(text: string) {
  const match = text.match(/^.{1,160}?[.!?](\s|$)/);
  return match ? match[0].trim() : text.slice(0, 140).trim();
}

type SeoPageViewProps = {
  page: SeoPage;
  jsonLd: Record<string, unknown>;
  breadcrumb?: { label: string; href: string };
};

const sectionScenes: MotionScene[] = ["notes", "tasks", "spaces", "ask"];

function clipFor(slug: string): ExplainerClip {
  if (slug.includes("lecture")) return "lecture";
  if (slug.includes("assistant")) return "ask";
  if (slug.includes("meeting")) return "meeting";
  return "notes";
}

const updatedLabel = new Date(siteConfig.contentUpdated).toLocaleDateString("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function SeoPageView({ page, jsonLd, breadcrumb }: SeoPageViewProps) {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={jsonLd} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="studio seo-page" id="main-content">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {breadcrumb ? (
            <>
              <span aria-hidden="true">/</span>
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            </>
          ) : null}
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.kicker}</span>
        </nav>

        <section className="seo-hero" aria-labelledby="seo-title">
          <div className="seo-hero-copy">
            <p className="studio-kicker">{page.kicker}</p>
            <h1 id="seo-title">
              {page.h1} <span className="brand-gradient-text">{page.h1Accent}</span>
            </h1>
            <p className="studio-section-lead">{firstSentence(page.lead)}</p>
            <div className="seo-hero-actions">
              <a
                className="studio-btn studio-btn-accent"
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get KukuNotes free on Google Play
              </a>
              <Link className="studio-text-link" href="/pricing">
                See pricing <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </div>
          <ExplainerVideo clip={clipFor(page.slug)} />
        </section>

        <section className="seo-answer seo-split" aria-label="Quick answer">
          <div>
            <p className="seo-answer-label">What is KukuNotes</p>
            <p>{firstSentence(definitionLead)}</p>
            <p>{firstSentence(definitionFacts)}</p>
            <p className="seo-answer-label">Quick answer</p>
            <p>{firstSentence(page.answer)}</p>
            <p className="seo-updated">
              Last updated <time dateTime={siteConfig.contentUpdated}>{updatedLabel}</time>
            </p>
          </div>
          <FeatureMotion scene="shield" />
        </section>

        {page.comparison ? (
          <section className="seo-block" aria-labelledby="seo-compare-title">
            <div className="seo-split">
              <h2 id="seo-compare-title">
                KukuNotes vs {page.comparison.competitor} at a glance
              </h2>
              <FeatureMotion scene="devices" compact />
            </div>
            <div className="seo-table-wrap">
              <table className="seo-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">KukuNotes</th>
                    <th scope="col">{page.comparison.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.rows.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>{row.kukunotes}</td>
                      <td>{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="seo-choose">
              <div>
                <h3>Choose KukuNotes if</h3>
                <ul>
                  {page.comparison.chooseKukuNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Choose {page.comparison.competitor} if</h3>
                <ul>
                  {page.comparison.chooseCompetitor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {page.sections.map((section, index) => (
          <Reveal key={section.heading} className="seo-block seo-split">
            <div>
              <h2>{section.heading}</h2>
              <p>{firstSentence(section.body[0] ?? "")}</p>
            </div>
            <FeatureMotion scene={sectionScenes[index % sectionScenes.length]} />
          </Reveal>
        ))}

        {page.steps ? (
          <section className="seo-block seo-split" aria-labelledby="seo-steps-title">
            <div>
            <h2 id="seo-steps-title">How it works</h2>
            <ol className="seo-steps">
              {page.steps.map((step, index) => (
                <li key={step.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
            </div>
            <FeatureMotion scene="capture" />
          </section>
        ) : null}

        {page.localized ? (
          <section className="seo-block seo-localized" lang={page.localized.lang}>
            <h2>{page.localized.heading}</h2>
            {page.localized.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ) : null}

        <section className="seo-block seo-split" aria-labelledby="seo-faq-title">
          <div>
          <h2 id="seo-faq-title">Frequently asked questions</h2>
          <div className="studio-faq-list">
            {page.faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>
                  {faq.q}
                  <span aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
          </div>
          <FeatureMotion scene="ask" />
        </section>

        <nav className="seo-block seo-related seo-split" aria-labelledby="seo-related-title">
          <div>
            <h2 id="seo-related-title">Related</h2>
            <ul>
              {page.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    {link.label} <span aria-hidden="true">-&gt;</span>
                  </Link>
                </li>
              ))}
            </ul>
            {page.comparison ? <p className="seo-note">{competitorNote}</p> : null}
          </div>
          <FeatureMotion scene="spaces" />
        </nav>

        <section className="studio-invite-section" aria-labelledby="seo-cta-title">
          <div className="studio-invite-card">
            <p className="studio-kicker studio-invite-kicker">Start free</p>
            <h2 id="seo-cta-title">Keep every conversation that matters.</h2>
            <p className="studio-invite-lead">
              {priceCopy.freeHours}. It supports many languages.
            </p>
            <div className="studio-invite-actions">
              <a
                className="studio-btn studio-btn-accent"
                href={siteConfig.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get KukuNotes for Android
              </a>
            </div>
          </div>
        </section>
      </main>
      <KukuNotesFooter />
    </div>
  );
}
