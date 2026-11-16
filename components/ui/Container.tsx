import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({ className = "", ...props }: ContainerProps) {
  return <div className={`site-container ${className}`.trim()} {...props} />;
}
