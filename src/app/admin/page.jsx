'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects, categories } from '@/data/projects';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Simple password protection (replace with proper auth in production)
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'tu2admin') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light text-white tracking-wider">TU2STYLISH</h1>
            <p className="text-gray-500 mt-2">Admin Panel</p>
          </div>

          <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg">
            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 text-white focus:border-[var(--color-primary)] focus:outline-none"
                placeholder="Enter password"
              />
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[var(--color-primary)] text-white font-medium tracking-wider uppercase hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-600 text-xs mt-4">
            Demo password: tu2admin
          </p>
        </motion.div>
      </div>
    );
  }

  // Stats
  const totalProjects = projects.length;
  const publishedProjects = projects.filter((p) => p.published).length;
  const featuredProjects = projects.filter((p) => p.featured).length;

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-light text-white tracking-wider">TU2STYLISH</h1>
            <span className="text-gray-500 text-sm">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
              View Site
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <p className="text-3xl font-light text-white">{totalProjects}</p>
            <p className="text-gray-500 text-sm mt-1">Total Projects</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <p className="text-3xl font-light text-green-400">{publishedProjects}</p>
            <p className="text-gray-500 text-sm mt-1">Published</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <p className="text-3xl font-light text-yellow-400">{featuredProjects}</p>
            <p className="text-gray-500 text-sm mt-1">Featured</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <p className="text-3xl font-light text-blue-400">{categories.length}</p>
            <p className="text-gray-500 text-sm mt-1">Categories</p>
          </motion.div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/projects">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 bg-[var(--color-primary)]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                Projects
              </h3>
              <p className="text-gray-500 text-sm">Manage projects, add new work, update details</p>
            </motion.div>
          </Link>

          <Link href="/admin/requests">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-light text-white mb-2 group-hover:text-blue-400 transition-colors">
                Requests
              </h3>
              <p className="text-gray-500 text-sm">View contact form submissions</p>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gray-800 p-8 rounded-lg opacity-50"
          >
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-light text-gray-400 mb-2">Settings</h3>
            <p className="text-gray-600 text-sm">Coming soon...</p>
          </motion.div>
        </div>

        {/* Recent Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-lg font-light text-white mb-6">Recent Projects</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-750">
                <tr>
                  <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4">Project</th>
                  <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4">Category</th>
                  <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4">Status</th>
                  <th className="text-left text-gray-400 text-xs font-medium uppercase tracking-wider px-6 py-4">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {projects.slice(0, 5).map((project) => (
                  <tr key={project.id} className="hover:bg-gray-750 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <span className="text-white">{project.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{project.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded ${project.published ? 'bg-green-500/20 text-green-400' : 'bg-gray-600 text-gray-400'}`}>
                        {project.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{project.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
