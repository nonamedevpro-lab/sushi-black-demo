import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sushi platter',
  },
  {
    src: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1200&q=80',
    alt: 'Nigiri selection',
  },
  {
    src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sushi rolls close-up',
  },
  {
    src: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=80',
    alt: 'Chef preparing sushi',
  },
  {
    src: 'https://images.unsplash.com/photo-1562802378-063ec186a8e9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Salmon sushi',
  },
  {
    src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sushi set',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-24 bg-surface">
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
            Qalereya
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-white mb-4">
            Vizual Ziyafət
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
