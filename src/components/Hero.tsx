'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const projects = [
  {
    title: 'Mill Basin Marina',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
  },
  {
    title: 'Bosphorus Residence',
    location: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  },
  {
    title: 'Pearl Tower Penthouse',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const locationRef = useRef<HTMLParagraphElement>(null);

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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.6, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            src={projects[currentSlide].image}
            alt={projects[currentSlide].title}
            className="w-full h-full object-cover loaded"
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 text-white text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[#0E1110] transition-all duration-300"
            >
              Explore Project
            </motion.button>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-[2px] transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
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
