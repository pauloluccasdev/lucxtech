import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "dark" | "light" | "green";
};

export default function ButtonLink({
  children,
  className = "",
  variant = "dark",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`button-link button-link--${variant} ${className}`.trim()} {...props}>
      <span>{children}</span>
      <span className="button-link__arrow" aria-hidden="true">↗</span>
    </a>
  );
}
