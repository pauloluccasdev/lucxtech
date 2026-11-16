import ButtonLink from "./ui/ButtonLink";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function FinalCTA() {
  return <section className="contact-v2 section-v2" id="contato"><Container><Reveal className="contact-card"><div><span className="eyebrow">Próximo passo</span><h2>Vamos construir algo?</h2><p>Tem uma ideia ou um processo que precisa funcionar melhor? Vamos conversar.</p></div><ButtonLink href="/contato">Fale com a Lucx</ButtonLink></Reveal></Container></section>;
}
