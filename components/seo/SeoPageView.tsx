import Link from "next/link";
import { SiteLayout } from "@/components/marketing/SiteLayout";
import {
  Action,
  FAQ,
  FinalCTA,
  ProductFrame,
  SectionHeading,
} from "@/components/marketing/UI";
import { JsonLd } from "./JsonLd";
import { competitorNote, type SeoPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";
export function SeoPageView({
  page,
  jsonLd,
  breadcrumb,
}: {
  page: SeoPage;
  jsonLd: Record<string, unknown>;
  breadcrumb?: { label: string; href: string };
}) {
  return (
    <SiteLayout>
      <JsonLd data={jsonLd} />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          {breadcrumb && (
            <>
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span aria-current="page">{page.kicker}</span>
        </nav>
        <section className="solution-hero">
          <div>
            <p className="eyebrow">{page.kicker}</p>
            <h1>
              {page.h1} <span className="accent-text">{page.h1Accent}</span>
            </h1>
            <p className="hero-description">{page.lead}</p>
            <div className="hero-actions">
              <Action />
              <Action href="/get-kukunotes" secondary>
                Find your app
              </Action>
            </div>
          </div>
          <div className="solution-visual">
            <ProductFrame src={page.image.src} alt={page.image.alt} priority />
          </div>
        </section>
        <section className="direct-answer" aria-label="About this solution">
          <p className="eyebrow">The useful part</p>
          <div>
            <p>{page.answer}</p>
            <span className="updated-label">
              Updated{" "}
              <time dateTime={siteConfig.contentUpdated}>
                {siteConfig.contentUpdated}
              </time>
            </span>
          </div>
        </section>
        {page.sections.map((section, i) => (
          <section className="editorial-section" key={section.heading}>
            <div>
              <p className="eyebrow">0{i + 1} / In practice</p>
              <h2>{section.heading}</h2>
            </div>
            <div className="editorial-body">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
        {page.steps && (
          <section className="section">
            <SectionHeading
              eyebrow="From your first conversation"
              title="A simple rhythm to come back to."
            />
            <ol className="steps-grid">
              {page.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-number">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </section>
        )}
        {page.comparison && (
          <section className="section">
            <h2>KukuNotes and {page.comparison.competitor}</h2>
            <div
              className="table-scroll"
              role="region"
              tabIndex={0}
              aria-label="Solution comparison"
            >
              <table>
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
            <p className="small-note">{competitorNote}</p>
          </section>
        )}
        {page.localized && (
          <section className="localized-section" lang={page.localized.lang}>
            <h2>{page.localized.heading}</h2>
            {page.localized.body.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </section>
        )}
        <nav className="related-links" aria-label="Related solutions">
          {page.related.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label} <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </div>
      <FAQ items={page.faqs} title="Before your next conversation." />
      <FinalCTA />
    </SiteLayout>
  );
}
