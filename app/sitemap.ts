import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
      alternates: {
        languages: {
          en: siteConfig.url,
          "x-default": siteConfig.url,
        },
      },
      images: [
        `${siteConfig.url}/opengraph-image`,
        `${siteConfig.url}/screenshots/daily-briefing.jpeg`,
        `${siteConfig.url}/screenshots/home.png`,
      ],
    },
    {
      url: `${siteConfig.url}/pricing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          en: `${siteConfig.url}/pricing`,
          "x-default": `${siteConfig.url}/pricing`,
        },
      },
      images: [`${siteConfig.url}/opengraph-image`],
    },
    {
      url: `${siteConfig.url}/get-buddy`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          en: `${siteConfig.url}/get-buddy`,
          "x-default": `${siteConfig.url}/get-buddy`,
        },
      },
      images: [
        `${siteConfig.url}/screenshots/home.png`,
        `${siteConfig.url}/screenshots/notes-board.jpeg`,
      ],
    },
    {
      url: `${siteConfig.url}/use-cases`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${siteConfig.url}/use-cases`,
          "x-default": `${siteConfig.url}/use-cases`,
        },
      },
      images: [
        `${siteConfig.url}/use-cases/meetings.jpg`,
        `${siteConfig.url}/use-cases/education.jpg`,
        `${siteConfig.url}/use-cases/sales.jpg`,
        `${siteConfig.url}/use-cases/personal.jpg`,
        `${siteConfig.url}/use-cases/creators.jpg`,
      ],
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteConfig.url}/contact`,
          "x-default": `${siteConfig.url}/contact`,
        },
      },
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${siteConfig.url}/privacy`,
          "x-default": `${siteConfig.url}/privacy`,
        },
      },
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${siteConfig.url}/terms`,
          "x-default": `${siteConfig.url}/terms`,
        },
      },
    },
    {
      url: `${siteConfig.url}/delete-account`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
      alternates: {
        languages: {
          en: `${siteConfig.url}/delete-account`,
          "x-default": `${siteConfig.url}/delete-account`,
        },
      },
    },
  ];
}
