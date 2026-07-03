import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { graphqlClient } from "@/lib/graphql/client";
import { GET_PRODUCTS } from "@/lib/graphql/queries";
import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/types";

async function getProducts(first = 8): Promise<Product[]> {
  try {
    const data = await graphqlClient.request<{ products: { nodes: Product[] } }>(
      GET_PRODUCTS, { first }
    );
    return data.products.nodes;
  } catch { return []; }
}

async function BestsellersSection() {
  const products = await getProducts(4);
  if (!products.length) return null;
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B5E3C] font-semibold mb-1">Top Picks</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Bestsellers</h2>
          </div>
          <Link href="/shop" className="hidden md:inline-flex items-center justify-center bg-[#8B5E3C] text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hover:bg-[#3D2B1F] transition-colors rounded-full">
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} loading={i < 2 ? "eager" : "lazy"} />
          ))}
        </div>
        <div className="text-center md:hidden mt-6">
          <Link href="/shop" className="inline-flex items-center justify-center bg-[#8B5E3C] text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#3D2B1F] transition-colors rounded-full">
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}

async function AllProductsSection() {
  const products = await getProducts(8);
  if (!products.length) return null;
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-[#FAF7F4]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B5E3C] font-semibold mb-1">Explore Your Path</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Shop All Shoes</h2>
          </div>
          <Link href="/shop" className="hidden md:inline-flex items-center justify-center border border-[#8B5E3C] text-[#8B5E3C] px-6 py-2.5 text-sm font-semibold uppercase tracking-widest hover:bg-[#8B5E3C] hover:text-white transition-colors rounded-full">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} loading={i < 2 ? "eager" : "lazy"} />
          ))}
        </div>
        <div className="text-center md:hidden mt-6">
          <Link href="/shop" className="inline-flex items-center justify-center border border-[#8B5E3C] text-[#8B5E3C] px-8 py-3 text-sm font-semibold uppercase tracking-widest hover:bg-[#8B5E3C] hover:text-white transition-colors rounded-full">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductGridSkeleton() {
  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="h-8 w-48 bg-neutral-200 rounded mb-8 animate-pulse" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-[3/4] bg-neutral-200 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative min-h-[500px] sm:min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#F5EDE3]">
        {/* Desktop layout */}
        <div className="hidden md:flex w-full max-w-[1400px] mx-auto px-8 lg:px-16 items-center gap-12">
          <div className="flex-1 z-10">
            <p className="text-xs tracking-[0.25em] uppercase font-semibold text-[#8B5E3C] mb-4">2M+ Lives Improved</p>
            <h1 className="font-heading text-[48px] lg:text-[64px] font-bold text-[#3D2B1F] leading-[1.05] mb-5 tracking-tight">
              Healthy<br />Barefoot<br />Shoes
            </h1>
            <p className="text-[16px] text-neutral-600 mb-8 leading-relaxed max-w-sm">
              Your path to pain-free walking. Wide toe box, zero-drop sole, ultra-flexible — designed for natural foot alignment.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/shop" className="inline-block bg-[#8B5E3C] text-white px-8 py-3.5 text-[13px] tracking-[0.12em] font-bold uppercase hover:bg-[#3D2B1F] transition-colors rounded-full">
                Shop Now
              </Link>
              <Link href="/shop" className="inline-block border border-[#8B5E3C] text-[#8B5E3C] px-8 py-3.5 text-[13px] tracking-[0.12em] font-bold uppercase hover:bg-[#8B5E3C] hover:text-white transition-colors rounded-full">
                View All
              </Link>
            </div>
          </div>
          <div className="flex-1 relative h-[500px] lg:h-[620px]">
            <Image
              src="https://cdn.sanity.io/images/rsyfx5mw/production/9e9dea968e55035f9042c1e4014f3e51454c61c3-2922x1763.jpg?q=80&auto=format"
              alt="Hike Footwear Hero"
              fill
              className="object-contain object-center"
              priority
              fetchPriority="high"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden w-full">
          <div className="relative h-[320px]">
            <Image
              src="https://cdn.sanity.io/images/rsyfx5mw/production/1c81028cfc77fb3ff38cf4dd978ddf40e1cdd471-1288x1466.jpg?q=80&auto=format"
              alt="Hike Footwear"
              fill
              className="object-cover object-center"
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="px-6 py-8 bg-[#F5EDE3] text-center">
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#8B5E3C] mb-2">2M+ Lives Improved</p>
            <h1 className="font-heading text-[36px] font-bold text-[#3D2B1F] leading-[1.1] mb-3">
              Healthy Barefoot Shoes
            </h1>
            <p className="text-[14px] text-neutral-600 mb-6 leading-relaxed">
              Your path to pain-free walking.
            </p>
            <Link href="/shop" className="inline-block bg-[#8B5E3C] text-white px-10 py-3.5 text-[13px] tracking-[0.12em] font-bold uppercase hover:bg-[#3D2B1F] transition-colors rounded-full">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Feature Icons */}
      <section className="bg-white border-b border-neutral-100 py-8 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { img: "https://cdn.sanity.io/images/rsyfx5mw/production/9af28bc39f61c3b9759a5374ce3800bcdde7b82f-500x505.png?q=80&auto=format", label: "Wide Toe Box" },
            { img: "https://cdn.sanity.io/images/rsyfx5mw/production/8f402f03335e8c345c608694c507620db88f9eec-500x505.png?q=80&auto=format", label: "Natural Alignment" },
            { img: "https://cdn.sanity.io/images/rsyfx5mw/production/b28c4b705b204b8998e696de8b69a5dcf9026d34-500x500.png?q=80&auto=format", label: "Zero Drop Sole" },
            { img: "https://cdn.sanity.io/images/rsyfx5mw/production/f96d74ae8e937711118d2fc1b48a279e3c51f526-500x500.png?q=80&auto=format", label: "Ultra Flexible Material" },
          ].map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-3 text-center">
              <div className="w-16 h-16 relative">
                <Image src={f.img} alt={f.label} fill className="object-contain" sizes="64px" />
              </div>
              <p className="text-sm font-semibold text-neutral-800">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Press strip */}
      <section className="bg-[#F5EDE3] py-6 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center gap-6">
          <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-[#3D2B1F] whitespace-nowrap">As seen on</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { alt: "CBS NEWS", src: "https://cdn.sanity.io/images/rsyfx5mw/production/032abb481b52fbb62d1610254c7b0532a9b21c5c-533x160.png?q=80&auto=format" },
              { alt: "ABC",      src: "https://cdn.sanity.io/images/rsyfx5mw/production/d1c288781f36d5f5580ab9f140b58d3b51d4c4ae-533x160.png?q=80&auto=format" },
              { alt: "MSN",      src: "https://cdn.sanity.io/images/rsyfx5mw/production/91d0a75b3f0b3527a5fdb7f524afb018c46dabc2-533x160.png?q=80&auto=format" },
              { alt: "Yahoo",    src: "https://cdn.sanity.io/images/rsyfx5mw/production/9ababcdd9f03fc168a8c10fe6a8f78bf0f01f9b1-1500x550.png?q=80&auto=format" },
            ].map((logo) => (
              <Image key={logo.alt} src={logo.src} alt={logo.alt} width={120} height={36} className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <Suspense fallback={<ProductGridSkeleton />}>
        <BestsellersSection />
      </Suspense>

      {/* Value proposition */}
      <section className="py-16 px-4 sm:px-6 bg-[#3D2B1F] text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] uppercase font-semibold text-[#F5EDE3]/60 mb-3">Why Hike?</p>
            <h2 className="font-heading text-[28px] sm:text-[40px] font-bold leading-tight mb-4">
              Experience Ultimate Foot<br />Comfort with HIKE!
            </h2>
            <p className="text-[14px] text-white/60 max-w-xl mx-auto leading-relaxed">
              We prioritise a healthier foot environment. Our footwear stimulates the natural alignment of your feet, preventing and reducing foot pain and deformities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: "https://cdn.sanity.io/images/rsyfx5mw/production/ebb9871dc7276f01c803761b4869d5ef87cf2fd5-600x600.png?q=80&auto=format", title: "Wide Toe Box", desc: "Allows toes to spread naturally, improving balance and preventing deformities." },
              { img: "https://cdn.sanity.io/images/rsyfx5mw/production/1ab55d9560472f1adc8fc9db877e15800b4115f4-600x600.png?q=80&auto=format", title: "Thin Soles", desc: "Maximises ground feel and sensory feedback for better proprioception." },
              { img: "https://cdn.sanity.io/images/rsyfx5mw/production/7a0d335397a070de455f8478b2125fd508e6306b-600x600.png?q=80&auto=format", title: "Natural Comfort", desc: "Contours to the natural shape of your foot for all-day wear." },
              { img: "https://cdn.sanity.io/images/rsyfx5mw/production/e419860e3582c6637ed600d7d417bbd814bc1a2a-600x600.png?q=80&auto=format", title: "Strengthen Foot Muscles", desc: "Engages foot muscles naturally, building strength over time." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 relative bg-white/10 rounded-full p-3">
                  <Image src={item.img} alt={item.title} fill className="object-contain p-2" sizes="80px" />
                </div>
                <h3 className="font-bold text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-[#8B5E3C] font-semibold mb-2">Browse by Category</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Explore Your Path to Healthy Freedom</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: "https://cdn.sanity.io/images/rsyfx5mw/production/2d9c9ca9dae7c8445f8b78f23256e19c9bbf0cd4-1024x1024.webp?q=80&auto=format", label: "Barefoot Shoes", href: "/shop" },
              { img: "https://cdn.sanity.io/images/rsyfx5mw/production/0f32f989f2c4b5c7965e612ccfe7a0782bedc338-1024x1024.webp?q=80&auto=format", label: "Barefoot Boots", href: "/shop" },
              { img: "https://cdn.sanity.io/images/rsyfx5mw/production/b8c01865da07eeeb9827c3348bfb6a06803e4993-1024x1024.webp?q=80&auto=format", label: "Hiking Shoes", href: "/shop" },
              { img: "https://cdn.sanity.io/images/rsyfx5mw/production/74c3aab53c856edb2715739daebf629ac7071308-1024x1024.webp?q=80&auto=format", label: "Kids Shoes", href: "/shop" },
            ].map((col) => (
              <Link key={col.label} href={col.href} className="group relative rounded-2xl overflow-hidden aspect-square">
                <Image src={col.img} alt={col.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 text-white font-bold text-[15px]">{col.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / ratings */}
      <section className="py-14 px-4 sm:px-6 bg-[#FAF7F4] text-center">
        <div className="max-w-[800px] mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#8B5E3C] font-semibold mb-3">Trusted Worldwide</p>
          <h2 className="font-heading text-[26px] sm:text-[36px] font-bold text-[#3D2B1F] mb-8 leading-tight">
            Improving over 2M+ lives by prioritising<br />foot health with HIKE Footwear!
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Image
              src="https://cdn.sanity.io/images/rsyfx5mw/production/fa276ee47eeef9bb23a62f61ee2e9301a145f9f3-560x118.png?q=80&auto=format"
              alt="Facebook Rating 4.6"
              width={220}
              height={46}
              className="h-12 w-auto object-contain"
            />
            <Image
              src="https://cdn.sanity.io/images/rsyfx5mw/production/96428473af934753f1f888b5a50ca0a12a7309d5-560x118.png?q=80&auto=format"
              alt="Google Rating 4.8"
              width={220}
              height={46}
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* All Products */}
      <Suspense fallback={<ProductGridSkeleton />}>
        <AllProductsSection />
      </Suspense>

      {/* Contact CTA */}
      <section className="py-14 px-4 text-center bg-white border-t border-neutral-100">
        <p className="text-xs tracking-[0.2em] uppercase text-[#8B5E3C] font-semibold mb-3">We&apos;re here to help</p>
        <h2 className="font-heading text-[26px] sm:text-[32px] font-bold text-neutral-900 mb-2">Do you have any questions?</h2>
        <p className="text-neutral-500 text-sm mb-6">Monday – Friday, 8:30 AM to 5:30 PM EST</p>
        <Link href="/contact" className="inline-block bg-[#8B5E3C] text-white px-10 py-3.5 text-[13px] tracking-[0.12em] font-bold uppercase hover:bg-[#3D2B1F] transition-colors rounded-full">
          Contact Us
        </Link>
      </section>

    </div>
  );
}
