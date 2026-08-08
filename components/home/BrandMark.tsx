type BrandMarkProps = {
  href?: string;
};

export function BrandMark({ href = "/" }: BrandMarkProps) {
  return (
    <a className="brand-mark" href={href} aria-label="Buddy home">
      <span className="brand-icon" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <strong>Buddy</strong>
    </a>
  );
}
