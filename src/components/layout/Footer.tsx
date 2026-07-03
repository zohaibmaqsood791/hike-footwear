import Link from "next/link";
import Image from "next/image";

const BG = "#3D2B1F";

const shopLinks = [
  { label: "All Shoes", href: "/shop" },
  { label: "Barefoot Shoes", href: "/shop?category=barefoot-shoes" },
  { label: "Barefoot Boots", href: "/shop?category=barefoot-boots" },
  { label: "Hiking Shoes", href: "/shop?category=hiking-shoes" },
  { label: "Kids Shoes", href: "/shop?category=kids" },
];

const helpLinks = [
  { label: "Help & Support", href: "/contact" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "FAQ", href: "/faq" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Track Order", href: "/a/track-order" },
];

const companyLinks = [
  { label: "About Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/hikefootwear",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hikefootwear/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hikefootwear",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
];

const paymentIcons = [
  { label: "Visa", src: "/payment-icons/visa.svg" },
  { label: "Mastercard", src: "/payment-icons/mastercard.svg" },
  { label: "American Express", src: "/payment-icons/amex.svg" },
  { label: "Apple Pay", src: "/payment-icons/applepay.svg" },
  { label: "Google Pay", src: "/payment-icons/googlepay.svg" },
  { label: "Maestro", src: "/payment-icons/maestro.svg" },
  { label: "PayPal", src: "/payment-icons/paypal.svg" },
];

export default function Footer() {
  return (
    <footer>
      {/* Contact banner */}
      <div className="bg-[#F5EDE3] px-4 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-neutral-900 text-lg">Do you have any questions?</p>
            <p className="text-sm text-neutral-600 mt-0.5">
              Our customer service team is available <strong>Monday – Friday, 8:30 AM to 5:30 PM EST.</strong>
            </p>
          </div>
          <Link
            href="/contact"
            className="border border-[#8B5E3C] text-[#8B5E3C] text-sm font-semibold px-6 py-3 hover:bg-[#8B5E3C] hover:text-white transition-colors tracking-widest uppercase whitespace-nowrap rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="text-white" style={{ backgroundColor: BG }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand col */}
            <div className="lg:col-span-2">
              <Image
                src="https://cdn.sanity.io/images/rsyfx5mw/production/a477d4ba71a0c0afd15aa55a0a7e82919cce5aba-1080x1080.svg?q=80&auto=format"
                alt="Hike Footwear"
                width={80}
                height={80}
                className="mb-5"
              />
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                At <strong>Hike Footwear</strong>, we craft premium barefoot shoes designed for natural foot health —
                wide toe box, zero-drop sole, ultra-flexible. Improving 2M+ lives worldwide.
              </p>
              <p className="text-neutral-400 text-sm mb-1">
                <strong className="text-white">Monday – Friday</strong>, 8:30 AM – 5:30 PM EST
              </p>
              <a href="mailto:hello@hikefootwear.com" className="text-neutral-300 text-sm hover:text-white transition-colors">
                ✉ hello@hikefootwear.com
              </a>

              {/* Socials */}
              <div className="flex items-center gap-4 mt-6">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-neutral-300 hover:text-white transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase mb-3">Newsletter</h4>
              <p className="text-neutral-300 text-sm leading-relaxed mb-5">
                Be the first to access new drops, exclusive promotions, and exciting offers!
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent border border-neutral-500 text-white text-sm px-4 py-2.5 placeholder-neutral-400 focus:outline-none focus:border-white transition-colors rounded"
                />
                <button
                  type="submit"
                  className="border border-white text-white text-sm font-semibold py-2.5 hover:bg-white hover:text-neutral-900 transition-colors tracking-wide flex items-center justify-center gap-2 rounded"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Subscribe
                </button>
              </form>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-sm font-semibold tracking-widest uppercase mb-3">Help</h4>
              <ul className="space-y-2.5">
                {helpLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-neutral-300 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop + Company */}
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-semibold tracking-widest uppercase mb-3">Shop</h4>
                <ul className="space-y-2.5">
                  {shopLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-neutral-300 text-sm hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-widest uppercase mb-3">Company</h4>
                <ul className="space-y-2.5">
                  {companyLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-neutral-300 text-sm hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-neutral-600 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-neutral-400 text-xs">
              © {new Date().getFullYear()} Hike Footwear. All rights reserved.
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {paymentIcons.map((p) => (
                <img key={p.label} src={p.src} alt={p.label} width={38} height={24} className="w-8 max-h-[20px] object-contain" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
