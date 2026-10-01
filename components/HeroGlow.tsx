import Image from "next/image";
import { Arrow } from "./icons";

export default function HeroGlow() {
  return (
    <section className="section hero-glow-wrap">
      <div className="hg-card">
        <div className="hg-aurora" aria-hidden="true" />
        <div className="hg-grain" aria-hidden="true" />

        <nav className="hg-nav">
          <div className="hg-nav-mark">
            <Image
              src="/brand/lucx-tech-logo.png"
              alt="Lucx Tech"
              fill
              sizes="210px"
              priority
            />
          </div>
          <div className="hg-nav-links">
            <a href="#processo">Como pensamos</a>
            <a href="#servicos">Soluções</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>
          <a href="#contato" className="btn btn-primary hg-cta-top">
            Fale com a gente
          </a>
        </nav>

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
