"use client";

import { navItems } from "@/lib/home-data";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";
import { HiChevronRight, HiArrowUpRight } from "react-icons/hi2";
import { FaGooglePlay } from "react-icons/fa6";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const travel = useRef(0);
  const hiddenRef = useRef(false);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
    if (open) {
      hiddenRef.current = false;
      setHidden(false);
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setHidden(false);
    hiddenRef.current = false;
    travel.current = 0;
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;
    setScrolled(lastY.current > 8);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") setOpen(false); }
    function onResize() { if (window.innerWidth > 980) setOpen(false); }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Scroll distance (px) required in one direction before toggling,
  // so small jitters / trackpad inertia don't make the bar flicker.
  const HIDE_AFTER = 24;
  const SHOW_AFTER = 12;
  const TOP_ZONE = 12;

  useEffect(() => {
    let frame = 0;
    lastY.current = window.scrollY;

    const setHiddenState = (next: boolean) => {
      if (openRef.current) return;
      if (hiddenRef.current === next) return;
      hiddenRef.current = next;
      setHidden(next);
    };

    const update = () => {
      frame = 0;
      const y = Math.max(0, window.scrollY);
      const dy = y - lastY.current;
      lastY.current = y;

      setScrolled(y > TOP_ZONE);

      if (openRef.current || y <= TOP_ZONE) {
        travel.current = 0;
        setHiddenState(false);
        return;
      }

      // Keep the bar available while a keyboard user is inside it.
      if (headerRef.current?.contains(document.activeElement)) {
        setHiddenState(false);
        return;
      }

      if (dy === 0) return;

      // Reset accumulated travel whenever direction changes.
      if ((dy > 0 && travel.current < 0) || (dy < 0 && travel.current > 0)) {
        travel.current = 0;
      }
      travel.current += dy;

      const headerHeight = headerRef.current?.offsetHeight ?? 80;

      if (travel.current > HIDE_AFTER && y > headerHeight) {
        setHiddenState(true);
      } else if (travel.current < -SHOW_AFTER) {
        setHiddenState(false);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const isRouteActive = (href: string) => {
    if (!pathname) return false;
    const current = pathname.replace(/\/$/, "") || "/";
    const target =
      (href.split("#")[0].split("?")[0] || "/").replace(/\/$/, "") || "/";
    return target === "/"
      ? current === "/"
      : current === target || current.startsWith(`${target}/`);
  };

  const isActuallyHidden = !open && hidden;

  return (
    <>
      {open && (
        <div
          className="nav-backdrop is-open"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <header
        ref={headerRef}
        className={[
          "site-header",
          open ? "is-open" : "",
          scrolled ? "is-scrolled" : "",
          isActuallyHidden ? "is-hidden" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onFocusCapture={() => {
          hiddenRef.current = false;
          setHidden(false);
        }}
      >
      <nav className="nav-shell" aria-label="Primary navigation">
        <BrandMark />
        <div className="nav-links">
          {navItems.map((item) => {
            const active = isRouteActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="nav-end">
          <Link
            className={`nav-login${isRouteActive("/login") ? " is-active" : ""}`}
            href="/login"
            aria-current={isRouteActive("/login") ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <a
            className="nav-cta"
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <span>Start for Free</span>
            <i aria-hidden="true">↗</i>
          </a>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="studio-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className="nav-drawer" id="studio-mobile-nav" hidden={!open}>
        <div className="nav-drawer-header">
          <div className="nav-drawer-badge">
            <span className="nav-drawer-badge-dot" aria-hidden="true" />
            <span>Navigation</span>
          </div>
          <span className="nav-drawer-version">KukuNotes for Android</span>
        </div>

        <div className="nav-drawer-links" role="list">
          {navItems.map((item, index) => {
            const active = isRouteActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-drawer-link${active ? " is-active" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${index * 35}ms` }}
              >
                <span className="nav-drawer-link-label">{item.label}</span>
                <span className="nav-drawer-link-end" aria-hidden="true">
                  <HiChevronRight className={`nav-drawer-chevron${active ? " is-active" : ""}`} />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="nav-drawer-actions">
          <Link
            className={`nav-drawer-login${isRouteActive("/login") ? " is-active" : ""}`}
            href="/login"
            aria-current={isRouteActive("/login") ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            <span>Login to Web Studio</span>
            <HiArrowUpRight className="nav-drawer-action-arrow" aria-hidden="true" />
          </Link>

          <a
            className="nav-drawer-cta"
            href={siteConfig.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <span className="nav-drawer-cta-left">
              <FaGooglePlay className="nav-drawer-play-icon" aria-hidden="true" />
              <span>Start for Free</span>
            </span>
            <span className="nav-drawer-cta-badge">Get App ↗</span>
          </a>

          <div className="nav-drawer-subtext">
            <span>Free forever on Android</span>
            <span className="nav-drawer-dot-sep">•</span>
            <span>No credit card needed</span>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
