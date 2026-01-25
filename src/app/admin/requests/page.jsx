'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Mock requests data (will be replaced with database)
const mockRequests = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 555-123-4567',
    projectType: 'Residential',
    message: 'We are looking to renovate our home in Manhattan. The project involves a complete interior redesign of approximately 2,500 sq ft.',
    status: 'NEW',
    createdAt: '2025-01-25T10:30:00Z',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@company.com',
    phone: '+1 555-987-6543',
    projectType: 'Commercial',
    message: 'Our company is planning to build a new office space. We need architectural design services for a 50,000 sq ft building.',
    status: 'IN_PROGRESS',
    createdAt: '2025-01-24T14:15:00Z',
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael@gmail.com',
    phone: '',
    projectType: 'Hospitality',
    message: 'Interested in discussing a boutique hotel project in Miami Beach area.',
    status: 'COMPLETED',
    createdAt: '2025-01-23T09:00:00Z',
  },
];

const statusColors = {
  NEW: 'bg-blue-500/20 text-blue-400',
  IN_PROGRESS: 'bg-yellow-500/20 text-yellow-400',
  COMPLETED: 'bg-green-500/20 text-green-400',
  CANCELLED: 'bg-red-500/20 text-red-400',
};

const statusLabels = {
  NEW: 'New',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};

export default function AdminRequests() {
  const [requests] = useState(mockRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredRequests = filterStatus === 'all'
    ? requests
    : requests.filter((r) => r.status === filterStatus);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

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
            <h1 className="text-xl font-light text-white">Requests</h1>
          </div>
          <div className="text-gray-400 text-sm">
            {requests.filter((r) => r.status === 'NEW').length} new
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {['all', 'NEW', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 text-sm tracking-wider uppercase whitespace-nowrap transition-all ${
                filterStatus === status
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'border border-gray-700 text-gray-400 hover:border-gray-500'
              }`}
            >
              {status === 'all' ? 'All' : statusLabels[status]}
              {status !== 'all' && (
                <span className="ml-2 text-xs">
                  ({requests.filter((r) => r.status === status).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors"
              onClick={() => setSelectedRequest(request)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-medium">{request.name}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded ${statusColors[request.status]}`}>
                      {statusLabels[request.status]}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{request.email}</p>
                  <p className="text-gray-500 text-sm line-clamp-1">{request.message}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">{formatDate(request.createdAt)}</p>
                  {request.projectType && (
                    <p className="text-gray-600 text-xs mt-1">{request.projectType}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {filteredRequests.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No requests found
            </div>
          )}
        </div>
      </div>

      {/* Request Detail Modal */}
      <AnimatePresence>
        {selectedRequest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedRequest(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-700 flex items-center justify-between">
                <h2 className="text-xl font-light text-white">Request Details</h2>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-sm rounded ${statusColors[selectedRequest.status]}`}>
                    {statusLabels[selectedRequest.status]}
                  </span>
                  <span className="text-gray-500 text-sm">{formatDate(selectedRequest.createdAt)}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-gray-500 text-sm">Name</label>
                    <p className="text-white mt-1">{selectedRequest.name}</p>
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm">Email</label>
                    <p className="text-white mt-1">
                      <a href={`mailto:${selectedRequest.email}`} className="text-[var(--color-primary)] hover:underline">
                        {selectedRequest.email}
                      </a>
                    </p>
                  </div>
                  {selectedRequest.phone && (
                    <div>
                      <label className="text-gray-500 text-sm">Phone</label>
                      <p className="text-white mt-1">
                        <a href={`tel:${selectedRequest.phone}`} className="text-[var(--color-primary)] hover:underline">
                          {selectedRequest.phone}
                        </a>
                      </p>
                    </div>
                  )}
                  {selectedRequest.projectType && (
                    <div>
                      <label className="text-gray-500 text-sm">Project Type</label>
                      <p className="text-white mt-1">{selectedRequest.projectType}</p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-gray-500 text-sm">Message</label>
                  <p className="text-white mt-2 bg-gray-900 p-4 rounded leading-relaxed">
                    {selectedRequest.message}
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <select className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white">
                    <option value="NEW">New</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="CANCELLED">Cancelled</option>
                  </select>
                  <button className="px-6 py-2 bg-[var(--color-primary)] text-white font-medium tracking-wider uppercase hover:bg-[var(--color-primary-light)] transition-colors">
                    Update Status
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
