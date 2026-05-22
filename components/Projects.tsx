import { Arrow, ArrowDown } from "./icons";

type StatusKind = "building" | "soon" | "beta" | "live" | "concept";

interface Project {
  name: string;
  slug: string;
  type: string;
  status: string;
  statusKind: StatusKind;
  period: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    name: "Projeto 01",
    slug: "project-01",
    type: "Automação · Operações",
    status: "Em desenvolvimento",
    statusKind: "building",
    period: "2026",
    description: "Plataforma que está sendo construída para automatizar processos repetitivos de operação. Em breve compartilharemos detalhes — o sistema entra em validação ainda este trimestre.",
  },
  {
    name: "Projeto 02",
    slug: "project-02",
    type: "IA Aplicada · Atendimento",
    status: "Próximo lançamento",
    statusKind: "soon",
    period: "2026",
    description: "Assistente de IA sob medida para qualificar leads e organizar pedidos. Saímos da etapa de desenho e estamos integrando os primeiros canais de comunicação.",
  },
  {
    name: "Projeto 03",
    slug: "project-03",
    type: "SaaS · Produto próprio",
    status: "Concept",
    statusKind: "concept",
    period: "2026",
    description: "Nossa primeira plataforma própria — em desenho de arquitetura. Será a base para outros projetos da Lucx e ao mesmo tempo um produto independente para o mercado.",
  },
];

const STATUS_COLORS: Record<StatusKind, string> = {
  building: "var(--green)",
  soon: "#FFC857",
  beta: "#7CC6FF",
  live: "var(--green)",
  concept: "var(--text-muted)",
};

export default function Projects() {
  return (
    <section id="projetos" className="section dark projects">
      <div className="shell">
        <div className="projects-head">
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 8, height: 8, background: "var(--green)", display: "inline-block", borderRadius: 2 }} />
              Projetos · o que estamos construindo
            </div>
            <h2 className="projects-title">
              Estamos começando — mas o<br />
              que construímos é <span className="accent">real.</span>
            </h2>
            <p className="projects-sub">
              A Lucx Tech é um estúdio novo. Em vez de exibir cases que não temos, mostramos
              o que está em desenvolvimento agora — e como funciona cada um por dentro.
            </p>
          </div>

          <div className="projects-aside">
            <div className="rotated">Confira os projetos</div>
            <a href="#projetos-list" className="round-arrow" aria-label="Ir para projetos">
              <ArrowDown />
            </a>
          </div>
        </div>

        <div id="projetos-list" className="projects-list">
          {PROJECTS.map((p, i) => {
            const color = STATUS_COLORS[p.statusKind];
            return (
              <div className="project-row" key={p.slug}>
                <div className="project-meta">
                  <div className="project-num">
                    {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                  </div>
                  <span className="badge-pill">Projeto Lucx</span>
                </div>

                <div className="project-main">
                  <div className="project-status-line">
                    <span className="status-tag" style={{ color, borderColor: "currentColor" }}>
                      <span className="ledot" style={{ background: color }} />
                      {p.status}
                    </span>
                    <span className="t-mono" style={{ color: "var(--text-dim)" }}>{p.type}</span>
                    <span className="t-mono" style={{ color: "var(--text-dim)" }}>· {p.period}</span>
                  </div>
                  <h3 className="project-name">{p.name}</h3>
                  <a href="#" className="project-link">
                    Acompanhar evolução <Arrow />
                  </a>
                </div>

                <div className="project-side">
                  <div className="braces">{"{ }"}</div>
                  <p className="project-desc">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects-foot">
          <div className="t-mono" style={{ color: "var(--text-dim)" }}>
            <span style={{ color: "var(--green)" }}>↳</span>&nbsp;&nbsp;Próximo a entrar nessa lista?{" "}
            <a href="#contato" style={{ color: "var(--text)", borderBottom: "1px solid var(--line-strong)", paddingBottom: 2 }}>
              O seu projeto.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
