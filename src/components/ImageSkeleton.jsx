'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ImageSkeleton({
  src,
  alt,
  className = '',
  priority = false,
  fill = true,
  objectFit = 'cover', // 'cover' or 'contain'
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Check if it's an external URL
  const isExternal = src?.startsWith('http');

  // Reset state when src changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  // Check if image is already loaded (cached)
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  if (!src) {
    return (
      <div className={`bg-gray-800 ${className}`} {...props}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-500 text-sm">No image</span>
        </div>
      </div>
    );
  }

  // Don't add 'relative' if className already has positioning
  const hasPositioning = className.includes('absolute') || className.includes('fixed');
  const wrapperClass = hasPositioning
    ? `overflow-hidden ${className}`
    : `relative overflow-hidden ${className}`;

  return (
    <div className={wrapperClass} {...props}>
      {/* Skeleton loading animation */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      )}

      {/* Image */}
      {isExternal ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt || ''}
          className={`w-full h-full transition-opacity duration-500 ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <Image
          src={src}
          alt={alt || ''}
          fill={fill}
          className={`transition-opacity duration-500 ${objectFit === 'contain' ? 'object-contain' : 'object-cover'} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          priority={priority}
          sizes="100vw"
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-500 text-sm">Image unavailable</span>
          </div>
        </div>
      )}
    </div>
  );
}
