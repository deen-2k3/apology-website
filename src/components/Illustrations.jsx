// Small hand-drawn-style SVG illustrations. Friendship themed — mugs, flowers, a moon.

export function FlowerDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="32"
          cy="18"
          rx="8"
          ry="12"
          fill="#fbdde4"
          stroke="#f2a7bb"
          strokeWidth="1.5"
          transform={`rotate(${deg} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="7" fill="#fff1c9" stroke="#f0c97a" strokeWidth="1.5" />
    </svg>
  );
}

export function TwoMugs({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 180 100" fill="none" aria-hidden="true">
      {/* steam */}
      <g stroke="#b9a6e8" strokeWidth="2" strokeLinecap="round" opacity="0.7" className="steam">
        <path d="M52 30c-4-6 4-9 0-15" />
        <path d="M64 30c-4-6 4-9 0-15" />
        <path d="M116 30c-4-6 4-9 0-15" />
        <path d="M128 30c-4-6 4-9 0-15" />
      </g>
      {/* left mug */}
      <rect x="36" y="38" width="44" height="46" rx="10" fill="#e7defa" stroke="#9b87d6" strokeWidth="2" />
      <path d="M80 50h6a9 9 0 0 1 0 18h-6" stroke="#9b87d6" strokeWidth="2" fill="none" />
      <circle cx="58" cy="60" r="5" fill="#fff" opacity="0.8" />
      {/* right mug */}
      <rect x="100" y="38" width="44" height="46" rx="10" fill="#fbdde4" stroke="#e48aa3" strokeWidth="2" />
      <path d="M100 50h-6a9 9 0 0 0 0 18h6" stroke="#e48aa3" strokeWidth="2" fill="none" />
      <path d="M118 58l4 4 4-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      {/* table line + sparkle */}
      <path d="M20 88h140" stroke="#d9cdf3" strokeWidth="2" strokeLinecap="round" />
      <path d="M90 14l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#f0c97a" />
    </svg>
  );
}

export function MoonDoodle({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M40 10a22 22 0 1 0 14 34A18 18 0 0 1 40 10z"
        fill="#fff1c9"
        stroke="#f0c97a"
        strokeWidth="1.5"
      />
      <path d="M14 14l1.5 3.5L19 19l-3.5 1.5L14 24l-1.5-3.5L9 19l3.5-1.5z" fill="#b9a6e8" />
    </svg>
  );
}
