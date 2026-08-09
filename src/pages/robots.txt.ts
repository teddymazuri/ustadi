import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = site ? new URL('sitemap-index.xml', site).href : '';

  return new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemapURL}`].join('\n'),
    {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    }
  );
};