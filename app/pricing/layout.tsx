import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { pricingJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — Free, Pro & Business Plans in ₹",
  description:
    "KukuNotes pricing in INR: Free forever, Pro at ₹799/month, Business at ₹1,999/month. Pay with UPI via Razorpay. AI note taker, bot-free meeting recorder, Hindi & Hinglish included.",
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
    title: "KukuNotes Pricing — Free, Pro ₹799 & Business ₹1,999",
    description:
      "Start free. Upgrade for more recording hours, daily briefing, goal monitor, and 11 Indian languages. Pay in INR with UPI.",
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
