const STACK = [
  "TypeScript", "Node.js", "Python", "Next.js", "PostgreSQL",
  "AWS", "Docker", "Stripe", "OpenAI", "LangChain",
  "React", "Supabase", "Redis", "tRPC", "Tailwind",
];

export default function Clients() {
  const row = [...STACK, ...STACK];
  return (
    <div className="clients-strip">
      <div className="shell clients-inner">
        <div className="clients-label">Stack · ferramentas que usamos</div>
        <div className="clients-track">
          <div className="clients-row">
            {row.map((c, i) => (
              <span key={i} className="client-pill">
                <span className="star">✦</span>{c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
