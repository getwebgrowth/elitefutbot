import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elitefutbot.com'
  const date = new Date('2026-07-28T00:00:00.000Z')
  
  return [
    {
      url: `${baseUrl}/`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/sbc-solver`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-sbc-solver`,
      lastModified: date,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/tax-calculator`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/sniping-guide`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: date,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/article/tactical-intel`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/affiliate`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/volt-velocity`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/bakers-bot-developer`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/bio`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: date,
      changeFrequency: 'yearly',
      priority: 0.4,
    }
  ]
}
