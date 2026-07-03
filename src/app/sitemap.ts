import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hike-footwear.vercel.app',
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://hike-footwear.vercel.app/shop',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://hike-footwear.vercel.app/collections',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://hike-footwear.vercel.app/account/orders',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
