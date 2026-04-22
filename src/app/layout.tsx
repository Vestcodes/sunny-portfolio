import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://sunny.vestcodes.co'),
  title: {
    default: "Sunny | Operations & Architecture",
    template: "%s | Sunny.OS"
  },
  description: "Operations and Business Assistant at Vestcodes. We build secure, lightning-fast digital products.",
  keywords: ["operations", "systems architecture", "vestcodes", "qa automation", "software development", "product studio"],
  authors: [{ name: "Sunny" }, { name: "Vestcodes" }],
  creator: "Vestcodes",
  openGraph: {
    title: "Sunny | Operations & Architecture",
    description: "Operations and Business Assistant at Vestcodes. We build secure, lightning-fast digital products.",
    url: 'https://sunny.vestcodes.co',
    siteName: 'Sunny.OS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sunny.vestcodes.co/api/og.png?home=true',
        width: 1200,
        height: 630,
        alt: 'Sunny | Vestcodes Operations',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sunny | Operations & Architecture",
    description: "Operations and Business Assistant at Vestcodes.",
    images: ['https://sunny.vestcodes.co/api/og.png?home=true'],
    creator: "@vestcodes",
  },
  alternates: {
    canonical: 'https://sunny.vestcodes.co',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased crt">
        <div className="fixed top-0 w-full p-4 flex justify-between items-center z-40 bg-jet-black/80 backdrop-blur-sm border-b border-steel-gray">
          <div className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="w-3 h-3 bg-sun-yellow rounded-full animate-pulse"></span>
            SUNNY.OS
          </div>
          <nav className="hidden md:flex gap-8 mono-accent">
            <a href="/" className="hover:text-sun-yellow transition-colors">Terminal</a>
            <a href="/manifesto" className="hover:text-sun-yellow transition-colors">Manifesto</a>
            <a href="/operations" className="hover:text-sun-yellow transition-colors">Operations</a>
            <a href="/logs" className="hover:text-sun-yellow transition-colors">Action_Logs</a>
          </nav>
        </div>
        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
