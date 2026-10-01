import type { Metadata } from "next";
import Link from "next/link";
import { ContactReasonDropdown } from "@/components/contact/ContactReasonDropdown";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/home/Reveal";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact KukuNotes Support, Product, and Partnerships",
  description:
    "Contact the KukuNotes team for AI assistant product questions, customer support, partnerships, privacy requests, and feedback.",
  keywords: [
    "contact KukuNotes",
    "KukuNotes support",
    "KukuNotes support",
    "AI notes app support",
    "KukuNotes partnerships",
    "KukuNotes privacy request",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact KukuNotes Support and Product Team",
    description:
      "Reach the KukuNotes team for support, product questions, partnerships, and feedback.",
    url: "/contact",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact KukuNotes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact KukuNotes",
    description:
      "Reach KukuNotes for product questions, support, partnerships, privacy requests, and feedback.",
    images: ["/opengraph-image"],
  },
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
      <main className="studio contact-page">
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
            </Reveal>
          ))}
        </section>

        <section className="contact-panel" aria-labelledby="contact-form-title">
          <Reveal className="contact-form-shell">
            <p className="studio-kicker">Send a note</p>
            <h2 id="contact-form-title">Help us understand the request.</h2>
            <form
              className="contact-form"
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
            >
              <label>
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
              </label>
              <label>
                <span>Reason</span>
                <ContactReasonDropdown />
              </label>
              <label className="contact-form-wide">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us what happened, what you need, or what you are hoping to build with KukuNotes."
                />
              </label>
              <button className="studio-btn studio-btn-accent" type="submit">
                Send message
              </button>
            </form>
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
