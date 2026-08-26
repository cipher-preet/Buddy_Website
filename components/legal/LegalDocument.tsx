import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  body: string[];
};

type LegalDocumentProps = {
  kicker?: string;
  title: string;
  intro: string;
  updated: string;
  tocLabel: string;
  sections: LegalSection[];
  related: ReactNode;
};

export function LegalDocument({
  kicker = "Legal",
  title,
  intro,
  updated,
  tocLabel,
  sections,
  related,
}: LegalDocumentProps) {
  return (
    <article className="legal-page">
      <header className="legal-hero">
        <p className="studio-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        <p className="legal-meta">Last updated: {updated}</p>
      </header>

      <div className="legal-layout">
        <nav className="legal-toc" aria-label={tocLabel}>
          <p className="legal-toc-label">On this page</p>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title.replace(/^\d+\.\s*/, "")}
            </a>
          ))}
        </nav>

        <div className="legal-content">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="legal-section">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <p className="legal-related">{related}</p>
    </article>
  );
}
