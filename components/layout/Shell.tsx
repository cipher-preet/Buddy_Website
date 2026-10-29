import type { ElementType, ReactNode } from "react";

type ShellProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** The single page width. Nav, pages, and footer all use this. */
export function Shell({ as: Tag = "div", className = "", children }: ShellProps) {
  const classes = className ? `kn-shell ${className}` : "kn-shell";
  return <Tag className={classes}>{children}</Tag>;
}
