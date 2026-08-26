import Link from "next/link";
import { BuddyFooter } from "./BuddyFooter";
import { Navbar } from "./Navbar";

const shortcuts = [
  { href: "/#product", label: "Product" },
  { href: "/#listen", label: "Listen" },
  { href: "/#spaces", label: "Spaces" },
  { href: "/#ask", label: "Ask Buddy" },
  { href: "/privacy", label: "Privacy" },
];

export function NotFoundView() {
  return (
    <div className="site-shell studio-page not-found-shell">
      <Navbar />
      <main className="not-found-main">
        <section className="not-found-copy">
          <p className="studio-kicker">404</p>
          <h1>This page didn’t make it into your notes.</h1>
          <p className="not-found-lead">
            The link may be outdated, or the page moved. Let’s get you back to
            something Buddy can help with.
          </p>
          <div className="not-found-actions">
            <Link className="studio-btn studio-btn-ink" href="/">
              Back home
            </Link>
            <Link className="studio-text-link" href="/#product">
              See the product <span>↗</span>
            </Link>
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
            <p>Buddy looked. Nothing here to listen to, remember, or act on.</p>
          </article>
        </aside>
      </main>
      <BuddyFooter />
    </div>
  );
}
