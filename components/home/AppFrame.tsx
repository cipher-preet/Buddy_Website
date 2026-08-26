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
            width={453}
            height={1024}
            sizes={
              size === "hero"
                ? "(max-width: 430px) 196px, (max-width: 640px) 220px, (max-width: 980px) 250px, 320px"
                : size === "compact"
                  ? "180px"
                  : "(max-width: 640px) 160px, (max-width: 980px) 188px, 240px"
            }
            className="app-frame-image"
            priority={size === "hero"}
          />
        </div>
      </div>
    </div>
  );
}
