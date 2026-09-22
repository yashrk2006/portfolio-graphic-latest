import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Yash Raj Kushwaha | Graphic Designer & Video Editor",
  description: "Portfolio of Yash Raj Kushwaha - Professional Graphic Designer, Video Editor, and AI Content Creator in Delhi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="font-sans antialiased overflow-x-hidden text-gray-900 bg-white"
        suppressHydrationWarning
      >
        {children}
        <Analytics debug={false} />
        <Footer/>
      </body>
    </html>
  );
}
