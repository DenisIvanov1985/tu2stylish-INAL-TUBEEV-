'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[var(--color-bg-dark)] pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-light text-white mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Last updated: January 2025
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">1. Introduction</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  TU2STYLISH ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">2. Information We Collect</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                  <li>Personal data you voluntarily provide (name, email, phone number)</li>
                  <li>Information about your project requirements</li>
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                  <li>Respond to your inquiries and consultation requests</li>
                  <li>Provide and improve our services</li>
                  <li>Send you updates about our projects and services</li>
                  <li>Analyze website usage to enhance user experience</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">4. Information Sharing</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our website and conducting our business.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">5. Data Security</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">6. Your Rights</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">7. Contact Us</h2>
                <p className="text-white/60 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-white/60 mt-4">
                  <strong className="text-white">Email:</strong> inal@tubeev.com<br />
                  <strong className="text-white">Address:</strong> 89 Third Street, Cambridge, Boston, MA 02141
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
