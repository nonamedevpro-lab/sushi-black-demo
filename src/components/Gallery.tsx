import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80&auto=format',
    alt: 'Sushi platter',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&q=80&auto=format',
    alt: 'Nigiri selection',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1558985250-27a406d446f5?w=600&q=80&auto=format',
    alt: 'Sushi rolls close-up',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80&auto=format',
    alt: 'Chef preparing sushi',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1562802378-063ec186a8e9?w=600&q=80&auto=format',
    alt: 'Salmon sushi',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80&auto=format',
    alt: 'Sushi set',
    span: 'md:col-span-2',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[200px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all duration-500" />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
