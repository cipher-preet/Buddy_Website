import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Enterprise-grade robots.txt configuration for Buddy AI.
 * Optimizes traditional Search Engine Optimization (Google, Bing, Yahoo, DuckDuckGo)
 * and Generative Engine Optimization (GEO) for AI search agents and LLM scrapers.
 */

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
  "Meta-ExternalFetcher",
  "cohere-ai",
  "cohere-training-data-crawler",
  "Diffbot",
  "Amazonbot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
