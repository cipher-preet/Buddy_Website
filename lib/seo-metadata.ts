import type { Metadata } from "next";
import type { DestinationPage } from "@/lib/destination-pages";
import type { SeoPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

type MetaSource = Pick<SeoPage | DestinationPage, "title" | "description" | "keywords"> & {
  localized?: { lang: string };
};

export function seoPageMetadata(page: MetaSource, path: string): Metadata {
  const og = `/opengraph-image?v=${siteConfig.assetVersion}`;
  const languages: Record<string, string> = {
    en: path,
    "x-default": path,
  };
  // The Hindi page is one URL with an English article plus a Hindi section.
  // Point hi at that same URL so it is the hreflang target. There is no
  // separate Hindi-only URL.
  if (page.localized?.lang) {
    languages[page.localized.lang] = path;
  }

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: path,
      type: "article",
      locale: siteConfig.locale,
      alternateLocale: page.localized?.lang === "hi" ? ["hi_IN"] : undefined,
      siteName: siteConfig.name,
      images: [{ url: og, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [og],
    },
  };
}
