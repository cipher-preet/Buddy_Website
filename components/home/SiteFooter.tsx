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
          <a href="/#product">Why Buddy</a>
          <a href="/#workflow">How it works</a>
          <a href="/#screens">App</a>
          <a href="/#cta">Get Buddy</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/delete-account">Delete Account</a>
        </nav>

        <p className="site-footer-copy">© {new Date().getFullYear()} Buddy. All rights reserved.</p>
      </div>
    </footer>
  );
}
