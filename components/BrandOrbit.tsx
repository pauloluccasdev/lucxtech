"use client";

import { useEffect, useRef, type PointerEvent } from "react";

export default function BrandOrbit() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;
    const observer = new IntersectionObserver(([entry]) => {
      visual.classList.toggle("is-active", entry.isIntersecting);
    }, { threshold: 0.2 });
    observer.observe(visual);
    return () => observer.disconnect();
  }, []);

  function moveOrbit(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const visual = visualRef.current;
    if (!visual) return;
    const bounds = visual.getBoundingClientRect();
    visual.style.setProperty("--orbit-x", String((event.clientX - bounds.left) / bounds.width - 0.5));
    visual.style.setProperty("--orbit-y", String((event.clientY - bounds.top) / bounds.height - 0.5));
  }

  function resetOrbit() {
    const visual = visualRef.current;
    visual?.style.setProperty("--orbit-x", "0");
    visual?.style.setProperty("--orbit-y", "0");
  }

  return (
    <div
      ref={visualRef}
      className="about-card__visual"
      role="img"
      aria-label="Composição visual da marca Lucx"
      onPointerMove={moveOrbit}
      onPointerLeave={resetOrbit}
    >
      <div className="about-orbit-field" aria-hidden="true">
        <div className="about-orbit about-orbit--one" />
        <div className="about-orbit about-orbit--two" />
        <div className="about-orbit__axis about-orbit__axis--x" />
        <div className="about-orbit__axis about-orbit__axis--y" />
        <strong>lucx<span>.</span></strong>
      </div>
      <div className="about-code" aria-hidden="true"><span>entender</span><span>construir</span><span>evoluir</span></div>
    </div>
  );
}
