import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://educabea.es'

    // Fetch posts
    const posts = await client.fetch(`
    *[_type == "post"] {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }
  `)

    // Fetch techniques
    const techniques = await client.fetch(`
    *[_type == "studyTechnique"] {
      "slug": slug.current,
      "updatedAt": _updatedAt
    }
  `)

    // Map posts to sitemap format
    const postUrls = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // Map techniques to sitemap format
    const techniqueUrls = techniques.map((technique: any) => ({
        url: `${baseUrl}/tecnicas-de-estudio/${technique.slug}`,
        lastModified: new Date(technique.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Static routes
    const routes = [
        '',
        '/blog',
        '/tecnicas-de-estudio',
        '/clases-particulares',
        '/contacto',
        '/material-didactico',
        '/aviso-legal',
        '/politica-de-cookies',
        '/politica-de-privacidad',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...routes, ...postUrls, ...techniqueUrls]
}
