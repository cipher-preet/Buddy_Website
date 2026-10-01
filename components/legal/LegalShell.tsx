import type { ReactNode } from "react";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";
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
      <KukuNotesFooter />
    </div>
  );
}
