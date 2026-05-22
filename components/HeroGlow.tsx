import LucxMark from "./LucxMark";
import { Arrow } from "./icons";

const stars = Array.from({ length: 60 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  opacity: 0.2 + ((i * 7) % 60) / 100,
  animationDelay: `${(i % 10) * 0.4}s`,
  transform: `scale(${0.4 + ((i * 3) % 10) / 12})`,
}));

export default function HeroGlow() {
  return (
    <section className="section hero-glow-wrap">
      <div className="hg-particles" aria-hidden="true">
        {stars.map((s, i) => (
          <span key={i} className="hg-star" style={s} />
        ))}
      </div>

      <div className="hg-card">
        <div className="hg-aurora" aria-hidden="true" />
        <div className="hg-aurora hg-aurora-2" aria-hidden="true" />
        <div className="hg-grain" aria-hidden="true" />

        <nav className="hg-nav">
          <div className="hg-nav-mark">
            <LucxMark size={22} />
            <span>Lucx<span style={{ color: "var(--green)" }}>.</span>Tech</span>
          </div>
          <div className="hg-nav-links">
            <a href="#sobre">Sobre nós</a>
            <a href="#servicos">Soluções</a>
            <a href="#projetos">Projetos</a>
            <a href="#diff">Diferenciais</a>
            <a href="#contato">Contato</a>
          </div>
          <a href="#contato" className="btn btn-primary hg-cta-top">
            Fale com a gente
          </a>
        </nav>

        <div className="hg-content">
          <div className="hg-eyebrow">
            <span className="hg-eye-dot" />
            Novo estúdio · construindo em 2026
          </div>

          <h1 className="hg-headline">
            Construímos os <span className="hg-h-accent">sistemas</span>
            <br />
            que movem o seu negócio.
          </h1>

          <p className="hg-sub">
            Transformamos operações manuais em sistemas automáticos, inteligentes e
            confiáveis — feitos do zero para o seu contexto.
          </p>

          <div className="hg-ctas">
            <a href="#contato" className="btn btn-primary btn-xl">
              Agendar conversa
              <Arrow />
            </a>
            <a href="#servicos" className="hg-text-cta">
              Ver soluções
            </a>
          </div>

          <div className="hg-bottom">
            <div className="hg-bottom-item">
              <div className="lbl">o que fazemos</div>
              <div className="val">Automação · IA · SaaS sob medida</div>
            </div>
            <div className="hg-divider" />
            <div className="hg-bottom-item">
              <div className="lbl">como trabalhamos</div>
              <div className="val">Sem template · do zero · pra durar</div>
            </div>
            <div className="hg-divider" />
            <div className="hg-bottom-item">
              <div className="lbl">disponibilidade</div>
              <div className="val">
                <span style={{ color: "var(--green)" }}>●</span> Aceitando projetos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
