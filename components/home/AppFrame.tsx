import Image from "next/image";

type AppFrameProps = {
  src: string;
  alt: string;
  size?: "hero" | "showcase" | "compact";
  className?: string;
};

export function AppFrame({
  src,
  alt,
  size = "showcase",
  className = "",
}: AppFrameProps) {
  return (
    <div className={`app-frame app-frame-${size} ${className}`.trim()}>
      <div className="app-frame-bezel">
        <span className="app-frame-notch" aria-hidden="true" />
        <div className="app-frame-screen">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={
              size === "hero"
                ? "(max-width: 640px) 280px, 320px"
                : size === "compact"
                  ? "180px"
                  : "(max-width: 980px) 220px, 240px"
            }
            className="app-frame-image"
            priority={size === "hero"}
          />
        </div>
      </div>
    </div>
  );
}
