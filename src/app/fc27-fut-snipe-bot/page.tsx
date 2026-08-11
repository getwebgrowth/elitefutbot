import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FC 27 FUT Snipe Bot & EA FC 27 Autobuyer | Elite FUT Bot",
  description: "The best FUT Snipe Bot for EA FC 27. Automate player sniping, auto relist, and market filtering directly in your browser with sub-20ms search speeds and local stealth tech.",
  keywords: "fut snipe bot fc27, ea fc 27 autobuyer, fc 27 trading bot, fut 27 autobuyer, ea fc 27 snipe bot, fut web app extension, fc 27 ultimate team bot, fc27 auto buyer",
  openGraph: {
    title: "FC 27 FUT Snipe Bot & EA FC 27 Autobuyer",
    description: "The best FUT Snipe Bot for EA FC 27. Automate player sniping, auto relist, and market filtering directly in your browser.",
    type: "website",
  },
};

export default function FC27FutSnipeBotPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "FC 27 FUT Snipe Bot & Autobuyer",
        "operatingSystem": "Chrome OS, Windows, macOS",
        "applicationCategory": "BrowserApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Fastest and safest EA FC 27 FUT Snipe Bot and Autobuyer Chrome extension."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the FUT Snipe Bot for FC 27 work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The bot runs locally as a Chrome Extension inside your EA FC 27 Web App. It automatically refreshes market searches, snipes underpriced cards in sub-20ms, and relists them at your target sell price."
            }
          },
          {
            "@type": "Question",
            "name": "Is this FC 27 Autobuyer safe to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Unlike cloud bots, our extension runs 100% locally in your browser. Your EA account password and session tokens are never shared with remote servers, and built-in human delays protect your account."
            }
          },
          {
            "@type": "Question",
            "name": "Does it work with Futbin market prices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, live Futbin price reference data is built directly into the UI so you can snipe against accurate real-time market prices."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <header className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(204,255,0,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-black text-primary tracking-wider uppercase">
              EA FC 27 Web App Compatible
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
            Fastest &amp; Safest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary uppercase drop-shadow-[0_0_12px_rgba(204,255,0,0.3)]">
              FUT Snipe Bot FC 27
            </span>
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Automate your Ultimate Team trading with our 100% local Chrome extension. Snipe underpriced players in sub-20ms and relist them for instant coin profit.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Link className="px-8 py-4 bg-primary text-dark font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2 w-full sm:w-auto" href="https://discord.gg/Rkb9nF6WG6">
              Get Free Beta Access
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
            <a className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto" href="#demo">
              <span className="material-symbols-outlined text-xl text-primary">play_circle</span>
              Watch Bot Demo
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-400 font-medium border-y border-white/5 py-4 max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">bolt</span>
              Sub-20ms Search Speed
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
              100% Local &amp; Safe
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">extension</span>
              Chrome Side Panel UI
            </div>
          </div>

          {/* YOUTUBE VIDEO EMBED CONTAINER */}
          <div className="relative mx-auto max-w-4xl group" id="demo">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0d0d0d]">
              <div className="bg-[#141414] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-xs font-technical text-gray-400 ml-2">FC 27 FUT Snipe Bot Demo</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-primary font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  LIVE DEMO
                </div>
              </div>
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.youtube.com/embed/S0YuEelYNQ8" 
                  title="FC 27 FUT Snipe Bot & Autobuyer Demo" 
                  className="w-full h-full border-0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* HOW IT WORKS SECTION (ENHANCED VISUAL TIMELINE CARD LAYOUT) */}
      <section className="py-24 bg-dark relative border-t border-white/5" id="how-it-works">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-full text-xs font-bold text-primary mb-4 shadow-[0_0_15px_rgba(204,255,0,0.15)]">
              <span className="material-symbols-outlined text-sm">route</span>
              SIMPLE 4-STEP PROCESS
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-medium">
              Start automated sniping on the EA FC 27 Web App in under 2 minutes.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-10 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              
              {/* Step 1 */}
              <div className="glass-card p-7 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-primary font-technical tracking-tight">01</span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 shadow-md">
                      <span className="material-symbols-outlined text-2xl">extension</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Install Extension</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Add Elite FUT Bot to Google Chrome and pin it to your toolbar for instant 1-click access.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                  Quick 1-click install
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass-card p-7 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-primary font-technical tracking-tight">02</span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 shadow-md">
                      <span className="material-symbols-outlined text-2xl">view_sidebar</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Open Side Panel</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Log into the EA FC 27 Web App and open the bot inside Chrome&apos;s native Side Panel.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                  No login credentials required
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass-card p-7 rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-primary font-technical tracking-tight">03</span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 shadow-md">
                      <span className="material-symbols-outlined text-2xl">tune</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Set Your Targets</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    Pick the players, max buy prices, and rating filters you want the bot to watch for.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                  Futbin price sync enabled
                </div>
              </div>

              {/* Step 4 */}
              <div className="glass-card p-7 rounded-3xl border border-primary/40 bg-primary/[0.03] shadow-[0_0_30px_rgba(204,255,0,0.08)] hover:border-primary transition-all duration-300 group hover:-translate-y-2 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-primary font-technical tracking-tight">04</span>
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 shadow-lg">
                      <span className="material-symbols-outlined text-2xl">bolt</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Let It Snipe</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                    Turn the bot on. It scans the transfer market and auto-buys matching deals the instant they drop.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-primary/20 flex items-center gap-1.5 text-[11px] text-primary font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Sub-20ms Sniping Active
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (8 POINTS) */}
      <section className="py-20 bg-[#070707] relative border-t border-white/5" id="features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-xs font-bold text-primary mb-3">
              <span className="material-symbols-outlined text-sm">auto_fix_high</span>
              BUILT FOR FC 27
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Everything You Need to Make Coins in <span className="text-primary">FC 27</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Built directly for the EA FC 27 Web App. Simple setup, zero password sharing, and continuous market automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* 01 Auto Snipe */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all">
                  01
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-primary text-2xl transition-colors">bolt</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Auto Snipe (Sub-20ms)</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Scans transfer market listings and auto-purchases players matching your target price and rating criteria faster than clicking manually.
              </p>
            </div>

            {/* 02 Auto List */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all">
                  02
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-primary text-2xl transition-colors">sell</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Auto List</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Automatically relists players you&apos;ve bought at your chosen sell price range, so you don&apos;t have to babysit your club every flip.
              </p>
            </div>

            {/* 03 Smart Filters */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all">
                  03
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-primary text-2xl transition-colors">filter_alt</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Market Filters</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Set min/max price, bid limits, card rating, and a purchase cap per search — the bot only buys what fits your specific target strategy.
              </p>
            </div>

            {/* 04 Futbin Price Reference */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all">
                  04
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-primary text-2xl transition-colors">api</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Futbin Live Prices</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Pulls live pricing data directly from Futbin inside the Web App so you&apos;re sniping against real market value, not guesswork.
              </p>
            </div>

            {/* 05 Anti-Detection Engine */}
            <div className="glass-card p-6 rounded-2xl border border-primary/40 bg-primary/[0.03] hover:border-primary hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all">
                  05
                </div>
                <span className="material-symbols-outlined text-primary text-2xl">security</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Anti-Detection Engine</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Configurable action delays between requests keep your sniping activity looking like a real player, not an automated script.
              </p>
            </div>

            {/* 06 Side Panel UI */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all">
                  06
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-primary text-2xl transition-colors">view_sidebar</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Side Panel UI</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Runs in Chrome&apos;s native Side Panel, so your controls sit right next to the Ultimate Team Web App without covering your game.
              </p>
            </div>

            {/* 07 Live Stats Sync */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all">
                  07
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-primary text-2xl transition-colors">insights</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Live Stats Sync</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Purchase counts and estimated coin profit sync as you snipe, so you always know how your current session is performing.
              </p>
            </div>

            {/* 08 Secure Login */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.1)] transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all">
                  08
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-primary text-2xl transition-colors">verified_user</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Secure Local Login</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Authenticate once through the extension&apos;s built-in login flow. 100% local operation means your EA password is never shared.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE ELITE FC 27 BOT */}
      <section className="py-16 bg-dark border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Why use our <span className="text-primary">FC 27 Autobuyer Extension</span>?
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Trading manually on the <strong>EA FC 27 Ultimate Team Web App</strong> can take hours every day. Good deals on SBC fodder and meta players are sniped in seconds.
              </p>
              <p>
                With <strong>Elite FUT Snipe Bot FC 27</strong>, your browser handles the searching, buying, and relisting automatically. Because it operates 100% locally on your computer as a Chrome Extension, your login credentials remain private and safe on your device.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Link className="px-8 py-3.5 bg-primary text-dark font-black rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] transition-all flex items-center gap-2" href="https://discord.gg/Rkb9nF6WG6">
                Join Discord for Free Access
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-[#080808] border-t border-white/5" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-sm">Quick answers about our FC 27 FUT Snipe Bot</p>
          </div>
          
          <div className="space-y-3">
            <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-primary/30 transition-all">
              <h3 className="font-bold text-white mb-1.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">help</span>
                How does the FUT Snipe Bot for FC 27 work?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm pl-7">
                The bot runs locally as a Chrome Extension inside your EA FC 27 Web App. It automatically refreshes market searches, snipes underpriced cards in sub-20ms, and relists them at your target sell price.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-primary/30 transition-all">
              <h3 className="font-bold text-white mb-1.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">shield</span>
                Is this FC 27 Autobuyer safe to use?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm pl-7">
                Yes! Unlike cloud bots, our extension runs 100% locally in your browser. Your EA account password and session tokens are never shared with remote servers, and built-in human delays protect your account.
              </p>
            </div>

            <div className="glass-card p-5 rounded-xl border border-white/10 hover:border-primary/30 transition-all">
              <h3 className="font-bold text-white mb-1.5 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">currency_exchange</span>
                Does it work with Futbin market prices?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm pl-7">
                Yes, live Futbin price reference data is built directly into the UI so you can snipe against accurate real-time market prices.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
