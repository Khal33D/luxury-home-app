export function WallArtSection({ onAddToCart }: { onAddToCart?: (id: string) => void }) {
  const artworks = [
    {
      title: 'Void Series No. 1',
      medium: 'Fine Art Print',
      size: '60 × 80 cm',
      price: '€119',
      img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Line & Space',
      medium: 'Canvas Edition',
      size: '50 × 70 cm',
      price: '€149',
      img: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Noir Geometry',
      medium: 'Premium Canvas',
      size: '80 × 80 cm',
      price: '€199',
      img: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section
      id="wall-art"
      className="py-28"
      style={{ background: '#080808' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
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
              Curated Editions
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 300,
                color: '#F0EDE8',
                letterSpacing: '0.04em',
                lineHeight: 1.2,
              }}
            >
              Minimalist Wall Art
            </h2>
          </div>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(240,237,232,0.4)',
              fontFamily: 'Inter',
              fontWeight: 300,
              maxWidth: '320px',
              lineHeight: 1.7,
              textAlign: 'right',
            }}
          >
            Each artwork is printed on gallery-grade materials and delivered ready to hang across Europe.
          </p>
        </div>

        <div className="gold-divider mb-16" />

        {/* Art grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <div
              key={art.title}
              className="product-card group"
              style={{ cursor: 'pointer' }}
            >
              {/* Frame simulation */}
              <div
                style={{
                  position: 'relative',
                  padding: '16px',
                  background: '#0F0F0F',
                  border: '1px solid rgba(201,169,110,0.12)',
                }}
              >
                <div
                  style={{
                    border: '1px solid rgba(201,169,110,0.1)',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={art.img}
                    alt={art.title}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      filter: 'brightness(0.8) saturate(0.7)',
                      display: 'block',
                      transition: 'transform 0.6s ease, filter 0.4s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLImageElement).style.transform = 'scale(1.04)';
                      (e.target as HTMLImageElement).style.filter = 'brightness(0.88) saturate(0.8)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLImageElement).style.transform = 'scale(1)';
                      (e.target as HTMLImageElement).style.filter = 'brightness(0.8) saturate(0.7)';
                    }}
                  />
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '16px 0', borderBottom: '1px solid rgba(201,169,110,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h4
                      className="font-display"
                      style={{
                        fontSize: '20px',
                        fontWeight: 400,
                        color: '#F0EDE8',
                        letterSpacing: '0.03em',
                        marginBottom: '4px',
                      }}
                    >
                      {art.title}
                    </h4>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          color: 'rgba(240,237,232,0.35)',
                          fontFamily: 'Inter',
                          fontWeight: 300,
                        }}
                      >
                        {art.medium}
                      </span>
                      <span style={{ color: 'rgba(201,169,110,0.3)', fontSize: '11px' }}>·</span>
                      <span
                        style={{
                          fontSize: '11px',
                          color: 'rgba(240,237,232,0.35)',
                          fontFamily: 'Inter',
                          fontWeight: 300,
                        }}
                      >
                        {art.size}
                      </span>
                    </div>
                  </div>
                  <div
                    className="font-display"
                    style={{ fontSize: '20px', color: '#C9A96E', fontWeight: 400 }}
                  >
                    {art.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#products" className="btn-primary">
            <span>View All Art</span>
          </a>
        </div>
      </div>
    </section>
  );
}
