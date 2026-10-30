import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
import { Navbar } from "@/components/home/Navbar";
import { UseCaseStory } from "@/components/use-cases/UseCaseStory";
import { pageAlternates, socialMetadata } from "@/lib/seo-metadata";
import { getUseCaseStory, useCaseStories } from "@/lib/use-case-stories";

export function generateStaticParams() {
  return useCaseStories.map((story) => ({ id: story.id }));
}

export async function generateMetadata({ params }: PageProps<"/use-cases/[id]">): Promise<Metadata> {
  const { id } = await params;
  const story = getUseCaseStory(id);
  if (!story) return {};
  return {
    title: story.metaTitle,
    description: story.description,
    alternates: pageAlternates(story.path),
    ...socialMetadata(story.metaTitle, story.description, story.path),
  };
}

export default async function UseCaseDetailPage({ params }: PageProps<"/use-cases/[id]">) {
  const { id } = await params;
  const story = getUseCaseStory(id);
  if (!story) notFound();

  return (
    <div className="site-shell studio-page">
      <Navbar />
      <main className="studio use-cases-page" id="main-content">
        <UseCaseStory story={story} />
      </main>
      <KukuNotesFooter />
    </div>
  );
}
