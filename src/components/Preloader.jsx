'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);

        // Fade out after reaching 100%
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } else {
        setProgress(currentProgress);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Don't render anything if not loading
  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] bg-[#0E1110] flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-light tracking-[0.5em] text-white uppercase">
              TU2STYLISH
            </h1>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-48 md:w-64 h-[1px] bg-white/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-[var(--color-primary)]"
            />
          </div>

          {/* Progress Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm text-white/40 tracking-widest font-mono"
          >
            {Math.round(Math.min(progress, 100))}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
