'use client';

import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load Spline to reduce initial bundle size
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  ),
});

export default function Spline3D({
  scene = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode',
  className = '',
  fallback = null
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError && fallback) {
    return fallback;
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <Spline
        scene={scene}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </motion.div>
  );
}
