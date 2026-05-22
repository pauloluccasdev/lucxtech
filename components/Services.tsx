import { Arrow, Bolt, Refresh, Layers, Rocket, Brain, Shield } from "./icons";

const SERVICES = [
  {
    n: "01", icon: <Bolt />, title: "Automação Inteligente", tag: "Recorrente",
    body: "Você ainda faz no manual o que um sistema poderia fazer sozinho? Automatizamos processos repetitivos para o seu time parar de perder tempo — e começar a usar o tempo certo.",
  },
  {
    n: "02", icon: <Refresh />, title: "Modernização de Sistemas", tag: "Legado",
    body: "Sistema antigo que trava, cai, ou não acompanha mais? Modernizamos o que você já tem — sem virar tudo de cabeça pra baixo, sem parar o negócio.",
  },
  {
    n: "03", icon: <Layers />, title: "SaaS Sob Demanda", tag: "Produto",
    body: "Tem uma ideia de produto digital mas não sabe por onde começar? Construímos do zero ao ar — plataforma, painel, acesso de usuário, tudo funcionando.",
  },
  {
    n: "04", icon: <Rocket />, title: "MVPs", tag: "Validação",
    body: "Valide sua ideia sem gastar uma fortuna. Lançamos seu MVP em semanas — construído para crescer, não para refazer.",
  },
  {
    n: "05", icon: <Brain />, title: "IA Aplicada", tag: "IA",
    body: "IA que faz algo de verdade no seu negócio — atende, organiza, analisa, automatiza. Não é demo. É resultado.",
  },
  {
    n: "06", icon: <Shield />, title: "Segurança e Estabilidade", tag: "Infra",
    body: "O sistema que não pode cair — não cai. Protegemos dados, garantimos disponibilidade e construímos para funcionar quando mais importa.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section dark services">
      <div className="shell">
        <div className="services-head">
          <div className="services-rule">
            <div className="red" />
            <div className="label">Serviços · O que construímos</div>
          </div>
          <h2 className="services-title">
            Soluções para cada estágio<br />
            da sua <span className="accent">operação digital.</span>
          </h2>
          <p className="services-sub">
            Seis frentes — uma única forma de trabalhar: do zero, com profundidade, para o seu contexto.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc-card" key={s.n}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="num">{s.n} /06</span>
                <span className="t-mono" style={{ color: "var(--text-dim)" }}>{s.tag}</span>
              </div>
              <div className="icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="open">Saiba mais <Arrow /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
