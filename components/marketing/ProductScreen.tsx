import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import productImages from "@/lib/product-images.json";

type ScreenProps = {
  src?: string;
  alt: string;
  kind?: "desktop" | "phone" | "detail";
  title?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  mobileSrc?: string;
  /** Fill a parent that already has a stable size. Image uses object-fit: contain. */
  fill?: boolean;
  children?: ReactNode;
};

/** Intrinsic image geometry is the source of truth. Detail crops are separate assets. */
export function ProductScreen({
  src,
  alt,
  kind = "desktop",
  title = "KukuNotes",
  priority = false,
  className = "",
  sizes = "(max-width: 700px) 92vw, 1100px",
  mobileSrc,
  fill = false,
  children,
}: ScreenProps) {
  const images = productImages as Record<
    string,
    { width: number; height: number }
  >;
  const dimensions = src ? images[src] : undefined;
  if (src && !dimensions)
    throw new Error(`Missing product asset dimensions: ${src}`);
  if (!src && !children)
    throw new Error("ProductScreen requires an image or content");
  const mobilePhone =
    Boolean(mobileSrc) &&
    images[mobileSrc!].height / images[mobileSrc!].width > 1.7;
  const screen = (imageSrc: string, imageClass: string) => {
    const size = images[imageSrc];
    return (
      <Image
        src={imageSrc}
        alt={alt}
        width={size.width}
        height={size.height}
        sizes={sizes}
        quality={90}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={imageClass}
      />
    );
  };
  return (
    <figure
      className={`launch-screen launch-screen-${kind} ${mobileSrc ? "has-mobile-detail" : ""} ${mobilePhone ? "has-mobile-phone" : ""} ${fill ? "is-fill" : ""} ${className}`}
      data-product-screen={src}
      style={
        dimensions
          ? ({
              "--screen-ratio": `${dimensions.width} / ${dimensions.height}`,
            } as CSSProperties)
          : undefined
      }
    >
      {kind === "desktop" && (
        <div className="launch-window-bar" aria-hidden="true">
          <span className="launch-window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>{title}</span>
          <span className="launch-window-mark">K</span>
        </div>
      )}
      <div className="launch-screen-mask">
        {children ?? (
          <>
            {src && screen(src, "launch-screen-image")}
            {mobileSrc && screen(mobileSrc, "launch-screen-mobile-image")}
          </>
        )}
      </div>
    </figure>
  );
}
