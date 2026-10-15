import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiArrowUpRight, HiPlus } from "react-icons/hi2";
import { siteConfig } from "@/lib/site";
import productImages from "@/lib/product-images.json";
import { ProductScreen } from "./ProductScreen";

export function Action({
  children = "Start for free",
  href = siteConfig.platformUrl,
  secondary = false,
  className = "",
}: {
  children?: ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      {href.startsWith("http") ? (
        <HiArrowUpRight aria-hidden="true" />
      ) : (
        <HiArrowRight aria-hidden="true" />
      )}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </div>
  );
}

export function ProductFrame({
  src,
  alt,
  priority = false,
  caption,
  className = "",
  sizes,
  windowTitle = "KukuNotes workspace",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
  className?: string;
  sizes?: string;
  focus?: "overview" | "summary" | "workspace" | "answer" | "prompt";
  windowTitle?: string;
}) {
  const assetAliases: Record<string, string> = {
    "/screenshots/desktop/spaces-tasks.png":
      "/screenshots/desktop/workspace.webp",
    "/screenshots/desktop/ai-chat.png":
      "/screenshots/desktop/context-chat.webp",
    "/screenshots/home.png": "/screenshots/android/capture.webp",
  };
  src = assetAliases[src] ?? src;
  const dimensions = (
    productImages as Record<string, { width: number; height: number }>
  )[src] ?? { width: 1024, height: 503 };
  const phone = dimensions.height > dimensions.width;
  return (
    <div>
      <ProductScreen
        src={src}
        alt={alt}
        kind={phone ? "phone" : "desktop"}
        priority={priority}
        title={windowTitle}
        sizes={sizes ?? (phone ? "245px" : "(max-width: 768px) 90vw, 1100px")}
        className={`product-frame ${phone ? "phone-frame" : "desktop-frame"} ${className}`}
      />
      {caption && <p className="launch-asset-label">{caption}</p>}
    </div>
  );
}

export function FAQ({
  items,
  title = "A little clarity goes a long way.",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="section container faq-section">
      <SectionHeading eyebrow="Good questions" title={title}>
        A few things to know before your first conversation.
      </SectionHeading>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.q}>
            <summary>
              {item.q}
              <HiPlus aria-hidden="true" />
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA({
  eyebrow = "Make room for what’s next",
  title = (
    <>
      Good conversations.
      <br />
      Even better follow-through.
    </>
  ),
  lede = "Your next idea, decision, or commitment deserves a place to go.",
}: {
  eyebrow?: string;
  title?: ReactNode;
  lede?: string;
} = {}) {
  return (
    <section className="container final-cta">
      <div className="cta-emblem" aria-hidden="true">
        <Image
          src="/brand/kukunotes-icon-192.png"
          alt=""
          width={56}
          height={56}
        />
      </div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{lede}</p>
      <Action />
      <span className="cta-subline">
        One workspace for your notes, tasks, and context.
      </span>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero container">
      <p className="eyebrow">{eyebrow}</p>
      <div className="launch-page-hero-grid">
        <h1>{title}</h1>
        <div>
          <p className="hero-description">{description}</p>
          {children}
        </div>
      </div>
    </header>
  );
}
