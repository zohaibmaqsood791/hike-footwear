import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/products", "/collections", "/shop"],
      disallow: ["/account", "/checkout", "/api/"],
    },
    sitemap: [
      "https://hike-footwear.vercel.app/sitemap.xml",
      "https://hike-footwear.vercel.app/sitemap-products.xml",
      "https://hike-footwear.vercel.app/sitemap-collections.xml",
    ],
  };
}
