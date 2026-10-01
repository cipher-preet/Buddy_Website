import Image from "next/image";
import Link from "next/link";
import { AppFrame } from "@/components/home/AppFrame";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { competitorNote, type SeoPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

type SeoPageViewProps = {
  page: SeoPage;
  jsonLd: Record<string, unknown>;
  breadcrumb?: { label: string; href: string };
};

const updatedLabel = new Date(siteConfig.contentUpdated).toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function SeoPageView({ page, jsonLd, breadcrumb }: SeoPageViewProps) {
  const isPhoneScreenshot = page.image.src.startsWith("/screenshots/");

  return (
    <div className="site-shell studio-page">
      <JsonLd data={jsonLd} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="studio seo-page">
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
            <p className="studio-section-lead">{page.lead}</p>
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
          <div className="seo-hero-visual">
            {isPhoneScreenshot ? (
              <AppFrame src={page.image.src} alt={page.image.alt} size="hero" />
            ) : (
              <Image
                className="seo-hero-image"
                src={page.image.src}
                alt={page.image.alt}
                width={1200}
                height={800}
                sizes="(max-width: 980px) 100vw, 520px"
                priority
              />
            )}
          </div>
        </section>

        <section className="seo-answer" aria-label="Quick answer">
          <p className="seo-answer-label">Quick answer</p>
          <p>{page.answer}</p>
          <p className="seo-updated">
            Last updated <time dateTime={siteConfig.contentUpdated}>{updatedLabel}</time>
          </p>
        </section>

        {page.comparison ? (
          <section className="seo-block" aria-labelledby="seo-compare-title">
            <h2 id="seo-compare-title">
              KukuNotes vs {page.comparison.competitor} at a glance
            </h2>
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

        {page.sections.map((section) => (
          <Reveal key={section.heading} className="seo-block">
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul className="seo-bullets">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        ))}

        {page.steps ? (
          <section className="seo-block" aria-labelledby="seo-steps-title">
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

        <section className="seo-block" aria-labelledby="seo-faq-title">
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
        </section>

        <nav className="seo-block seo-related" aria-labelledby="seo-related-title">
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
        </nav>

        <section className="studio-invite-section" aria-labelledby="seo-cta-title">
          <div className="studio-invite-card">
            <p className="studio-kicker studio-invite-kicker">Start free</p>
            <h2 id="seo-cta-title">Keep every conversation that matters.</h2>
            <p className="studio-invite-lead">
              Free on Android. 5 Spaces and 5 hours of recording every month, in English,
              Hindi, and Hinglish.
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
