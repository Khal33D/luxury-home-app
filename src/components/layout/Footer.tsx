import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const links = {
    shop: [
      { label: 'Ambient Lighting', href: '#' },
      { label: 'Air Perfumes', href: '#' },
      { label: 'Wall Art', href: '#' },
      { label: 'New Arrivals', href: '#' },
      { label: 'Sale', href: '#' },
    ],
    info: [
      { label: 'About Us', href: '#' },
      { label: 'Shipping & Returns', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
    social: [
      { icon: Instagram, href: '#' },
      { icon: Twitter, href: '#' },
    ],
  };

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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-[#050505] border-t border-[rgba(201,169,110,0.1)]"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="font-display text-xl text-[#C9A96E] tracking-[0.2em] mb-4">
              VELORIA
            </h3>
            <p className="text-sm text-[rgba(240,237,232,0.4)] leading-relaxed mb-4">
              Elevating European homes with ambient lighting, intelligent fragrance, and minimalist art.
            </p>
            <div className="flex gap-3">
              {links.social.map(({ icon: Icon }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-9 h-9 border border-[rgba(201,169,110,0.2)] flex items-center justify-center text-[rgba(201,169,110,0.5)] hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs tracking-[0.25em] text-white mb-6 uppercase font-medium">
              Shop
            </h4>
            <nav className="space-y-2">
              {links.shop.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[rgba(240,237,232,0.4)] hover:text-[#C9A96E] transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs tracking-[0.25em] text-white mb-6 uppercase font-medium">
              Information
            </h4>
            <nav className="space-y-2">
              {links.info.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[rgba(240,237,232,0.4)] hover:text-[#C9A96E] transition-colors block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs tracking-[0.25em] text-white mb-6 uppercase font-medium">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-[rgba(240,237,232,0.4)]">
              <p>hello@velorivaliving.com</p>
              <p>Mon–Fri, 9:00–18:00 CET</p>
              <div className="pt-4 border-t border-[rgba(201,169,110,0.1)] mt-4 text-xs">
                <p className="text-[rgba(201,169,110,0.6)]">
                  Free EU shipping on orders over €50. Delivered within 48 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent mb-8" />

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[rgba(240,237,232,0.25)]"
        >
          <p>© 2024 Veloria Living. All rights reserved.</p>
          <div className="flex gap-4">
            {['Visa', 'Mastercard', 'PayPal', 'Klarna'].map((method) => (
              <span
                key={method}
                className="border border-[rgba(240,237,232,0.1)] px-2 py-1 text-[9px] uppercase tracking-wider"
              >
                {method}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
