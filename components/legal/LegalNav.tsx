"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of service" },
  { href: "/delete-account", label: "Delete account" },
];

export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav className="legal-switch" aria-label="Legal pages">
      {pages.map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className={pathname.replace(/\/$/, "") === page.href ? "is-active" : ""}
          aria-current={pathname.replace(/\/$/, "") === page.href ? "page" : undefined}
        >
          {page.label}
        </Link>
      ))}
    </nav>
  );
}
