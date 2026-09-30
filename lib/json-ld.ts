import { faqItems } from "@/lib/home-data";
import { pricingFaqs, pricingPlans } from "@/lib/pricing-data";
import { getBuddyFaqs } from "@/lib/get-buddy-data";
import { absoluteUrl, siteConfig } from "@/lib/site";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const appId = `${siteConfig.url}/#app`;
const mobileAppId = `${siteConfig.url}/#mobile-app`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.brandName,
    alternateName: ["Buddy AI", "Buddy App", "Buddy AI Assistant"],
    url: siteConfig.url,
    email: siteConfig.email,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.description,
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
    alternateName: ["Buddy AI", "Buddy Assistant", "Buddy Meeting Recorder"],
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": organizationId },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@type": "SoftwareApplication",
    "@id": appId,
    name: "Buddy AI",
    alternateName: "Buddy AI Assistant & Meeting Note Taker",
    url: siteConfig.url,
    applicationCategory: "ProductivityApplication",
    applicationSubCategory: "AI Assistant & Meeting Recorder",
    operatingSystem: "Android, iOS, Windows, macOS, Chrome, Web",
    installUrl: siteConfig.playStoreUrl,
    downloadUrl: siteConfig.playStoreUrl,
    identifier: siteConfig.androidPackage,
    sameAs: [siteConfig.playStoreUrl],
    description: siteConfig.description,
    featureList: [...siteConfig.features],
    keywords: siteConfig.keywords.join(", "),
    inLanguage: ["en", "hi"],
    countriesSupported: "Worldwide",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1280",
      bestRating: "5",
      worstRating: "1",
    },
    publisher: { "@id": organizationId },
    offers: [
      {
        "@type": "Offer",
        name: "Buddy Free Forever",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/pricing"),
      },
      {
        "@type": "Offer",
        name: "Buddy Pro Monthly",
        price: "799",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl("/pricing"),
      },
      {
        "@type": "Offer",
        name: "Buddy Business Monthly",
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
    name: "Buddy AI: Note Taker & Assistant",
    operatingSystem: "Android 8.0 and up",
    applicationCategory: "ProductivityApplication",
    installUrl: siteConfig.playStoreUrl,
    downloadUrl: siteConfig.playStoreUrl,
    fileSize: "18MB",
    softwareVersion: "2.4.0",
    carrierRequirements: "Microphone permission for opt-in meeting audio",
    author: { "@id": organizationId },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1280",
      bestRating: "5",
      worstRating: "1",
    },
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
        name: "Buddy AI Subscription Plans",
        description:
          "Simple, transparent pricing for Buddy AI personal assistant, meeting recording, and note taking. Start free or upgrade to Pro and Business.",
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

export function getBuddyJsonLd() {
  const path = "/get-buddy";

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      softwareApplicationJsonLd(),
      mobileApplicationJsonLd(),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Get Buddy", path },
      ]),
      faqJsonLd(getBuddyFaqs),
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: "Download Buddy AI | Android App, Desktop, Chrome & Web",
        description:
          "Download Buddy AI for Android on Google Play or access on Desktop, Chrome, and Web. Zero-bot meeting recording, note taking, and cross-platform sync.",
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
        name: "Buddy AI Use Cases: Note Taker, Meetings, Students, Sales & Creators",
        description:
          "Practical ways to use Buddy AI for lecture notes, meeting recording, sales intelligence, daily life admin, and content creation.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
        mainEntity: {
          "@type": "ItemList",
          name: "Buddy AI use cases",
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
        name: "Contact Buddy AI Support & Partnerships",
        description:
          "Contact the Buddy team for product support, meeting recording queries, enterprise partnerships, and feedback.",
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
