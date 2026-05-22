const WORDS = ["Automação", "IA Aplicada", "Engenharia", "Sob Medida", "Confiável", "Rápida"];
const ROW = [...WORDS, ...WORDS, ...WORDS];

export default function Band() {
  return (
    <div className="band">
      <div className="band-track">
        {ROW.map((w, i) => (
          <span key={`${w}-${i}`}>
            <span className={i % 2 ? "dim" : ""}>{w}</span>
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
