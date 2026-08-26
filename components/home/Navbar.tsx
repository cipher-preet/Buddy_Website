"use client";

import { navItems } from "@/lib/home-data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 980) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <BrandMark />
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-end">
          <Link className="nav-cta" href="/#cta" onClick={() => setOpen(false)}>
            <span>Get Buddy</span>
            <i aria-hidden="true">↗</i>
          </Link>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="studio-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className="nav-drawer" id="studio-mobile-nav" hidden={!open}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <Link className="nav-drawer-cta" href="/#cta" onClick={() => setOpen(false)}>
          Get Buddy
        </Link>
      </div>
    </header>
  );
}
