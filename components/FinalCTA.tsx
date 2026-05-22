import { Arrow, Linkedin, Github, Whatsapp, Mail } from "./icons";

export default function FinalCTA() {
  return (
    <section id="contato" className="section dark final">
      <div className="shell">
        <div className="final-grid">
          <div className="final-left">
            <div className="t-eyebrow" style={{ marginBottom: 28 }}>
              <span style={{ color: "#3ECF8E" }}>◆</span>&nbsp;&nbsp;Começar um projeto · 30 min · gratuito
            </div>
            <h2 className="final-title">
              Sua operação pode <br />
              trabalhar melhor do que <br />
              trabalha <span className="accent">hoje.</span>
            </h2>
            <p className="final-sub">
              Acabamos de começar — então cada projeto recebe nossa atenção total. A primeira
              conversa é gratuita. Você explica o que trava, a gente mostra o que é possível.
            </p>
            <div className="final-cta-row">
              <a href="mailto:contato@lucx.tech" className="btn btn-primary btn-xl">
                Quero agendar uma conversa
                <Arrow className="btn-arrow" />
              </a>
              <a href="#servicos" className="btn btn-ghost btn-lg">Ver soluções</a>
            </div>
            <div className="final-micro">
              ↳ Sem pressão. Sem proposta automática. Só uma conversa honesta.
            </div>
          </div>

          <div className="final-right">
            <div className="final-meta-card">
              <div className="lbl">Comercial · WhatsApp</div>
              <div className="val">
                A combinar <span className="g">·</span> mande mensagem
              </div>
              <div className="sub">Respondemos pessoalmente. Sem bot, sem fila de atendimento.</div>
            </div>
            <div className="final-meta-card">
              <div className="lbl">E-mail</div>
              <div className="val">
                <span className="g">contato</span>@lucx.tech
              </div>
              <div className="sub">Para escopo, proposta ou apenas uma dúvida.</div>
            </div>

            <div>
              <div
                className="t-mono"
                style={{ color: "var(--text-dim)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}
              >
                Encontre a gente
              </div>
              <div className="final-socials">
                <a className="social-chip" href="#" aria-label="LinkedIn"><Linkedin /></a>
                <a className="social-chip" href="#" aria-label="GitHub"><Github /></a>
                <a className="social-chip" href="#" aria-label="WhatsApp"><Whatsapp /></a>
                <a className="social-chip" href="mailto:contato@lucx.tech" aria-label="E-mail"><Mail /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="wordmark-band">
          <span className="big">
            Lucx<span className="lx">Tech</span>
          </span>
        </div>
      </div>
    </section>
  );
}
