import { Arrow, Mail } from "./icons";

export default function FinalCTA() {
  return (
    <section id="contato" className="section dark final final-new">
      <div className="shell">
        <div className="final-new-top">
          <div className="section-index">06 · Uma conversa para começar</div>
          <h2>Tem algum processo no seu negócio que dá mais trabalho do que deveria?</h2>
        </div>

        <div className="final-new-bottom">
          <p>
            Conte como ele funciona hoje. A primeira conversa serve para entender o cenário
            — inclusive para descobrir se o problema realmente precisa de tecnologia.
          </p>
          <div className="final-new-action">
            <a href="https://w.app/fiawrt" className="btn btn-primary btn-xl" target="_blank" rel="noreferrer">
              Vamos conversar <Arrow />
            </a>
            <a href="mailto:contato.pauloraimundo@gmail.com" className="final-email">
              <Mail /> contato.pauloraimundo@gmail.com
            </a>
          </div>
        </div>

        <div className="final-new-note">Sem diagnóstico pronto. Primeiro, a gente entende.</div>
      </div>
    </section>
  );
}
