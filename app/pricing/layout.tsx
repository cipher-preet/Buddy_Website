import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buddy Pricing – Free, Pro, and Business Plans",
  description:
    "Buddy is free to start. Upgrade to Pro for unlimited spaces, 100 hours of recording, daily briefing, and goal monitor. Business adds 11 Indian languages and team workspaces.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Buddy Pricing – Free, Pro, and Business Plans",
    description:
      "Start free and upgrade to Pro (Rs.299/mo) or Business (Rs.699/mo) for unlimited spaces, multilingual AI, team workspaces, and more.",
    url: "/pricing",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Buddy pricing plans" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddy Pricing – Free, Pro, and Business",
    description:
      "Start free. Upgrade to Pro or Business for unlimited AI notes, multilingual support, and team workspaces.",
    images: ["/opengraph-image"],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
