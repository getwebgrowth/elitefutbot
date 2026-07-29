import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: [
        '*',
        'GPTBot',
        'ChatGPT-User',
        'OAI-SearchBot',
        'PerplexityBot',
        'ClaudeBot',
        'Claude-Web',
        'anthropic-ai',
        'Google-Extended',
        'Amazonbot',
        'Applebot-Extended',
        'Bytespider',
        'cohere-ai'
      ],
      allow: '/',
    },
    sitemap: 'https://elitefutbot.com/sitemap.xml',
  }
}
