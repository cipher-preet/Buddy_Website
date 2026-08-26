import { BuddyLanding } from "@/components/home/BuddyLanding";
import { BuddyFooter } from "@/components/home/BuddyFooter";
import { Navbar } from "@/components/home/Navbar";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SmoothScroll } from "@/components/home/SmoothScroll";

export default function Home() {
  return (
    <div className="site-shell home-page buddy-redesign">
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <BuddyLanding />
      <BuddyFooter />
    </div>
  );
}
