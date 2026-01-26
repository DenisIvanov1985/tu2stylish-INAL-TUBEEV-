'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';
import MagneticButton from './MagneticButton';

const projects = [
  {
    title: 'Mill Basin Marina',
    location: 'New York, USA',
    slug: 'mill-basin-marina',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=70&auto=format',
  },
  {
    title: 'Bosphorus Residence',
    location: 'Istanbul, Turkey',
    slug: 'bosphorus-residence',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=70&auto=format',
  },
  {
    title: 'Pearl Tower Penthouse',
    location: 'Dubai, UAE',
    slug: 'pearl-tower-penthouse',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=70&auto=format',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (titleRef.current && locationRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        locationRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      );
    }
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0E1110]">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          exit={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.6, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            src={projects[currentSlide].image}
            alt={projects[currentSlide].title}
            className="w-full h-full object-cover"
            loading="eager"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 tracking-tight"
            >
              {projects[currentSlide].title}
            </h1>
            <p
              ref={locationRef}
              className="text-lg md:text-xl text-white/70 tracking-wider mb-8"
            >
              {projects[currentSlide].location}
            </p>
            <MagneticButton>
              <Link href={`/projects/${projects[currentSlide].slug}`}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 border border-white/30 text-white menu-text hover:bg-white hover:text-[#0E1110] transition-all duration-300"
                >
                  Explore Project
                </motion.span>
              </Link>
            </MagneticButton>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-[2px] transition-all duration-500 ${
                  index === currentSlide ? 'bg-white w-16' : 'bg-white/30 w-8 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
