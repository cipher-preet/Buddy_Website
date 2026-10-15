import type { CSSProperties, ReactNode } from "react";
type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: string;
  delay?: number;
  once?: boolean;
  style?: CSSProperties;
};
// Progressive enhancement: the centralized engine may move this composition;
// it is fully readable in SSR, without JavaScript, and with reduced motion.
export function Reveal({ children, className = "", style }: RevealProps) {
  return (
    <div className={`reveal ${className}`} data-scroll-reveal style={style}>
      {children}
    </div>
  );
}
