import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../hooks/useShopify';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ACCUEIL', href: '/' },
    { label: 'ÉCLAIRAGE', href: '/collections/lighting' },
    { label: 'PARFUM', href: '/collections/scent' },
    { label: 'ART MURAL', href: '/collections/wall-art' },
    { label: 'À PROPOS', href: '/about' },
  ];

  return (
    <>
      {/* Announcement bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#1a1a1a] border-b border-[rgba(201,169,110,0.15)]"
      >
        <p className="text-center text-xs tracking-widest text-[#C9A96E] py-2 uppercase font-medium">
          Livraison offerte en europe à partir de 50€
        </p>
      </motion.div>

      {/* Main header */}
      <motion.header
        animate={{
          background: isScrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
        }}
        className="fixed top-12 left-0 right-0 z-40 transition-all"
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-widest text-[rgba(240,237,232,0.6)] hover:text-[#C9A96E] transition-colors uppercase font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl tracking-[0.3em] text-[#C9A96E]"
          >
            VELORIA
            <span className="block text-center text-[9px] tracking-[0.5em] text-[rgba(201,169,110,0.6)] -mt-1 font-medium">
              LIVING
            </span>
          </a>

          {/* Right nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-widest text-[rgba(240,237,232,0.6)] hover:text-[#C9A96E] transition-colors uppercase font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4 border-l border-[rgba(201,169,110,0.1)] pl-4">
              <button className="text-[rgba(240,237,232,0.6)] hover:text-[#C9A96E] transition-colors">
                <Search size={16} />
              </button>
              <motion.a
                href="/cart"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative text-[rgba(240,237,232,0.6)] hover:text-[#C9A96E] transition-colors"
              >
                <ShoppingBag size={16} />
                {cart && cart.totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#C9A96E] text-[#0A0A0A] text-[9px] rounded-full flex items-center justify-center font-bold">
                    {cart.totalQuantity}
                  </span>
                )}
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[rgba(240,237,232,0.7)] hover:text-[#C9A96E]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
        }}
        className="fixed top-32 left-0 right-0 bg-[#0A0A0A] border-b border-[rgba(201,169,110,0.1)] md:hidden z-30"
        pointerEvents={isMobileMenuOpen ? 'auto' : 'none'}
      >
        <nav className="max-w-screen-xl mx-auto px-6 py-8 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm tracking-widest text-[rgba(240,237,232,0.7)] hover:text-[#C9A96E] uppercase font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
