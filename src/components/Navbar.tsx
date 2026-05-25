import { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div
        style={{
          background: '#1a1a1a',
          borderBottom: '1px solid rgba(201,169,110,0.15)',
          padding: '8px 0',
          position: 'relative',
          zIndex: 100,
        }}
      >
        <p
          style={{
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(201,169,110,0.7)',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontWeight: 400,
            margin: 0,
          }}
        >
          LIVRAISON OFFERTE EN EUROPE À PARTIR DE 50€
        </p>
      </div>

      {/* Main nav */}
      <nav
        className="fixed top-10 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(8,8,8,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Left links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#collections" className="nav-link">ACCUEIL</a>
            <a href="#lighting" className="nav-link">ÉCLAIRAGE</a>
            <a href="#scent" className="nav-link">PARFUM D'INTÉRIEUR</a>
          </div>

          {/* Logo */}
          <a
            href="#"
            className="font-display text-2xl tracking-widest absolute left-1/2 transform -translate-x-1/2"
            style={{ color: '#C9A96E', letterSpacing: '0.3em', fontWeight: 300 }}
          >
            VELORIA
            <span className="block text-center" style={{ fontSize: '9px', letterSpacing: '0.5em', color: 'rgba(201,169,110,0.6)', marginTop: '-2px', fontFamily: 'Inter' }}>
              LIVING
            </span>
          </a>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#wall-art" className="nav-link">ART MURAL</a>
            <a href="#products" className="nav-link">GADGETS</a>
            <a href="#about" className="nav-link">À PROPOS</a>
            <div className="flex items-center gap-4 ml-4">
              <button className="text-[rgba(240,237,232,0.6)] hover:text-[#C9A96E] transition-colors duration-300">
                <Search size={16} />
              </button>
              <button className="text-[rgba(240,237,232,0.6)] hover:text-[#C9A96E] transition-colors duration-300">
                <Menu size={16} />
              </button>
              <button className="text-[rgba(240,237,232,0.6)] hover:text-[#C9A96E] transition-colors duration-300 relative">
                <ShoppingBag size={16} />
                <span
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-medium"
                  style={{ background: '#C9A96E', color: '#0A0A0A' }}
                >
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden text-[rgba(240,237,232,0.7)] hover:text-[#C9A96E] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-500 top-10"
        style={{
          background: 'rgba(8,8,8,0.97)',
          backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {['ACCUEIL', 'ÉCLAIRAGE', 'PARFUM', 'ART MURAL', 'GADGETS'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-light tracking-widest"
              style={{ color: 'rgba(240,237,232,0.85)' }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
