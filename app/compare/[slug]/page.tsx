import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoPageView } from "@/components/seo/SeoPageView";
import { seoPageJsonLd } from "@/lib/json-ld";
import { seoPageMetadata } from "@/lib/seo-metadata";
import { comparePages, getComparePage } from "@/lib/seo-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/compare/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) return {};
  return seoPageMetadata(page, `/compare/${page.slug}`);
}

export default async function ComparePage({ params }: PageProps<"/compare/[slug]">) {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) notFound();

  const path = `/compare/${page.slug}`;

  return (
    <SeoPageView
      page={page}
      breadcrumb={{ label: "Compare", href: "/compare" }}
      jsonLd={seoPageJsonLd(page, path, { name: "Compare", path: "/compare" })}
    />
  );
}
