import { faqItems } from "@/lib/home-data";
import { absoluteUrl, siteConfig } from "@/lib/site";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const appId = `${siteConfig.url}/#app`;

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.description,
    sameAs: [siteConfig.playStoreUrl],
    foundingDate: "2026",
    knowsAbout: [
      "AI meeting notes",
      "AI conversation assistant",
      "voice notes",
      "task extraction",
      "daily briefing",
      "personal productivity",
      "generative AI assistant",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: ["Buddy AI", "Buddy App"],
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
    name: siteConfig.name,
    url: siteConfig.url,
    applicationCategory: "ProductivityApplication",
    applicationSubCategory: "Personal AI assistant",
    operatingSystem: siteConfig.platforms.join(", "),
    installUrl: siteConfig.playStoreUrl,
    downloadUrl: siteConfig.playStoreUrl,
    identifier: siteConfig.androidPackage,
    sameAs: [siteConfig.playStoreUrl],
    description: siteConfig.description,
    featureList: [...siteConfig.features],
    keywords: siteConfig.keywords.join(", "),
    inLanguage: siteConfig.language,
    countriesSupported: "Worldwide",
    publisher: { "@id": organizationId },
    offers: {
      "@type": "Offer",
      url: siteConfig.playStoreUrl,
      availability: "https://schema.org/OnlineOnly",
      areaServed: "Worldwide",
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

export function faqJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
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
      faqJsonLd(),
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
        name: "Buddy Use Cases",
        description:
          "Practical ways to use Buddy for education, meetings, sales follow-up, personal planning, and creator workflows.",
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        about: { "@id": appId },
        mainEntity: {
          "@type": "ItemList",
          name: "Buddy use cases",
          itemListElement: [
            "Students and educators",
            "Founders and teams",
            "Sales and client work",
            "Personal planning",
            "Creators and media",
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
        name: "Contact Buddy",
        description:
          "Contact the Buddy team for product questions, customer support, partnerships, privacy requests, and feedback.",
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
            availableLanguage: ["English"],
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
