import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { getKukuNotesJsonLd } from "@/lib/json-ld";
import { pageAlternates, socialMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = {
  title: "Download KukuNotes for Android, Windows, and Web",
  description:
    "Get KukuNotes on Google Play, the Microsoft Store, the Chrome Web Store, and the web. Recording is opt-in and no meeting bot joins the call.",
  keywords: [
    "download KukuNotes",
    "KukuNotes app download",
    "AI note taker Android",
    "meeting recorder download",
    "KukuNotes Google Play",
    "KukuNotes Microsoft Store",
    "KukuNotes Chrome extension",
    "best AI assistant app Android",
    "multilingual voice notes app",
    "private meeting recorder app",
    "best AI note taker for Android",
  ],
  alternates: pageAlternates("/get-kukunotes"),
  ...socialMetadata(
    "Download KukuNotes for Android, Windows, Chrome, and web",
    "Get KukuNotes on Google Play, the Microsoft Store, the Chrome Web Store, and the web. Recording is opt-in and no meeting bot joins the call.",
    "/get-kukunotes",
  ),
};

export default function GetKukuNotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={getKukuNotesJsonLd()} />
      {children}
    </>
  );
}
