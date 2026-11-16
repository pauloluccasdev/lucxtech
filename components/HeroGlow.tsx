"use client";

import { useRef } from "react";
import { Arrow } from "./icons";
import SiteHeader from "./SiteHeader";

export default function HeroGlow() {
  const cardRef = useRef<HTMLDivElement>(null);

  function moveGlow(event: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
    card.style.setProperty("--glow-opacity", "1");
  }

  function dimGlow() {
    cardRef.current?.style.setProperty("--glow-opacity", ".42");
  }

  return (
    <section className="section hero-glow-wrap" id="inicio">
      <div className="hg-card" ref={cardRef} onMouseMove={moveGlow} onMouseLeave={dimGlow}>
        <div className="hg-aurora" aria-hidden="true" />
        <div className="hg-mouse-glow" aria-hidden="true" />
        <div className="hg-grain" aria-hidden="true" />

        <SiteHeader />

        <div className="hg-content">
          <div className="hg-eyebrow">
            <span className="hg-eye-dot" />
            Processos mais simples. Trabalho mais claro.
          </div>

          <h1 className="hg-headline">
            Tecnologia para simplificar
            <br /> o dia a dia do seu <span className="hg-h-accent">negócio.</span>
          </h1>

          <p className="hg-sub">
            Entendemos processos que ficaram manuais, repetitivos ou desconectados e
            procuramos uma forma mais simples de fazê-los funcionar.
          </p>

          <div className="hg-ctas">
            <a href="https://w.app/fiawrt" className="btn btn-primary btn-xl" target="_blank" rel="noreferrer">
              Vamos conversar
              <Arrow />
            </a>
            <a href="#processo" className="hg-text-cta">
              Como pensamos
            </a>
          </div>

          <div className="hg-bottom">
            <div className="hg-bottom-item">
              <div className="lbl">primeiro passo</div>
              <div className="val">Entender como o trabalho acontece hoje</div>
            </div>
            <div className="hg-divider" />
            <div className="hg-bottom-item">
              <div className="lbl">nossa lógica</div>
              <div className="val">Simplificar antes de automatizar</div>
            </div>
            <div className="hg-divider" />
            <div className="hg-bottom-item">
              <div className="lbl">princípio</div>
              <div className="val">Tecnologia quando fizer sentido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
