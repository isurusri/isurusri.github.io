import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "Isuru Abeykoon - Software Engineer & AI Developer",
    template: "%s | Isuru Abeykoon"
  },
  description: "Software Engineer specializing in Backend Development, Frontend Technologies, AI/ML, and Performance Optimization. Explore my portfolio of innovative projects and technical expertise.",
  keywords: [
    "Isuru Abeykoon",
    "Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "AI Developer",
    "Machine Learning",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Portfolio",
    "Web Development",
    "Full Stack Developer"
  ],
  authors: [{ name: "Isuru Abeykoon", url: "https://github.com/isurusri" }],
  creator: "Isuru Abeykoon",
  publisher: "Isuru Abeykoon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Isuru Abeykoon - Software Engineer & AI Developer',
    description: 'Software Engineer specializing in Backend Development, Frontend Technologies, AI/ML, and Performance Optimization.',
    siteName: 'Isuru Abeykoon Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Isuru Abeykoon - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isuru Abeykoon - Software Engineer & AI Developer',
    description: 'Software Engineer specializing in Backend Development, Frontend Technologies, AI/ML, and Performance Optimization.',
    images: ['/images/og-image.png'],
    creator: '@isuru_abeykoon',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logos/logo-new.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logos/logo-new.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/logos/logo-new.png',
    apple: [
      { url: '/images/logos/logo-new.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
