'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageSkeleton from './ImageSkeleton';

export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.5,
  priority = false,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`parallax-container ${className}`}>
      <motion.div style={{ y }} className="parallax-bg">
        <ImageSkeleton
          src={src}
          alt={alt}
          className="w-full h-full"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
