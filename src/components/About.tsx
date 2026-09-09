import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '10+', label: 'il təcrübə' },
  { value: '50+', label: 'menyu növü' },
  { value: '4.9★', label: 'reytinq' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs font-medium tracking-widest uppercase mb-4 block">
              Haqqımızda
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-white mb-6 leading-tight">
              Yapon Sənətinin <br />
              <span className="text-gold italic">Bakıdakı Ünvanı</span>
            </h2>
            <p className="text-warm-white/60 text-base leading-relaxed mb-6">
              2023-cü ildən bəri Bakıda ən yüksək keyfiyyətli yapon mətbəxi təqdim edirik. 
              Hər bir sushi ustamızın əlindən çıxan roll — əsl yapon ənənələrinin müasir 
              interpretasiyasıdır. Ən təzə balıqlar, autentik reseptlər və sənətkarlıqla 
              hazırlanan hər bir ləzzət.
            </p>
            <p className="text-warm-white/60 text-base leading-relaxed mb-10">
              Biz inanırıq ki, sushi sadəcə yemək deyil — bir sənət formasıdır. 
              Hər kəsik, hər büküş, hər dad harmoniyası diqqətlə düşünülür.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="whitespace-nowrap"
                >
                  <div className="font-serif text-3xl font-bold text-gold mb-1">{stat.value}</div>
                  <div className="text-warm-white/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80&auto=format"
                alt="Sushi master at work"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>
            {/* Gold frame offset — non-overlapping, placed behind */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
