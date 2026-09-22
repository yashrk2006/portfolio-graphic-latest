import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Yash Raj Kushwaha | Graphic Designer & Video Editor — Delhi",
  description:
    "Portfolio of Yash Raj Kushwaha — Creative Graphic Designer, CapCut Video Editor, and AI Content Creator based in Delhi, India. Specializing in social media creatives, branding, Reels, Shorts, and AI-assisted visual content.",
  keywords: [
    "Graphic Designer Delhi",
    "Video Editor",
    "CapCut Editor",
    "Canva Designer",
    "Yash Raj Kushwaha",
    "Social Media Creatives",
    "YouTube Shorts Editor",
    "Instagram Reels",
    "AI Content Creator",
    "Brand Identity Designer",
  ],
  authors: [{ name: "Yash Raj Kushwaha" }],
  openGraph: {
    title: "Yash Raj Kushwaha | Graphic Designer & Video Editor",
    description:
      "Creative Graphic Designer & Video Editor in Delhi. CapCut, Canva, Photoshop, AI content, social media branding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased overflow-x-hidden"
        style={{ fontFamily: "'Inter', -apple-system, sans-serif", backgroundColor: '#FAFAF7', color: '#0E0E0E' }}
        suppressHydrationWarning
      >
        {children}
        <Analytics debug={false} />
        <Footer />
      </body>
    </html>
  );
}
