import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import GoogleTag from "@/components/GoogleTag";
import StructuredData from "@/components/StructuredData";
import Klaviyo from "@/components/Klaviyo";
import { Analytics } from "@vercel/analytics/next";

const GA4_ID = "GT-PHCH4QPC";
const AW_ID  = "AW-17089443241";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hike-footwear-six.vercel.app"),
  // Main headless storefront for Hike Footwear
  robots: { index: true, follow: true },
  title: {
    template: "%s | Hike Footwear",
    default: "Luxury Handbags, Exclusive Drops & Special Offers | Hike Footwear",
  },
  description:
    "Discover Hike Footwear luxury handbags collection. Sign up for our newsletter to be the first to know about exclusive drops, special offers, and limited product launches. Elevate your style with our timeless, meticulously crafted handbags. Shop the latest trends at Hike Footwear.",
  keywords: ["luxury handbags", "designer bags", "crossbody bags", "leather bags", "Hike Footwear", "women's handbags"],
  verification: {
    google: "h0lN5S8mG5esv4PyJ2sZ_LNA3v_-0AuH1BkDsrxa5oI",
  },
  openGraph: {
    siteName: "Hike Footwear",
    title: "Luxury Handbags, Exclusive Drops & Special Offers | Hike Footwear",
    description:
      "Discover Hike Footwear luxury handbags collection. Sign up for our newsletter to be the first to know about exclusive drops, special offers, and limited product launches. Elevate your style with our timeless, meticulously crafted handbags. Shop the latest trends at Hike Footwear.",
    url: "https://hike-footwear-six.vercel.app",
    type: "website",
    images: [
      {
        // Relative path resolves against metadataBase (hike-footwear-six.vercel.app), served by Vercel
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hike Footwear Luxury Handbags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Handbags, Exclusive Drops & Special Offers | Hike Footwear",
    description:
      "Discover Hike Footwear luxury handbags collection. Sign up for our newsletter to be the first to know about exclusive drops, special offers, and limited product launches. Elevate your style with our timeless, meticulously crafted handbags. Shop the latest trends at Hike Footwear.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable}`}>
      <head>
        <link rel="preload" as="image" href="/hero-beach.webp" fetchPriority="high" />
        {process.env.META_TEST_EVENT_CODE && (
          <meta name="fb-test-event-code" content={process.env.META_TEST_EVENT_CODE} />
        )}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} crossOrigin="anonymous"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}',{send_page_view:false,timezone:'America/Los_Angeles'});gtag('config','${AW_ID}',{timezone:'America/Los_Angeles'});` }} />
      </head>
      <body className="font-body antialiased bg-white text-neutral-900">
        <StructuredData />
        <MetaPixel />
        <GoogleTag />
        <Klaviyo />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
