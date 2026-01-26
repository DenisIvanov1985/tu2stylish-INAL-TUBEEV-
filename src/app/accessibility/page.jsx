'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AccessibilityPage() {
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
              Accessibility Statement
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Last updated: January 2025
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">Our Commitment</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  TU2STYLISH is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">Conformance Status</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible for people with disabilities.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">Accessibility Features</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Our website includes the following accessibility features:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                  <li>Keyboard navigation support throughout the site</li>
                  <li>Alternative text for images</li>
                  <li>Sufficient color contrast ratios</li>
                  <li>Resizable text without loss of functionality</li>
                  <li>Clear and consistent navigation</li>
                  <li>Descriptive link text</li>
                  <li>Form labels and error messages</li>
                  <li>Skip navigation links</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">Assistive Technologies</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  Our website is designed to be compatible with the following assistive technologies:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                  <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                  <li>Screen magnification software</li>
                  <li>Speech recognition software</li>
                  <li>Keyboard-only navigation</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">Known Limitations</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  While we strive to ensure accessibility, there may be some limitations:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                  <li>Some older PDF documents may not be fully accessible</li>
                  <li>Some third-party content may not meet accessibility standards</li>
                  <li>Interactive 3D elements may have limited accessibility</li>
                </ul>
                <p className="text-white/60 leading-relaxed mt-4">
                  We are actively working to address these issues.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">Feedback</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers, please let us know:
                </p>
                <ul className="list-none text-white/60 space-y-2">
                  <li><strong className="text-white">Email:</strong> inal@tubeev.com</li>
                  <li><strong className="text-white">Phone:</strong> +1 (813) 344-7878</li>
                  <li><strong className="text-white">Address:</strong> 89 Third Street, Cambridge, Boston, MA 02141</li>
                </ul>
                <p className="text-white/60 leading-relaxed mt-4">
                  We try to respond to accessibility feedback within 5 business days.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">Continuous Improvement</h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  We are committed to ongoing accessibility improvements. Our efforts include:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                  <li>Regular accessibility audits</li>
                  <li>Staff training on accessibility best practices</li>
                  <li>User testing with people who have disabilities</li>
                  <li>Integration of accessibility into our design process</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-light text-white mb-4">Assessment Approach</h2>
                <p className="text-white/60 leading-relaxed">
                  TU2STYLISH assessed the accessibility of this website using the following approaches:
                </p>
                <ul className="list-disc list-inside text-white/60 space-y-2 ml-4 mt-4">
                  <li>Self-evaluation</li>
                  <li>Automated testing tools</li>
                  <li>Manual testing with assistive technologies</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
