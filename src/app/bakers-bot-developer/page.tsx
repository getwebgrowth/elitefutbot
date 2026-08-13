import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Baker's Bot Developer Creates Elite FUT SNIPER",
  description: "Built by the core engineer behind Baker's Bot. Elite FUT SNIPER is an independent 100% local FC 26 sniping bot built from scratch.",
  alternates: { canonical: "https://elitefutbot.com/bakers-bot-developer" },
  openGraph: {
    title: "Baker's Bot Developer Creates Elite FUT SNIPER",
    description: "Built by the core engineer behind Baker's Bot. Elite FUT SNIPER is an independent 100% local FC 26 sniping bot.",
    url: "https://elitefutbot.com/bakers-bot-developer",
    siteName: "Elite FUT SNIPER",
    type: "article",
  },
  twitter: {
    title: "Baker's Bot Developer Creates Elite FUT SNIPER",
    description: "Built by the core engineer behind Baker's Bot.",
  }
};

export default function BakersBotDeveloperPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Is Elite FUT SNIPER made by the same developer who built Baker's Bot?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. From 2020 to 2025, I was hired directly by the owner of Baker's Bot to build its core automation engine, market search timing, and anti-ban systems. In 2025, I launched Elite FUT SNIPER independently as a new codebase.",
        },
      },
      {
        '@type': 'Question',
        name: "What's different from Baker's Bot?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Elite FUT SNIPER was re-architected from scratch to run 100% locally as a Chrome extension. It operates with 20ms search speeds, includes an integrated AI SBC solver, and processes all request pacing directly in your browser without external servers.",
        },
      },
      {
        '@type': 'Question',
        name: "Does Elite FUT SNIPER need my EA password?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No. Because Elite FUT SNIPER runs locally inside your active Web App session, it never asks for or stores your EA account credentials, passwords, or security codes.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#060606] text-gray-200 pt-28 pb-24 relative overflow-hidden font-body selection:bg-primary selection:text-black">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />

        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Top Badge & Header */}
          <header className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(204,255,0,0.15)]">
              <Image 
                src="/bakersbot-avatar.webp" 
                alt="Bakers Bot Lead Developer" 
                width={20} 
                height={20} 
                className="w-5 h-5 rounded-full object-cover border border-primary/40 shadow-sm"
              />
              <span>Engineering History &amp; Origin</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase font-headline">
              The Developer Behind <span className="text-primary">Baker&apos;s Bot</span> Built Something New: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">Elite FUT SNIPER</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mx-auto">
              I spent five years engineering the core market-search engine and automation logic for Baker&apos;s Bot. In 2025, I stepped out to build a completely independent codebase from scratch — designed around 100% local browser execution, transparent architecture, and zero password sharing.
            </p>
          </header>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
            <div className="text-center p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="block text-2xl sm:text-3xl font-black text-primary font-headline">5 Years</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">Baker&apos;s Bot Engine Dev</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="block text-2xl sm:text-3xl font-black text-white font-headline">100%</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">Local Chrome Execution</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="block text-2xl sm:text-3xl font-black text-primary font-headline">20ms</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">Market Search Speed</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="block text-2xl sm:text-3xl font-black text-white font-headline">Zero</span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold">EA Password Sharing</span>
            </div>
          </div>

          {/* Video Showcase Frame */}
          <section className="space-y-4">
            <div className="p-2 sm:p-4 rounded-3xl bg-white/[0.02] border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
              {/* Top Terminal Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D0D] rounded-t-2xl border-b border-white/10 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span>TECHNICAL BRIEFING // ENGINE DEMO</span>
                </div>
                <div className="text-xs font-mono text-gray-400 hidden sm:block">
                  v4.2 LOCAL EXECUTION
                </div>
              </div>

              {/* YouTube Responsive Video Container */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/5 shadow-2xl">
                <iframe
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://www.youtube-nocookie.com/embed/uaXx0upIiGU?autoplay=0&rel=0&modestbranding=1"
                  title="Elite FUT SNIPER Technical Demonstration"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                />
              </div>
            </div>
          </section>

          {/* Timeline / Origin Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Section 1 */}
            <section className="space-y-4 p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined font-black">terminal</span>
                  <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-wider text-white">
                    Five Years Engineering Baker&apos;s Bot&apos;s Core Logic
                  </h2>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  As a 10-year full-stack automation developer, I was hired directly by the owner of Baker&apos;s Bot in 2020 to design and build its core technical foundation. Over the next five years, I developed the search engine timing, request throttling, market data parsing, and humanized input delays that powered its automated trading.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Building a high-performance <span className="text-white font-semibold">FUT sniping bot</span> requires balancing extreme execution speed with human safety patterns. Every algorithm update, request interval, and safety system implemented during those years was crafted hands-on in code to keep market searches stable and fast.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs font-mono text-gray-400">
                TIMELINE: 2020 — 2025 // LEAD CORE AUTOMATION DEVELOPER
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined font-black">hub</span>
                  <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-wider text-white">
                    Why I Went Independent in 2025
                  </h2>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  By 2025, my vision for market automation focused entirely on total architectural control and zero-trust security. I wanted to eliminate external server dependencies and middleman cloud infrastructure completely.
                </p>

                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Rather than relying on server-side processing or external relay hubs, I left to build <span className="text-white font-semibold">Elite FUT SNIPER</span> as a standalone platform. This transition allowed me to design a system where users retain total control over their data, sessions, and automation preferences. You can explore full feature breakdowns on our <Link href="/" className="text-primary hover:underline font-bold">homepage</Link>.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs font-mono text-gray-400">
                MILESTONE: 2025 // 100% INDEPENDENT CODEBASE LAUNCH
              </div>
            </section>
          </div>

          {/* Section 3 */}
          <section className="space-y-6 p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-primary/20 shadow-[0_0_40px_rgba(204,255,0,0.05)]">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined font-black text-2xl">memory</span>
              <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-wider text-white">
                What I Built Differently With Elite FUT SNIPER
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Starting from a clean repository gave me the freedom to rethink every line of code. Instead of modifying legacy systems, I architected a modern <span className="text-white font-semibold">local Chrome extension sniper</span> engineered for low latency and privacy:
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 text-sm font-medium">
              <li className="p-5 rounded-xl bg-black/50 border border-white/5 space-y-2 hover:border-primary/30 transition-all">
                <span className="text-primary font-bold block uppercase tracking-wider text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">laptop</span>
                  100% Local Execution
                </span>
                <p className="text-gray-400 leading-relaxed">All search loops and calculations execute directly inside your browser. No middleman cloud servers process your requests.</p>
              </li>
              <li className="p-5 rounded-xl bg-black/50 border border-white/5 space-y-2 hover:border-primary/30 transition-all">
                <span className="text-primary font-bold block uppercase tracking-wider text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  20ms Response Speeds
                </span>
                <p className="text-gray-400 leading-relaxed">Direct DOM and network hook triggers allow sub-millisecond market evaluation for maximum speed on competitive listings.</p>
              </li>
              <li className="p-5 rounded-xl bg-black/50 border border-white/5 space-y-2 hover:border-primary/30 transition-all">
                <span className="text-primary font-bold block uppercase tracking-wider text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">shield</span>
                  Zero Credential Sharing
                </span>
                <p className="text-gray-400 leading-relaxed">Works seamlessly with your existing, logged-in Web App session. Never asks for or stores EA account passwords.</p>
              </li>
              <li className="p-5 rounded-xl bg-black/50 border border-white/5 space-y-2 hover:border-primary/30 transition-all">
                <span className="text-primary font-bold block uppercase tracking-wider text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">psychology</span>
                  Integrated AI SBC Solver
                </span>
                <p className="text-gray-400 leading-relaxed">Calculates optimal SBC card combinations locally using real-time club inventory without relying on external solver queues.</p>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed pt-2">
              Whether you need a specialized <span className="text-white font-semibold">FC 26 sniping bot</span> or a flexible <span className="text-white font-semibold">FUT autobuyer</span>, local execution ensures your session data never leaves your computer.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 text-primary mb-2">
              <span className="material-symbols-outlined font-black">code</span>
              <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-wider text-white">
                Built By an Engineer, Not a Marketing Team
              </h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I run this project as a developer. I write the automation logic, maintain the updates, and engage directly with our users. There are no sales layers or hype cycles — just transparent engineering focused on speed, reliability, and security.
            </p>

            <p className="text-gray-300 leading-relaxed">
              For continuous updates and market strategies, check out the <Link href="/blog" className="text-primary hover:underline font-bold">Tactical Intel Hub blog</Link> or review our <Link href="/#pricing" className="text-primary hover:underline font-bold">flexible pricing plans</Link>.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6 pt-4">
            <div className="space-y-2">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">Origin &amp; Architecture FAQ</h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-lg font-bold text-white font-headline">
                  Is Elite FUT SNIPER made by the same developer who built Baker&apos;s Bot?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Yes. From 2020 to 2025, I was hired directly by the owner of Baker&apos;s Bot to build its core automation engine, market search timing systems, and anti-ban safeguards. In 2025, I launched Elite FUT SNIPER independently as a new, standalone codebase.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-lg font-bold text-white font-headline">
                  What&apos;s different from Baker&apos;s Bot?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Elite FUT SNIPER was re-architected from scratch to run 100% locally inside your browser as a Chrome extension. It delivers 20ms search speeds, features a built-in AI SBC solver, and operates without any cloud server dependencies or external request relays.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                <h3 className="text-lg font-bold text-white font-headline">
                  Does Elite FUT SNIPER need my EA password?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  No. Because it functions as a local Chrome extension sniper within your active Web App session, it never asks for, stores, or transmits your EA account credentials or passwords.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="p-10 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 text-center space-y-6 shadow-[0_0_50px_rgba(204,255,0,0.1)]">
            <h2 className="text-3xl sm:text-4xl font-black font-headline uppercase text-white tracking-tight">
              Test the Next-Gen Engine Today
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Join our active Discord community to claim a free beta slot, test 20ms local search speeds, and connect directly with the developer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Join Discord Beta
              </Link>
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                View Access Plans
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
