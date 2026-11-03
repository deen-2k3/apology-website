import { useMemo } from 'react';

const rand = (min, max) => min + Math.random() * (max - min);

// Fixed, decorative layer: soft colour washes, rising particles and twinkling stars.
// Everything is CSS-animated (transform/opacity only) to stay light on phones.
export default function Background() {
  const { particles, stars } = useMemo(() => {
    const small = window.matchMedia('(max-width: 640px)').matches;
    return {
      particles: Array.from({ length: small ? 10 : 20 }, (_, i) => ({
        id: i,
        left: rand(0, 100),
        size: rand(6, 14),
        duration: rand(16, 30),
        delay: -rand(0, 30),
        tone: i % 3,
      })),
      stars: Array.from({ length: small ? 14 : 26 }, (_, i) => ({
        id: i,
        left: rand(2, 98),
        top: rand(2, 98),
        size: rand(8, 14),
        duration: rand(2.8, 5.5),
        delay: rand(0, 5),
      })),
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="wash wash-1" />
      <div className="wash wash-2" />
      <div className="wash wash-3" />

      {particles.map((p) => (
        <span
          key={p.id}
          className={`particle tone-${p.tone}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {stars.map((s) => (
        <span
          key={s.id}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}
