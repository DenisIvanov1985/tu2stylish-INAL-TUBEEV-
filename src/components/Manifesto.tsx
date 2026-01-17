'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="section-padding bg-[#0E1110]">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.6, 0, 0.2, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8"
          >
            We create iconic architectural and interior spaces that challenge convention and define modern lifestyle.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.6, 0, 0.2, 1] }}
            className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            We transform ideas into bold, functional and visually striking environments — from private residences to large-scale developments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, 0, 0.2, 1] }}
          >
            <Link
              href="#about"
              className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Discover TU2STYLISH
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
