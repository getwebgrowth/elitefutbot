import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Link in Bio | Elite FUT SNIPER Official Socials & Links",
  description: "Access all official Elite FUT SNIPER links, social media profiles (TikTok, Instagram, X/Twitter, Discord, Telegram), free beta access, tools, and partner deals in one place.",
  keywords: [
    "Elite FUT SNIPER link in bio",
    "FUT Sniper TikTok",
    "Elite FUT SNIPER Instagram",
    "FutSnipeBot Twitter X",
    "FIFA sniping bot links",
    "FC 26 autobuyer socials",
    "FC 27 trading bot Discord"
  ],
  alternates: {
    canonical: "https://elitefutbot.com/bio",
  },
  openGraph: {
    title: "Elite FUT SNIPER - Official Links & Social Media",
    description: "Connect with Elite FUT SNIPER on TikTok, Instagram, X/Twitter, and Discord. Access our free beta, SBC solver, tax calculator, and 50% affiliate program.",
    url: "https://elitefutbot.com/bio",
    siteName: "Elite FUT SNIPER",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite FUT SNIPER - Official Links & Social Media",
    description: "Official Link in Bio for Elite FUT SNIPER. Find our TikTok, Instagram, Twitter X, Discord, and trading tools.",
  }
};

export default function BioPage() {
  const socials = [
    {
      name: "TikTok",
      handle: "@elitefutbotx",
      url: "https://www.tiktok.com/@elitefutbotx",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-5.2-1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V5.86a6.38 6.38 0 00-1-.08A6.34 6.34 0 1015.8 12V8.31a8.16 8.16 0 004.84 1.58V6.44a4.85 4.85 0 01-1.05.25z"/>
        </svg>
      ),
      color: "hover:text-[#ff0050] hover:border-[#ff0050]/40"
    },
    {
      name: "Instagram",
      handle: "@elitefutbot",
      url: "https://www.instagram.com/elitefutbot/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "hover:text-[#e1306c] hover:border-[#e1306c]/40"
    },
    {
      name: "X / Twitter",
      handle: "@FutSnipeBot",
      url: "https://x.com/FutSnipeBot",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "hover:text-[#1da1f2] hover:border-[#1da1f2]/40"
    },
    {
      name: "Discord",
      handle: "Join Server",
      url: "https://discord.gg/Rkb9nF6WG6",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
        </svg>
      ),
      color: "hover:text-[#5865F2] hover:border-[#5865F2]/40"
    },
    {
      name: "Telegram",
      handle: "@elitefutbot",
      url: "https://t.me/elitefutbot",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.332 4.978c.488 0 .702-.223.975-.488l2.339-2.274 4.862 3.593c.897.494 1.542.24 1.765-.83l3.19-15.035c.327-1.31-.5-1.905-1.36-1.514z"/>
        </svg>
      ),
      color: "hover:text-[#26A5E4] hover:border-[#26A5E4]/40"
    }
  ];

  const links = [
    {
      title: "Claim Free Beta Access",
      subtitle: "20ms local Chrome extension bot for FC 26 & FC 27",
      href: "/#pricing",
      badge: "FEATURED",
      icon: "bolt",
      primary: true
    },
    {
      title: "Earn 50% Lifetime Commission",
      subtitle: "Join our partner program for creators & affiliates",
      href: "/affiliate",
      badge: "50% REVSHARE",
      icon: "payments",
      primary: false
    },
    {
      title: "AI SBC Solver Hub",
      subtitle: "Automate squad building challenges with AI precision",
      href: "/ai-sbc-solver",
      badge: "AI POWERED",
      icon: "auto_awesome",
      primary: false
    },
    {
      title: "EA FC Tax Calculator",
      subtitle: "Calculate EA 5% tax & net profits instantly",
      href: "/tools/tax-calculator",
      badge: "FREE TOOL",
      icon: "calculate",
      primary: false
    },
    {
      title: "FC Sniping & Safety Guide",
      subtitle: "Learn optimal anti-ban search filters & safe settings",
      href: "/tools/sniping-guide",
      badge: "GUIDE",
      icon: "menu_book",
      primary: false
    },
    {
      title: "Contact Support Team",
      subtitle: "Direct account queries, billing & customer service",
      href: "/contact",
      badge: "SUPPORT",
      icon: "support_agent",
      primary: false
    }
  ];

  const bioJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Elite FUT SNIPER Official Links",
    "url": "https://elitefutbot.com/bio",
    "sameAs": [
      "https://www.tiktok.com/@elitefutbotx",
      "https://www.instagram.com/elitefutbot/",
      "https://x.com/FutSnipeBot",
      "https://discord.gg/Rkb9nF6WG6",
      "https://t.me/elitefutbot"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bioJsonLd) }}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 relative overflow-hidden font-sans">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-md mx-auto relative z-10">
          {/* Profile Header */}
          <div className="text-center space-y-4 mb-8">
            <div className="relative w-24 h-24 mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-white to-primary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden bg-card p-1.5 shadow-2xl">
                <img
                  src="/logo-elite.png"
                  alt="Elite FUT SNIPER Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 bg-card/80 border border-primary/30 px-3 py-1 rounded-full text-xs font-bold text-gray-200 mb-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span>OFFICIAL HUB</span>
                <span className="material-symbols-outlined text-primary text-sm font-black">verified</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight uppercase font-headline">
                Elite FUT <span className="text-primary italic">SNIPER</span>
              </h1>
              <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto font-medium">
                The World's Fastest FC 26 &amp; FC 27 Sniping Bot &amp; Autobuyer Suite
              </p>
            </div>

            {/* Social Icons Strip */}
            <div className="flex justify-center items-center gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${s.name}`}
                  className={`w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-110 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Featured Links List */}
          <div className="space-y-3.5 mb-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  link.primary
                    ? "bg-primary text-dark border-primary hover:scale-[1.02] shadow-[0_0_25px_rgba(204,255,0,0.3)]"
                    : "bg-white/[0.02] hover:bg-white/[0.06] border-white/10 hover:border-primary/40 text-white hover:scale-[1.01]"
                }`}
              >
                <div className="flex items-center gap-3.5 relative z-10">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      link.primary
                        ? "bg-dark/20 text-dark"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark transition-colors"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">{link.icon}</span>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-sm tracking-tight ${link.primary ? "text-dark font-headline uppercase" : "text-white"}`}>
                        {link.title}
                      </span>
                      {link.badge && (
                        <span
                          className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${
                            link.primary
                              ? "bg-dark text-primary"
                              : "bg-primary/10 text-primary border border-primary/20"
                          }`}
                        >
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] line-clamp-1 mt-0.5 ${link.primary ? "text-dark/80 font-medium" : "text-gray-400"}`}>
                      {link.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative z-10">
                  <span className={`material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform ${link.primary ? "text-dark" : "text-primary"}`}>
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Trust Ticker */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-300">
              <span className="material-symbols-outlined text-primary text-base">security</span>
              <span>100% Local Chrome Extension • Undetected Safety</span>
            </div>
            <div className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
              Trusted by 50,000+ FC Traders Worldwide
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
