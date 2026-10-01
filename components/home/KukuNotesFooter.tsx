import Link from "next/link";
import { solutionLinks } from "@/lib/home-data";
import { siteConfig } from "@/lib/site";

export function KukuNotesFooter() {
  return (
    <footer className="site-footer kukunotes-footer">
      <div className="site-footer-inner">
        <div className="footer-main">
          <div className="footer-intro">
            <Link className="site-footer-brand" href="/" aria-label="KukuNotes home">
              <span className="brand-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <strong>
                Kuku<span className="brand-word-accent">Notes</span>
              </strong>
            </Link>
            <h2>Keep the day you actually lived.</h2>
            <p>One place for conversations, plans, and the next useful step.</p>
            <a
              className="footer-cta"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get KukuNotes
            </a>
          </div>

          <nav className="footer-columns" aria-label="Footer">
            <div>
              <p>SOLUTIONS</p>
              {solutionLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <p>ROUTES</p>
              <Link href="/#product">Product</Link>
              <Link href="/use-cases">Use cases</Link>
              <Link href="/get-kukunotes">Get KukuNotes</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <a href={siteConfig.playStoreUrl} target="_blank" rel="noopener noreferrer">
                Google Play ↗
              </a>
            </div>
            <div>
              <p>LEGAL</p>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of service</Link>
              <Link href="/delete-account">Delete account</Link>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} KukuNotes. All rights reserved.</p>
          <p>Capture · Organize · Grow</p>
        </div>
      </div>
    </footer>
  );
}
