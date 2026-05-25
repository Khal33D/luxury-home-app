export function ScentSection({ onAddToCart }: { onAddToCart?: (id: string) => void }) {
  const scents = [
    { name: 'Velvet Oud', notes: 'Oud · Amber · Sandalwood', origin: 'Middle Eastern' },
    { name: 'Blanc Cedarwood', notes: 'Cedarwood · Cotton · Vetiver', origin: 'Nordic' },
    { name: 'Côte Azur', notes: 'Sea Salt · Bergamot · Musk', origin: 'Mediterranean' },
    { name: 'Noir Patchouli', notes: 'Patchouli · Dark Rose · Leather', origin: 'French' },
  ];

  return (
    <section
      id="scent"
      className="py-28 relative overflow-hidden"
      style={{ background: '#0D0D0B' }}
    >
      {/* Textured overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(201,169,110,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — content */}
          <div>
            <p
              style={{
                fontSize: '10px',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'rgba(201,169,110,0.6)',
                fontFamily: 'Inter',
                marginBottom: '16px',
              }}
            >
              Intelligent Fragrance
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(30px, 3.5vw, 50px)',
                fontWeight: 300,
                color: '#F0EDE8',
                letterSpacing: '0.04em',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}
            >
              Scent as a<br />
              <em style={{ color: '#C9A96E' }}>Design Element</em>
            </h2>

            <div className="gold-divider mb-8" style={{ maxWidth: '80px' }} />

            <p
              style={{
                fontSize: '15px',
                color: 'rgba(240,237,232,0.55)',
                lineHeight: 1.8,
                fontFamily: 'Inter',
                fontWeight: 300,
                marginBottom: '36px',
                maxWidth: '420px',
              }}
            >
              Our cold-air diffusers disperse pure fragrance molecules without heat, preserving
              the integrity of every note. Whisper-quiet technology. Schedule your scent by room and time.
            </p>

            {/* Scent cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginBottom: '36px' }}>
              {scents.map((scent, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(201,169,110,0.08)',
                    cursor: 'pointer',
                    transition: 'padding-left 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = '8px')}
                  onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = '0')}
                >
                  <div>
                    <div
                      className="font-display"
                      style={{ fontSize: '18px', color: '#F0EDE8', fontWeight: 400, letterSpacing: '0.03em' }}
                    >
                      {scent.name}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: 'rgba(240,237,232,0.4)',
                        fontFamily: 'Inter',
                        fontWeight: 300,
                        marginTop: '2px',
                      }}
                    >
                      {scent.notes}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: 'rgba(201,169,110,0.5)',
                      fontFamily: 'Inter',
                    }}
                  >
                    {scent.origin}
                  </div>
                </div>
              ))}
            </div>

            <a href="#products" className="btn-primary">
              <span>Discover Scents</span>
            </a>
          </div>

          {/* Right — image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                overflow: 'hidden',
                border: '1px solid rgba(201,169,110,0.1)',
              }}
            >
              <img
                src="https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Air Perfume Diffuser"
                style={{
                  width: '100%',
                  height: '520px',
                  objectFit: 'cover',
                  filter: 'brightness(0.65) saturate(0.85)',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                left: '-16px',
                background: 'rgba(10,10,10,0.95)',
                border: '1px solid rgba(201,169,110,0.25)',
                padding: '16px 20px',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: 'rgba(201,169,110,0.7)',
                  fontFamily: 'Inter',
                  marginBottom: '4px',
                }}
              >
                Cold Air Technology
              </div>
              <div
                className="font-display"
                style={{ fontSize: '20px', color: '#F0EDE8', fontWeight: 300 }}
              >
                Pure. Silent.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
