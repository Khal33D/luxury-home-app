import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#0A0A0A', borderTop: '1px solid rgba(201,169,110,0.08)' }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-2xl mx-auto px-6 text-center relative">
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
          Stay in the Know
        </p>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 300,
            color: '#F0EDE8',
            letterSpacing: '0.04em',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          New Drops &{' '}
          <em style={{ color: '#C9A96E' }}>Private Access</em>
        </h2>

        <p
          style={{
            fontSize: '14px',
            color: 'rgba(240,237,232,0.45)',
            fontFamily: 'Inter',
            fontWeight: 300,
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          Be the first to discover new collections, exclusive member pricing, and interior inspiration
          curated for the European home.
        </p>

        {submitted ? (
          <div
            style={{
              padding: '20px 32px',
              border: '1px solid rgba(201,169,110,0.3)',
              display: 'inline-block',
            }}
          >
            <p
              className="font-display"
              style={{ fontSize: '20px', color: '#C9A96E', fontWeight: 300, fontStyle: 'italic' }}
            >
              Welcome to Veloria.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', maxWidth: '480px', margin: '0 auto' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{
                flex: 1,
                padding: '14px 20px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,169,110,0.2)',
                borderRight: 'none',
                color: '#F0EDE8',
                fontSize: '13px',
                fontFamily: 'Inter',
                fontWeight: 300,
                outline: 'none',
                letterSpacing: '0.03em',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 20px',
                background: '#C9A96E',
                border: '1px solid #C9A96E',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => ((e.currentTarget).style.background = '#B89855')}
              onMouseLeave={(e) => ((e.currentTarget).style.background = '#C9A96E')}
            >
              <ArrowRight size={16} color="#0A0A0A" />
            </button>
          </form>
        )}

        <p
          style={{
            fontSize: '11px',
            color: 'rgba(240,237,232,0.25)',
            fontFamily: 'Inter',
            marginTop: '16px',
            letterSpacing: '0.05em',
          }}
        >
          No spam. Unsubscribe anytime. GDPR compliant.
        </p>
      </div>
    </section>
  );
}
