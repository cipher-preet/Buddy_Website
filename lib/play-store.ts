import { siteConfig } from "./site";

/** Canonical Google Play listing. Do not append campaign parameters here. */
export const playStoreBaseUrl = siteConfig.playStoreUrl;

export const playStorePackageId = siteConfig.androidPackage;

const UTM_SOURCE = "kukunotes.com";

/**
 * Play Store URL with an install referrer Play Console can attribute by page.
 * The referrer value is encoded once:
 * referrer=utm_source%3Dkukunotes.com%26utm_medium%3D<placement>%26utm_campaign%3D<page-slug>
 */
export function playStoreCampaignUrl(placement: string, pageSlug: string) {
  const referrer = encodeURIComponent(
    `utm_source=${UTM_SOURCE}&utm_medium=${placement}&utm_campaign=${pageSlug}`,
  );
  return `${playStoreBaseUrl}&referrer=${referrer}`;
}

/** Campaign slug for the current path. The home page has no path segment. */
export function pageSlugFromPathname(pathname: string) {
  const path = (pathname.split("?")[0] ?? "/").split("#")[0] ?? "/";
  const trimmed = path.replace(/\/+$/, "");
  if (!trimmed || trimmed === "/") return "home";
  return trimmed.replace(/^\//, "");
}
