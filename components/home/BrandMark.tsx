type BrandMarkProps = {
  href?: string;
};

export function BrandMark({ href = "/" }: BrandMarkProps) {
  return (
    <a className="brand-mark" href={href} aria-label="KukuNotes home">
      <span className="brand-icon" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <strong>
        Kuku<span className="brand-word-accent">Notes</span>
      </strong>
    </a>
  );
}
