import type { MetadataRoute } from "next";
import { destinationPages } from "@/lib/destination-pages";
import { topicPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

// Bump when page content meaningfully changes; a per-request date makes Google ignore lastmod.
const lastModified = new Date("2026-10-13");

const url = (path: string) => `${siteConfig.url}${path}`;

/** Product screenshots only — never the logo banner (keeps SERP image previews product-led). */
const homeImages = [
  url("/screenshots/daily-briefing.jpeg"),
  url("/screenshots/home.png"),
  url("/screenshots/notes-board.jpeg"),
  url("/screenshots/tasks-board.jpeg"),
  url("/screenshots/desktop/meetings.png"),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: homeImages,
    },
    {
      url: url("/pricing"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [url("/screenshots/home.png")],
    },
    {
      url: url("/get-kukunotes"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        url("/screenshots/home.png"),
        url("/screenshots/notes-board.jpeg"),
        url("/screenshots/desktop/meetings.png"),
      ],
    },
    ...destinationPages.map((page) => ({
      url: url(`/${page.slug}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.95,
      images: [url(page.image.src)],
    })),
    {
      url: url("/use-cases"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
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
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [url(page.image.src)],
    })),
    {
      url: url("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      images: [url("/screenshots/daily-briefing.jpeg")],
    },
    {
      url: url("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
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
