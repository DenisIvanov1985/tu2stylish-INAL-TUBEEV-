'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import ImageSkeleton from './ImageSkeleton';
import MagneticButton from './MagneticButton';

const categories = [
  {
    name: 'Residential',
    slug: 'residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=70&auto=format',
  },
  {
    name: 'Commercial',
    slug: 'commercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70&auto=format',
  },
  {
    name: 'Hospitality',
    slug: 'hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=70&auto=format',
  },
  {
    name: 'Furniture',
    slug: 'furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=70&auto=format',
  },
  {
    name: 'Turnkey Projects',
    slug: 'turnkey-projects',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=70&auto=format',
  },
  {
    name: 'Concepts',
    slug: 'concepts',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70&auto=format',
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
          <p className="menu-text text-[var(--color-muted)] mb-4">
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
              <Link href={`/projects?category=${category.slug}`}>
                <div className="group relative h-80 overflow-hidden cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    <ImageSkeleton
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full"
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
                      View Projects
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
          <MagneticButton>
            <Link
              href="/projects"
              className="inline-block px-8 py-4 border border-[var(--color-text-dark)] text-[var(--color-text-dark)] menu-text hover:bg-[var(--color-text-dark)] hover:text-white transition-all duration-300"
            >
              View All Projects
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
