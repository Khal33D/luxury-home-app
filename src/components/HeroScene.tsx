import { useEffect, useRef } from 'react';

function PendantLight({ x, delay, side }: { x: number; delay: number; side: 'dark' | 'light' }) {
  const isDark = side === 'dark';
  const cableColor = isDark ? '#444' : '#AAA';
  const squareSize = 28;
  const cableHeight = 120 + Math.random() * 40;

  return (
    <div
      className="absolute top-0 flex flex-col items-center spotlight-flicker"
      style={{ left: `${x}%`, animationDelay: `${delay}s` }}
    >
      {/* Cable */}
      <div style={{ width: '1px', height: `${cableHeight}px`, background: `linear-gradient(180deg, transparent, ${cableColor})` }} />
      {/* Square light fixture */}
      <div
        style={{
          width: squareSize,
          height: squareSize,
          border: `1px solid ${isDark ? 'rgba(201,169,110,0.5)' : 'rgba(120,90,40,0.4)'}`,
          background: isDark
            ? 'rgba(201,169,110,0.12)'
            : 'rgba(255,230,160,0.25)',
          position: 'relative',
        }}
      >
        {/* Inner glow dot */}
        <div
          className="glow-pulse"
          style={{
            position: 'absolute',
            inset: 0,
            background: isDark
              ? 'radial-gradient(circle at center, rgba(201,169,110,0.9) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(255,220,100,0.95) 0%, transparent 70%)',
            animationDelay: `${delay + 0.5}s`,
          }}
        />
      </div>
      {/* Light cone */}
      <div
        className="light-beam"
        style={{
          width: 0,
          height: 0,
          borderLeft: `${squareSize * 1.5}px solid transparent`,
          borderRight: `${squareSize * 1.5}px solid transparent`,
          borderTop: `${80}px solid ${isDark ? 'rgba(201,169,110,0.06)' : 'rgba(255,220,100,0.12)'}`,
          transform: 'rotate(180deg)',
          marginTop: '-1px',
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-fade-in-up').forEach((el) => {
            (el as HTMLElement).style.animationPlayState = 'running';
          });
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '700px' }}
      id="hero"
    >
      {/* ===== LEFT SIDE — DARK MODE WITH LUXURY SALON IMAGE ===== */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{ width: '50%', background: 'linear-gradient(160deg, #060606 0%, #0D0D0D 100%)' }}
      >
        {/* Background image with dark overlay */}
        <img
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200&fit=crop"
          alt="Dark luxury salon"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4,
          }}
        />

        {/* Dark overlay to maintain visibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, rgba(6,6,6,0.7) 0%, rgba(13,13,13,0.6) 100%)',
          }}
        />

        {/* Pendant lights — dark side */}
        <PendantLight x={18} delay={0} side="dark" />
        <PendantLight x={50} delay={1.2} side="dark" />
        <PendantLight x={80} delay={0.6} side="dark" />

        {/* Ambient glow from lights */}
        <div
          className="glow-pulse absolute"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)',
            top: '28%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Floor subtle glow */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(180deg, transparent, rgba(201,169,110,0.04))',
          }}
        />

        {/* DARK MODE label */}
        <div
          className="absolute animate-fade-in-up delay-400"
          style={{ bottom: '6%', left: '50%', transform: 'translateX(-50%)' }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(201,169,110,0.5)', textTransform: 'uppercase', fontFamily: 'Inter' }}>
            Night
          </span>
        </div>
      </div>

      {/* ===== DIVIDER ===== */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{
          left: '50%',
          width: '1px',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(180deg, transparent 0%, rgba(201,169,110,0.6) 20%, rgba(201,169,110,0.6) 80%, transparent 100%)',
        }}
      />

      {/* ===== RIGHT SIDE — BRIGHT MODE WITH LUXURY SALON IMAGE ===== */}
      <div
        className="absolute right-0 top-0 bottom-0"
        style={{ width: '50%', background: 'linear-gradient(160deg, #F5F2EC 0%, #EDE9E0 100%)' }}
      >
        {/* Background image with bright overlay */}
        <img
          src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200&fit=crop"
          alt="Bright luxury salon"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
          }}
        />

        {/* Light overlay to maintain readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, rgba(245,242,236,0.65) 0%, rgba(237,233,224,0.55) 100%)',
          }}
        />

        {/* Pendant lights — light side */}
        <PendantLight x={20} delay={0.3} side="light" />
        <PendantLight x={52} delay={1.5} side="light" />
        <PendantLight x={82} delay={0.9} side="light" />

        {/* Subtle warm ambient */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '40%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,220,140,0.2) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />

        {/* DAY label */}
        <div
          className="absolute animate-fade-in-up delay-400"
          style={{ bottom: '6%', left: '50%', transform: 'translateX(-50%)' }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(120,90,40,0.5)', textTransform: 'uppercase', fontFamily: 'Inter' }}>
            Day
          </span>
        </div>
      </div>

      {/* ===== CENTERED HERO TEXT ===== */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-end z-20 pb-16"
        style={{ pointerEvents: 'none' }}
      >
        <div className="text-center" style={{ pointerEvents: 'all' }}>
          <p
            className="animate-fade-in-up delay-100"
            style={{
              fontSize: '10px',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'rgba(201,169,110,0.7)',
              fontFamily: 'Inter',
              fontWeight: 400,
              marginBottom: '12px',
            }}
          >
            Luxury Home Experience
          </p>
          <h1
            className="font-display animate-fade-in-up delay-200"
            style={{
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 300,
              color: '#F0EDE8',
              letterSpacing: '0.08em',
              lineHeight: 1.1,
              marginBottom: '24px',
              textShadow: '0 2px 20px rgba(0,0,0,0.8)',
            }}
          >
            Light the Space.<br />
            <em style={{ color: '#C9A96E', fontStyle: 'italic' }}>Define the Feeling.</em>
          </h1>
          <div
            className="animate-fade-in-up delay-300 flex gap-4 justify-center flex-wrap"
          >
            <a href="#collections" className="btn-primary">
              <span>Explore Collection</span>
            </a>
            <a
              href="#about"
              style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(240,237,232,0.55)',
                textDecoration: 'none',
                padding: '14px 32px',
                border: '1px solid rgba(240,237,232,0.15)',
                display: 'inline-block',
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'rgba(240,237,232,0.85)';
                (e.target as HTMLElement).style.borderColor = 'rgba(240,237,232,0.35)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'rgba(240,237,232,0.55)';
                (e.target as HTMLElement).style.borderColor = 'rgba(240,237,232,0.15)';
              }}
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-20 animate-fade-in-up delay-600"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'rgba(201,169,110,0.4)', textTransform: 'uppercase', fontFamily: 'Inter' }}>
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(180deg, rgba(201,169,110,0.4), transparent)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
