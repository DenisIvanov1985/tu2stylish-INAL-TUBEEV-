'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function GlobalPresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Residential',
    'Commercial',
    'Hospitality',
    'Mixed Use',
    'Public & Urban',
    'Other',
  ];

  return (
    <section ref={ref} id="contact" className="section-padding bg-[var(--color-bg-dark)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="menu-text text-[var(--color-accent)] mb-4">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Start Your Project
            </h2>
            <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
              Ready to transform your space? Share your vision with us and let's create
              something extraordinary together. Our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[var(--color-primary)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-light">Email</p>
                  <p className="text-[var(--color-muted)] text-sm">inal@tubeev.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[var(--color-primary)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-light">Phone</p>
                  <p className="text-[var(--color-muted)] text-sm">+1 (813) 344-7878</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 border border-[var(--color-primary)] bg-[var(--color-primary)]/5"
              >
                <div className="w-16 h-16 border-2 border-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-white mb-4">Thank You!</h3>
                <p className="text-[var(--color-muted)]">
                  Your request has been submitted successfully. We'll be in touch soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-[var(--color-primary)] text-sm tracking-wider uppercase hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm text-[var(--color-muted)] mb-2 tracking-wider uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm text-[var(--color-muted)] mb-2 tracking-wider uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Project Type Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm text-[var(--color-muted)] mb-2 tracking-wider uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 focus:border-[var(--color-primary)] focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="projectType" className="block text-sm text-[var(--color-muted)] mb-2 tracking-wider uppercase">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      aria-label="Select project type"
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[var(--color-primary)] focus:outline-none transition-colors cursor-pointer appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888888'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center', backgroundSize: '24px' }}
                    >
                      <option value="" className="bg-[var(--color-bg-dark)]">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[var(--color-bg-dark)]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm text-[var(--color-muted)] mb-2 tracking-wider uppercase">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-white/30 focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none"
                    placeholder="Describe your vision, requirements, timeline..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 py-4 bg-[var(--color-primary)] text-white menu-text hover:bg-[var(--color-primary-light)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </motion.button>

                {error && (
                  <p className="text-center text-red-400 text-sm mt-4">
                    {error}
                  </p>
                )}

                <p className="text-center text-[var(--color-muted)] text-xs mt-4">
                  By submitting, you agree to our privacy policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
