import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f6",
    theme_color: "#2955d9",
    lang: siteConfig.language,
    categories: ["productivity", "lifestyle"],
    icons: [
      {
        src: `/brand/kukunotes-icon-192.png?v=${siteConfig.assetVersion}`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/brand/kukunotes-icon-512.png?v=${siteConfig.assetVersion}`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/brand/kukunotes-icon-512.png?v=${siteConfig.assetVersion}`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
