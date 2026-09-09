export default function Footer() {
  const navLinks = [
    { label: 'Menyu', href: '#menu' },
    { label: 'Qalereya', href: '#gallery' },
    { label: 'Əlaqə', href: '#contact' },
  ];

  return (
    <footer className="bg-surface border-t border-warm-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-warm-white tracking-wide">
              SUSHI BLACK
            </span>
            <span className="text-xl">⛩</span>
          </a>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-warm-white/50 hover:text-gold text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-warm-white/30 text-sm">
            © 2026 Sushi Black. Bütün hüquqlar qorunur.
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-warm-white/5 text-center">
          <p className="text-warm-white/20 text-xs tracking-wider">
            DEV.!Z
          </p>
        </div>
      </div>
    </footer>
  );
}
