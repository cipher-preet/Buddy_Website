import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function BuddyFooter() {
  return (
    <footer className="site-footer buddy-footer">
      <div className="site-footer-inner">
        <div className="footer-main">
          <div className="footer-intro">
            <Link className="site-footer-brand" href="/" aria-label="Buddy home">
              <span className="brand-icon" aria-hidden="true"><span /><span /><span /></span>
              <strong>Buddy</strong>
            </Link>
            <h2>Keep the day you actually lived.</h2>
            <p>One place for conversations, plans, and the next useful step.</p>
            <a
              className="footer-cta"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Buddy
            </a>
          </div>
          <nav className="footer-columns" aria-label="Footer">
            <div>
              <p>PRODUCT</p>
              <Link href="/#product">Inside the app</Link>
              <Link href="/#listen">Live listening</Link>
              <Link href="/#spaces">Spaces</Link>
              <Link href="/#ask">Ask Buddy</Link>
            </div>
            <div>
              <p>COMPANY</p>
              <a href={siteConfig.playStoreUrl} target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
              <a href={`mailto:${siteConfig.email}`}>Contact</a>
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
          <p>© {new Date().getFullYear()} Buddy. All rights reserved.</p>
          <p>Listen · Remember · Act</p>
        </div>
      </div>
    </footer>
  );
}
