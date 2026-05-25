import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'lighting',
    title: 'Ambient Lighting',
    subtitle: 'Wireless & Smart',
    desc: 'Sculptural light that transforms any room into a living atmosphere. No wires. Pure ambiance.',
    tag: 'Best Seller',
    img: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '#lighting',
    accent: '#C9A96E',
  },
  {
    id: 'scent',
    title: 'Air Perfume',
    subtitle: 'Intelligent Diffusers',
    desc: 'Fill your space with curated European fragrances. Smart diffusers with whisper-quiet technology.',
    tag: 'New Arrival',
    img: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '#scent',
    accent: '#B8A090',
  },
  {
    id: 'wall-art',
    title: 'Wall Art & Canvas',
    subtitle: 'Minimalist Editions',
    desc: 'Exclusive minimalist art prints and canvas editions. Each piece is a statement of refined taste.',
    tag: 'Limited',
    img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '#wall-art',
    accent: '#A09080',
  },
];

export function FeaturedCollection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id="collections"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-28"
      style={{ background: '#080808' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
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
            Curated For Your Space
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 300,
              color: '#F0EDE8',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            The Veloria Collections
          </h2>
          <div className="gold-divider mt-6 mx-auto" style={{ maxWidth: '120px' }} />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              variants={itemVariants}
              href={cat.href}
              className="product-card group block"
              whileHover={{ y: -8 }}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#111',
                  border: '1px solid rgba(201,169,110,0.1)',
                }}
              >
                {/* Image */}
                <motion.div style={{ height: i === 0 ? '420px' : '340px', overflow: 'hidden' }}>
                  <motion.img
                    src={cat.img}
                    alt={cat.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.75) saturate(0.9)',
                    }}
                  />
                </motion.div>

                {/* Overlay gradient */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '70%',
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  }}
                />

                {/* Tag */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: cat.accent,
                    color: '#0A0A0A',
                    fontSize: '9px',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    padding: '4px 10px',
                  }}
                >
                  {cat.tag}
                </motion.div>

                {/* Content */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: 'rgba(201,169,110,0.7)',
                      fontFamily: 'Inter',
                      marginBottom: '6px',
                    }}
                  >
                    {cat.subtitle}
                  </p>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '24px',
                      fontWeight: 400,
                      color: '#F0EDE8',
                      letterSpacing: '0.04em',
                      marginBottom: '8px',
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'rgba(240,237,232,0.55)',
                      lineHeight: 1.6,
                      fontFamily: 'Inter',
                      fontWeight: 300,
                      marginBottom: '16px',
                    }}
                  >
                    {cat.desc}
                  </p>
                  <motion.div
                    whileHover={{ gap: '12px' }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#C9A96E',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      fontFamily: 'Inter',
                      transition: 'gap 0.3s ease',
                    }}
                  >
                    <span>Shop Now</span>
                    <ArrowRight size={14} />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
