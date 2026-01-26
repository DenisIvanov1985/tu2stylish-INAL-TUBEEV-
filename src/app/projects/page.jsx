'use client';

import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { categories } from '@/data/projects';
import ImageSkeleton from '@/components/ImageSkeleton';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ITEMS_PER_PAGE = 6;

function ProjectsContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'all');
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);

  // Fetch projects from Directus API
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setAllProjects(data.projects || []);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all'
    ? allProjects.filter((p) => p.published)
    : allProjects.filter((p) => {
        const categorySlug = p.category?.toLowerCase().replace(/\s+/g, '-');
        return categorySlug === selectedCategory && p.published;
      });

  // Load more projects
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const newProjects = filteredProjects.slice(0, end);

      setDisplayedProjects(newProjects);
      setHasMore(end < filteredProjects.length);
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 300);
  }, [page, filteredProjects, isLoading, hasMore]);

  // Sync with URL parameter
  useEffect(() => {
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  // Reset when category or projects change
  useEffect(() => {
    setPage(1);
    setHasMore(true);
    setDisplayedProjects(filteredProjects.slice(0, ITEMS_PER_PAGE));
    setHasMore(ITEMS_PER_PAGE < filteredProjects.length);
  }, [selectedCategory, allProjects.length]);

  // Infinite scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore, hasMore, isLoading]);

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[var(--color-bg-dark)] pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-sm tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-8">
              Projects
            </h1>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                }`}
              >
                All ({allProjects.filter((p) => p.published).length})
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-5 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 ${
                    selectedCategory === category.slug
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {category.name} ({allProjects.filter((p) => p.category?.toLowerCase().replace(/\s+/g, '-') === category.slug && p.published).length})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <article className="group cursor-pointer">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden mb-6">
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                          <ImageSkeleton
                            src={project.coverImage}
                            alt={project.title}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs tracking-wider uppercase">
                            {project.category}
                          </span>
                        </div>

                        {/* Arrow */}
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl font-light text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50">
                          {project.location} — {project.year}
                        </p>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Loader / End */}
          <div ref={loaderRef} className="mt-16 text-center">
            {isLoading && (
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
            {!hasMore && displayedProjects.length > 0 && (
              <p className="text-white/40 text-sm tracking-wider">All projects loaded</p>
            )}
            {displayedProjects.length === 0 && !isLoading && (
              <p className="text-white/40 text-sm tracking-wider">No projects in this category</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--color-bg-dark)] flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
