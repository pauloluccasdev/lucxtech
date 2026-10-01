import Image from "next/image";

export default function Projects() {
  return (
    <section id="projetos" className="section dark projects project-case">
      <div className="shell">
        <header className="case-head">
          <div className="case-kicker">
            <span className="case-led" />
            Projeto real · Em desenvolvimento
          </div>
          <div className="case-title-row">
            <div>
              <div className="case-name">Liora Closet</div>
              <h2>Organizando a operação de uma loja que está dando o próximo passo.</h2>
            </div>
            <div className="case-status">Protótipo aprovado<br /><strong>Em desenvolvimento</strong></div>
          </div>
        </header>

        <div className="case-visual">
          <div className="case-visual-label">Interface validada · Desktop, tablet e mobile</div>
          <div className="case-desktop">
            <Image
              src="/projects/liora-closet-showcase.png"
              alt="Plataforma Liora Closet apresentada em um notebook e dois celulares"
              fill
              sizes="(max-width: 720px) 100vw, 90vw"
              priority
            />
          </div>

          <div className="case-stamp">EM DESENVOLVIMENTO · LUCX TECH</div>
        </div>

        <div className="case-story">
          <article>
            <span>01 · Cenário</span>
            <h3>Informações em lugares diferentes.</h3>
            <p>
              Com a evolução da operação, acompanhar informações em controles separados
              começou a exigir mais trabalho e atenção da equipe.
            </p>
          </article>
          <article>
            <span>02 · Processo</span>
            <h3>Entender antes de desenvolver.</h3>
            <p>
              Mapeamos o que precisava estar mais acessível no dia a dia, desenhamos uma
              forma de reunir essas informações e validamos o protótipo antes da construção.
            </p>
          </article>
          <article>
            <span>03 · Construção</span>
            <h3>Uma operação em um só ambiente.</h3>
            <p>
              Estamos construindo uma plataforma para centralizar o acompanhamento de
              pedidos, produtos, clientes, encomendas, entregas e fluxo de caixa.
            </p>
          </article>
        </div>

        <footer className="case-foot">
          <p><span>Objetivo</span> Reduzir o trabalho operacional e tornar a rotina da loja mais simples de acompanhar.</p>
          <small>Os dados exibidos na interface são demonstrativos do protótipo.</small>
        </footer>
      </div>
    </section>
  );
}
