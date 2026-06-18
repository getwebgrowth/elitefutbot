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
  metadataBase: new URL('https://elitefutbot.com'),
  title: "Elite FUT SNIPER - The Ultimate FC 26, FC 25 & FC 27 Sniping Tool & Autobuyer",
  description: "Dominate the FC 26, FC 25, and upcoming FC 27 transfer markets with Elite FUT SNIPER. The best FIFA sniping bot featuring 20ms search speeds, advanced anti-ban tech, and cloud automation.",
  keywords: ["Elite FUT SNIPER", "FUT Sniper", "FC 26 sniping bot", "FC 25 sniping bot", "FC 27 sniping bot", "FIFA 26 autobuyer", "SBC solver", "FC 26 trading tools", "FIFA sniping tool"],
  alternates: {
    canonical: "https://elitefutbot.com/",
  },
  openGraph: {
    title: "Elite FUT SNIPER - #1 FC 26, FC 25 & FC 27 Sniping Tool",
    description: "World's fastest sniping bot and autobuyer for FC 26, FC 25 & FC 27. Advanced anti-ban engine and cloud-based SBC solving.",
    url: "https://elitefutbot.com/",
    siteName: "Elite FUT SNIPER",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite FUT SNIPER - #1 FC 26, FC 25 & FC 27 Sniping Tool",
    description: "Elite sniping bot and autobuyer for FC 26, FC 25 & FC 27. 20ms speeds and zero bans.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Elite FUT SNIPER",
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
              <Link href="/" className="flex items-center gap-3">
                <img src="/logo-elite.png" alt="Elite FUT SNIPER Logo" className="w-16 h-16 object-contain" />
                <span className="text-xl font-extrabold tracking-tighter uppercase text-white">
                  Elite FUT <span className="text-primary">SNIPER</span>
                </span>
              </Link>
              <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
                <Link className="hover:text-primary transition-colors" href="/#features">Features</Link>
                <Link className="hover:text-primary transition-colors" href="/#pricing">Pricing</Link>
                <Link className="hover:text-primary transition-colors" href="/#reviews">Reviews</Link>
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
                  <img src="/logo-elite.png" alt="Elite FUT SNIPER Logo" className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-2xl font-black tracking-tighter uppercase text-white font-headline">
                    Elite FUT <span className="text-primary italic">SNIPER</span>
                  </span>
                </Link>
                <p className="text-gray-400 text-base leading-relaxed max-w-sm font-body">
                  The most advanced FC 26, FC 25 & FC 27 automation suite. Engineered for <span className="text-white font-bold">elite traders</span> who demand absolute speed, surgical precision, and total security.
                </p>
                <div className="flex items-center gap-4">
                  <Link 
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-gray-400 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none" 
                    href="https://discord.gg/PHUfbsSzhK"
                    aria-label="Join our Discord community"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"></path></svg>
                  </Link>
                  <Link 
                    className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 hover:text-primary text-gray-400 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none" 
                    href="https://t.me/elitefutbot"
                    aria-label="Join our Telegram community"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.332 4.978c.488 0 .702-.223.975-.488l2.339-2.274 4.862 3.593c.897.494 1.542.24 1.765-.83l3.19-15.035c.327-1.31-.5-1.905-1.36-1.514z" />
                    </svg>
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
                    <li><Link className="text-gray-500 hover:text-primary transition-colors focus-visible:text-primary focus-visible:outline-none" href="/tools/sniping-guide">Sniping Guide</Link></li>
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
                <span>© 2026 Elite FUT SNIPER</span>
                <span className="w-1 h-1 bg-white/10 rounded-full" aria-hidden="true"></span>
                <span>Not Affiliated with EA Sports</span>
              </div>
              <nav className="flex gap-10" aria-label="Legal">
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
