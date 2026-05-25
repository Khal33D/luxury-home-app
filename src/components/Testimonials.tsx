const reviews = [
  {
    name: 'Sophie M.',
    city: 'Paris, France',
    text: 'The Arc Sphere light completely transformed my living room. The glow is exactly what I imagined — warm, architectural, perfect.',
    rating: 5,
    product: 'Arc Sphere Light',
  },
  {
    name: 'Lars K.',
    city: 'Stockholm, Sweden',
    text: 'Veloria Living is exactly what premium home decor should feel like. Fast delivery, incredible packaging, and the diffuser is whisper-quiet.',
    rating: 5,
    product: 'Veloria Noir Diffuser',
  },
  {
    name: 'Isabella R.',
    city: 'Milan, Italy',
    text: 'I ordered the Void Series canvas on a Friday, it was on my wall by Tuesday. The print quality is gallery level. Exceptional.',
    rating: 5,
    product: 'Void Series No. 1',
  },
];

export function Testimonials() {
  return (
    <section
      className="py-24"
      style={{
        background: 'linear-gradient(180deg, #060606 0%, #0A0908 100%)',
        borderTop: '1px solid rgba(201,169,110,0.08)',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: 'rgba(201,169,110,0.6)',
              fontFamily: 'Inter',
              marginBottom: '12px',
            }}
          >
            From Our Clients
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 300,
              color: '#F0EDE8',
              letterSpacing: '0.04em',
            }}
          >
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                padding: '32px',
                border: '1px solid rgba(201,169,110,0.1)',
                background: 'rgba(255,255,255,0.02)',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <div
                className="font-display"
                style={{
                  fontSize: '72px',
                  color: 'rgba(201,169,110,0.12)',
                  lineHeight: 0.8,
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  fontWeight: 300,
                }}
              >
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <div
                    key={j}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#C9A96E',
                    }}
                  />
                ))}
              </div>

              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(240,237,232,0.65)',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                "{r.text}"
              </p>

              <div className="gold-divider mb-5" style={{ maxWidth: '40px' }} />

              <div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#F0EDE8',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    marginBottom: '2px',
                  }}
                >
                  {r.name}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'rgba(240,237,232,0.35)',
                    fontFamily: 'Inter',
                    fontWeight: 300,
                  }}
                >
                  {r.city} · {r.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
