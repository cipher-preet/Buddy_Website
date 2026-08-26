import { navItems } from "@/lib/home-data";
import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <BrandMark />
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <Link className="nav-cta" href="/#cta">
          <span>Get Buddy</span><i aria-hidden="true">↗</i>
        </Link>
      </nav>
    </header>
  );
}
