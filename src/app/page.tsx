import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes this the Best FIFA Sniping Bot for FC 26 & FC 27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our bot is designed as a native Chrome Extension that injects directly into the EA Web App. Running locally means your login credentials and session tokens never leave your computer, offering unmatched security and 20ms search speeds."
        }
      },
      {
        "@type": "Question",
        "name": "Is there an FC 26 & FC 27 Autobuyer feature included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We have already optimized our local autobuyer engine for future releases, ensuring your FC 26 and FC 27 Autobuyer capabilities are ready on day one directly within your browser extension."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a FUT Snipe Bot and a FUT Autobuyer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A FUT Snipe Bot specifically targets undervalued player listings on the EA FC Web App using millisecond filter refreshes (sniping), whereas a FUT Autobuyer automates broader trading tasks like mass buying fodder, automatic listing, and continuous market monitoring. Elite FUT SNIPER combines both powerful capabilities into one unified Chrome extension."
        }
      },
      {
        "@type": "Question",
        "name": "Why is a local Chrome Extension safer than cloud-based FIFA sniping bots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud-based bots require you to upload your EA account credentials and session tokens to external servers, creating massive security and ban risks. Our local Chrome Extension FIFA Sniping Bot executes 100% locally inside your active browser session, utilizing stealth behavioral delays and anti-ban jitter algorithms to protect your club."
        }
      },
      {
        "@type": "Question",
        "name": "Does Elite FUT SNIPER support FC 25, FC 26, and upcoming FC 27 Web Apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Elite FUT SNIPER is engineered for total cross-title compatibility across FC 25, FC 26, and upcoming FC 27. Our team continuously updates search filters and Web App adapters so your FC26 and FC27 snipe bot features stay operational on day one of every new season release."
        }
      },
      {
        "@type": "Question",
        "name": "How does the EA FC 26 & FC 27 SBC Solver work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our EA FC 26 and FC 27 SBC Solver integration works directly within your browser session to automatically source and buy the cheapest players required for any Squad Building Challenge, saving you hours of manual searching."
        }
      },
      {
        "@type": "Question",
        "name": "Is it really a Safe Sniping Bot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is our priority. Since our bot runs locally in your browser instead of on remote cloud servers, you never share passwords or cookies with third parties. We also utilize human-like delays, jitter clicks, and behavioral patterns to ensure account safety."
        }
      },
      {
        "@type": "Question",
        "name": "How do I claim Free Beta access for the FC 26 & FC 27 Sniping Bot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply join our official Discord community! We are offering free lifetime beta access for early adopters. Once you join, you will receive step-by-step instructions on installing the browser extension and configuring your first FC 26 and FC 27 Autobuyer filters."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <header className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-card/60 border border-primary/25 hover:border-primary/45 px-4 py-2 sm:py-1.5 rounded-2xl sm:rounded-full mb-7 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-widest bg-primary text-dark px-2 py-0.5 rounded-md shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                ORIGINAL CREATOR
              </span>
              <span className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                By original lead developer behind
                <span className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/40 px-2.5 py-0.5 rounded-full text-white font-black shadow-[0_0_12px_rgba(204,255,0,0.2)]">
                  <Image 
                    alt="Bakers Bot Logo" 
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded-full object-cover border border-primary/50" 
                    src="/bakersbot-avatar.webp" 
                  />
                  <span className="text-primary font-black">Bakers Bot</span>
                </span>
              </span>
            </div>
            <div className="hidden sm:block w-[1px] h-3.5 bg-white/15"></div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded-md">
                FREE BETA
              </span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] w-[87%]"></div>
                </div>
                <span className="text-xs font-black text-emerald-400 font-technical">87/100 Slots Filled</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 tracking-tight leading-tight text-white">
            The World&apos;s Fastest &amp; Safest <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary uppercase drop-shadow-[0_0_8px_rgba(204,255,0,0.35)]">
              FC 26 &amp; FC 27
            </span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary uppercase drop-shadow-[0_0_8px_rgba(204,255,0,0.35)]">
              FUT SNIPING BOT
            </span><br />
            Engineered by Elites.
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-7 leading-relaxed font-medium">
            Elite FUT SNIPER is the world's fastest and safest EA FC 26 and FC 27 sniping bot and autobuyer. It operates as a 100% local Chrome extension running directly in your browser, enabling sub-20ms market search speeds while completely protecting your account from cloud-server bans.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-8">
            <Link className="group relative px-7 py-3.5 bg-primary text-dark font-black text-base rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(204,255,0,0.4)] overflow-hidden" href="#pricing">
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                Claim Your Free Beta Slot
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </span>
            </Link>
            <Link className="px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm" href="#features">
              <span className="material-symbols-outlined text-xl">play_circle</span>
              Watch Demo
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 font-medium border-t border-white/5 pt-6 sm:pt-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
              Undetected Since Launch
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">extension</span>
              Chrome Extension (100% Local)
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              <span className="text-[9px] font-black text-primary uppercase tracking-tighter mr-1">PROVEN LEGACY</span>
              <Image 
                alt="Bakers Bot Dev Team" 
                width={20}
                height={20}
                className="w-5 h-5 rounded-full object-cover border border-primary/40 shadow-sm" 
                src="/bakersbot-avatar.webp" 
              />
              <span className="text-white font-bold text-xs">Bakers Bot Dev Team</span>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 relative mx-auto max-w-4xl flex items-center justify-center">
            <div className="absolute size-[350px] rounded-full bg-primary/10 blur-[90px]"></div>
            
            <div className="relative w-full max-w-[380px] drop-shadow-[0_0_60px_rgba(198,255,61,0.18)] transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute -inset-3 rounded-2xl border border-primary/20 pointer-events-none"></div>
              
              {/* Main Bot Console UI */}
              <Image 
                alt="Elite FUT SNIPER side panel UI showing snipe filters, price range, and live stats" 
                width={600} 
                height={958} 
                className="w-full h-auto relative rounded-xl shadow-2xl z-10" 
                src="/product-screenshot-panel.png" 
                priority
              />

              {/* FLOATING PROOF 1 (LEFT): Yamal Snipe Price Stats */}
              <div className="absolute -left-16 sm:-left-44 lg:-left-56 top-1/6 w-[180px] sm:w-[240px] -rotate-6 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 hover:-rotate-3 transition-all duration-300 group/left">
                <div className="relative rounded-2xl p-1 bg-[#090909] border border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.2)] overflow-hidden">
                  <div className="bg-[#121212] px-3 py-1.5 border-b border-emerald-500/30 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> SNIPE PROFIT
                    </span>
                    <span className="text-emerald-300 font-bold text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">+63k Profit</span>
                  </div>
                  <Image 
                    alt="Yamal 97 Snipe Price Stats Proof (Bought for 337,000)" 
                    width={292} 
                    height={339} 
                    quality={85}
                    className="w-full h-auto rounded-xl block" 
                    src="/yamal-snipe-proof-stats.png" 
                  />
                </div>
              </div>

              {/* FLOATING PROOF 2 (RIGHT): 97 Lamine Yamal TOTS Player Card */}
              <div className="absolute -right-14 sm:-right-36 lg:-right-48 -bottom-10 w-[150px] sm:w-[200px] rotate-6 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 hover:rotate-12 transition-all duration-300 group/right">
                <div className="relative rounded-2xl p-1 bg-[#090909] border border-primary/50 shadow-[0_0_25px_rgba(204,255,0,0.2)] overflow-hidden">
                  <div className="bg-[#121212] px-2.5 py-1 border-b border-primary/30 text-center text-xs">
                    <span className="text-primary font-bold">⭐ 97 Yamal Sniped</span>
                  </div>
                  <Image 
                    alt="97 Lamine Yamal Rating TOTS Card Snipe Result" 
                    width={219} 
                    height={257} 
                    quality={85}
                    className="w-full h-auto rounded-xl block" 
                    src="/yamal-97-card.png" 
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-[#0A0A0A] relative" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Why We <span className="text-primary">Outperform</span> Everything.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Elite FUT SNIPER outperforms competitor bots because it runs locally inside your browser rather than relying on external cloud servers. Developed by the legendary Bakers Bot Dev Team, this secure architecture eliminates datacenter ping latency, ensuring you snipe FC 26 &amp; FC 27 players in milliseconds without compromising account safety.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Cards */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">bolt</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Snipe Automatically</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Our engine reacts in milliseconds, executing snipes faster than any human could possibly dream of.</p>
            </div>
            {/* List Automatically */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">sell</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">List Automatically</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Instant listing after sniping. Maximize your coin flow with immediate turnover of your inventory.</p>
            </div>
            {/* Futbin Integration */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">api</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Futbin Integration</h3>
              <p className="text-gray-400 text-sm leading-relaxed">See real-time market prices directly in the Web App interface. Never miss a profitable deal again.</p>
            </div>
            {/* Stealth Technology */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 border-primary/30 shadow-[0_0_20px_rgba(204,255,0,0.05)] ring-2 ring-primary/50 bg-primary/[0.03]">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">security</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Stealth &amp; Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                <span className="text-primary">100% Local:</span> Runs directly in your browser session. Your EA password and cookies are never sent to third-party cloud servers.
              </p>
            </div>
            {/* Multi-Filter Search */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">filter_alt</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Multi-Filter Search</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Run multiple search queries simultaneously. Cast a wider net across the transfer market for maximum profit.</p>
            </div>
            {/* Snipe by Rating */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">military_tech</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Snipe by Rating</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Target specific player ratings with surgical precision. Perfect for high-volume SBC fodder trading.</p>
            </div>
            {/* Auto Rarity Filler */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">auto_fix_high</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Auto Rarity Filler</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Smart detection automatically identifies and sets card rarity filters, saving you time and preventing errors.</p>
            </div>
            {/* Snipe Price Calculator */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">calculate</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Snipe Price Calculator</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Automated optimal price setting ensures you always buy at a price that guarantees profit after tax.</p>
            </div>
            {/* Profit Calculator */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">insights</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Profit Calculator</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Track your earnings in real-time. See exactly how many coins you&apos;ve generated in your session.</p>
            </div>
            {/* Safe Sniping */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">verified</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Safe Sniping</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Comprehensive coin protection features designed to keep your club&apos;s balance safe while you automate.</p>
            </div>
            {/* Video Tutorials */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">play_lesson</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Video Tutorials</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Master every tool with in-depth video guides. We walk you through every feature and setting.</p>
            </div>
            {/* One Time Purchase */}
            <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-black text-2xl">event_available</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">One Time Purchase</h3>
              <p className="text-gray-400 text-sm leading-relaxed">365 days of full access. Your license remains valid even across game version updates during that year.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-black mb-6">Us vs. <span className="text-primary">Competitors</span></h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">Unlike traditional cloud-based competitor bots that risk your account via server-side pings and credential sharing, Elite FUT SNIPER is a local Chrome extension. Thousands of professional traders choose our FC 26 &amp; FC 27 autobuyer for its zero-password-sharing architecture, integrated AI SBC solver, and superior 20ms response times.</p>
          </div>
          <div className="glass-card rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="py-8 px-8 text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">Core Capability</th>
                    <th className="py-8 px-8 text-primary font-black text-center bg-primary/5 border-l border-r border-primary/20">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-2">The Gold Standard</span>
                        <span className="text-2xl tracking-tighter">ELITE FUT SNIPER</span>
                      </div>
                    </th>
                    <th className="py-8 px-8 text-gray-400 font-bold text-xs uppercase tracking-[0.2em] text-center">Typical Bots</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-8 font-bold text-white">20ms Search Speed</td>
                    <td className="py-6 px-8 text-center bg-primary/5 border-l border-r border-primary/10">
                      <span className="material-symbols-outlined text-primary text-3xl font-black">check_circle</span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="material-symbols-outlined text-red-500/50 text-3xl">cancel</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-8 font-bold text-white">AI SBC Solver</td>
                    <td className="py-6 px-8 text-center bg-primary/5 border-l border-r border-primary/10">
                      <span className="material-symbols-outlined text-primary text-3xl font-black">check_circle</span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="material-symbols-outlined text-red-500/50 text-3xl">cancel</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-8 font-bold text-white">Local WebApp Integration</td>
                    <td className="py-6 px-8 text-center bg-primary/5 border-l border-r border-primary/10">
                      <span className="material-symbols-outlined text-primary text-3xl font-black">check_circle</span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="material-symbols-outlined text-red-500/50 text-3xl">cancel</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-8 font-bold text-white">Zero Password Sharing (100% Local)</td>
                    <td className="py-6 px-8 text-center bg-primary/5 border-l border-r border-primary/10">
                      <span className="material-symbols-outlined text-primary text-3xl font-black">check_circle</span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="material-symbols-outlined text-red-500/50 text-3xl">cancel</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-6 px-8 font-bold text-white">Anti-Ban Behavioral Tech</td>
                    <td className="py-6 px-8 text-center bg-primary/5 border-l border-r border-primary/10">
                      <span className="material-symbols-outlined text-primary text-3xl font-black">check_circle</span>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="material-symbols-outlined text-red-500/50 text-3xl">cancel</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Choose Your <span className="text-primary">Weapon</span></h2>
            <p className="text-gray-400">Simple pricing. No hidden fees. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 flex flex-col relative group" data-purpose="pricing-card">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">Free Beta</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">$0</span>
                  <span className="text-gray-400 font-medium">/mo</span>
                </div>
                <p className="text-sm text-gray-400 mt-4">Perfect for testing the waters and learning the basics of sniping.</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Standard Filters
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  1 Active Account
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Discord Community Support
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="material-symbols-outlined text-base">close</span>
                  Multi-Tab Sniping
                </li>
              </ul>
              <Link className="block text-center py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all font-bold text-white" href="https://discord.gg/Rkb9nF6WG6">
                Join Discord to Start
              </Link>
            </div>
            <div className="glass-card rounded-3xl p-8 flex flex-col border-primary/40 bg-primary/5 relative overflow-hidden shadow-[0_0_40px_rgba(204,255,0,0.05)] transform md:-translate-y-4" data-purpose="pricing-card">
              <div className="absolute top-0 right-0">
                <div className="bg-primary text-dark text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  Best Value
                </div>
              </div>
              <div className="mb-8 relative z-10">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
                  Pro Sniper
                  <span className="text-primary text-[10px] bg-primary/20 border border-primary/20 px-2 py-0.5 rounded uppercase tracking-wide">Limited Spots</span>
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">$19.99</span>
                  <span className="text-gray-400 line-through text-lg decoration-2 decoration-red-500/50">$49.99</span>
                </div>
                <p className="text-sm text-primary mt-4 font-bold bg-primary/10 inline-block px-2 py-1 rounded">Currently FREE for Early Beta Testers!</p>
              </div>
              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                <li className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Advanced Logic &amp; Multi-Filters
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Unlimited Multi-Account Support
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Multi-Tab Local Sniping
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Stealth Anti-Ban Behavioral Tech
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                  Priority Discord Support
                </li>
              </ul>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
              <Link className="relative z-10 block text-center py-4 rounded-xl bg-primary text-dark font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]" href="https://discord.gg/Rkb9nF6WG6">
                Join Discord for Free Beta Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080808] border-t border-white/5 relative overflow-hidden" id="reviews">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/10 blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-purple-400 mb-4">
              <svg className="w-4 h-4 fill-current text-[#5865F2]" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.373-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              VERIFIED DISCORD TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">Real <span className="text-purple-400">Community Reviews</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Authentic feedback & snipe proof shared directly by our Ultimate Team traders inside Discord.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* SCREENSHOT 1: _mesirve_ */}
            <div className="relative group rounded-2xl p-1 bg-[#0d0d0d] border border-white/10 shadow-xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="bg-[#141414] px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> _mesirve_
                </span>
                <span className="text-amber-400 font-semibold text-[11px]">⭐ 5-Star Review</span>
              </div>
              <div className="p-1 flex-1 flex items-center justify-center bg-[#050505]">
                <Image 
                  src="/discord-review-1.png" 
                  alt="Discord Review by _mesirve_: You brighten people's lives by creating these extensions for FC26. 5 stars."
                  width={1024}
                  height={657}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </div>

            {/* SCREENSHOT 2: Patrunjel Regele */}
            <div className="relative group rounded-2xl p-1 bg-[#0d0d0d] border border-white/10 shadow-xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="bg-[#141414] px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Patrunjel Regele
                </span>
                <span className="text-emerald-400 font-semibold text-[11px]">Verified Tester</span>
              </div>
              <div className="p-1 flex-1 flex items-center justify-center bg-[#050505]">
                <Image 
                  src="/discord-review-4.png" 
                  alt="Discord Review by Patrunjel Regele: The menu for the sniper is great I really like it. The sniping itself works."
                  width={794}
                  height={570}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* SCREENSHOT 3: faresislol */}
            <div className="relative group rounded-2xl p-1 bg-[#0d0d0d] border border-white/10 shadow-xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="bg-[#141414] px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> faresislol
                </span>
                <span className="text-amber-400 font-semibold text-[11px]">⭐ Goated Review</span>
              </div>
              <div className="p-1 flex-1 flex items-center justify-center bg-[#050505]">
                <Image 
                  src="/discord-review-2.png" 
                  alt="Discord Review by faresislol: alr thanks bro your goated ill give u a 5 star review"
                  width={694}
                  height={368}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* SCREENSHOT 4: astroa */}
            <div className="relative group rounded-2xl p-1 bg-[#0d0d0d] border border-white/10 shadow-xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="bg-[#141414] px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> astroa
                </span>
                <span className="text-primary font-semibold text-[11px]">BSS Member</span>
              </div>
              <div className="p-1 flex-1 flex items-center justify-center bg-[#050505]">
                <Image 
                  src="/discord-review-3.png" 
                  alt="Discord Review by astroa: yes its very good"
                  width={806}
                  height={544}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* SCREENSHOT 5: Phantom Yamal Snipe */}
            <div className="relative group rounded-2xl p-1 bg-[#0d0d0d] border border-white/10 shadow-xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="bg-[#141414] px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Phantom (GENO)
                </span>
                <span className="text-purple-300 font-semibold text-[11px]">🔥 TOTS Yamal Snipe</span>
              </div>
              <div className="p-1 flex-1 flex items-center justify-center bg-[#050505]">
                <Image 
                  src="/discord-review-card.png" 
                  alt="Discord Review by Phantom: Bro it works I sniped TOTS YAMAL twice for 300k"
                  width={686}
                  height={302}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* SCREENSHOT 6: Phantom Quick Coins Review */}
            <div className="relative group rounded-2xl p-1 bg-[#0d0d0d] border border-white/10 shadow-xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="bg-[#141414] px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Phantom (GENO)
                </span>
                <span className="text-amber-400 font-semibold text-[11px]">⚡ Best Bot I Use</span>
              </div>
              <div className="p-1 flex-1 flex items-center justify-center bg-[#050505]">
                <Image 
                  src="/discord-review-5.png" 
                  alt="Discord Review by Phantom: this is the best one I use because I made the most quick coins"
                  width={598}
                  height={172}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* SCREENSHOT 7: Phantom 97 Yamal Snipe + 1M Coins Balance Proof */}
            <div className="relative group rounded-2xl p-1 bg-[#0d0d0d] border border-white/10 shadow-xl overflow-hidden hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1">
              <div className="bg-[#141414] px-3.5 py-2 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Phantom (GENO)
                </span>
                <span className="text-emerald-400 font-semibold text-[11px]">💰 1,005,378 Coins Balance</span>
              </div>
              <div className="p-1 flex-1 flex items-center justify-center bg-[#050505]">
                <Image 
                  src="/discord-review-6.png" 
                  alt="Discord Proof by Phantom: 97 Lamine Yamal card snipe and 1,005,378 coins balance"
                  width={491}
                  height={876}
                  className="w-full h-auto max-h-[380px] object-contain rounded-xl"
                />
              </div>
            </div>

          </div>

          {/* DISCORD COMMUNITY JOIN CTA */}
          <div className="mt-14 text-center">
            <Link 
              href="https://discord.gg" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.373-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join 5,000+ Traders on Discord
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark" id="faq">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full text-xs font-bold text-primary mb-4">
              <span className="material-symbols-outlined text-sm">help_outline</span>
              FAQ &amp; SEARCH INSIGHTS
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Find comprehensive answers about our FC 26 &amp; FC 27 sniping bot, autobuyer features, and security protocols below. Learn why our local Chrome extension architecture provides faster market search speeds, eliminates EA ban risks, and operates without ever requesting your Ultimate Team account passwords.</p>
          </div>
          <div className="space-y-4">
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all">
              <button type="button" aria-expanded="true" className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-white">What makes this the Best FIFA Sniping Bot for FC 26 &amp; FC 27?</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Our bot is designed as a native Chrome Extension that injects directly into the EA Web App. Running locally means your login credentials and session tokens never leave your computer, offering unmatched security and 20ms search speeds.
              </div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all">
              <button type="button" aria-expanded="true" className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-white">Is there an FC 26 &amp; FC 27 Autobuyer feature included?</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Yes! We have already optimized our local autobuyer engine for future releases, ensuring your <strong>FC 26 &amp; FC 27 Autobuyer</strong> capabilities are ready on day one directly within your browser extension.
              </div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all">
              <button type="button" aria-expanded="true" className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-white">What is the difference between a FUT Snipe Bot and a FUT Autobuyer?</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                A <strong>FUT Snipe Bot</strong> specifically targets undervalued player listings on the EA FC Web App using millisecond filter refreshes (sniping), whereas a <strong>FUT Autobuyer</strong> automates broader trading tasks like mass buying fodder, automatic listing, and continuous market monitoring. Elite FUT SNIPER combines both powerful capabilities into one unified Chrome extension.
              </div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all">
              <button type="button" aria-expanded="true" className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-white">Why is a local Chrome Extension safer than cloud-based FIFA sniping bots?</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Cloud-based bots require you to upload your EA account credentials and session tokens to external servers, creating massive security and ban risks. Our local <strong>Chrome Extension FIFA Sniping Bot</strong> executes 100% locally inside your active browser session, utilizing stealth behavioral delays and anti-ban jitter algorithms to protect your club.
              </div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all">
              <button type="button" aria-expanded="true" className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-white">Does Elite FUT SNIPER support FC 25, FC 26, and upcoming FC 27 Web Apps?</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Yes! Elite FUT SNIPER is engineered for total cross-title compatibility across <strong>FC 25, FC 26, and upcoming FC 27</strong>. Our team continuously updates search filters and Web App adapters so your <strong>FC 26 &amp; FC 27 Autobuyer</strong> features stay operational on day one of every new season release.
              </div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all">
              <button type="button" aria-expanded="true" className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-white">How does the EA FC 26 &amp; FC 27 SBC Solver work?</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Our <strong>EA FC 26 &amp; FC 27 SBC Solver</strong> integration works directly within your browser session to automatically source and buy the cheapest players required for any Squad Building Challenge, saving you hours of manual searching.
              </div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all">
              <button type="button" aria-expanded="true" className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-white">Is it really a Safe Sniping Bot?</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Security is our priority. Since our bot runs locally in your browser instead of on remote cloud servers, you never share passwords or cookies with third parties. We also utilize human-like delays, jitter clicks, and behavioral patterns to ensure account safety.
              </div>
            </div>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all">
              <button type="button" aria-expanded="true" className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
                <span className="font-bold text-white">How do I claim Free Beta access for the FC 26 &amp; FC 27 Sniping Bot?</span>
                <span className="material-symbols-outlined text-primary" aria-hidden="true">expand_more</span>
              </button>
              <div className="px-6 pb-6 text-gray-400 text-sm">
                Simply join our official Discord community! We are offering free lifetime beta access for early adopters. Once you join, you will receive step-by-step instructions on installing the browser extension and configuring your first <strong>FC 26 &amp; FC 27 Autobuyer</strong> filters.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">Ready to Make Millions <br /> of <span className="text-primary">Coins?</span></h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Join the 87 early testers who are already dominating the market. Beta slots are closing soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="px-10 py-5 bg-primary text-dark font-black text-xl rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2" href="https://discord.gg/Rkb9nF6WG6">
              JOIN THE BETA
              <span className="material-symbols-outlined font-black">arrow_forward</span>
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest font-bold">No credit card required for beta access</p>
        </div>
      </section>

      <section className="py-24 bg-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white">Join the <span className="text-primary">Elite Community</span></h2>
          <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
            Join our Discord today to claim one of the last remaining <span className="text-white font-bold decoration-primary decoration-4 underline underline-offset-4">lifetime free access slots</span> for beta testers! Don&apos;t miss your chance to own the market for free.
          </p>
          <div className="flex justify-center">
            <Link className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-dark font-black text-2xl rounded-2xl hover:scale-105 transition-all shadow-[0_0_60px_rgba(204,255,0,0.5)] active:scale-95" href="https://discord.gg/Rkb9nF6WG6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"></path></svg>
              Join Discord &amp; Claim Free Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
