"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiArrowUpRight, HiBars2, HiXMark } from "react-icons/hi2";
import { siteConfig } from "@/lib/site";
import { BrandMark } from "./BrandMark";

const links = [
  { label: "Product", href: "/#product" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Downloads", href: "/get-kukunotes" },
  { label: "Contact us", href: "/contact" },
];
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.dispatchEvent(new CustomEvent("kuku:overlay", { detail: true }));
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const focusable = [
          ...(navRef.current?.querySelectorAll<HTMLElement>("a, button") ?? []),
        ].filter((el) => el.getClientRects().length);
        const first = focusable[0],
          last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const resize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    document.addEventListener("keydown", key);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.dispatchEvent(
        new CustomEvent("kuku:overlay", { detail: false }),
      );
      document.removeEventListener("keydown", key);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-grain" aria-hidden="true" />
        <nav
          className="nav-shell container"
          aria-label="Primary navigation"
          ref={navRef}
        >
          <BrandMark />
          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-end">
            <a className="nav-login" href={siteConfig.platformUrl}>
              Log in
            </a>
            <a className="nav-cta" href={siteConfig.platformUrl}>
              Start for free <HiArrowUpRight aria-hidden="true" />
            </a>
            <button
              className="nav-menu-btn"
              type="button"
              ref={toggleRef}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <HiXMark aria-hidden="true" />
              ) : (
                <HiBars2 aria-hidden="true" />
              )}
            </button>
          </div>
          <div
            id="mobile-navigation"
            className="mobile-navigation"
            hidden={!open}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
                <HiArrowUpRight aria-hidden="true" />
              </Link>
            ))}
            <a href={siteConfig.platformUrl}>
              Log in to your workspace <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>
      {open && (
        <button
          className="nav-scrim"
          type="button"
          aria-label="Close navigation backdrop"
          tabIndex={-1}
          onClick={() => {
            setOpen(false);
            toggleRef.current?.focus();
          }}
        />
      )}
    </>
  );
}
