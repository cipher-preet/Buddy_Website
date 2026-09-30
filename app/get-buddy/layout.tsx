import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Get Buddy — Download on Android, Desktop, Chrome & Web",
  description:
    "Download Buddy for Android (Google Play), macOS, Windows, Chrome Extension, and Web. Capture live conversations, meetings, and voice notes into AI spaces with zero-bot privacy.",
  alternates: {
    canonical: "/get-buddy",
  },
  openGraph: {
    title: "Get Buddy — Android, Desktop, Chrome & Web",
    description:
      "Capture conversations, meetings, and voice notes with Buddy across Google Play Store, Desktop, Chrome Extension, and Web App.",
    url: "/get-buddy",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Get Buddy AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Buddy — Multi-Platform AI Companion",
    description:
      "Available on Android, Desktop, Chrome Extension, and Web. Zero-bot meeting notes in 11 Indian languages.",
    images: ["/opengraph-image"],
  },
};

export default function GetBuddyLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
