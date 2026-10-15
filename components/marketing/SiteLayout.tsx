import type { ReactNode } from "react";
import { Navbar } from "@/components/home/Navbar";
import { KukuNotesFooter } from "@/components/home/KukuNotesFooter";

export function SiteLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`site-shell ${className}`}>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <KukuNotesFooter />
    </div>
  );
}
