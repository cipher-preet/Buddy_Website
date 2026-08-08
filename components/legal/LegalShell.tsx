import type { ReactNode } from "react";
import { BrandMark } from "@/components/home/BrandMark";
import { SiteFooter } from "@/components/home/SiteFooter";

type LegalShellProps = {
  children: ReactNode;
};

export function LegalShell({ children }: LegalShellProps) {
  return (
    <div className="site-shell legal-shell">
      <header className="site-header legal-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <BrandMark href="/" />
          <div className="nav-links">
            <a href="/#product">Why Buddy</a>
            <a href="/#workflow">How it works</a>
            <a href="/#screens">App</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/delete-account">Delete account</a>
          </div>
          <a className="nav-cta" href="/#cta">
            Get Buddy
          </a>
        </nav>
      </header>
      <main className="legal-main">{children}</main>
      <SiteFooter />
    </div>
  );
}
