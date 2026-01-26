// Categories matching Directus CMS
export const categories = [
  { id: '1', name: 'Residential', slug: 'residential' },
  { id: '2', name: 'Commercial', slug: 'commercial' },
  { id: '3', name: 'Hospitality', slug: 'hospitality' },
  { id: '4', name: 'Furniture', slug: 'furniture' },
  { id: '5', name: 'Turnkey Projects', slug: 'turnkey-projects' },
  { id: '6', name: 'Concepts', slug: 'concepts' },
];

export const projects = [
  {
    id: '1',
    title: 'Mill Basin Marina',
    slug: 'mill-basin-marina',
    description: 'A stunning waterfront residence that seamlessly blends modern architecture with natural surroundings. Floor-to-ceiling windows offer panoramic views of the marina, while sustainable materials ensure minimal environmental impact.',
    location: 'New York, USA',
    year: 2024,
    area: 850,
    duration: 14,
    awards: 3,
    categoryId: '1',
    category: 'Residential',
    featured: true,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80&auto=format',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80&auto=format',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80&auto=format',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format',
    ],
  },
  {
    id: '2',
    title: 'Bosphorus Residence',
    slug: 'bosphorus-residence',
    description: 'Perched on the hills overlooking the Bosphorus strait, this luxury residence combines Ottoman-inspired elements with contemporary design. The result is a timeless home that honors its cultural context while embracing modern living.',
    location: 'Istanbul, Turkey',
    year: 2023,
    area: 1200,
    duration: 18,
    awards: 5,
    categoryId: '1',
    category: 'Residential',
    featured: true,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80&auto=format',
    ],
  },
  {
    id: '3',
    title: 'Pearl Tower Penthouse',
    slug: 'pearl-tower-penthouse',
    description: 'An ultra-luxury penthouse spanning the top two floors of one of Dubai\'s most prestigious towers. The design maximizes the spectacular views while creating intimate spaces for daily living.',
    location: 'Dubai, UAE',
    year: 2024,
    area: 650,
    duration: 12,
    awards: 2,
    categoryId: '1',
    category: 'Residential',
    featured: true,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80&auto=format',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80&auto=format',
    ],
  },
  {
    id: '4',
    title: 'Skyline Office Tower',
    slug: 'skyline-office-tower',
    description: 'A 45-story commercial tower designed for the modern workplace. Featuring flexible floor plates, abundant natural light, and state-of-the-art sustainability features.',
    location: 'Boston, USA',
    year: 2023,
    area: 45000,
    duration: 36,
    awards: 4,
    categoryId: '2',
    category: 'Commercial',
    featured: false,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format',
    ],
  },
  {
    id: '5',
    title: 'Grand Coastal Resort',
    slug: 'grand-coastal-resort',
    description: 'A beachfront resort that redefines luxury hospitality. 200 rooms and suites, multiple restaurants, a world-class spa, and seamless indoor-outdoor living.',
    location: 'Maldives',
    year: 2022,
    area: 32000,
    duration: 28,
    awards: 6,
    categoryId: '3',
    category: 'Hospitality',
    featured: false,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80&auto=format',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80&auto=format',
    ],
  },
  {
    id: '6',
    title: 'Urban Mixed Development',
    slug: 'urban-mixed-development',
    description: 'A transformative mixed-use project combining residential, retail, and office spaces. The development revitalizes a former industrial district into a vibrant urban neighborhood.',
    location: 'Guangzhou, China',
    year: 2023,
    area: 85000,
    duration: 48,
    awards: 3,
    categoryId: '4',
    category: 'Mixed Use',
    featured: false,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80&auto=format',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80&auto=format',
    ],
  },
  {
    id: '7',
    title: 'Central Park Pavilion',
    slug: 'central-park-pavilion',
    description: 'A public pavilion that serves as a cultural gathering space. The structure features a dramatic cantilevered roof and an open-air design that invites community engagement.',
    location: 'New York, USA',
    year: 2024,
    area: 2500,
    duration: 16,
    awards: 8,
    categoryId: '5',
    category: 'Public & Urban',
    featured: false,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format',
    ],
  },
  {
    id: '8',
    title: 'Harbor View Apartments',
    slug: 'harbor-view-apartments',
    description: 'A collection of 48 luxury apartments overlooking the historic harbor. Each unit features custom millwork, premium finishes, and private balconies.',
    location: 'Boston, USA',
    year: 2022,
    area: 12000,
    duration: 24,
    awards: 2,
    categoryId: '1',
    category: 'Residential',
    featured: false,
    published: true,
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format',
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') {
    return projects.filter((p) => p.published);
  }
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return projects.filter((p) => p.categoryId === category.id && p.published);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured && p.published);
}
