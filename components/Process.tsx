import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const steps = [
  ["01", "Entender", "Compreender o problema, a rotina e as necessidades do negócio."],
  ["02", "Planejar", "Definir a solução, o escopo e as prioridades."],
  ["03", "Construir", "Desenvolver, validar e ajustar a solução."],
  ["04", "Entregar", "Testar, preparar e disponibilizar o produto."],
  ["05", "Evoluir", "Acompanhar melhorias e novas necessidades conforme o projeto."],
];

export default function Process() {
  return <section className="process-v2 section-v2" id="processo"><Container><Reveal className="process-panel"><span className="eyebrow eyebrow--dark">Como trabalhamos</span><h2>Do primeiro entendimento<br /><span>à evolução do produto.</span></h2><div className="process-steps">{steps.map(([number, title, text], index) => <Reveal className="process-step" delay={index * 70} key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></Reveal></Container></section>;
}
