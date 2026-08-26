import type { ReactNode } from "react";
import Link from "next/link";
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
            <Link href="/#product">Why Buddy</Link>
            <Link href="/#workflow">How it works</Link>
            <Link href="/#screens">App</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/delete-account">Delete account</Link>
          </div>
          <Link className="nav-cta" href="/#cta">
            Get Buddy
          </Link>
        </nav>
      </header>
      <main className="legal-main">{children}</main>
      <SiteFooter />
    </div>
  );
}
