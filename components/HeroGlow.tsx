"use client";

import { useRef, type PointerEvent } from "react";
import SiteHeader from "./SiteHeader";
import ButtonLink from "./ui/ButtonLink";
import Container from "./ui/Container";

export default function HeroGlow() {
  const heroRef = useRef<HTMLElement>(null);

  function moveStage(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const hero = heroRef.current;
    if (!hero) return;
    const bounds = hero.getBoundingClientRect();
    hero.style.setProperty("--hero-x", String((event.clientX - bounds.left) / bounds.width - 0.5));
    hero.style.setProperty("--hero-y", String((event.clientY - bounds.top) / bounds.height - 0.5));
  }

  return (
    <section className="hero" id="inicio" ref={heroRef} onPointerMove={moveStage}>
      <SiteHeader />
      <Container className="hero__inner">
        <div className="hero__backdrop" aria-hidden="true"><span>lucx.</span></div>
        <div className="hero__eyebrow hero-enter hero-enter--1"><span /> Desenvolvimento de software sob medida</div>
        <h1 className="hero__title hero-enter hero-enter--2">Ideias que viram<br /><span>soluções.</span></h1>
        <p className="hero__text hero-enter hero-enter--3">Criamos sistemas, aplicativos e automações que simplificam o trabalho e fazem negócios avançarem.</p>
        <div className="hero__actions hero-enter hero-enter--4">
          <ButtonLink href="#projetos">Conheça os projetos</ButtonLink>
          <ButtonLink href="/contato" variant="light">Vamos conversar</ButtonLink>
        </div>
        <a className="hero__scroll hero-enter hero-enter--4" href="#sobre" aria-label="Ir para apresentação"><span>Conheça a Lucx</span><i aria-hidden="true">↓</i></a>
        <span className="hero__index hero-enter hero-enter--4" aria-hidden="true">01 — 05</span>
      </Container>
    </section>
  );
}
