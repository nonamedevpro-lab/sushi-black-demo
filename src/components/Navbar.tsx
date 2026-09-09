import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menyu', href: '#menu' },
  { label: 'Qalereya', href: '#gallery' },
  { label: 'Əlaqə', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-bold text-warm-white tracking-wide group-hover:text-gold transition-colors duration-300">
              SUSHI BLACK
            </span>
            <span className="text-2xl">⛩</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-warm-white/70 hover:text-gold text-sm font-medium tracking-wide uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/994708082888"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-dark px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Sifariş Ver
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-warm-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-gold/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-warm-white/80 hover:text-gold text-base font-medium tracking-wide transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/994708082888"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gold text-dark px-6 py-3 rounded-full text-sm font-semibold hover:bg-gold-light transition-all duration-300"
              >
                Sifariş Ver
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
