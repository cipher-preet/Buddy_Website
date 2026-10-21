import type { MetadataRoute } from "next";
import { destinationPages } from "@/lib/destination-pages";
import { topicPages } from "@/lib/seo-pages";
import { siteConfig } from "@/lib/site";

/**
 * Per-URL lastmod. Change a date only when that URL's content changes.
 * A single shared date on legal pages and product pages teaches crawlers to ignore lastmod.
 * Legal pages were last edited 2026-10-01. Product pages below were edited on the dates shown.
 */
const lastModifiedByPath: Record<string, string> = {
  "/": "2026-10-21",
  "/pricing": "2026-10-21",
  "/get-kukunotes": "2026-10-21",
  "/platform": "2026-10-21",
  "/chrome-extension": "2026-10-21",
  "/windows": "2026-10-21",
  "/android": "2026-10-21",
  "/use-cases": "2026-10-21",
  "/ai-note-taker": "2026-10-21",
  "/ai-meeting-recorder": "2026-10-21",
  "/hindi-speech-to-text": "2026-10-21",
  "/ai-personal-assistant": "2026-10-21",
  "/ai-lecture-notes": "2026-10-21",
  "/about": "2026-10-21",
  "/contact": "2026-10-21",
  "/privacy": "2026-10-01",
  "/terms": "2026-10-01",
  "/delete-account": "2026-10-01",
};

function lastModified(path: string) {
  const value = lastModifiedByPath[path];
  if (!value) {
    throw new Error(`Missing sitemap lastmod for ${path}`);
  }
  return new Date(value);
}

const url = (path: string) => `${siteConfig.url}${path}`;

/** Product screenshots only — never the logo banner (keeps SERP image previews product-led). */
const homeImages = [
  url("/screenshots/home-spaces.jpg"),
  url("/screenshots/notes-library.jpg"),
  url("/screenshots/tasks-day.jpg"),
  url("/screenshots/desktop/spaces-workspace.png"),
  url("/screenshots/desktop/meetings-library.png"),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url("/"),
      lastModified: lastModified("/"),
      changeFrequency: "weekly",
      priority: 1.0,
      images: homeImages,
    },
    {
      url: url("/pricing"),
      lastModified: lastModified("/pricing"),
      changeFrequency: "weekly",
      priority: 0.9,
      images: [url("/screenshots/home-spaces.jpg")],
    },
    {
      url: url("/get-kukunotes"),
      lastModified: lastModified("/get-kukunotes"),
      changeFrequency: "weekly",
      priority: 0.95,
      images: [
        url("/screenshots/home-spaces.jpg"),
        url("/screenshots/notes-library.jpg"),
        url("/screenshots/desktop/meetings-library.png"),
      ],
    },
    ...destinationPages.map((page) => ({
      url: url(`/${page.slug}`),
      lastModified: lastModified(`/${page.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.95,
      images: [url(page.image.src)],
    })),
    {
      url: url("/use-cases"),
      lastModified: lastModified("/use-cases"),
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
      lastModified: lastModified(`/${page.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [url(page.image.src)],
    })),
    {
      url: url("/about"),
      lastModified: lastModified("/about"),
      changeFrequency: "monthly",
      priority: 0.75,
      images: [url("/screenshots/home-spaces.jpg")],
    },
    {
      url: url("/contact"),
      lastModified: lastModified("/contact"),
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: url("/privacy"),
      lastModified: lastModified("/privacy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: url("/terms"),
      lastModified: lastModified("/terms"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: url("/delete-account"),
      lastModified: lastModified("/delete-account"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
