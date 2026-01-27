import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://www.tubeev.com'),
  title: {
    default: "TU2STYLISH | Architecture & Interior Design Studio",
    template: "%s | TU2STYLISH",
  },
  description: "We create iconic architectural and interior spaces that challenge convention and define modern lifestyle. From private residences to large-scale developments.",
  keywords: ["architecture", "interior design", "luxury design", "residential", "commercial", "hospitality", "Inal Tubeev", "modern design"],
  authors: [{ name: "Inal Tubeev", url: "https://www.tubeev.com" }],
  creator: "Inal Tubeev",
  openGraph: {
    title: "TU2STYLISH | Architecture & Interior Design Studio",
    description: "We create iconic architectural and interior spaces that challenge convention and define modern lifestyle.",
    url: "https://www.tubeev.com",
    siteName: "TU2STYLISH",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TU2STYLISH | Architecture & Interior Design Studio",
    description: "We create iconic architectural and interior spaces that challenge convention and define modern lifestyle.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "TU2STYLISH",
  "description": "Architecture and Interior Design Studio creating iconic spaces that challenge convention and define modern lifestyle.",
  "url": "https://www.tubeev.com",
  "founder": {
    "@type": "Person",
    "name": "Inal Tubeev",
  },
  "areaServed": ["Worldwide"],
  "serviceType": ["Architecture", "Interior Design", "Luxury Design"],
  "priceRange": "$$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
