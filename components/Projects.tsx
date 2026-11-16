import Image from "next/image";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function Projects() {
  return <section className="projects-v2 section-v2" id="projetos"><Container>
    <Reveal className="section-heading section-heading--projects"><div><span className="eyebrow">Projetos selecionados</span><h2>Produtos em construção.<br /><span>Trabalho real.</span></h2></div><p>Mostramos o estágio verdadeiro de cada produto, sem transformar projetos em andamento em cases concluídos.</p></Reveal>
    <div className="projects-grid">
      <Reveal className="project-card"><div className="project-card__media project-card__media--diazen"><div className="diazen-demo" aria-label="Representação temporária do aplicativo Diazen"><div className="diazen-phone"><header><b>diazen</b><i /></header><p>Seu dia</p><div className="diazen-ring">72%</div><div className="diazen-bars"><i /><i /><i /></div></div><span>Representação visual<br />Capturas em preparação</span></div></div><div className="project-card__meta"><div><span>Aplicativo · Em testes</span><h3>Diazen</h3></div><p>Acompanhamento de alimentação, treinos, hidratação e evolução física.</p></div></Reveal>
      <Reveal className="project-card" delay={90}><div className="project-card__media project-card__media--liora"><Image src="/projects/liora-closet-showcase.png" alt="Plataforma Liora Closet em notebook e celulares" fill sizes="(max-width: 720px) 100vw, 50vw" /></div><div className="project-card__meta"><div><span>Sistema de gestão · Em refinamento para testes</span><h3>Liora Closet</h3></div><p>Plataforma para organizar produtos, pedidos, clientes e processos de uma loja.</p></div></Reveal>
    </div>
  </Container></section>;
}
