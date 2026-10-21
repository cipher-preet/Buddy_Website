"use client";

import { pageSlugFromPathname, playStoreCampaignUrl } from "@/lib/play-store";
import Image from "next/image";
import { usePathname } from "next/navigation";

type GooglePlayCtaProps = {
  /** utm_medium. Names where on the page the badge sits, such as hero, bottom, or footer. */
  placement: string;
  /** utm_campaign. Defaults to the current path, with `/` mapped to `home`. */
  pageSlug?: string;
  className?: string;
};

export function GooglePlayCta({ placement, pageSlug, className }: GooglePlayCtaProps) {
  const pathname = usePathname();
  const campaign = pageSlug ?? pageSlugFromPathname(pathname);
  const href = playStoreCampaignUrl(placement, campaign);

  return (
    <a
      className={className ? `google-play-cta ${className}` : "google-play-cta"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="google-play-cta-image"
        src="/brand/google-play-badge.png"
        alt="Get it on Google Play"
        width={646}
        height={250}
      />
    </a>
  );
}
