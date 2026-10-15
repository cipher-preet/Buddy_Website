import type { Metadata, Viewport } from "next";
import { Manrope, Roboto_Serif } from "next/font/google";
import { SmoothScroll } from "@/components/home/SmoothScroll";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "./experience.css";
import "./launch.css";
import "./editorial.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: "productivity",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
    types: {
      "text/plain": "/llms.txt",
    },
  },
  manifest: "/manifest.webmanifest",
  // Explicit icons with cache-bust so SERP/tab favicons drop the legacy bird mark.
  icons: {
    icon: [
      { url: `/favicon.ico?v=${siteConfig.assetVersion}`, sizes: "any" },
      {
        url: `/brand/kukunotes-icon-192.png?v=${siteConfig.assetVersion}`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: `/brand/kukunotes-icon-512.png?v=${siteConfig.assetVersion}`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: `/apple-icon.png?v=${siteConfig.assetVersion}`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [`/favicon.ico?v=${siteConfig.assetVersion}`],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: `/opengraph-image?v=${siteConfig.assetVersion}`,
        width: 1200,
        height: 630,
        alt: "KukuNotes AI note taker — Capture. Organize. Grow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`/opengraph-image?v=${siteConfig.assetVersion}`],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  other: {
    "geo.region": siteConfig.geo.regionCode,
    "geo.placename": siteConfig.geo.placename,
    "geo.position": "20.5937;78.9629",
    ICBM: "20.5937, 78.9629",
    coverage: siteConfig.geo.coverage,
    distribution: "global",
    language: siteConfig.language,
    "content-language": "en,hi",
    "available-on": siteConfig.platforms.join(", "),
    "al:android:url": siteConfig.playStoreUrl,
    "al:android:package": siteConfig.androidPackage,
    "al:android:app_name": siteConfig.name,
    "google-play-app": `app-id=${siteConfig.androidPackage}`,
    rating: "General",
    "ai-content-declaration":
      "KukuNotes product pages are written for people and describe app features, privacy controls, use cases, and support paths.",
    "primary-market": siteConfig.geo.primaryMarket,
  },
};

export const viewport: Viewport = {
  themeColor: "#070609",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={`${robotoSerif.variable} ${manrope.variable} min-h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full">
        <div className="site-lattice" aria-hidden="true" />
        <div className="site-vignette" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
