import { BuddyLanding } from "@/components/home/BuddyLanding";
import { BuddyFooter } from "@/components/home/BuddyFooter";
import { Navbar } from "@/components/home/Navbar";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="site-shell studio-page">
      <JsonLd data={homeJsonLd()} />
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <BuddyLanding />
      <BuddyFooter />
    </div>
  );
}
