import SiteHeader from "./SiteHeader";
import ButtonLink from "./ui/ButtonLink";
import Container from "./ui/Container";

export default function HeroGlow() {
  return (
    <section className="hero" id="inicio">
      <SiteHeader />
      <Container className="hero__inner">
        <div className="hero__eyebrow hero-enter hero-enter--1"><span /> Desenvolvimento de software sob medida</div>
        <h1 className="hero__title hero-enter hero-enter--2">Ideias que viram<br /><span>soluções.</span></h1>
        <p className="hero__text hero-enter hero-enter--3">Criamos sistemas, aplicativos e automações que simplificam o trabalho e fazem negócios avançarem.</p>
        <div className="hero__actions hero-enter hero-enter--4">
          <ButtonLink href="#projetos">Conheça os projetos</ButtonLink>
          <ButtonLink href="https://w.app/fiawrt" target="_blank" rel="noreferrer" variant="light">Vamos conversar</ButtonLink>
        </div>
        <a className="hero__scroll hero-enter hero-enter--4" href="#sobre" aria-label="Ir para apresentação"><span>Role para conhecer</span><i aria-hidden="true">↓</i></a>
      </Container>
    </section>
  );
}
