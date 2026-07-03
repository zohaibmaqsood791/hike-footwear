export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hike-footwear.vercel.app/#organization",
        name: "Hike Footwear",
        url: "https://hike-footwear.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://hike-footwear.vercel.app/cdn/shop/files/Group_1171277502_2.svg",
        },
        description:
          "Discover Hike Footwear luxury handbags collection. Timeless, meticulously crafted handbags including crossbody bags, totes, backpacks, and wallets.",
        email: "hello@hike-footwear.vercel.app",
        sameAs: [
          "https://www.instagram.com/noirblancnyc/",
          "https://www.tiktok.com/@noirandblancnyc",
          "https://www.facebook.com/noirblancnyc",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://hike-footwear.vercel.app/#website",
        url: "https://hike-footwear.vercel.app",
        name: "Hike Footwear",
        publisher: { "@id": "https://hike-footwear.vercel.app/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://hike-footwear.vercel.app/shop?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
