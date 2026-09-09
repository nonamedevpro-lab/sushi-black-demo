import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Decorative top line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12"
          />

          <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold italic leading-tight mb-8">
            &ldquo;Hər roll bir sənət əsəridir&rdquo;
          </blockquote>

          {/* Decorative bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-warm-white/40 text-sm mt-8 tracking-widest uppercase"
          >
            Sushi Black — Bakı
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
