import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80&auto=format"
          alt="Premium sushi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block px-4 py-1.5 border border-gold/40 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-8">
            Premium Yapon Mətbəxi
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-warm-white mb-6 tracking-tight"
        >
          Sushi Black
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-warm-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bakının mərkəzində ən təzə balıqla hazırlanan autentik sushi təcrübəsi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#c9a227] transition-colors min-h-[48px]"
          >
            Menyuya Bax
          </a>
          <a
            href="https://wa.me/994708082888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/60 text-[#D4AF37] px-8 py-4 rounded-full hover:bg-[#D4AF37]/10 transition-colors min-h-[48px]"
          >
            WhatsApp Sifariş
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-warm-white/40 text-xs tracking-widest uppercase">Aşağı</span>
          <ChevronDown className="text-gold/60" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
