import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import BrandOrbit from "./BrandOrbit";

export default function About() {
  return (
    <section className="about-v2" id="sobre"><Container><Reveal className="about-card">
      <div className="about-card__copy"><span className="eyebrow eyebrow--dark">Sobre a Lucx</span><h2>Software feito por quem entende de construção.</h2><p>A Lucx nasceu da experiência em desenvolvimento de software e da vontade de transformar ideias e problemas reais em soluções úteis.</p><p>Criamos produtos digitais, sistemas de gestão e integrações, combinando visão técnica e entendimento do negócio.</p></div>
      <BrandOrbit />
    </Reveal></Container></section>
  );
}
