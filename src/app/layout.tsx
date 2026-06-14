import type { Metadata } from "next";
import { Inter, Space_Grotesk, Public_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "EliteFut - The Ultimate FC 25 Web App Companion & Market Utility",
  description: "Optimize your FC 25 web app experience with EliteFut. The best FIFA trading companion featuring 20ms search speeds, advanced anti-ban tech, and browser utility overlay.",
  keywords: ["EliteFut", "EliteFut Extension", "FC 25 Web App Companion", "SBC solver", "FC 25 trading tools", "FIFA trading utility"],
  alternates: {
    canonical: "https://elitefutbot.com/",
  },
  openGraph: {
    title: "EliteFut - #1 FC 25 Web App Companion",
    description: "World's fastest FC 25 Web App Companion. Advanced rate-limiting overlays and local SBC solving.",
    url: "https://elitefutbot.com/",
    siteName: "EliteFut",
    images: [
      {
        url: "/og-image.png", // User should provide this, or I can generate a placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteFut - #1 FC 25 Web App Companion",
    description: "Elite FC 25 Web App Companion. 20ms search speeds and local overlay utility.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "EliteFut",
  "operatingSystem": "Web, Windows, macOS",
  "applicationCategory": "GameApplication",
  "offers": {
    "@type": "Offer",
    "price": "29.00",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${publicSans.variable} font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-dark min-h-screen flex flex-col`}>
        
        {/* Global Fixed Navbar */}
        <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-dark/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                  <span className="material-symbols-outlined text-dark text-lg font-bold">bolt</span>
                </div>
                <span className="text-xl font-extrabold tracking-tighter uppercase text-white">
                  Elite<span className="text-primary">Fut</span>
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
                <Link className="hover:text-primary transition-colors" href="/#features">Features</Link>
                <Link className="hover:text-primary transition-colors" href="/#pricing">Pricing</Link>
                <Link className="hover:text-primary transition-colors" href="/#reviews">Reviews</Link>
                <Link className="hover:text-primary transition-colors" href="#">Status</Link>
                <Link className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2 rounded-full font-bold transition-all flex items-center gap-2" href="https://discord.gg/PHUfbsSzhK">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Discord Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Fixed Footer */}
        <footer className="relative py-24 border-t border-white/5 bg-[#050505] mt-auto overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
              {/* Brand Section */}
              <div className="md:col-span-4 space-y-8">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-dark text-xl font-bold" aria-hidden="true">bolt</span>
                  </div>
                  <span className="text-2xl font-black tracking-tighter uppercase text-white font-headline">
                    Elite<span className="text-primary italic">Fut</span>
                  </span>
                </Link>
                <p className="text-gray-400 text-base leading-relaxed max-w-sm font-body">
                  The most advanced FC 25 web app companion. Engineered for <span className="text-white font-bold">elite traders</span> who demand absolute layout speed, surgical precision, and total security.
                </p>
                <div className="flex items-center gap-4">
                  <Link 
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-gray-400 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none" 
                    href="https://discord.gg/PHUfbsSzhK"
                    aria-label="Join our Discord community"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"></path></svg>
                  </Link>
                  <Link 
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-gray-400 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none" 
                    href="https://twitter.com/"
                    aria-label="Follow us on X (Twitter)"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                  </Link>
                </div>
              </div>
              
              {/* Links Grid */}
              <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
                <nav className="space-y-6" aria-labelledby="footer-sbc">
                  <h4 id="footer-sbc" className="text-white font-black text-xs uppercase tracking-[0.2em] font-headline">SBC Solving</h4>
                  <ul className="space-y-4 text-sm font-medium">
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/sbc-solver">SBC Solutions</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/ai-sbc-solver">SBC Solver Hub</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/ai-sbc-solver/engineering">Engineering Terminal</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/ai-sbc-solver/tactical">Tactical Console</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/ai-sbc-solver/command">Command Center</Link></li>
                  </ul>
                </nav>

                <nav className="space-y-6" aria-labelledby="footer-tools">
                  <h4 id="footer-tools" className="text-white font-black text-xs uppercase tracking-[0.2em] font-headline">Tools & Intel</h4>
                  <ul className="space-y-4 text-sm font-medium">
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/tools/tax-calculator">Tax Calculator</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/tools/sniping-guide">Trading Guide</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/blog">Tactical Intel Hub</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/article/tactical-intel">Latest Briefing</Link></li>
                  </ul>
                </nav>

                <nav className="space-y-6" aria-labelledby="footer-resources">
                  <h4 id="footer-resources" className="text-white font-black text-xs uppercase tracking-[0.2em] font-headline">Resources</h4>
                  <ul className="space-y-4 text-sm font-medium">
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/guide/linking-club">Linking Guide</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/volt-velocity">Volt Velocity</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/affiliate">Affiliate Program</Link></li>
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/">Homepage</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] font-headline">
              <div className="flex items-center gap-6">
                <span>© 2024 EliteFut</span>
                <span className="w-1 h-1 bg-white/10 rounded-full" aria-hidden="true"></span>
                <span>Not Affiliated with EA Sports</span>
              </div>
              <nav className="flex gap-10" aria-label="Legal">
                <Link className="hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="#">Status</Link>
                <Link className="hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/terms">Terms</Link>
                <Link className="hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/privacy">Privacy</Link>
                <Link className="hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/contact">Contact</Link>
              </nav>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
