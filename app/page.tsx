import { FeatureGrid } from "@/components/home/FeatureGrid";
import { GetBuddy } from "@/components/home/GetBuddy";
import { Hero } from "@/components/home/Hero";
import { Navbar } from "@/components/home/Navbar";
import { ScreensShowcase } from "@/components/home/ScreensShowcase";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SiteFooter } from "@/components/home/SiteFooter";
import { Workflow } from "@/components/home/Workflow";

export default function Home() {
  return (
    <div className="site-shell">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Workflow />
        <ScreensShowcase />
        <GetBuddy />
      </main>
      <SiteFooter />
    </div>
  );
}
