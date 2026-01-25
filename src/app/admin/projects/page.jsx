'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects, categories } from '@/data/projects';

export default function AdminProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.categoryId === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl font-light text-white">Projects</h1>
          </div>
          <button className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium tracking-wider uppercase hover:bg-[var(--color-primary-light)] transition-colors">
            + Add Project
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-[var(--color-primary)] focus:outline-none"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white focus:border-[var(--color-primary)] focus:outline-none"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-800 rounded-lg overflow-hidden"
        >
          <table className="w-full">
            <thead className="bg-gray-750">
              <tr>
                <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4">Project</th>
                <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4 hidden md:table-cell">Category</th>
                <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4 hidden lg:table-cell">Location</th>
                <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4">Status</th>
                <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredProjects.map((project, index) => (
                <motion.tr
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-750 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="text-white font-medium">{project.title}</p>
                        <p className="text-gray-500 text-sm md:hidden">{project.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400 hidden md:table-cell">{project.category}</td>
                  <td className="px-6 py-4 text-gray-400 hidden lg:table-cell">{project.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className={`inline-block px-2 py-1 text-xs rounded w-fit ${project.published ? 'bg-green-500/20 text-green-400' : 'bg-gray-600 text-gray-400'}`}>
                        {project.published ? 'Published' : 'Draft'}
                      </span>
                      {project.featured && (
                        <span className="inline-block px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-400 w-fit">
                          Featured
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        target="_blank"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        title="View"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Link>
                      <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors" title="Edit">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 transition-colors" title="Delete">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No projects found
            </div>
          )}
        </motion.div>

        <p className="text-gray-500 text-sm mt-4">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>
    </div>
  );
}
