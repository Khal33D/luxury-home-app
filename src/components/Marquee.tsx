import { motion } from 'framer-motion';

export function Marquee() {
  const items = [
    'Wireless Precision Lighting',
    '·',
    'AI-Powered Fragrance',
    '·',
    'Minimalist Art Collection',
    '·',
    'Circadian Intelligence',
    '·',
    'Whole Home Integration',
  ];

  const doubled = [...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="overflow-hidden py-4"
      style={{
        background: '#C9A96E',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap mx-6"
            style={{
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: item === '·' ? 'rgba(0,0,0,0.35)' : '#0A0A0A',
              fontFamily: 'Inter',
              fontWeight: 500,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
