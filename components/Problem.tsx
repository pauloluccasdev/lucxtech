const SITUATIONS = [
  "A mesma informação precisa ser atualizada em mais de um lugar.",
  "Alguém copia dados de uma ferramenta para outra todos os dias.",
  "Encontrar uma informação depende de perguntar para a pessoa certa.",
  "Uma planilha precisa ser conferida o tempo todo.",
  "Duas ferramentas importantes não conversam entre si.",
  "Um processo para quando uma única pessoa não está disponível.",
];

export default function Problem() {
  return (
    <section className="section light problem" id="problema">
      <div className="shell">
        <div className="problem-heading">
          <div className="section-index">01 · A rotina</div>
          <h2>Seu negócio cresceu.<br /><span>Seus processos acompanharam?</span></h2>
          <p>
            Algumas rotinas começam como uma solução temporária. Com o tempo, viram parte
            da operação — mesmo quando já dão mais trabalho do que deveriam.
          </p>
        </div>

        <div className="problem-board" aria-label="Situações comuns em uma operação">
          {SITUATIONS.map((situation, index) => (
            <article className={`problem-note note-${index + 1}`} key={situation}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{situation}</p>
            </article>
          ))}
          <div className="problem-annotation">Alguma dessas situações parece familiar?</div>
        </div>
      </div>
    </section>
  );
}
