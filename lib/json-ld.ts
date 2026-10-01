import { faqItems } from "@/lib/home-data";
import { pricingFaqs, pricingPlans } from "@/lib/pricing-data";
import { getKukuNotesFaqs } from "@/lib/get-kukunotes-data";
import { entityKeywords } from "@/lib/seo-keywords";
import type { SeoPage } from "@/lib/seo-pages";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const organizationId = `${siteConfig.url}/#organization`;
export const websiteId = `${siteConfig.url}/#website`;
export const appId = `${siteConfig.url}/#app`;
const mobileAppId = `${siteConfig.url}/#mobile-app`;

const disambiguatingDescription =
  "KukuNotes is an AI note taker, meeting recorder, and personal assistant app. It is a separate product from the Kuku FM and Kuku TV entertainment apps.";

// Google penalizes ratings that users cannot verify, so only emit them when real Play Store numbers are configured.
function playStoreRating() {
  const ratingValue = process.env.NEXT_PUBLIC_PLAY_RATING;
  const ratingCount = process.env.NEXT_PUBLIC_PLAY_RATING_COUNT;
  if (!ratingValue || !ratingCount) return {};
  return {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      ratingCount,
      bestRating: "5",
      worstRating: "1",
    },
  };
}

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.brandName,
    alternateName: [...siteConfig.alternateNames],
    url: siteConfig.url,
    email: siteConfig.email,
    logo: absoluteUrl("/brand/kukunotes-icon-512.png"),
    description: siteConfig.description,
    disambiguatingDescription,
    sameAs: [siteConfig.playStoreUrl],
    foundingDate: "2025",
    knowsAbout: [
      "AI personal assistant",
      "AI note taker",
      "meeting recording",
      "automatic speech recognition",
      "speech to text",
      "Hindi and English code-switching",
      "task extraction and action items",
      "daily briefing planner",
      "second brain productivity",
      "on-device audio privacy",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: [...siteConfig.alternateNames],
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": organizationId },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@type": "SoftwareApplication",
    "@id": appId,
    name: "KukuNotes",
    alternateName: ["KukuNotes Assistant & Meeting Note Taker", ...siteConfig.alternateNames],
    disambiguatingDescription,
    url: siteConfig.url,
    applicationCategory: "ProductivityApplication",
    applicationSubCategory: "AI Note Taker & Meeting Recorder",
    operatingSystem: "Android, Windows, macOS, Chrome, Web",
    installUrl: siteConfig.playStoreUrl,
    downloadUrl: siteConfig.playStoreUrl,
    identifier: siteConfig.androidPackage,
    sameAs: [siteConfig.playStoreUrl],
    description: siteConfig.description,
    featureList: [...siteConfig.features],
    keywords: entityKeywords.join(", "),
    inLanguage: ["en", "hi"],
    countriesSupported: "Worldwide",
    dateModified: siteConfig.contentUpdated,
    ...playStoreRating(),
    publisher: { "@id": organizationId },
    offers: [
      {
        "@type": "Offer",
        name: "KukuNotes Free Forever",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/pricing"),
      },
      {
        "@type": "Offer",
        name: "KukuNotes Pro Monthly",
        price: "799",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/pricing"),
      },
      {
        "@type": "Offer",
        name: "KukuNotes Business Monthly",
        price: "1999",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/pricing"),
      },
    ],
  };
}

export function mobileApplicationJsonLd() {
  return {
    "@type": "MobileApplication",
    "@id": mobileAppId,
    name: "KukuNotes: Note Taker & Assistant",
    operatingSystem: "Android 9.0 and up",
    applicationCategory: "ProductivityApplication",
    installUrl: siteConfig.playStoreUrl,
    downloadUrl: siteConfig.playStoreUrl,
    identifier: siteConfig.androidPackage,
    permissions: "Microphone (only while Start Listening is active)",
    author: { "@id": organizationId },
    ...playStoreRating(),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: siteConfig.playStoreUrl,
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs = faqItems) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      websiteJsonLd(),
      softwareApplicationJsonLd(),
      mobileApplicationJsonLd(),
      faqJsonLd(faqItems),
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
        primaryImageOfPage: absoluteUrl("/opengraph-image"),
        dateModified: siteConfig.contentUpdated,
        breadcrumb: breadcrumbJsonLd([{ name: "Home", path: "/" }]),
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".studio-hero h1", ".studio-hero-lead", ".studio-faq"],
        },
      },
    ],
  };
}

