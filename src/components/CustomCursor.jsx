'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add hover detection for interactive elements
    const handleElementHover = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Setup hover detection after a short delay to ensure DOM is ready
    setTimeout(handleElementHover, 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, isVisible]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 8),
          y: mousePosition.y - (isHovering ? 24 : 8),
          scale: isHovering ? 1 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ${
            isHovering ? 'w-12 h-12 opacity-50' : 'w-4 h-4 opacity-100'
          }`}
        />
      </motion.div>

      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          opacity: isVisible && !isHovering ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 28,
        }}
      >
        <div className="w-1 h-1 rounded-full bg-[var(--color-primary)]" />
      </motion.div>

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
