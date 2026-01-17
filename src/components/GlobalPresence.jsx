'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const offices = [
  {
    city: 'New York',
    services: 'Design and Construction',
    timezone: 'America/New_York',
  },
  {
    city: 'Boston',
    services: 'Design and Construction',
    timezone: 'America/New_York',
  },
  {
    city: 'Dubai',
    services: 'Design',
    timezone: 'Asia/Dubai',
  },
  {
    city: 'Istanbul',
    services: 'Design',
    timezone: 'Europe/Istanbul',
  },
  {
    city: 'Guangzhou',
    services: 'Design, Furniture Design',
    timezone: 'Asia/Shanghai',
  },
];

function LocalTime({ timezone }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: timezone,
        hour12: false,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return <span className="font-mono">{time}</span>;
}

export default function GlobalPresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="contact" className="section-padding bg-[var(--color-bg-light)]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-[var(--color-muted)] uppercase mb-4">
            Global Presence
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-dark)]">
            Our Offices
          </h2>
        </motion.div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-8 border border-black/10 hover:border-[var(--color-primary)] hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-light text-[var(--color-text-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                  {office.city}
                </h3>
                <span className="text-sm text-[var(--color-muted)]">
                  <LocalTime timezone={office.timezone} />
                </span>
              </div>
              <p className="text-[var(--color-muted)] text-sm tracking-wider">
                {office.services}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="#contact-form"
            className="inline-block px-8 py-4 bg-[var(--color-primary)] text-white text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Request a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
