"use client";

import { navItems } from "@/lib/home-data";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";
import { HiChevronRight, HiArrowUpRight } from "react-icons/hi2";

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
    if (!open) return;
    hiddenRef.current = false;
    const frame = requestAnimationFrame(() => setHidden(false));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    hiddenRef.current = false;
    travel.current = 0;
    lastY.current = window.scrollY;
    const frame = requestAnimationFrame(() => {
      setOpen(false);
      setHidden(false);
      setScrolled(window.scrollY > 8);
    });
    return () => cancelAnimationFrame(frame);
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
    if (!pathname || href.includes("#")) return false;
    const current = pathname.replace(/\/$/, "") || "/";
    const target = (href.split("?")[0] || "/").replace(/\/$/, "") || "/";
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
          <a
            className="nav-login"
            href={siteConfig.platformUrl}
            onClick={() => setOpen(false)}
          >
            Login
          </a>
          <Link className="nav-cta" href="/get-kukunotes" onClick={() => setOpen(false)}>
            <span>Get KukuNotes</span>
          </Link>
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="studio-mobile-nav"
            onClick={() => {
              hiddenRef.current = false;
              setHidden(false);
              setOpen((v) => !v);
            }}
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
          <a
            className="nav-drawer-login"
            href={siteConfig.platformUrl}
            onClick={() => setOpen(false)}
          >
            <span>Log in</span>
            <HiArrowUpRight className="nav-drawer-action-arrow" aria-hidden="true" />
          </a>

          <Link className="nav-drawer-cta" href="/get-kukunotes" onClick={() => setOpen(false)}>
            Get KukuNotes free
          </Link>

          <div className="nav-drawer-subtext">
            <span>Free plan</span>
            <span className="nav-drawer-dot-sep">•</span>
            <span>2 hours of notes, 10 hours of meetings</span>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
