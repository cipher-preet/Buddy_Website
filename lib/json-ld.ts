import { faqItems } from "@/lib/home-data";
import { absoluteUrl, siteConfig } from "@/lib/site";

const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const appId = `${siteConfig.url}/#app`;

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
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": organizationId },
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
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".studio-hero h1", ".studio-hero-lead", ".studio-faq"],
        },
      },
    ],
  };
}

export function legalJsonLd(title: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  };
}
