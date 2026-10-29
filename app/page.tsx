import { KukuNotesLanding } from "@/components/home/KukuNotesLanding";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/json-ld";
import { seoKeywords } from "@/lib/seo-keywords";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: [
    ...seoKeywords.brand,
    ...seoKeywords.brandVariants,
    ...seoKeywords.languages,
    "AI assistant",
    "personal AI assistant",
    "best AI assistant app",
    "AI note taker",
    "AI note taking app",
    "meeting recording",
    "AI meeting recorder",
    "meeting notes without bot",
    "minutes of meeting app",
    "voice notes to tasks",
    "conversation to notes",
    "daily briefing app",
    "second brain app Android",
    "Otter alternative Android",
    "multilingual meeting notes",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    type: "website",
    images: [
      {
        url: `/opengraph-image?v=${siteConfig.assetVersion}`,
        width: 1200,
        height: 630,
        alt: "KukuNotes AI note taker — Capture. Organize. Grow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`/opengraph-image?v=${siteConfig.assetVersion}`],
  },
};

export default function Home() {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={homeJsonLd()} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <KukuNotesLanding />
      <KukuNotesFooter />
    </div>
  );
}
