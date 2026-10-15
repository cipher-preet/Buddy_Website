import Link from "next/link";
import { BrandMark } from "./BrandMark";
const columns = [
  {
    label: "Product",
    links: [
      ["Explore features", "/#product"],
      ["Use cases", "/use-cases"],
      ["Pricing", "/pricing"],
      ["Spaces", "/#spaces"],
    ],
  },
  {
    label: "Get KukuNotes",
    links: [
      ["Web workspace", "/platform"],
      ["Android", "/android"],
      ["Windows", "/windows"],
      ["Chrome extension", "/chrome-extension"],
    ],
  },
  {
    label: "Solutions",
    links: [
      ["AI note taker", "/ai-note-taker"],
      ["Meeting recorder", "/ai-meeting-recorder"],
      ["Hindi speech to text", "/hindi-speech-to-text"],
      ["Personal assistant", "/ai-personal-assistant"],
      ["Lecture notes", "/ai-lecture-notes"],
    ],
  },
  {
    label: "Company",
    links: [
      ["Our story", "/about"],
      ["Contact", "/contact"],
      ["Privacy", "/privacy"],
      ["Terms", "/terms"],
      ["Delete account", "/delete-account"],
    ],
  },
];
export function KukuNotesFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-intro">
            <BrandMark />
            <p>
              A little less to remember.
              <br />A lot more to move forward.
            </p>
            <span className="footer-tagline">Capture. Organize. Grow.</span>
          </div>
          <nav className="footer-columns" aria-label="Footer">
            {columns.map((col) => (
              <div key={col.label}>
                <h2>{col.label}</h2>
                {col.links.map(([label, href]) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} KukuNotes</p>
          <p>Made for conversations that matter.</p>
          <Link href="/privacy">
            Your privacy matters <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
