'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'Projects', href: '/projects', isPage: true },
  { name: 'What We Do', href: '#services' },
  { name: 'About TU2STYLISH', href: '#founder' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBg = isScrolled
    ? 'bg-[#0E1110]/90 backdrop-blur-md'
    : 'bg-transparent';

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On non-homepage, navigate to homepage with anchor
      window.location.href = '/' + href;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="logo-text transition-colors text-white">
              TU2STYLISH
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                item.isPage ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="link-hover menu-text transition-colors hover:opacity-100 text-white/80 hover:text-white cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="link-hover menu-text transition-colors hover:opacity-100 text-white/80 hover:text-white cursor-pointer"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="px-6 py-3 bg-[var(--color-primary)] text-white menu-text hover:bg-[var(--color-primary-light)] transition-colors cursor-pointer"
              >
                Request a Consultation
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-4 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[1px] block bg-white"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-[1px] block bg-white"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[1px] block bg-white"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#0E1110]"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center gap-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.isPage ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-light tracking-wider hover:text-[var(--color-primary)] transition-colors text-white cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleClick(e, item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-3xl font-light tracking-wider hover:text-[var(--color-primary)] transition-colors text-white cursor-pointer"
                      >
                        {item.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="mt-8"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      handleClick(e, '#contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-8 py-4 bg-[var(--color-primary)] text-white menu-text cursor-pointer"
                  >
                    Request a Consultation
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
