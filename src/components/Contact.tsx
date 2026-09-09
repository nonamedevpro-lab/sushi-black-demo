import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Clock, MapPin, Instagram, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+994 70 808 28 88',
    href: 'tel:+994708082888',
  },
  {
    icon: Clock,
    label: 'İş saatları',
    value: '11:00 – 01:00',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Ünvan',
    value: 'Bakı, Azərbaycan',
    href: null,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@sushi_black_baku',
    href: 'https://instagram.com/sushi_black_baku',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs font-medium tracking-widest uppercase mb-4 block">
            Əlaqə
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Bizimlə Əlaqə
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <item.icon size={20} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-warm-white/40 text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-warm-white text-lg font-medium hover:text-gold transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-warm-white text-lg font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-[#141414]">
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <MessageCircle size={28} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-warm-white mb-3">
                Sifariş Ver
              </h3>
              <p className="text-warm-white/50 mb-8 leading-relaxed">
                WhatsApp üzərindən birbaşa sifariş verin. 
                Komandamız sizə ən qısa zamanda cavab verəcək.
              </p>
              <a
                href="https://wa.me/994708082888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#c9a227] transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp ilə Sifariş Ver
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
