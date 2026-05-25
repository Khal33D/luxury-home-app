export default function About() {
  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ background: '#070707' }}
    >
      {/* Left accent line */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '10%',
          bottom: '10%',
          width: '1px',
          background: 'linear-gradient(180deg, transparent, rgba(201,169,110,0.3), transparent)',
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image stack */}
          <div style={{ position: 'relative', height: '520px' }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: '15%',
                height: '380px',
                overflow: 'hidden',
                border: '1px solid rgba(201,169,110,0.1)',
              }}
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Veloria Living"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.6) saturate(0.8)',
                }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: '25%',
                height: '280px',
                overflow: 'hidden',
                border: '1px solid rgba(201,169,110,0.15)',
              }}
            >
              <img
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Veloria Living Interior"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.55) saturate(0.8)',
                }}
              />
            </div>

            {/* Stat pill */}
            <div
              style={{
                position: 'absolute',
                top: '35%',
                right: '10%',
                background: 'rgba(8,8,8,0.92)',
                border: '1px solid rgba(201,169,110,0.2)',
                padding: '12px 18px',
                backdropFilter: 'blur(10px)',
                zIndex: 2,
              }}
            >
              <div
                className="font-display"
                style={{ fontSize: '28px', color: '#C9A96E', fontWeight: 300 }}
              >
                2024
              </div>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(240,237,232,0.4)',
                  fontFamily: 'Inter',
                }}
              >
                Founded
              </div>
            </div>
          </div>

          {/* Content */}
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
              Our Philosophy
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 300,
                color: '#F0EDE8',
                letterSpacing: '0.04em',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              A Home Is a<br />
              <em style={{ color: '#C9A96E' }}>Living Experience</em>
            </h2>

            <div className="gold-divider mb-8" style={{ maxWidth: '80px' }} />

            <p
              style={{
                fontSize: '15px',
                color: 'rgba(240,237,232,0.55)',
                lineHeight: 1.85,
                fontFamily: 'Inter',
                fontWeight: 300,
                marginBottom: '20px',
              }}
            >
              Veloria Living was born from a simple belief: the objects that surround you
              shape how you feel. We source only the most thoughtful, beautifully-made pieces —
              from precision wireless lighting to intelligent fragrance systems and minimalist art
              crafted for the modern European home.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(240,237,232,0.45)',
                lineHeight: 1.85,
                fontFamily: 'Inter',
                fontWeight: 300,
                marginBottom: '36px',
              }}
            >
              Every product we carry passes our curation standard. If it doesn't transform
              a space, it doesn't belong in ours.
            </p>

            {/* Numbers */}
            <div style={{ display: 'flex', gap: '40px', borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '28px' }}>
              {[
                { num: '12k+', label: 'Happy Clients' },
                { num: '98%', label: 'Satisfaction Rate' },
                { num: '48h', label: 'EU Delivery' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="font-display"
                    style={{ fontSize: '32px', color: '#C9A96E', fontWeight: 300, letterSpacing: '0.04em' }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(240,237,232,0.35)',
                      fontFamily: 'Inter',
                      marginTop: '2px',
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
