import { motion } from 'framer-motion';
import { Truck, Shield, RefreshCw, Award } from 'lucide-react';

const perks = [
  { icon: Truck, title: 'Free EU Shipping', desc: 'On all orders over €50' },
  { icon: Shield, title: 'Secure Payments', desc: 'SSL encrypted checkout' },
  { icon: RefreshCw, title: '30-Day Returns', desc: 'Hassle-free policy' },
  { icon: Award, title: 'Premium Quality', desc: 'Curated & quality-tested' },
];

export function TrustBar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        background: '#0D0D0A',
        borderTop: '1px solid rgba(201,169,110,0.1)',
        borderBottom: '1px solid rgba(201,169,110,0.1)',
        padding: '36px 0',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {perks.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '10px' }}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                style={{
                  width: '40px',
                  height: '40px',
                  border: '1px solid rgba(201,169,110,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={16} color="#C9A96E" />
              </motion.div>
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#F0EDE8',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    marginBottom: '3px',
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(240,237,232,0.4)',
                    fontFamily: 'Inter',
                    fontWeight: 300,
                  }}
                >
                  {desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
