import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TU2STYLISH | Architecture & Interior Design Studio",
  description: "We create iconic architectural and interior spaces that challenge convention and define modern lifestyle. From private residences to large-scale developments.",
  keywords: ["architecture", "interior design", "luxury design", "residential", "commercial", "hospitality"],
  openGraph: {
    title: "TU2STYLISH | Architecture & Interior Design Studio",
    description: "We create iconic architectural and interior spaces that challenge convention and define modern lifestyle.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
