'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ImageSkeleton from '@/components/ImageSkeleton';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MagneticButton from '@/components/MagneticButton';

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        const allProjects = data.projects || [];

        // Find project by slug
        const foundProject = allProjects.find((p) => p.slug === slug);
        setProject(foundProject || null);

        // Get related projects
        if (foundProject) {
          const related = allProjects
            .filter((p) => p.categoryId === foundProject.categoryId && p.id !== foundProject.id && p.published)
            .slice(0, 3);
          setRelatedProjects(related);
        }
      } catch (error) {
        console.error('Failed to fetch project:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProject();
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-[var(--color-bg-dark)] pt-32 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-[var(--color-bg-dark)] pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-light text-white mb-4">Project Not Found</h1>
            <Link href="/projects" className="text-[var(--color-primary)] hover:underline">
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main className="bg-[var(--color-bg-dark)] relative pt-32">
        {/* Header */}
        <section className="pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>

              <span className="inline-block px-3 py-1.5 bg-[var(--color-primary)] text-white text-xs tracking-wider uppercase mb-4">
                {project.category}
              </span>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-white/60">
                {project.location} — {project.year}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 relative z-20 bg-[var(--color-bg-dark)]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <h2 className="text-2xl font-light text-white mb-6">About the Project</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-8">
                    {project.area && (
                      <div>
                        <p className="text-3xl font-light text-white mb-1">{project.area}</p>
                        <p className="text-sm text-white/50 tracking-wider uppercase">Area</p>
                      </div>
                    )}
                    {project.duration && (
                      <div>
                        <p className="text-3xl font-light text-white mb-1">{project.duration}</p>
                        <p className="text-sm text-white/50 tracking-wider uppercase">Months</p>
                      </div>
                    )}
                    {project.awards > 0 && (
                      <div>
                        <p className="text-3xl font-light text-white mb-1">{project.awards}</p>
                        <p className="text-sm text-white/50 tracking-wider uppercase">Awards</p>
                      </div>
                    )}
                    {project.year && (
                      <div>
                        <p className="text-3xl font-light text-white mb-1">{project.year}</p>
                        <p className="text-sm text-white/50 tracking-wider uppercase">Year</p>
                      </div>
                    )}
                  </div>
                </div>

                <MagneticButton>
                  <Link
                    href="#contact"
                    className="block w-full py-4 bg-[var(--color-primary)] text-white text-center text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-primary-light)] transition-colors"
                  >
                    Start Similar Project
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.images.length > 0 && (
          <section className="py-20 bg-[var(--color-bg-section)] relative z-20">
            <div className="container-custom">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-light text-white mb-12"
              >
                Gallery
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`cursor-pointer ${index === 0 ? 'md:col-span-2' : ''}`}
                    onClick={() => {
                      setSelectedImage(index);
                      setIsLightboxOpen(true);
                    }}
                  >
                    <div className="relative overflow-hidden group">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-20">
            <div className="container-custom">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-light text-white mb-12"
              >
                Related Projects
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={`/projects/${relatedProject.slug}`}>
                      <article className="group">
                        <div className="relative aspect-[4/3] overflow-hidden mb-4">
                          <ImageSkeleton
                            src={relatedProject.coverImage}
                            alt={relatedProject.title}
                            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        </div>
                        <h3 className="text-lg font-light text-white group-hover:text-[var(--color-primary)] transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-white/50">{relatedProject.location}</p>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={() => setIsLightboxOpen(false)}
            >
              <button
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white"
                onClick={() => setIsLightboxOpen(false)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
                }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
                }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={project.images[selectedImage]}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                className="max-w-[90vw] max-h-[85vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
                {selectedImage + 1} / {project.images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
