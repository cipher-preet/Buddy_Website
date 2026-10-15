import Link from "next/link";
import { SiteLayout } from "@/components/marketing/SiteLayout";
import { Action, FAQ, FinalCTA, ProductFrame } from "@/components/marketing/UI";
import { JsonLd } from "./JsonLd";
import type { DestinationPage } from "@/lib/destination-pages";
export function DestinationPageView({
  page,
  jsonLd,
}: {
  page: DestinationPage;
  jsonLd: Record<string, unknown>;
}) {
  return (
    <SiteLayout>
      <JsonLd data={jsonLd} />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/get-kukunotes">Downloads</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.kicker}</span>
        </nav>
        <section className="solution-hero">
          <div>
            <p className="eyebrow">
              {page.kicker} · {page.badge}
            </p>
            <h1>
              {page.h1} <span className="accent-text">{page.h1Accent}</span>
            </h1>
            <p className="hero-description">{page.lead}</p>
            <div className="hero-actions">
              <Action href={page.cta.href}>{page.cta.label}</Action>
              {page.secondaryCta && (
                <Link className="text-link" href={page.secondaryCta.href}>
                  {page.secondaryCta.label} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </div>
          <div className="solution-visual">
            <ProductFrame src={page.image.src} alt={page.image.alt} priority />
          </div>
        </section>
        <section className="direct-answer" aria-label="Platform overview">
          <p className="eyebrow">Your next workspace</p>
          <div>
            <p>{page.answer}</p>
          </div>
        </section>
        <section className="section destination-capabilities">
          <div>
            <p className="eyebrow">Built around your day</p>
            <h2>
              Keep the useful
              <br />
              part close.
            </h2>
          </div>
          <ul className="check-list">
            {page.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        {page.sections.map((section, i) => (
          <section className="editorial-section" key={section.heading}>
            <div>
              <p className="eyebrow">0{i + 1} / Getting started</p>
              <h2>{section.heading}</h2>
            </div>
            <div className="editorial-body">
              {section.body.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </section>
        ))}
        <nav className="related-links" aria-label="Related pages">
          {page.related.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label} <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </div>
      <FAQ items={page.faqs} title="A good start on your device." />
      <FinalCTA />
    </SiteLayout>
  );
}
