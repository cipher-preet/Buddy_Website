import Link from "next/link";
import type { DestinationPage } from "@/lib/destination-pages";
import { siteConfig } from "@/lib/site";
import { FaWindows } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2";

const categories = [
  { label: "All downloads", href: "/get-kukunotes" },
  { label: "Android", href: siteConfig.playStoreUrl, external: true },
  { label: "Windows", href: "/windows" },
  { label: "Chrome", href: siteConfig.chromeStoreUrl, external: true },
  { label: "Web", href: "/platform" },
];

export function DownloadCardPage({ page }: { page: DestinationPage }) {
  const windows = page.slug === "windows";
  const current = windows ? "Windows" : "Web";
  const Icon = windows ? FaWindows : HiOutlineGlobeAlt;

  return (
    <div className="dl-card-layout">
      <header className="dl-card-hero">
        <h1>{current}</h1>
        <p>
          {windows
            ? "Record the meeting on your computer. No bot joins the call."
            : "Review Spaces, notes, and tasks in the browser."}
        </p>
      </header>

      <div className="dl-card-body">
        <nav className="dl-card-cats" aria-label="Download categories">
          <p>Categories</p>
          <ul>
            {categories.map((item) => {
              const active = item.label === current;
              if (item.external) {
                return (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <Link href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <article className="dl-card">
          <div className="dl-card-top">
            <span className="dl-card-icon" aria-hidden="true">
              <Icon />
            </span>
            <h2>{windows ? "KukuNotes for Windows" : "KukuNotes on the web"}</h2>
          </div>
          <p>
            {windows
              ? "Install from the Microsoft Store for Windows 10 and 11. KukuNotes records on your device, and no bot joins the call. Listening starts only when you ask."
              : "Open the web app to review Spaces, notes, tasks, and Ask KukuNotes. It syncs with Android, Windows, and Chrome. Capture stays on those apps."}
          </p>
          <a href={page.cta.href} target="_blank" rel="noopener noreferrer">
            {page.cta.label}
          </a>
        </article>
      </div>
    </div>
  );
}
