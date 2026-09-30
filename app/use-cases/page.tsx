import type { Metadata } from "next";
import Link from "next/link";
import { AppFrame } from "@/components/home/AppFrame";
import { BuddyFooter } from "@/components/home/BuddyFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { useCasesJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
import { useCaseItems } from "@/lib/home-data";

// ─── Official React Icons ───────────────────────────────────────────────────
import {
  FaGraduationCap,
  FaUsers,
  FaHandshake,
  FaCalendarCheck,
  FaPodcast,
} from "react-icons/fa6";
import { HiArrowRight, HiSparkles } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Use Cases for AI Notes, Tasks, Meetings, Study, and Personal Planning",
  description:
    "See how Buddy helps students, teams, sales calls, personal planning, and creators turn conversations into AI notes, tasks, summaries, and useful next steps.",
  keywords: [
    "Buddy use cases",
    "AI meeting notes use cases",
    "AI notes for students",
    "AI task extraction",
    "AI sales call notes",
    "AI personal planning app",
    "conversation intelligence app",
  ],
  alternates: {
    canonical: "/use-cases",
  },
  openGraph: {
    title: "Buddy Use Cases for AI Notes, Tasks, and Conversations",
    description:
      "Practical ways to use Buddy for meetings, education, sales follow-up, personal planning, and content work.",
    url: "/use-cases",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Buddy AI assistant use cases" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddy Use Cases for AI Notes and Tasks",
    description:
      "How Buddy turns conversations into notes, tasks, summaries, and plans across work, study, sales, and life admin.",
    images: ["/opengraph-image"],
  },
};

const journeySteps = [
  {
    label: "Choose a space",
    copy: "Start with the project, class, client, or life area you want Buddy to remember.",
  },
  {
    label: "Listen with intent",
    copy: "Turn on listening only when the conversation is worth saving.",
  },
  {
    label: "Act from context",
    copy: "Review notes, finish tasks, ask Buddy questions, or share only the parts that matter.",
  },
];

function CategoryIcon({ accent }: { accent: string }) {
  switch (accent) {
    case "violet":
      return <FaGraduationCap className="use-case-cat-icon" />;
    case "indigo":
      return <FaUsers className="use-case-cat-icon" />;
    case "cyan":
      return <FaHandshake className="use-case-cat-icon" />;
    case "green":
      return <FaCalendarCheck className="use-case-cat-icon" />;
    case "rose":
      return <FaPodcast className="use-case-cat-icon" />;
    default:
      return <HiSparkles className="use-case-cat-icon" />;
  }
}

export default function UseCasesPage() {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={useCasesJsonLd()} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="studio use-cases-page">
        {/* ── Hero ── */}
        <section className="use-cases-hero" aria-labelledby="use-cases-title">
          <Reveal className="use-cases-hero-copy">
            <p className="studio-kicker">Use cases</p>
            <h1 id="use-cases-title">Something useful for every conversation.</h1>
            <p>
              Buddy works best when a real conversation creates information you do
              not want to lose. Pick a space, let Buddy listen, then leave with
              notes, tasks, and answers that are easy to understand the first time.
            </p>
            <div className="use-cases-hero-actions">
              <Link className="studio-btn studio-btn-ink" href="#use-case-list">
                Browse use cases
              </Link>
              <Link className="studio-text-link" href="/#product">
                See the product <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </Reveal>

          <Reveal className="use-cases-hero-visual" variant="scale" delay={0.08}>
            <div className="use-cases-orbit" aria-hidden="true">
              <span>Class</span>
              <span>Client</span>
              <span>Team</span>
              <span>Home</span>
            </div>
            <AppFrame
              src="/screenshots/home.png"
              alt="Buddy home screen showing spaces"
              size="hero"
            />
          </Reveal>
        </section>

        {/* ── Journey Steps ── */}
        <section className="use-cases-map" aria-label="How Buddy is used">
          {journeySteps.map((step, index) => (
            <Reveal key={step.label} className="use-cases-map-step" delay={index * 0.06}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{step.label}</h2>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </section>

        {/* ── Use Cases List with Editorial Visuals ── */}
        <section
          className="use-cases-list"
          id="use-case-list"
          aria-labelledby="use-cases-list-title"
        >
          <Reveal className="use-cases-section-heading">
            <p className="studio-kicker">Something for everyone</p>
            <h2 id="use-cases-list-title">Find where Buddy fits into your day.</h2>
            <p>
              Each use case follows the same simple pattern: capture the moment,
              understand the useful parts, and move the next step forward.
            </p>
          </Reveal>

          <div className="use-cases-grid">
            {useCaseItems.map((item, index) => (
              <Reveal
                key={item.title}
                className={`use-case-card accent-${item.accent}`}
                delay={index * 0.05}
              >
                {/* Left Side: Copy & Structured Details */}
                <div className="use-case-copy">
                  <div className="use-case-card-top">
                    <span className="use-case-icon-badge" aria-hidden="true">
                      <CategoryIcon accent={item.accent} />
                    </span>
                    <p className="use-case-eyebrow-text">{item.eyebrow}</p>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="use-case-summary">{item.summary}</p>
                  <dl className="use-case-dl">
                    <div>
                      <dt>Best for</dt>
                      <dd>{item.bestFor}</dd>
                    </div>
                    <div>
                      <dt>Buddy does</dt>
                      <dd>{item.buddyDoes}</dd>
                    </div>
                    <div>
                      <dt>Outcome</dt>
                      <dd>{item.outcome}</dd>
                    </div>
                  </dl>
                </div>

                {/* Right Side: High-Resolution Dedicated UI Visual */}
                <div className="use-case-visual-container" aria-label={item.alt}>
                  <div className="use-case-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="use-case-image"
                      loading="lazy"
                    />
                    <div className="use-case-image-overlay" />
                    <div className="use-case-chips-overlay" aria-hidden="true">
                      {item.visual.map((tag, tagIndex) => (
                        <span key={tag} className={`use-case-chip-badge chip-${tagIndex + 1}`}>
                          <span className="chip-dot" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Final Direct CTA ── */}
        <section className="use-cases-final" aria-labelledby="use-cases-final-title">
          <Reveal>
            <p className="studio-kicker">Direct use cases</p>
            <h2 id="use-cases-final-title">If people talk, Buddy can help you remember what matters.</h2>
            <p>
              Meetings, lectures, interviews, family planning, and client calls all
              become easier when the important parts are saved in the right place.
            </p>
            <a
              className="studio-btn studio-btn-accent"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Get Buddy for Android</span>
              <HiArrowRight style={{ marginLeft: 8 }} />
            </a>
          </Reveal>
        </section>
      </main>
      <BuddyFooter />
    </div>
  );
}
