import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#050505',
        borderTop: '1px solid rgba(201,169,110,0.1)',
        paddingTop: '64px',
        paddingBottom: '40px',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div
              className="font-display mb-4"
              style={{ fontSize: '22px', color: '#C9A96E', letterSpacing: '0.3em', fontWeight: 300 }}
            >
              VELORIA
              <span
                className="block"
                style={{ fontSize: '9px', letterSpacing: '0.5em', color: 'rgba(201,169,110,0.5)', marginTop: '-2px', fontFamily: 'Inter' }}
              >
                LIVING
              </span>
            </div>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(240,237,232,0.4)',
                fontFamily: 'Inter',
                fontWeight: 300,
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              Elevating European homes with ambient lighting, intelligent fragrance, and minimalist art.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: '34px',
                    height: '34px',
                    border: '1px solid rgba(201,169,110,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(201,169,110,0.5)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget).style.borderColor = 'rgba(201,169,110,0.6)';
                    (e.currentTarget).style.color = '#C9A96E';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget).style.borderColor = 'rgba(201,169,110,0.2)';
                    (e.currentTarget).style.color = 'rgba(201,169,110,0.5)';
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h5
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#F0EDE8',
                fontFamily: 'Inter',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Shop
            </h5>
            {['Ambient Lighting', 'Air Perfumes', 'Wall Art', 'Canvas Prints', 'New Arrivals', 'Sale'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: 'rgba(240,237,232,0.4)',
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  marginBottom: '10px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C9A96E')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,237,232,0.4)')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Info */}
          <div>
            <h5
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#F0EDE8',
                fontFamily: 'Inter',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Information
            </h5>
            {['About Us', 'Shipping & Returns', 'Privacy Policy', 'Terms of Service', 'Sustainability', 'Press'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: 'rgba(240,237,232,0.4)',
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  marginBottom: '10px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C9A96E')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,237,232,0.4)')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h5
              style={{
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#F0EDE8',
                fontFamily: 'Inter',
                fontWeight: 500,
                marginBottom: '20px',
              }}
            >
              Contact
            </h5>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(240,237,232,0.4)',
                fontFamily: 'Inter',
                fontWeight: 300,
                lineHeight: 1.7,
                marginBottom: '12px',
              }}
            >
              hello@velorivaliving.com
            </p>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(240,237,232,0.4)',
                fontFamily: 'Inter',
                fontWeight: 300,
                lineHeight: 1.7,
                marginBottom: '12px',
              }}
            >
              Mon–Fri, 9:00–18:00 CET
            </p>
            <div
              style={{
                marginTop: '16px',
                padding: '12px 16px',
                border: '1px solid rgba(201,169,110,0.15)',
                background: 'rgba(201,169,110,0.04)',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  color: 'rgba(201,169,110,0.6)',
                  fontFamily: 'Inter',
                  letterSpacing: '0.05em',
                  lineHeight: 1.5,
                }}
              >
                Free EU shipping on orders over €80. Delivered within 48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontSize: '11px',
              color: 'rgba(240,237,232,0.25)',
              fontFamily: 'Inter',
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
          >
            © 2024 Veloria Living. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Visa', 'Mastercard', 'PayPal', 'Klarna'].map((method) => (
              <span
                key={method}
                style={{
                  fontSize: '10px',
                  color: 'rgba(240,237,232,0.25)',
                  fontFamily: 'Inter',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(240,237,232,0.1)',
                  padding: '3px 8px',
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
