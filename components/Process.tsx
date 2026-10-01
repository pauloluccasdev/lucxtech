const STEPS = [
  {
    n: "01",
    title: "Entender",
    body: "Mapear como o trabalho acontece hoje, onde estão as dependências e o que causa retrabalho.",
  },
  {
    n: "02",
    title: "Simplificar",
    body: "Remover etapas desnecessárias e organizar melhor o fluxo e as informações.",
  },
  {
    n: "03",
    title: "Conectar",
    body: "Aproximar ferramentas, dados e pessoas que hoje funcionam de forma separada.",
  },
  {
    n: "04",
    title: "Automatizar",
    body: "Automatizar o que é repetitivo e já faz sentido dentro do processo.",
  },
];

export default function Process() {
  return (
    <section className="section light process" id="processo">
      <div className="shell">
        <div className="process-head">
          <div className="section-index">03 · Como a Lucx pensa</div>
          <h2>Simplificar vem antes<br />de automatizar.</h2>
          <p>
            Não partimos de uma tecnologia pronta. Primeiro entendemos o processo e só
            depois decidimos o que vale organizar, conectar ou construir.
          </p>
        </div>

        <div className="process-flow">
          {STEPS.map((step, index) => (
            <article className="process-step" key={step.n}>
              <div className="process-step-top">
                <span>{step.n}</span>
                {index < STEPS.length - 1 && <span className="process-arrow">→</span>}
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
