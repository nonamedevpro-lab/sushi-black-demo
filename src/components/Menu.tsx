import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Philadelphia Roll',
    description: 'Nori, düyü, krem pendir, xiyar, üzəri salmon',
    price: '14 ₼',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80&auto=format',
  },
  {
    name: 'California Roll',
    description: 'Nori, düyü, yapon mayonezi, xiyar, krab, üzəri kürü',
    price: '14 ₼',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80&auto=format',
  },
  {
    name: 'Mini Set (26 əd)',
    description: 'Philadelphia, California, Hot Krab',
    price: '24 ₼',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80&auto=format',
  },
  {
    name: 'Fuji Set (24 əd)',
    description: 'Special Kani, Black Dragon, Sakana roll',
    price: '47 ₼',
    image: 'https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=600&q=80&auto=format',
  },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-surface rounded-2xl overflow-hidden border border-warm-white/5 hover:border-gold/20 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
        <div className="absolute bottom-4 right-4 bg-gold text-dark px-3 py-1 rounded-full text-sm font-bold">
          {item.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-warm-white mb-2 group-hover:text-gold transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-warm-white/50 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="py-16 md:py-24 pb-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs font-medium tracking-widest uppercase mb-4 block">
            Menyumuz
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Seçilmiş Ləzzətlər
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isTitleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/994708082888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/60 text-[#D4AF37] px-8 py-4 rounded-full hover:bg-[#D4AF37]/10 transition-colors font-semibold text-sm"
          >
            Tam Menyu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
