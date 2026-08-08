import { navItems } from "@/lib/home-data";
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
        <a className="nav-cta" href="/#cta">
          Get Buddy
        </a>
      </nav>
    </header>
  );
}