export function pricingJsonLd() {
  const path = "/pricing";

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      softwareApplicationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Pricing", path },
      ]),
      faqJsonLd(pricingFaqs),
      {
        "@type": "Product",
        "@id": `${absoluteUrl(path)}#product`,
        name: "KukuNotes Subscription Plans",
        description:
          "Simple, transparent pricing for KukuNotes personal assistant, meeting recording, and note taking. Start free or upgrade to Pro and Business.",
        brand: { "@id": organizationId },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "0",
          highPrice: "1999",
          offerCount: "3",
          offers: pricingPlans.map((plan) => ({
            "@type": "Offer",
            name: plan.name,
            description: plan.tagline,
            price: plan.prices.monthly.toString(),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: absoluteUrl(path),
          })),
        },
      },
    ],
  };
}

export function getKukuNotesJsonLd() {
  const path = "/get-kukunotes";

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      softwareApplicationJsonLd(),
      mobileApplicationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Get KukuNotes", path },
      ]),
      faqJsonLd(getKukuNotesFaqs),
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: "Download KukuNotes | Android App, Desktop, Chrome & Web",
        description:
          "Download KukuNotes for Android on Google Play or access on Desktop, Chrome, and Web. Zero-bot meeting recording, note taking, and cross-platform sync.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
      },
    ],
  };
}

export function useCasesJsonLd() {
  const path = "/use-cases";

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      softwareApplicationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Use Cases", path },
      ]),
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: "KukuNotes Use Cases: Note Taker, Meetings, Students, Sales & Creators",
        description:
          "Practical ways to use KukuNotes for lecture notes, meeting recording, sales intelligence, daily life admin, and content creation.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
        mainEntity: {
          "@type": "ItemList",
          name: "KukuNotes use cases",
          itemListElement: [
            "Students and educators (lecture notes & study tasks)",
            "Founders and teams (meeting recording & action items)",
            "Sales and client work (call notes & commitment tracker)",
            "Personal planning (second brain & daily briefing)",
            "Creators and media (interview notes & idea synthesis)",
          ].map((name, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
          })),
        },
      },
    ],
  };
}

export function contactJsonLd() {
  const path = "/contact";

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path },
      ]),
      {
        "@type": "ContactPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: "Contact KukuNotes Support & Partnerships",
        description:
          "Contact the KukuNotes team for product support, meeting recording queries, enterprise partnerships, and feedback.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: {
          "@type": "Organization",
          "@id": organizationId,
          name: siteConfig.name,
          email: siteConfig.email,
          contactPoint: {
            "@type": "ContactPoint",
            email: siteConfig.email,
            contactType: "customer support",
            availableLanguage: ["English", "Hindi"],
            areaServed: "Worldwide",
          },
        },
      },
    ],
  };
}

export function seoPageJsonLd(page: SeoPage, path: string, parent?: BreadcrumbItem) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      softwareApplicationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        ...(parent ? [parent] : []),
        { name: page.kicker, path },
      ]),
      faqJsonLd(page.faqs),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: page.localized ? [siteConfig.language, page.localized.lang] : siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
        ...(page.comparison
          ? { mentions: { "@type": "SoftwareApplication", name: page.comparison.competitor } }
          : {}),
        primaryImageOfPage: absoluteUrl(page.image.src),
        datePublished: "2026-10-01",
        dateModified: siteConfig.contentUpdated,
        keywords: page.keywords.join(", "),
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".seo-hero h1", ".seo-answer"],
        },
      },
    ],
  };
}

export function compareHubJsonLd(pages: SeoPage[]) {
  const path = "/compare";

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Compare", path },
      ]),
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: "KukuNotes vs Otter, Fireflies, Granola & Fathom",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        dateModified: siteConfig.contentUpdated,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: pages.map((page, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: page.title,
            url: absoluteUrl(`/compare/${page.slug}`),
          })),
        },
      },
    ],
  };
}

export function aboutJsonLd(faqs: { q: string; a: string }[]) {
  const path = "/about";

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      softwareApplicationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path },
      ]),
      faqJsonLd(faqs),
      {
        "@type": "AboutPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: "About KukuNotes — What It Is and How to Spell It",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        mainEntity: { "@id": appId },
        dateModified: siteConfig.contentUpdated,
      },
    ],
  };
}

export function legalJsonLd(title: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: title, path },
      ]),
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: title,
        description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
      },
    ],
  };
}
