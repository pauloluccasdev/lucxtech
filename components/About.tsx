import { Tools, Node, Server } from "./icons";

export default function About() {
  return (
    <section id="sobre" className="section light about">
      <div className="shell">
        <div className="about-head">
          <div className="about-rule">
            <div className="red" />
            <div className="label">Sobre · Lucx Tech</div>
          </div>
          <h2 className="about-title">
            Construímos o que faz a sua <br />
            operação<span className="bullet" />funcionar.
          </h2>
        </div>

        <div className="about-body">
          <div className="about-copy">
            <p>
              A Lucx Tech constrói <strong>sistemas que resolvem problemas reais</strong> —
              automações que eliminam trabalho manual, plataformas que escalam sem quebrar,
              e soluções com IA que trabalham enquanto você dorme.
            </p>
            <p>
              <strong>Não entregamos código. Entregamos operação funcionando.</strong>
            </p>
            <p>
              Cada projeto é construído do zero para o seu contexto — sem atalhos, sem
              gambiarras, sem precisar refazer em dois anos.
            </p>
            <div className="about-tags">
              <span className="about-tag">Engenharia</span>
              <span className="about-tag">Automação</span>
              <span className="about-tag">IA aplicada</span>
              <span className="about-tag">SaaS</span>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-visual-head">
              <div className="t">arquitetura · padrão Lucx</div>
              <div className="live">
                <span className="dot" /> live
              </div>
            </div>

            <div className="flow">
              <div className="flow-node">
                <div className="icon"><Tools /></div>
                <div className="name">Processo manual</div>
                <div className="role">input · planilha · email</div>
              </div>
              <div className="flow-arrow"><div className="ln" /></div>
              <div className="flow-node center">
                <div className="icon"><Node /></div>
                <div className="name">Sistema Lucx</div>
                <div className="role">automação · ia · pipeline</div>
              </div>
              <div className="flow-arrow"><div className="ln" /></div>
              <div className="flow-node">
                <div className="icon"><Server /></div>
                <div className="name">Resultado</div>
                <div className="role">dashboards · api · alertas</div>
              </div>
            </div>

            <div className="flow-foot">
              <div className="item">
                o que entra
                <span className="v plain">processo<span className="u"> manual</span></span>
              </div>
              <div className="item">
                o que muda
                <span className="v plain">tempo<span className="u"> recuperado</span></span>
              </div>
              <div className="item">
                o que sai
                <span className="v plain">operação<span className="u"> rodando</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="indicators">
          <div className="indicator">
            <div className="icon">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8l3 3 7-7" /></svg>
            </div>
            <div className="kicker">princípio · 01</div>
            <div className="num small">Sob medida, sempre.</div>
            <div className="lbl">Sem template. Cada sistema começa pela sua realidade — não por um modelo pronto.</div>
          </div>
          <div className="indicator">
            <div className="icon">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="8" r="5" /><path d="M8 5v3l2 2" /></svg>
            </div>
            <div className="kicker">princípio · 02</div>
            <div className="num small">Pra rodar.</div>
            <div className="lbl">Não entregamos demo. Entregamos sistema em produção, com tudo que precisa pra funcionar.</div>
          </div>
          <div className="indicator">
            <div className="icon">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 8h12M8 2v12" /></svg>
            </div>
            <div className="kicker">princípio · 03</div>
            <div className="num small">Próximo do negócio.</div>
            <div className="lbl">Entendemos o seu contexto antes de uma linha de código. O sistema certo vem disso.</div>
          </div>
          <div className="indicator">
            <div className="icon">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 13l4-8 2 5 4-6" /></svg>
            </div>
            <div className="kicker">princípio · 04</div>
            <div className="num small">Pra durar.</div>
            <div className="lbl">Construído para 5 anos, não 5 meses. Sem dívida técnica desnecessária no dia 1.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
