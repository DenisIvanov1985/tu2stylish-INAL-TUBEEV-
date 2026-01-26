import { getProjects } from '@/lib/directus';

export async function GET() {
  try {
    const projects = await getProjects();
    return Response.json({ projects });
  } catch (error) {
    console.error('Error in /api/projects:', error);
    return Response.json({ projects: [], error: 'Failed to fetch projects' }, { status: 500 });
  }
}
