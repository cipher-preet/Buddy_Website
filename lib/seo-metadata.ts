import type { Metadata } from "next";
import type { DestinationPage } from "@/lib/destination-pages";
import type { SeoPage } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

type MetaSource = Pick<SeoPage | DestinationPage, "title" | "description" | "keywords">;

export function seoPageMetadata(page: MetaSource, path: string): Metadata {
  const og = `/opengraph-image?v=${siteConfig.assetVersion}`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: path,
      languages: {
        en: path,
        "x-default": path,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: path,
      type: "article",
      locale: siteConfig.locale,
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
