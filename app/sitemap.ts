import type { MetadataRoute } from "next";
import { comparePages, topicPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

// Bump when page content meaningfully changes; a per-request date makes Google ignore lastmod.
const lastModified = new Date("2026-10-01");

const url = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        url("/brand/kukunotes-logo-banner.png"),
        url("/screenshots/daily-briefing.jpeg"),
        url("/screenshots/home.png"),
      ],
    },
    {
      url: url("/pricing"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: url("/get-kukunotes"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [url("/screenshots/home.png"), url("/screenshots/notes-board.jpeg")],
    },
    {
      url: url("/use-cases"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [
        url("/use-cases/meetings.jpg"),
        url("/use-cases/education.jpg"),
        url("/use-cases/sales.jpg"),
        url("/use-cases/personal.jpg"),
        url("/use-cases/creators.jpg"),
      ],
    },
    ...topicPages.map((page) => ({
      url: url(`/${page.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [url(page.image.src)],
    })),
    {
      url: url("/compare"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...comparePages.map((page) => ({
      url: url(`/compare/${page.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [url(page.image.src)],
    })),
    {
      url: url("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: url("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: url("/privacy"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: url("/terms"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: url("/delete-account"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
