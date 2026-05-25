import { Zap, Wifi, Moon } from 'lucide-react';

const features = [
  { icon: Wifi, label: 'Wireless Control', desc: 'App-controlled ambiance from your phone. No wiring required.' },
  { icon: Moon, label: 'Mood Scenes', desc: 'Create custom scenes for every moment — from dinner to cinema.' },
  { icon: Zap, label: 'Energy Smart', desc: 'Ultra-low power consumption. LED lifespan of 50,000 hours.' },
];

export function LightingSection({ onAddToCart }: { onAddToCart?: (id: string) => void }) {
  return (
    <section
      id="lighting"
      className="py-28 relative overflow-hidden"
      style={{ background: '#060606' }}
    >
      {/* Background glow */}
      <div
        className="glow-pulse absolute"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(201,169,110,0.12)',
              }}
            >
              <img
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Ambient Lighting"
                style={{
                  width: '100%',
                  height: '560px',
                  objectFit: 'cover',
                  filter: 'brightness(0.7) saturate(0.8)',
                  display: 'block',
                }}
              />
              {/* Light strip overlay */}
              <div
                className="glow-pulse"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent 10%, rgba(201,169,110,0.8) 50%, transparent 90%)',
                }}
              />
            </div>

            {/* Floating stat card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                background: 'rgba(12,12,12,0.95)',
                border: '1px solid rgba(201,169,110,0.2)',
                padding: '20px 24px',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                className="font-display"
                style={{ fontSize: '36px', color: '#C9A96E', fontWeight: 300 }}
              >
                12k+
              </div>
              <div
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,237,232,0.45)',
                  fontFamily: 'Inter',
                  marginTop: '2px',
                }}
              >
                European Homes
              </div>
            </div>
          </div>

          {/* Right — Content */}
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
              The Signature Collection
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
              Wireless Ambient<br />
              <em style={{ color: '#C9A96E' }}>Lighting, Elevated</em>
            </h2>

            <div className="gold-divider mb-8" style={{ maxWidth: '80px' }} />

            <p
              style={{
                fontSize: '15px',
                color: 'rgba(240,237,232,0.55)',
                lineHeight: 1.8,
                fontFamily: 'Inter',
                fontWeight: 300,
                marginBottom: '32px',
                maxWidth: '440px',
              }}
            >
              Our wireless lighting collection blends Scandinavian minimalism with precision engineering.
              Each piece is designed to become a focal point — a sculptural object that illuminates beautifully.
            </p>

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {features.map(({ icon: Icon, label, desc }) => (
                <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      border: '1px solid rgba(201,169,110,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} color="#C9A96E" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '12px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#F0EDE8',
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginBottom: '3px',
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: 'rgba(240,237,232,0.45)',
                        fontFamily: 'Inter',
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#products" className="btn-primary">
              <span>Shop Lighting</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
