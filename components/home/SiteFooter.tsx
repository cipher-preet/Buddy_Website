import Link from "next/link";

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
            <strong>Buddy</strong>
            <p>Listen. Remember. Act.</p>
          </div>
        </div>

        <nav className="site-footer-links" aria-label="Footer">
          <Link href="/#product">Why Buddy</Link>
          <Link href="/#workflow">How it works</Link>
          <Link href="/#screens">App</Link>
          <Link href="/#cta">Get Buddy</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/delete-account">Delete Account</Link>
        </nav>

        <p className="site-footer-copy">© {new Date().getFullYear()} Buddy. All rights reserved.</p>
      </div>
    </footer>
  );
}
