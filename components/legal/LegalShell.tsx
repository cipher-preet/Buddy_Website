import type { ReactNode } from "react";
import { BuddyFooter } from "@/components/home/BuddyFooter";
import { Navbar } from "@/components/home/Navbar";
import { LegalNav } from "./LegalNav";

type LegalShellProps = {
  children: ReactNode;
};

export function LegalShell({ children }: LegalShellProps) {
  return (
    <div className="site-shell studio-page legal-shell">
      <Navbar />
      <main className="legal-main">
        <LegalNav />
        {children}
      </main>
      <BuddyFooter />
    </div>
  );
}
