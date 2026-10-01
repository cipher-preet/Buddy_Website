import Link from "next/link";
import { KukuNotesFooter } from "./KukuNotesFooter";
import { Navbar } from "./Navbar";
import { siteConfig } from "@/lib/site";

const shortcuts = [
  { href: "/#product", label: "Product" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/contact", label: "Contact" },
];

export function NotFoundView() {
  return (
    <div className="site-shell studio-page not-found-shell">
      <Navbar />
      <main className="not-found-main">
        <section className="not-found-copy">
          <p className="studio-kicker">404</p>
          <h1>This page didn’t make it into <span className="brand-gradient-text">your notes.</span></h1>
          <p className="not-found-lead">
            The link may be outdated, or the page moved. Let’s get you back to
            something KukuNotes can help with.
          </p>
          <div className="not-found-actions">
            <Link className="studio-btn studio-btn-ink" href="/">
              Back home
            </Link>
            <Link className="studio-text-link" href="/#product">
              See the product <span>↗</span>
            </Link>
            <a
              className="studio-text-link"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play <span>↗</span>
            </a>
          </div>
          <nav className="not-found-links" aria-label="Helpful links">
            {shortcuts.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </section>

        <aside className="not-found-visual" aria-hidden="true">
          <p className="not-found-code">404</p>
          <article className="not-found-card">
            <span>Empty space</span>
            <strong>No note captured</strong>
            <p>KukuNotes looked. Nothing here to capture, organize, or grow.</p>
          </article>
        </aside>
      </main>
      <KukuNotesFooter />
    </div>
  );
}
