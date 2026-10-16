import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { pricingJsonLd } from "@/lib/json-ld";
import { formatInr, planFacts, priceCopy } from "@/lib/product-facts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — Free, Pro & Business Plans in ₹",
  description: `KukuNotes pricing in INR. ${priceCopy.freeHours}. ${priceCopy.pro}. ${priceCopy.business}. Pay with UPI via Razorpay.`,
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
    "AI note taker India pricing",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: `KukuNotes Pricing — Pro ${formatInr(planFacts.pro.monthlyInr)} & Business ${formatInr(planFacts.business.monthlyInr)}`,
    description: `${priceCopy.summary} Pay with UPI via Razorpay.`,
    url: "/pricing",
    type: "website",
    images: [
      {
        url: `/opengraph-image?v=${siteConfig.assetVersion}`,
        width: 1200,
        height: 630,
        alt: "KukuNotes Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KukuNotes Pricing — Simple Plans in ₹",
    description:
      "Capture conversations, extract action items, and organize Spaces. Free forever tier available on Android.",
    images: [`/opengraph-image?v=${siteConfig.assetVersion}`],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={pricingJsonLd()} />
      {children}
    </>
  );
}
