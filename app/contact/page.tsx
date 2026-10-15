import type { Metadata } from "next";
import Link from "next/link";
import {
  HiArrowRight,
  HiArrowUpRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCreditCard,
  HiOutlineEnvelope,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { SiteLayout } from "@/components/marketing/SiteLayout";
import { PageHero } from "@/components/marketing/UI";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { contactJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
const title = "Contact Us — KukuNotes Support & Partnerships";
const description =
  "Contact the KukuNotes team for product questions, account help, billing, partnerships, privacy requests, and feedback.";
export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "contact KukuNotes",
    "KukuNotes support",
    "AI notes app support",
    "KukuNotes partnerships",
    "KukuNotes privacy request",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
    type: "website",
    images: [
      {
        url: `/opengraph-image?v=${siteConfig.assetVersion}`,
        width: 1200,
        height: 630,
        alt: "Contact KukuNotes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`/opengraph-image?v=${siteConfig.assetVersion}`],
  },
};
export default function ContactPage() {
  return (
    <SiteLayout className="contact-page">
      <JsonLd data={contactJsonLd()} />
      <PageHero
        eyebrow="A conversation starts here"
        title={
          <>
            Contact us.
            <br />
            <span className="accent-text">We’re here to help.</span>
          </>
        }
        description="A question about KukuNotes, a little help with your account, or an idea to share? Start a conversation with our team."
      >
        <div className="hero-actions">
          <a href="#contact-form" className="button button-primary">
            Write to us <HiArrowRight aria-hidden="true" />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="button button-secondary">
            Email the team <HiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </PageHero>
      <section className="container contact-topics" aria-label="How we can help">
        <article>
          <HiOutlineChatBubbleLeftRight className="contact-topic-icon" aria-hidden="true" />
          <h2>Product & support</h2>
          <p>Get help with your account, recordings, notes, and everyday workflows.</p>
        </article>
        <article>
          <HiOutlineCreditCard className="contact-topic-icon" aria-hidden="true" />
          <h2>Plans & billing</h2>
          <p>Ask about a plan, a subscription, or a billing question.</p>
        </article>
        <article>
          <HiOutlineSparkles className="contact-topic-icon" aria-hidden="true" />
          <h2>Ideas & partnerships</h2>
          <p>Share feedback, suggest a feature, or explore working together.</p>
        </article>
      </section>
      <div className="container contact-layout">
        <ContactForm />
        <aside className="contact-aside">
          <div>
            <p className="eyebrow">Direct to the team</p>
            <h2>Prefer your own inbox?</h2>
            <a className="contact-email" href={`mailto:${siteConfig.email}`}>
              <HiOutlineEnvelope aria-hidden="true" /> {siteConfig.email}
            </a>
            <p className="contact-email-context">
              Send us a note from the email you use for KukuNotes when your
              question concerns your account.
            </p>
          </div>
          <div>
            <p className="eyebrow">A little context helps</p>
            <ul>
              <li>What were you trying to do?</li>
              <li>Which app, device, and version are you using?</li>
              <li>What happened, and what did you expect?</li>
            </ul>
            <p>
              Please leave passwords and payment details out of your message.
            </p>
          </div>
          <div>
            <p className="eyebrow">Looking for something specific?</p>
            <nav className="contact-help-links" aria-label="Contact resources">
              <Link href="/pricing">Compare plans <HiArrowRight aria-hidden="true" /></Link>
              <Link href="/get-kukunotes">Find your download <HiArrowRight aria-hidden="true" /></Link>
              <Link href="/delete-account">Account deletion <HiArrowRight aria-hidden="true" /></Link>
              <Link href="/privacy">Privacy policy <HiArrowRight aria-hidden="true" /></Link>
            </nav>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}
