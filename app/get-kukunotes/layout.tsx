import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { getKukuNotesJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download KukuNotes — Android App, Desktop, Chrome Extension & Web",
  description:
    "Get KukuNotes assistant on Android via Google Play, or access across Desktop (Mac & Windows), Chrome Extension, and Web. Enjoy zero-bot meeting recording, note taking, and cross-platform sync.",
  keywords: [
    "download KukuNotes",
    "KukuNotes app download",
    "AI note taker Android",
    "meeting recorder download",
    "KukuNotes Google Play",
    "best AI assistant app Android",
    "multilingual voice notes app",
    "private meeting recorder app",
  ],
  alternates: {
    canonical: "/get-kukunotes",
  },
  openGraph: {
    title: "Download KukuNotes — Available Wherever You Talk, Think & Work",
    description:
      "Capture conversations, extract actions, and organize spaces on your phone, desktop, and browser.",
    url: "/get-kukunotes",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Download KukuNotes Companion" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download KukuNotes — Android, Desktop & Web",
    description:
      "Zero-bot meeting recording and AI note taking. Install KukuNotes today.",
    images: ["/opengraph-image"],
  },
};

export default function GetKukuNotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getKukuNotesJsonLd()} />
      {children}
    </>
  );
}
