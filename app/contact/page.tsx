import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { FeatureMotion, type MotionScene } from "@/components/seo/FeatureMotion";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactJsonLd } from "@/lib/json-ld";
import { pageAlternates, socialMetadata } from "@/lib/seo-metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact KukuNotes Support",
  description:
    "Contact the KukuNotes team for product questions, customer support, partnerships, privacy requests, and feedback.",
  keywords: [
    "contact KukuNotes",
    "KukuNotes support",
    "AI notes app support",
    "KukuNotes partnerships",
    "KukuNotes privacy request",
  ],
  alternates: pageAlternates("/contact"),
  ...socialMetadata(
    "Contact KukuNotes Support",
    "Contact the KukuNotes team for product questions, customer support, partnerships, privacy requests, and feedback.",
    "/contact",
  ),
};

const contactReasons = [
  {
    title: "Product questions",
    copy: "Ask how KukuNotes works, where it fits, or what is coming next.",
  },
  {
    title: "Support",
    copy: "Share account, access, app behavior, or download questions.",
  },
  {
    title: "Partnerships",
    copy: "Start a conversation about teams, education, media, or client workflows.",
  },
];

const expectationItems = [
  "Tell us what you are trying to do with KukuNotes.",
  "Include your device, platform, or app version if it is a support issue.",
  "Use the same email address you use with KukuNotes when possible.",
];

export default function ContactPage() {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={contactJsonLd()} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main className="studio contact-page" id="main-content">
        <section className="contact-hero" aria-labelledby="contact-title">
          <Reveal className="contact-hero-copy">
            <p className="studio-kicker">Contact KukuNotes</p>
            <h1 id="contact-title">Tell us what you want <span className="brand-gradient-text">KukuNotes</span> to help with.</h1>
            <p className="studio-section-lead">
              Questions, feedback, support, partnerships, or privacy requests all
              start in the same place. Send the team a clear note and we will route
              it to the right person.
            </p>
            <div className="contact-hero-actions">
              <a className="studio-btn studio-btn-ink" href={`mailto:${siteConfig.email}`}>
                Email us
              </a>
              <Link className="studio-text-link" href="/use-cases">
                Explore use cases <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </Reveal>

          <FeatureMotion scene="ask" />
          <Reveal className="contact-visual" variant="scale" delay={0.08}>
            <div className="contact-visual-card">
              <div className="contact-visual-header">
                <span aria-hidden="true" />
                <strong>Message received</strong>
              </div>
              <div className="contact-message-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="contact-route-map" aria-hidden="true">
                <i />
                <span>Support</span>
                <span>Product</span>
                <span>Partnership</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="contact-options" aria-label="Reasons to contact KukuNotes">
          {contactReasons.map((reason, index) => (
            <Reveal key={reason.title} className="contact-option" delay={index * 0.06}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{reason.title}</h2>
              <p>{reason.copy}</p>
              <FeatureMotion scene={(["shield", "ask", "devices"] as MotionScene[])[index % 3]} compact />
            </Reveal>
          ))}
        </section>

        <section className="contact-panel" aria-labelledby="contact-form-title">
          <Reveal className="contact-form-shell">
            <p className="studio-kicker">Send a note</p>
            <h2 id="contact-form-title">Help us understand the request.</h2>
            <ContactForm />
          </Reveal>

          <Reveal className="contact-aside" delay={0.08}>
            <div className="contact-email-card">
              <p className="studio-kicker">Direct email</p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <p>
                Prefer your own inbox? Email us directly and include the same
                details you would put in the form.
              </p>
            </div>
            <div className="contact-guidance">
              <h3>A useful message includes</h3>
              <ul>
                {expectationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      </main>
      <KukuNotesFooter />
    </div>
  );
}
