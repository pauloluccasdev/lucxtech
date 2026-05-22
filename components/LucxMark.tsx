export default function LucxMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="lxg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5DCAA5" />
          <stop offset="1" stopColor="#2BA877" />
        </linearGradient>
      </defs>
      <path d="M10 9v15h7" stroke="url(#lxg)" strokeWidth="2.6" strokeLinecap="square" fill="none" />
      <path d="M19 9l11 15M30 9 19 24" stroke="url(#lxg)" strokeWidth="2.6" strokeLinecap="square" fill="none" />
      <circle cx="17" cy="24" r="1.6" fill="#3ECF8E" />
      <circle cx="30" cy="9" r="1.6" fill="#3ECF8E" />
      <path d="M30 9h4M30 9l3 3M19 24h-4M30 24l3 0" stroke="#3ECF8E" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
