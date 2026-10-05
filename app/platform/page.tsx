import type { Metadata } from "next";
import { DestinationPageView } from "@/components/seo/DestinationPageView";
import { getDestinationPage } from "@/lib/destination-pages";
import { destinationPageJsonLd } from "@/lib/json-ld";
import { seoPageMetadata } from "@/lib/seo-metadata";

const page = getDestinationPage("platform")!;

export const metadata: Metadata = seoPageMetadata(page, "/platform");

export default function PlatformPage() {
  return <DestinationPageView page={page} jsonLd={destinationPageJsonLd(page)} />;
}
