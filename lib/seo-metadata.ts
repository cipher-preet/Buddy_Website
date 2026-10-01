import type { Metadata } from "next";
import type { SeoPage } from "@/lib/seo-pages";

export function seoPageMetadata(page: SeoPage, path: string): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: path,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: ["/opengraph-image"],
    },
  };
}
