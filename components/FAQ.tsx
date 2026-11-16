"use client";

import { useRef, useState } from "react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const faqs = [
  ["Como funciona o desenvolvimento de um sistema sob medida?", "Começamos entendendo o problema e o fluxo atual. Depois definimos escopo e prioridades, construímos em etapas e validamos as decisões ao longo do projeto."],
  ["Preciso ter todas as funcionalidades definidas?", "Não. É suficiente conhecer o problema e o objetivo. A definição do que realmente precisa ser construído faz parte do trabalho inicial."],
  ["A Lucx trabalha com projetos pequenos?", "Sim, quando existe um problema claro e uma solução viável. O tamanho do projeto é avaliado na primeira conversa, sem compromisso de contratação."],
  ["É possível integrar ferramentas que já utilizo?", "Muitas vezes, sim. Primeiro verificamos as APIs, permissões e limitações das ferramentas para indicar o caminho mais seguro."],
  ["Como funciona a manutenção após a entrega?", "A necessidade de suporte e evolução é combinada conforme o projeto. Não aplicamos um modelo único antes de entender o contexto."],
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  function move(direction: number) { trackRef.current?.scrollBy({ left: direction * 380, behavior: "smooth" }); }
  return <section className="faq section-v2" id="faq"><Container><Reveal className="faq__head"><span className="eyebrow">Perguntas frequentes</span><h2>Antes de começar,<br /><span>vale entender.</span></h2></Reveal><div className="faq__track" ref={trackRef}>{faqs.map(([question, answer], index) => { const expanded = open === index; return <Reveal className={`faq-card ${expanded ? "is-open" : ""}`} delay={index * 60} key={question}><button aria-expanded={expanded} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(expanded ? null : index)}><span>{question}</span><i aria-hidden="true">{expanded ? "−" : "+"}</i></button><div id={`faq-answer-${index}`} className="faq-card__answer" hidden={!expanded}><p>{answer}</p></div></Reveal>; })}</div><div className="faq__controls"><button onClick={() => move(-1)} aria-label="Pergunta anterior">←</button><button onClick={() => move(1)} aria-label="Próxima pergunta">→</button></div></Container></section>;
}
