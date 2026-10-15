import Image from "next/image";
import Link from "next/link";
export function BrandMark({ href = "/" }: { href?: string }) {
  return (
    <Link className="brand-mark" href={href} aria-label="KukuNotes home">
      <Image
        src="/brand/kukunotes-icon-192.png"
        alt=""
        width={34}
        height={34}
      />
      <strong>
        KukuNotes<span className="brand-period">.</span>
      </strong>
    </Link>
  );
}
