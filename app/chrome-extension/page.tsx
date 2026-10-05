import type { Metadata } from "next";
import { DestinationPageView } from "@/components/seo/DestinationPageView";
import { getDestinationPage } from "@/lib/destination-pages";
import { destinationPageJsonLd } from "@/lib/json-ld";
import { seoPageMetadata } from "@/lib/seo-metadata";

const page = getDestinationPage("chrome-extension")!;

export const metadata: Metadata = seoPageMetadata(page, "/chrome-extension");

export default function ChromeExtensionPage() {
  return <DestinationPageView page={page} jsonLd={destinationPageJsonLd(page)} />;
}
