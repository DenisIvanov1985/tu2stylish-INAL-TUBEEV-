'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-white/40 text-sm">Loading 3D Experience...</p>
      </div>
    </div>
  ),
});

export default function Spline3DSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative h-screen bg-[#0E1110] overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        {isInView && (
          <Spline
            scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          />
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container-custom h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-xl"
          >
            <p className="text-sm tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
              Innovation
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Where Vision Meets Reality
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We leverage cutting-edge technology and 3D visualization to bring your architectural dreams to life before construction begins.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0E1110] via-[#0E1110]/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E1110] to-transparent pointer-events-none" />
    </section>
  );
}
