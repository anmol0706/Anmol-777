import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anmol Malviya | Full-Stack Web Developer Portfolio",
  description: "Hi, I'm Anmol Malviya, a passionate Full-Stack Web Developer skilled in React, Node.js, and MongoDB. I enjoy building real-world web applications.",
  keywords: ["Anmol Malviya", "web developer", "full-stack", "React", "Node.js", "MongoDB", "portfolio", "frontend", "backend"],
  authors: [{ name: "Anmol Malviya" }],
  creator: "Anmol Malviya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anmolmalviya.dev",
    title: "Anmol Malviya | Full-Stack Web Developer Portfolio",
    description: "Hi, I'm Anmol Malviya, a passionate Full-Stack Web Developer skilled in React, Node.js, and MongoDB. I enjoy building real-world web applications.",
    siteName: "Anmol Malviya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmol Malviya | Full-Stack Web Developer Portfolio",
    description: "Full-Stack Web Developer skilled in React, Node.js, and MongoDB.",
    creator: "@anmol0706",
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
  icons: {
    icon: "/globe.svg",
    shortcut: "/globe.svg",
    apple: "/globe.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans cursor-none relative`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
