import Link from "next/link";

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
            <h2>Make more room for what matters.</h2>
            <p>One calm place for your conversations, plans, and next steps.</p>
            <a className="footer-cta" href="mailto:hello@buddy.ai?subject=Get%20Buddy">Get Buddy <span>↗</span></a>
          </div>
          <nav className="footer-columns" aria-label="Footer">
            <div><p>PRODUCT</p><Link href="/#day">Daily briefing</Link><Link href="/#organize">Calendar</Link><Link href="/#goals">Goal monitor</Link><Link href="/#intelligence">Buddy Intelligence</Link></div>
            <div><p>EXPLORE</p><Link href="/#capture">Notes & tasks</Link><Link href="/#share">Share spaces</Link><Link href="/#app">The Buddy app</Link><Link href="/#cta">Get Buddy</Link></div>
            <div><p>LEGAL</p><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link><Link href="/delete-account">Delete account</Link><a href="mailto:hello@buddy.ai">Contact</a></div>
          </nav>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Buddy. All rights reserved.</p><p>Listen · Remember · Act</p></div>
      </div>
    </footer>
  );
}
