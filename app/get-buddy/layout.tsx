import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBuddyJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Buddy AI — Android App, Desktop, Chrome Extension & Web",
  description:
    "Get Buddy AI assistant on Android via Google Play, or access across Desktop (Mac & Windows), Chrome Extension, and Web. Enjoy zero-bot meeting recording, note taking, and cross-platform sync.",
  keywords: [
    "download Buddy AI",
    "Buddy app download",
    "AI note taker Android",
    "meeting recorder download",
    "Buddy Google Play",
    "best AI assistant app Android",
    "multilingual voice notes app",
    "private meeting recorder app",
  ],
  alternates: {
    canonical: "/get-buddy",
  },
  openGraph: {
    title: "Download Buddy AI — Available Wherever You Talk, Think & Work",
    description:
      "Capture conversations, extract actions, and organize spaces on your phone, desktop, and browser.",
    url: "/get-buddy",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Download Buddy AI Companion" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Buddy AI — Android, Desktop & Web",
    description:
      "Zero-bot meeting recording and AI note taking. Install Buddy today.",
    images: ["/opengraph-image"],
  },
};

export default function GetBuddyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getBuddyJsonLd()} />
      {children}
    </>
  );
}
