'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutFounder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="founder" className="relative bg-[#CCCBC9] overflow-hidden">
      <div className="container-custom py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.6, 0, 0.2, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden max-w-md mx-auto lg:max-w-none">
              <img
                src="/images/inal-tubeev.jpg"
                alt="Inal Tubeev - Founder & Designer"
                className="w-full h-auto object-cover"
                style={{ opacity: 1 }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.6, 0, 0.2, 1], delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm tracking-[0.3em] text-[var(--color-primary)] uppercase mb-4"
            >
              Founder & Creative Director
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] mb-6 tracking-tight"
            >
              Inal Tubeev
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-16 h-[1px] bg-[var(--color-primary)] mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base text-[#3a3a3a] leading-relaxed mb-5"
            >
              A designer and entrepreneur with over 15 years of experience in interior design,
              furniture production, and the creation of complex, turnkey spaces for residential
              and commercial projects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-base text-[#3a3a3a] leading-relaxed mb-5"
            >
              My core expertise lies at the intersection of design and real production.
              I work with furniture that can actually be manufactured, scaled, and delivered —
              from concept and sketches to factory processes, materials, cost control, and final installation.
              My portfolio includes residential interiors, restaurants, hotels, beauty spaces, and custom furniture:
              casegoods, upholstered pieces, metal furniture, lighting, and bespoke interior objects.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base text-[#3a3a3a] leading-relaxed mb-5"
            >
              Having founded and managed furniture factories and design studios, I understand the full lifecycle
              of a project. I think not only as a designer, but also as a producer — considering technology,
              durability, timelines, and budget from the very beginning. This approach allows my projects to
              move beyond visual concepts and become functional, long-lasting environments.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="text-base text-[#3a3a3a] leading-relaxed mb-5"
            >
              In addition to design and production, I have a strong background in marketing strategy.
              With formal education in marketing and years of executive experience, I approach design as a business tool.
              I create interiors and furniture that strengthen brand identity, enhance customer experience,
              and add measurable value to businesses, especially in the HoReCa and commercial sectors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-5"
            >
              <p className="text-base text-[#3a3a3a] leading-relaxed mb-3">
                My work is based on a synthesis of:
              </p>
              <ul className="list-disc list-inside text-base text-[#3a3a3a] leading-relaxed space-y-1 pl-4">
                <li>design thinking</li>
                <li>furniture manufacturing expertise</li>
                <li>marketing and brand strategy</li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="text-base text-[#3a3a3a] leading-relaxed"
            >
              I believe that strong design should be beautiful, buildable, and meaningful — both aesthetically and commercially.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
