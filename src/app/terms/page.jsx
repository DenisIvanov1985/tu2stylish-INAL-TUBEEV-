'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
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
              Terms of Use
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Last updated: January 2025
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  By accessing and using the TU2STYLISH website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">2. Use of Website</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  You may use our website for lawful purposes only. You agree not to:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                  <li>Use the website in any way that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Use the website to transmit harmful or malicious content</li>
                  <li>Interfere with the proper functioning of the website</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">3. Intellectual Property</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of TU2STYLISH and is protected by copyright and other intellectual property laws.
                </p>
                <p className="text-white/60 leading-relaxed">
                  You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">4. Project Images</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  The architectural and interior design images displayed on our website represent our portfolio of work. These images are protected by copyright and may not be used without permission.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">5. Disclaimer</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  TU2STYLISH shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">7. Links to Third-Party Websites</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">8. Changes to Terms</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">9. Governing Law</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  These Terms of Use shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">10. Contact Information</h2>
                <p className="text-white/60 leading-relaxed">
                  For questions about these Terms of Use, please contact us at:
                </p>
                <p className="text-white/60 mt-4">
                  <strong className="text-white">Email:</strong> legal@tu2stylish.com<br />
                  <strong className="text-white">Address:</strong> 123 Design Street, New York, NY 10001
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
