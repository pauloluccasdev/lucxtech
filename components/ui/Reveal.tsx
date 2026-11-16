"use client";

import type { CSSProperties, HTMLAttributes } from "react";
import { useLayoutEffect, useRef, useState } from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & { delay?: number };

export default function Reveal({ children, className = "", delay = 0, style, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [observing, setObserving] = useState(false);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVisible(true); return; }
    setObserving(true);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); }
    }, { threshold: 0.14, rootMargin: "0px 0px -7%" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${observing ? "is-observing" : ""} ${visible ? "is-visible" : ""} ${className}`.trim()} style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties} {...props}>{children}</div>;
}
