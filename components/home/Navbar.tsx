"use client";

import { useCaseItems } from "@/lib/home-data";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";
import {
  HiArrowUpRight,
  HiChevronDown,
  HiChevronRight,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
  HiOutlineGlobeAlt,
  HiOutlineMicrophone,
  HiOutlinePuzzlePiece,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

const useCaseTones: Record<string, string> = {
  violet: "blue",
  indigo: "indigo",
  cyan: "sky",
  green: "teal",
  rose: "slate",
};

const useCaseIcons: Record<string, IconType> = {
  violet: HiOutlineAcademicCap,
  indigo: HiOutlineUserGroup,
  cyan: HiOutlineBriefcase,
  green: HiOutlineCalendarDays,
  rose: HiOutlineMicrophone,
};

type FlyoutItem = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
  tone: string;
  external?: boolean;
};

const navMenus: { label: string; href: string; heading: string; items: FlyoutItem[] }[] = [
  {
    label: "Use cases",
    href: "/use-cases",
    heading: "Something for everyone",
    items: useCaseItems.map((item) => ({
      title: item.title,
      description: item.summary,
      href: `/use-cases/${item.id}`,
      icon: useCaseIcons[item.accent] ?? HiOutlineSparkles,
      tone: useCaseTones[item.accent] ?? "blue",
    })),
  },
  {
    label: "Download",
    href: "/get-kukunotes",
    heading: "Download KukuNotes",
    items: [
      {
        title: "Android",
        description: "Get the app on Google Play. Recording stays opt-in.",
        href: siteConfig.playStoreUrl,
        icon: HiOutlineDevicePhoneMobile,
        tone: "blue",
        external: true,
      },
      {
        title: "Windows",
        description: "Record the meeting on your computer. No bot joins the call.",
        href: "/windows",
        icon: HiOutlineComputerDesktop,
        tone: "indigo",
      },
      {
        title: "Chrome",
        description: "Add the extension from the Chrome Web Store.",
        href: siteConfig.chromeStoreUrl,
        icon: HiOutlinePuzzlePiece,
        tone: "sky",
        external: true,
      },
      {
        title: "Web",
        description: "Review spaces, notes, and tasks in the browser.",
        href: "/platform",
        icon: HiOutlineGlobeAlt,
        tone: "teal",
      },
    ],
  },
];

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
      <nav className="nav-shell kn-shell" aria-label="Primary navigation">
        <BrandMark />
        <div className="nav-links">
          {navMenus.map((menu) => {
            const active = isRouteActive(menu.href);
            return (
              <div className="nav-menu" key={menu.href}>
                <Link
                  href={menu.href}
                  className={`nav-trigger${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup="true"
                >
                  {menu.label}
                  <HiChevronDown aria-hidden="true" />
                </Link>
                <div className="nav-flyout">
                  <div className="nav-flyout-card">
                    <p className="nav-flyout-heading">{menu.heading}</p>
                    <div className="nav-flyout-list">
                      {menu.items.map((item) => {
                        const Icon = item.icon;
                        const body = (
                          <>
                            <span className={`nav-flyout-icon tone-${item.tone}`} aria-hidden="true">
                              <Icon />
                            </span>
                            <span className="nav-flyout-copy">
                              <span className="nav-flyout-title">
                                {item.title}
                                {item.external ? <HiArrowUpRight aria-hidden="true" /> : null}
                              </span>
                              <span className="nav-flyout-desc">{item.description}</span>
                            </span>
                          </>
                        );
                        if (item.external) {
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              className="nav-flyout-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {body}
                            </a>
                          );
                        }
                        return (
                          <Link key={item.title} href={item.href} className="nav-flyout-link">
                            {body}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Link
            href="/pricing"
            className={isRouteActive("/pricing") ? "is-active" : undefined}
            aria-current={isRouteActive("/pricing") ? "page" : undefined}
          >
            Pricing
          </Link>
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
          {[...navMenus, { label: "Pricing", href: "/pricing" }].map((item, index) => {
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
