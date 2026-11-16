import Image from "next/image";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="footer footer-new">
      <Container>
        <div className="footer-new-main">
          <a href="/" className="footer-new-brand" aria-label="Lucx — início">
            <Image
              src="/brand/lucx-wordmark-on-dark.svg"
              alt="lucx."
              fill
              sizes="116px"
            />
          </a>
          <nav className="footer-new-nav" aria-label="Navegação do rodapé">
            <a href="/#inicio">Início</a>
            <a href="/#servicos">Soluções</a>
            <a href="/#projetos">Projetos</a>
            <a href="/#sobre">Sobre</a>
            <a href="/contato">Contato</a>
          </nav>
        </div>
        <div className="footer-new-bottom">
          <span>© 2026 Lucx Tech</span>
          <a href="mailto:contato.pauloraimundo@gmail.com">contato.pauloraimundo@gmail.com</a>
        </div>
      </Container>
    </footer>
  );
}
