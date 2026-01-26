'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const regions = [
  {
    name: 'United States',
    cities: ['New York', 'Boston', 'Los Angeles', 'Miami'],
    projects: [8, 5, 7, 4],
  },
  {
    name: 'Europe',
    cities: ['London', 'Paris', 'Milan', 'Barcelona'],
    projects: [6, 4, 9, 3],
  },
  {
    name: 'Middle East',
    cities: ['Dubai', 'Abu Dhabi', 'Riyadh', 'Doha'],
    projects: [12, 5, 4, 6],
  },
  {
    name: 'Asia',
    cities: ['Guangzhou', 'Shanghai', 'Tokyo', 'Singapore'],
    projects: [7, 5, 3, 4],
  },
  {
    name: 'Russia',
    cities: ['Moscow', 'St. Petersburg', 'Kazan', 'Sochi'],
    projects: [9, 6, 2, 3],
  },
];

export default function Worldwide() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="min-h-screen bg-[#0E1110] overflow-hidden relative flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/earth_loop_720p.webm" type="video/webm" />
        <source src="/videos/earth_loop_720p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0E1110]/60" />

      <div className="w-full px-[80px] md:px-[120px] relative z-10 py-[80px] text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="menu-text text-[var(--color-muted)] mb-4">
            Worldwide
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Global Reach
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
        >
          {regions.map((region, index) => (
            <button
              key={region.name}
              onClick={() => setActiveTab(index)}
              className={`text-lg md:text-xl font-light tracking-wide transition-all duration-300 pb-2 border-b-2 ${
                activeTab === index
                  ? 'text-white border-[var(--color-primary)]'
                  : 'text-white/40 border-transparent hover:text-white/70'
              }`}
            >
              {region.name}
            </button>
          ))}
        </motion.div>

        {/* Arc Decoration */}
        <div className="relative mb-12 px-[5%]">
          <svg
            className="w-full h-24 md:h-32"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 100 Q 500 0 1000 100"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>

          {/* Degree markers */}
          <div className="absolute top-0 left-[2%] right-[2%] flex justify-between px-8 text-xs text-white/30">
            <span>0°</span>
            <span>45°</span>
            <span>90°</span>
            <span>135°</span>
            <span>180°</span>
          </div>
        </div>

        {/* Cities */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {regions[activeTab].cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-light text-white mb-2">
                  {city}
                </p>
                <p className="text-sm text-white/40 tracking-wider">
                  {regions[activeTab].projects[index]} Projects
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
