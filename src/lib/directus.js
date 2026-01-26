// Directus CMS Configuration
const DIRECTUS_URL = 'https://directus-production-1c3b.up.railway.app';

// Fetch all projects from Directus
export async function getProjects() {
  try {
    const res = await fetch(`${DIRECTUS_URL}/items/projects?fields=*,gallery.directus_files_id`, {
      next: { revalidate: 10 }, // Cache for 10 seconds, then refresh
    });

    if (!res.ok) {
      console.error('Failed to fetch projects');
      return [];
    }

    const data = await res.json();

    // Transform Directus data to match existing project structure
    return data.data.map((project) => {
      // Extract file IDs from gallery junction table
      const fileIds = project.gallery?.map((item) => item.directus_files_id).filter(Boolean) || [];

      return {
        id: String(project.id),
        title: project.title?.trim(),
        slug: createSlug(project.title),
        description: stripHtml(project.description),
        location: project.location || '',
        year: project.year || new Date().getFullYear(),
        area: project.area || '',
        client: project.client || '',
        category: project.category || 'Residential',
        categoryId: getCategoryId(project.category),
        published: project.status === 'published',
        featured: false,
        coverImage: fileIds[0] ? `${DIRECTUS_URL}/assets/${fileIds[0]}` : null,
        images: fileIds.map((id) => `${DIRECTUS_URL}/assets/${id}`),
      };
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Fetch single project by slug
export async function getProjectBySlug(slug) {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}

// Fetch projects by category
export async function getProjectsByCategory(categorySlug) {
  const projects = await getProjects();
  if (!categorySlug || categorySlug === 'all') {
    return projects.filter((p) => p.published);
  }
  return projects.filter(
    (p) => p.category.toLowerCase().replace(/\s+/g, '-') === categorySlug && p.published
  );
}

// Helper: Create URL-friendly slug from title
function createSlug(title) {
  if (!title) return '';
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Helper: Strip HTML tags from description
function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

// Helper: Map category name to ID (for compatibility)
function getCategoryId(category) {
  const categoryMap = {
    'Residential': '1',
    'Commercial': '2',
    'Hospitality': '3',
    'Furniture': '4',
    'Turnkey Projects': '5',
    'Concepts': '6',
  };
  return categoryMap[category] || '1';
}

// Export base URL for direct asset access
export const DIRECTUS_ASSETS_URL = `${DIRECTUS_URL}/assets`;
