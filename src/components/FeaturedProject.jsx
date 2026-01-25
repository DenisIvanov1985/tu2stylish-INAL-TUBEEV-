'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from './MagneticButton';

export default function FeaturedProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="projects" className="relative h-screen overflow-hidden bg-[#0E1110]">
      {/* Background Image with hover zoom */}
      <motion.div
        initial={{ scale: 1.1, opacity: 1 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.6, 0, 0.2, 1] }}
        className="absolute inset-0 transition-transform duration-700 hover:scale-105"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=70&auto=format"
          alt="Featured Project"
          className="w-full h-full object-cover"
          loading="eager"
          style={{ opacity: 1 }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container-custom pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-sm tracking-[0.3em] text-white/60 uppercase mb-4"
              >
                Featured Project
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4"
              >
                Skyline Penthouse
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-white/70 mb-8"
              >
                New York, USA — 2024
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <MagneticButton>
                  <Link
                    href="/projects/mill-basin-marina"
                    className="inline-flex items-center gap-4 px-8 py-4 bg-[var(--color-primary)] text-white text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-primary-light)] transition-colors"
                  >
                    Explore Project
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-light text-white mb-2">850</p>
                  <p className="text-sm text-white/50 tracking-wider">SQ.M</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-white mb-2">12</p>
                  <p className="text-sm text-white/50 tracking-wider">MONTHS</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-white mb-2">5</p>
                  <p className="text-sm text-white/50 tracking-wider">AWARDS</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
