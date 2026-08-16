import { Metadata } from "next";
import Link from "next/link";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Official Links & Socials | Elite FUT SNIPER",
  description: "Claim free beta access to the #1 FC 26 sniping bot. Join our official Discord, follow on TikTok, Instagram, X/Twitter, and Telegram.",
  alternates: {
    canonical: "https://elitefutbot.com/bio",
  },
  openGraph: {
    title: "Official Links & Socials | Elite FUT SNIPER",
    description: "Claim free beta access and connect with Elite FUT SNIPER on Discord, TikTok, Instagram, X, and Telegram.",
    url: "https://elitefutbot.com/bio",
    siteName: "Elite FUT SNIPER",
    type: "website",
  },
  twitter: {
    title: "Official Links & Socials | Elite FUT SNIPER",
    description: "Claim free beta access and join our official channels on TikTok, Instagram, X, and Discord.",
  }
};

export default function BioPage() {
  const featuredAction = {
    title: "Claim Free Beta Access",
    subtitle: "20ms local Chrome extension bot for FC 26 & FC 27",
    href: "/#pricing",
    badge: "FREE BETA",
    icon: "bolt"
  };

  const communities = [
    {
      title: "Join Our Discord Server",
      subtitle: "Get free setups, chat with 50K+ traders, & get direct support",
      handle: "50,000+ Members",
      href: "https://discord.gg/Rkb9nF6WG6",
      badge: "POPULAR",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
        </svg>
      ),
      color: "border-primary/40 hover:border-primary bg-primary/5 hover:bg-primary/10 text-primary shadow-[0_0_20px_rgba(204,255,0,0.05)]",
      isPrimary: true
    },
    {
      title: "Follow Our TikTok",
      subtitle: "Watch daily FC 26 & FC 27 sniping bot clips & results",
      handle: "@elitefutbotx",
      href: "https://www.tiktok.com/@elitefutbotx",
      badge: "CLIPS",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.35a7.86 7.86 0 0 1-1.87-1.53v8.52c-.02 2.1-.8 4.21-2.42 5.54-1.68 1.41-3.95 2.05-6.14 1.77-2.18-.28-4.24-1.56-5.32-3.5-1.12-1.95-1.2-4.42-.2-6.33 1.01-1.91 3.04-3.23 5.19-3.46.12-.01.24-.02.35-.02v4.02c-.89.09-1.81.47-2.42 1.15-.65.71-.87 1.72-.73 2.66.14.99.78 1.87 1.66 2.3 1.05.51 2.37.38 3.29-.36.78-.62 1.19-1.63 1.17-2.63V.02z" />
        </svg>
      ),
      color: "border-white/5 hover:border-[#ff0050]/40 bg-white/[0.02] hover:bg-[#ff0050]/5 text-gray-200 hover:text-white",
      isPrimary: false
    },
    {
      title: "Follow Our Instagram",
      subtitle: "Get market updates, bot setup tips & announcements",
      handle: "@elitefutbot",
      href: "https://www.instagram.com/elitefutbot/",
      badge: "SOCIAL",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "border-white/5 hover:border-[#e1306c]/40 bg-white/[0.02] hover:bg-[#e1306c]/5 text-gray-200 hover:text-white",
      isPrimary: false
    },
    {
      title: "Join Telegram Broadcast",
      handle: "@elitefutbot",
      href: "https://t.me/elitefutbot",
      badge: "ALERTS",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.332 4.978c.488 0 .702-.223.975-.488l2.339-2.274 4.862 3.593c.897.494 1.542.24 1.765-.83l3.19-15.035c.327-1.31-.5-1.905-1.36-1.514z"/>
        </svg>
      ),
      color: "border-white/5 hover:border-[#26A5E4]/40 bg-white/[0.02] hover:bg-[#26A5E4]/5 text-gray-200 hover:text-white",
      isPrimary: false
    },
    {
      title: "Follow on X / Twitter",
      handle: "@FutSnipeBot",
      href: "https://x.com/FutSnipeBot",
      badge: "NEWS",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "border-white/5 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-gray-200 hover:text-white",
      isPrimary: false
    }
  ];

  const tools = [
    {
      title: "Earn 50% Lifetime Commission",
      desc: "Promote Elite FUT SNIPER & keep half of subscription fees",
      href: "/affiliate",
      badge: "50% REVSHARE"
    },
    {
      title: "AI SBC Solver Hub",
      desc: "Solve and submit squad building challenges automatically",
      href: "/ai-sbc-solver",
      badge: "AI TOOL"
    },
    {
      title: "EA FC Tax & Profit Calculator",
      desc: "Calculate EA 5% tax and net profits in 1 click",
      href: "/tools/tax-calculator",
      badge: "FREE"
    },
    {
      title: "Contact Support Team",
      desc: "Direct account queries, billing & customer service",
      href: "/contact",
      badge: "SUPPORT"
    }
  ];

  const bioJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Elite FUT SNIPER Official Communities & Links",
    "url": "https://elitefutbot.com/bio",
    "description": "Official community channels, social media links, and tools for Elite FUT SNIPER - The #1 FC 26 & FC 27 Sniping Bot suite.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Elite FUT SNIPER",
      "alternateName": "EliteFUTBot",
      "url": "https://elitefutbot.com",
      "image": "https://elitefutbot.com/logo-elite.png",
      "description": "The World's Fastest FC 26 & FC 27 Sniping Bot & Autobuyer Suite.",
      "sameAs": [
        "https://www.tiktok.com/@elitefutbotx",
        "https://www.instagram.com/elitefutbot/",
        "https://x.com/FutSnipeBot",
        "https://discord.gg/Rkb9nF6WG6",
        "https://t.me/elitefutbot"
      ]
    }
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

        <div className="max-w-md mx-auto relative z-10 space-y-8">
          {/* Profile Header */}
          <div className="text-center space-y-4">
            <div className="relative w-20 h-20 mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-white to-primary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-full h-full rounded-full border border-primary/50 overflow-hidden bg-card p-1.5 shadow-2xl">
                <Image
                  src="/logo-elite.png"
                  alt="Elite FUT SNIPER Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1 bg-card/85 border border-primary/30 px-3 py-1 rounded-full text-[10px] font-black text-gray-200 tracking-wider uppercase backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span>Join Official Channels</span>
                <span className="material-symbols-outlined text-primary text-xs font-black">verified</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight uppercase font-headline mt-2.5">
                Elite FUT <span className="text-primary italic">SNIPER</span>
              </h1>
              <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto font-medium">
                The World's Fastest FC 26 &amp; FC 27 Sniping Bot &amp; Autobuyer Suite
              </p>
            </div>
          </div>

          {/* Primary Featured Action: Claim Free Beta Access */}
          <div className="space-y-3.5">
            <Link
              href={featuredAction.href}
              className="group flex items-center justify-between p-4 rounded-2xl bg-primary text-dark border border-primary hover:scale-[1.02] shadow-[0_0_25px_rgba(204,255,0,0.3)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-3.5 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-dark/20 flex items-center justify-center shrink-0 text-dark">
                  <span className="material-symbols-outlined text-xl">{featuredAction.icon}</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-sm tracking-tight text-dark font-headline uppercase">
                      {featuredAction.title}
                    </span>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-dark text-primary">
                      {featuredAction.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-dark/80 font-medium line-clamp-1 mt-0.5">
                    {featuredAction.subtitle}
                  </p>
                </div>
              </div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-lg text-dark group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>

            {/* Social Communities Section */}
            <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-primary border-b border-primary/20 pb-2 pt-2">
              Join Our Social Channels
            </h2>
            {communities.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${c.color}`}
              >
                <div className="flex items-center gap-3.5 relative z-10">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.isPrimary ? 'bg-primary/10 text-primary' : 'bg-white/5 text-gray-400 group-hover:text-white transition-colors'}`}>
                    {c.icon}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-sm tracking-tight">{c.title}</span>
                      {c.badge && (
                        <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${c.isPrimary ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 border border-white/10 text-gray-400'}`}>
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-gray-400 group-hover:text-gray-300 transition-colors mt-0.5 line-clamp-1 font-medium">
                      {c.subtitle}
                    </p>
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Tools & Website Links Section */}
          <div className="space-y-3">
            <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 border-b border-white/5 pb-2">
              Tools &amp; Partners
            </h2>
            <div className="grid grid-cols-1 gap-2.5">
              {tools.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.01] hover:bg-white/[0.04] border border-white/5 hover:border-white/15 transition-all duration-300"
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-gray-200 group-hover:text-white transition-colors">
                        {t.title}
                      </span>
                      {t.badge && (
                        <span className="text-[8px] font-black tracking-wider uppercase px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-gray-400">
                          {t.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-gray-400 group-hover:text-gray-400 transition-colors mt-0.5 font-medium">
                      {t.desc}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-sm text-gray-400 group-hover:text-primary transition-colors group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Security / Trust Footer */}
          <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-center space-y-1.5">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-300">
              <span className="material-symbols-outlined text-primary text-sm font-black">security</span>
              <span className="text-[11px]">100% Local Chrome Extension • Undetected Safety</span>
            </div>
            <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
              Trusted by 50,000+ FC Traders Worldwide
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
