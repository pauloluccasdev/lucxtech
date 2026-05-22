import { Check } from "./icons";

const DIFFS = [
  { n: "01", t: "Construído para durar",       d: "Cada sistema é pensado para o longo prazo — não só para o lançamento." },
  { n: "02", t: "Funciona quando precisa",     d: "Sistemas confiáveis, disponíveis, sem surpresas no pior momento." },
  { n: "03", t: "Rápido por padrão",           d: "Velocidade não é ajuste final. É decisão de projeto desde o início." },
  { n: "04", t: "Zero template",               d: "Cada solução começa pela sua realidade — não por um modelo pronto." },
  { n: "05", t: "Resolvemos o problema certo", d: "Entendemos o negócio antes de propor qualquer solução." },
  { n: "06", t: "Protegido desde o início",    d: "Segurança não é opcional. Está em cada decisão de projeto." },
];

export default function Differentials() {
  return (
    <section id="diff" className="section light diff">
      <div className="shell">
        <div className="diff-head">
          <div className="diff-rule">
            <div className="red" />
            <div className="label">Diferenciais · Por que Lucx</div>
          </div>
          <div>
            <h2 className="diff-title">
              O que muda quando você<br />
              trabalha com a <span className="accent">Lucx Tech.</span>
            </h2>
            <p className="diff-sub">
              Não terceirizamos. Não usamos template. Cada solução é construída para você.
            </p>
          </div>
        </div>

        <div className="diff-grid">
          {DIFFS.map((d) => (
            <div className="diff-card" key={d.n}>
              <span className="num">{d.n} / 06</span>
              <h4>
                <span className="checkdot"><Check /></span>
                {d.t}
              </h4>
              <p>{d.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
