import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import SiteHeader from "../../components/SiteHeader";
import Container from "../../components/ui/Container";

export const metadata: Metadata = {
  title: "Contato — Lucx Tech",
  description: "Conte para a Lucx o que precisa funcionar melhor no seu negócio.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <SiteHeader />
      <Container className="contact-page__intro">
        <span className="eyebrow">Vamos conversar</span>
        <h1>O que está dando mais trabalho <span>do que deveria?</span></h1>
        <p>Conte um pouco sobre o seu cenário. Antes de sugerir tecnologia, queremos entender como o trabalho acontece hoje.</p>
      </Container>

      <Container className="contact-page__layout">
        <section className="contact-page__form-card" aria-labelledby="contact-form-title">
          <div className="contact-page__form-head">
            <span>01</span>
            <div>
              <h2 id="contact-form-title">Envie uma mensagem</h2>
              <p>Preencha o essencial. A conversa continua com uma pessoa, não com um fluxo automático.</p>
            </div>
          </div>
          <ContactForm />
        </section>

        <aside className="contact-page__visual" aria-label="Como a Lucx começa um projeto">
          <div className="contact-page__visual-grid" aria-hidden="true" />
          <div className="contact-page__visual-top">
            <span>Como começamos</span>
            <i>lucx.</i>
          </div>
          <div className="contact-page__orbit" aria-hidden="true">
            <span className="contact-page__orbit-ring contact-page__orbit-ring--one" />
            <span className="contact-page__orbit-ring contact-page__orbit-ring--two" />
            <strong>?</strong>
          </div>
          <blockquote>“Isso realmente precisa ser feito assim?”</blockquote>
          <ol>
            <li><span>01</span> Entender</li>
            <li><span>02</span> Simplificar</li>
            <li><span>03</span> Construir</li>
          </ol>
          <a href="https://w.app/fiawrt" target="_blank" rel="noreferrer">Prefere WhatsApp? <span>↗</span></a>
        </aside>
      </Container>
      <Footer />
    </div>
  );
}
