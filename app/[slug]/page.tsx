import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageView } from "@/components/seo/SeoPageView";
import { seoPageJsonLd } from "@/lib/json-ld";
import { seoPageMetadata } from "@/lib/seo-metadata";
import { getTopicPage, topicPages } from "@/lib/seo-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return topicPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getTopicPage(slug);
  if (!page) return {};
  return seoPageMetadata(page, `/${page.slug}`);
}

export default async function TopicPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = getTopicPage(slug);
  if (!page) notFound();

  return <SeoPageView page={page} jsonLd={seoPageJsonLd(page, `/${page.slug}`)} />;
}
