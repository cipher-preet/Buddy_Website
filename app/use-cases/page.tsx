import type { Metadata } from "next";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { UseCaseStory } from "@/components/use-cases/UseCaseStory";
import { JsonLd } from "@/components/seo/JsonLd";
import { useCasesJsonLd } from "@/lib/json-ld";
import { pageAlternates, socialMetadata } from "@/lib/seo-metadata";
import { useCaseIndex } from "@/lib/use-case-stories";

export const metadata: Metadata = {
  title: useCaseIndex.metaTitle,
  description: useCaseIndex.description,
  keywords: [
    "AI note taker for students",
    "AI meeting recorder for teams",
    "AI sales call notes",
    "lecture transcription app",
    "AI task extractor from conversations",
    "second brain personal planning",
    "creator interview notes AI",
    "meeting summary app without bots",
    "KukuNotes use cases",
    "client visit meeting notes app",
    "dealer meeting notes AI",
    "college lecture notes AI",
    "minutes of meeting app",
  ],
  alternates: pageAlternates("/use-cases"),
  ...socialMetadata(useCaseIndex.metaTitle, useCaseIndex.description, "/use-cases"),
};

export default function UseCasesPage() {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={useCasesJsonLd()} />
      <Navbar />
      <main className="studio use-cases-page" id="main-content">
        <UseCaseStory story={useCaseIndex} />
      </main>
      <KukuNotesFooter />
    </div>
  );
}
