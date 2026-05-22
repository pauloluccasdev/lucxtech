import LucxMark from "./LucxMark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 36, height: 36,
                border: "1px solid var(--line-strong)",
                borderRadius: 8,
                display: "grid", placeItems: "center",
                background: "linear-gradient(140deg, rgba(62,207,142,0.18), rgba(62,207,142,0.04))",
              }}>
                <LucxMark size={22} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, letterSpacing: "-0.02em" }}>
                Lucx<span style={{ color: "var(--green)" }}>.</span>Tech
              </div>
            </div>
            <p className="blurb">
              Construímos os sistemas que movem o seu negócio — automação, IA e engenharia sob medida.
            </p>
          </div>

          <div>
            <h5>Soluções</h5>
            <ul>
              <li><a href="#servicos">Automação</a></li>
              <li><a href="#servicos">Modernização</a></li>
              <li><a href="#servicos">SaaS / MVPs</a></li>
              <li><a href="#servicos">IA Aplicada</a></li>
            </ul>
          </div>
          <div>
            <h5>Empresa</h5>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#">Carreira</a></li>
            </ul>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li><a href="mailto:contato@lucx.tech">contato@lucx.tech</a></li>
              <li><a href="#">WhatsApp comercial</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bot">
          <div>lucx.tech · © 2026 Lucx Tech</div>
          <div className="right">
            <span>Privacidade</span>
            <span>Termos</span>
            <span style={{ color: "var(--green)" }}>● Status: operacional</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
