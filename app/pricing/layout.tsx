import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { pricingJsonLd } from "@/lib/json-ld";
import { formatInr, planFacts, priceCopy } from "@/lib/product-facts";
import { pageAlternates, socialMetadata } from "@/lib/seo-metadata";

const description = priceCopy.summary;
const socialTitle = `KukuNotes pricing — Pro ${formatInr(planFacts.pro.monthlyInr)}/month, Business ${formatInr(planFacts.business.monthlyInr)}/month`;

export const metadata: Metadata = {
  title: "Pricing — Free, Pro and Business",
  description,
  keywords: [
    "KukuNotes pricing",
    "AI note taker pricing",
    "AI meeting recorder cost",
    "KukuNotes Pro subscription",
    "KukuNotes Business",
    "free AI assistant Android",
    "meeting transcription price",
    "multilingual AI pricing",
    "Otter alternative pricing",
    "INR priced AI note taker",
    "UPI AI note taking app",
  ],
  alternates: pageAlternates("/pricing"),
  ...socialMetadata(socialTitle, description, "/pricing"),
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={pricingJsonLd()} />
      {children}
    </>
  );
}
