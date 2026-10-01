import LucxMark from "./LucxMark";

export default function Footer() {
  return (
    <footer className="footer footer-new">
      <div className="shell">
        <div className="footer-new-main">
          <a href="#" className="footer-new-brand" aria-label="Lucx Tech — início">
            <LucxMark size={30} />
            <span>Lucx<span className="footer-dot">.</span>Tech</span>
          </a>
          <nav className="footer-new-nav" aria-label="Navegação do rodapé">
            <a href="#processo">Como pensamos</a>
            <a href="#servicos">Soluções</a>
            <a href="#projetos">Projeto</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
        <div className="footer-new-bottom">
          <span>© 2026 Lucx Tech</span>
          <span>Tecnologia quando fizer sentido. Simplicidade sempre.</span>
        </div>
      </div>
    </footer>
  );
}
