import { Bolt, Node, Layers, Brain } from "./icons";

const SERVICES = [
  {
    n: "01", icon: <Bolt />, title: "Automações", tag: "Repetição",
    body: "Para tarefas recorrentes que consomem tempo e já seguem um processo claro.",
  },
  {
    n: "02", icon: <Layers />, title: "Sistemas", tag: "Organização",
    body: "Quando a operação precisa de uma ferramenta própria para organizar o trabalho.",
  },
  {
    n: "03", icon: <Node />, title: "Integrações", tag: "Conexão",
    body: "Para fazer dados e ferramentas deixarem de funcionar como partes isoladas.",
  },
  {
    n: "04", icon: <Brain />, title: "Inteligência artificial", tag: "Quando fizer sentido",
    body: "Quando a IA ajuda de forma concreta a analisar, organizar ou executar uma tarefa.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section dark services">
      <div className="shell">
        <div className="services-head">
          <div className="services-rule">
            <div className="red" />
            <div className="label">04 · Soluções possíveis</div>
          </div>
          <h2 className="services-title">
            A tecnologia entra depois<br />
            de entender o <span className="accent">processo.</span>
          </h2>
          <p className="services-sub">
            Às vezes, o caminho é construir. Em outras, conectar o que já existe ou simplesmente remover uma etapa.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s) => (
            <div className="svc-card" key={s.n}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="num">{s.n} /04</span>
                <span className="t-mono" style={{ color: "var(--text-dim)" }}>{s.tag}</span>
              </div>
              <div className="icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
