'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    name: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    count: 45,
  },
  {
    name: 'Mixed',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    count: 23,
  },
  {
    name: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    count: 18,
  },
  {
    name: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    count: 31,
  },
  {
    name: 'Public & Urban',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80',
    count: 12,
  },
];

export default function WhatWeCreate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="services" className="section-padding bg-[var(--color-bg-light)]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-[var(--color-muted)] uppercase mb-4">
            What We Create
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-dark)]">
            Our Expertise
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`#projects`}>
                <div className="group relative h-80 overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover loaded"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-light text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/60 tracking-wider">
                      {category.count} Projects
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M7 17L17 7M17 7H7M17 7V17"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="#projects"
            className="inline-block px-8 py-4 border border-[var(--color-text-dark)] text-[var(--color-text-dark)] text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-text-dark)] hover:text-white transition-all duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
