import type { Metadata } from "next";
import Link from "next/link";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { compareHubJsonLd } from "@/lib/json-ld";
import { comparePages, competitorNote } from "@/lib/seo-pages";

const title = "KukuNotes vs Otter, Fireflies, Granola & Fathom";
const description =
  "Honest comparisons of KukuNotes with Otter.ai, Fireflies.ai, Granola, and Fathom: bot-free recording, Android support, Hindi and Hinglish, task extraction, and pricing.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "best AI note taker 2026",
    "AI meeting recorder comparison",
    "Otter alternative",
    "Fireflies alternative",
    "Granola alternative",
    "Fathom alternative",
  ],
  alternates: { canonical: "/compare" },
  openGraph: {
    title,
    description,
    url: "/compare",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function CompareHubPage() {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={compareHubJsonLd(comparePages)} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="studio seo-page">
        <nav className="seo-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Compare</span>
        </nav>

        <section className="seo-hero seo-hero-single" aria-labelledby="compare-title">
          <div className="seo-hero-copy">
            <p className="studio-kicker">Compare</p>
            <h1 id="compare-title">
              How KukuNotes compares to <span className="brand-gradient-text">other AI note takers.</span>
            </h1>
            <p className="studio-section-lead">
              Every tool here is good at something. These pages explain where KukuNotes fits,
              and when another tool may be the better choice.
            </p>
          </div>
        </section>

        <section className="seo-answer" aria-label="Quick answer">
          <p className="seo-answer-label">Quick answer</p>
          <p>
            KukuNotes is the pick if you use Android, want recording without a meeting bot, work
            in Hindi or Hinglish, and want conversations turned into tasks and a daily plan.
            Otter is strongest for live transcription, Fireflies for team-wide CRM automation,
            Granola for bot-free notes on Mac, Windows, and iPhone, and Fathom for free
            video-call recording.
          </p>
        </section>

        <section className="seo-block" aria-label="Comparisons">
          <ul className="seo-card-grid">
            {comparePages.map((page) => (
              <li key={page.slug}>
                <Link href={`/compare/${page.slug}`} className="seo-card">
                  <p className="studio-kicker">{page.kicker}</p>
                  <h2>KukuNotes vs {page.comparison?.competitor}</h2>
                  <p>{page.description}</p>
                  <span className="studio-text-link">
                    Read comparison <span aria-hidden="true">-&gt;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="seo-note">{competitorNote}</p>
        </section>
      </main>
      <KukuNotesFooter />
    </div>
  );
}
