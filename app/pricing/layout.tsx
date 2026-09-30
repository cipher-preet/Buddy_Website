import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { pricingJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — Free, Pro & Business Plans for AI Meeting Notes & Assistant",
  description:
    "Explore Buddy AI plans: Start completely free on Android, or upgrade to Pro (₹799/mo) and Business (₹1,999/mo) for 100+ recording hours, 11 Indian regional languages, and team spaces.",
  keywords: [
    "Buddy AI pricing",
    "AI note taker pricing",
    "AI meeting recorder cost",
    "Buddy Pro subscription",
    "free AI assistant Android",
    "meeting transcription price",
    "multilingual AI pricing",
    "Otter alternative pricing",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Buddy AI Pricing — Simple, Transparent Plans for Every Workflow",
    description:
      "Start free on Android. Upgrade for 100 hours of meeting recording, 11 Indian languages, and unlimited intelligence.",
    url: "/pricing",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Buddy AI Pricing Plans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddy AI Pricing — Simple, Transparent Plans",
    description:
      "Capture conversations, extract action items, and organize spaces. Free forever tier available on Android.",
    images: ["/opengraph-image"],
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
