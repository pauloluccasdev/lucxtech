import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const services = [
  { number: "01", title: "Sistemas sob medida", text: "Sistemas de gestão e plataformas desenvolvidos para organizar operações.", visual: "system" },
  { number: "02", title: "Aplicativos", text: "Aplicativos web e experiências mobile para necessidades específicas.", visual: "app" },
  { number: "03", title: "Integrações", text: "Conexão entre sistemas, APIs, ferramentas e dados.", visual: "integration" },
  { number: "04", title: "Automações", text: "Redução de tarefas repetitivas e processos manuais.", visual: "automation" },
];

function ServiceVisual({ type }: { type: string }) {
  if (type === "system") return <div className="service-mock service-mock--system" aria-hidden="true"><aside><i /><i /><i /><i /></aside><main><header /><div className="mock-stats"><i /><i /><i /></div><div className="mock-chart" /></main></div>;
  if (type === "app") return <div className="service-mock service-mock--app" aria-hidden="true"><div className="mock-phone"><span>diazen</span><i /><i /><i /><footer /></div><small>representação visual</small></div>;
  if (type === "integration") return <div className="service-mock service-mock--integration" aria-hidden="true">
    <svg className="integration-lines" viewBox="0 0 500 300" preserveAspectRatio="none">
      <defs><marker id="integration-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 8 4 0 8Z" /></marker></defs>
      <path d="M112 62 C176 62 184 126 210 140" />
      <path d="M388 62 C324 62 316 126 290 140" />
      <path d="M112 238 C176 238 184 174 210 160" />
      <path d="M388 238 C324 238 316 174 290 160" />
    </svg>
    <span className="integration-node integration-node--crm">CRM</span>
    <span className="integration-node integration-node--data">Dados</span>
    <span className="integration-node integration-node--apps">Apps</span>
    <span className="integration-node integration-node--erp">ERP</span>
    <span className="integration-hub"><small>hub</small>API</span>
  </div>;
  return <div className="service-mock service-mock--automation" aria-hidden="true"><div><span>01</span>Entrada<i /></div><div><span>02</span>Regra<i /></div><div><span>03</span>Ação<b>feito</b></div></div>;
}

export default function Services() {
  return <section className="services-v2 section-v2" id="servicos"><Container>
    <Reveal className="section-heading"><div><span className="eyebrow">O que fazemos</span><h2>Da ideia à solução.<br /><span>Construída para funcionar.</span></h2></div><p>Escolhemos a tecnologia depois de entender o que o produto ou processo realmente precisa.</p></Reveal>
    <div className="services-grid">{services.map((service, index) => <Reveal role="article" className={`service-card service-card--${service.visual}`} delay={index * 80} key={service.title}><div className="service-card__visual"><ServiceVisual type={service.visual} /></div><div className="service-card__body"><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p></div></Reveal>)}</div>
  </Container></section>;
}
