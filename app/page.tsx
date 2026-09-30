import { BuddyLanding } from "@/components/home/BuddyLanding";
import { BuddyFooter } from "@/components/home/BuddyFooter";
import { Navbar } from "@/components/home/Navbar";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: [
    "Buddy AI",
    "AI assistant",
    "personal AI assistant",
    "best AI assistant app",
    "AI note taker",
    "AI note taking app",
    "meeting recording",
    "AI meeting recorder",
    "meeting notes without bot",
    "voice notes to tasks",
    "conversation to notes",
    "daily briefing app",
    "Hindi English meeting notes",
    "second brain app Android",
    "Otter alternative Android",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Buddy AI - Personal AI Assistant & Meeting Note Taker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

export default function Home() {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={homeJsonLd()} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <BuddyLanding />
      <BuddyFooter />
    </div>
  );
}
