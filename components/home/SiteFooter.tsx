import Link from "next/link";
import { productSectionLinks } from "@/lib/home-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <span className="brand-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <div>
            <strong>
              Kuku<span className="brand-word-accent">Notes</span>
            </strong>
            <p>Capture. Organize. Grow.</p>
          </div>
        </div>

        <nav className="site-footer-links" aria-label="Footer">
          <Link href="/#product">Product</Link>
          <Link href="/use-cases">Use cases</Link>
          <Link href="/contact">Contact</Link>
          {productSectionLinks.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/#cta">Get KukuNotes</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/delete-account">Delete Account</Link>
        </nav>

        <p className="site-footer-copy">© {new Date().getFullYear()} KukuNotes. All rights reserved.</p>
      </div>
    </footer>
  );
}
