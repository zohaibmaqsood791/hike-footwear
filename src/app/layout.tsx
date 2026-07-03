import type { Metadata } from "next";
import { Raleway, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import GoogleTag from "@/components/GoogleTag";
import StructuredData from "@/components/StructuredData";
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
    default: "Healthy Barefoot Shoes | 2M+ Lives Improved | Hike Footwear",
  },
  description:
    "Discover Hike Footwear — premium barefoot shoes designed for natural foot health. Wide toe box, zero-drop sole, ultra-flexible material. Improving 2M+ lives worldwide. Shop barefoot shoes, boots, hiking shoes and kids shoes.",
  keywords: ["barefoot shoes", "barefoot boots", "zero drop shoes", "wide toe box shoes", "hiking shoes", "Hike Footwear", "foot health"],
  verification: {
    google: "h0lN5S8mG5esv4PyJ2sZ_LNA3v_-0AuH1BkDsrxa5oI",
  },
  openGraph: {
    siteName: "Hike Footwear",
    title: "Healthy Barefoot Shoes | 2M+ Lives Improved | Hike Footwear",
    description:
      "Discover Hike Footwear — premium barefoot shoes designed for natural foot health. Wide toe box, zero-drop sole, ultra-flexible. Shop barefoot shoes, boots, hiking shoes and kids shoes.",
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
    title: "Healthy Barefoot Shoes | 2M+ Lives Improved | Hike Footwear",
    description:
      "Discover Hike Footwear — premium barefoot shoes designed for natural foot health. Wide toe box, zero-drop sole, ultra-flexible. Shop barefoot shoes, boots, hiking shoes and kids shoes.",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
