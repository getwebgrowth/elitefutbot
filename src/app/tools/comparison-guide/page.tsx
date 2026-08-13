import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FUT Bot Comparison Hub – Elite FUT SNIPER vs All Competitors",
  description: "Compare Elite FUT SNIPER against every major FUT sniping bot and trading tool. Side-by-side feature, speed, and safety breakdowns for Baker's Bot, FutEarn, FUT Master, and more.",
  alternates: {
    canonical: "https://elitefutbot.com/tools/comparison-guide",
  },
  openGraph: {
    title: "FUT Bot Comparison Hub – Elite FUT SNIPER vs All Competitors",
    description: "Compare Elite FUT SNIPER against every FUT bot and trading tool. Full breakdowns including speed, safety, and features.",
    url: "https://elitefutbot.com/tools/comparison-guide",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Bot Comparison Hub – Elite FUT SNIPER vs All Competitors",
    description: "Compare Elite FUT SNIPER against every FUT bot. Speed, safety, features — full side-by-side breakdowns.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

const COMPARISONS = [
  {
    slug: "bakers-bot-vs-elitefutbot",
    name: "Baker's Bot",
    type: "Cloud Bot",
    badge: "Same Developer",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    summary: "Built by the same core engineer. See why local execution beats cloud in every metric.",
    eliteAdvantage: "10 of 10 categories",
  },
  {
    slug: "futsimpletrader-vs-elitefutbot",
    name: "FUT Simple Trader",
    type: "Manual Tool",
    badge: "Manual vs Automated",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    summary: "Manual trading tools can't compete with 20ms automated sniping.",
    eliteAdvantage: "9 of 10 categories",
  },
  {
    slug: "futearn-vs-elitefutbot",
    name: "FutEarn",
    type: "Cloud Bot",
    badge: "Requires EA Password",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    summary: "Cloud servers + credential sharing vs zero-password local execution.",
    eliteAdvantage: "9 of 10 categories",
  },
  {
    slug: "futmaster-vs-elitefutbot",
    name: "FUT Master",
    type: "Cloud Platform",
    badge: "Server Latency",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    summary: "Cloud platform latency vs Elite's 20ms local browser execution.",
    eliteAdvantage: "8 of 10 categories",
  },
  {
    slug: "futsniper-vs-elitefutbot",
    name: "FUT Sniper",
    type: "Cloud Bot",
    badge: "7–15x Slower",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    summary: "Legacy cloud sniper adds 150–300ms latency Elite FUT SNIPER eliminates.",
    eliteAdvantage: "9 of 10 categories",
  },
  {
    slug: "futalert-vs-elitefutbot",
    name: "FUT Alert",
    type: "Alert Service",
    badge: "Notifications Only",
    badgeColor: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    summary: "By the time an alert reaches you, Elite FUT SNIPER has already bought the deal.",
    eliteAdvantage: "9 of 10 categories",
  },
  {
    slug: "futai-vs-elitefutbot",
    name: "FUT AI",
    type: "Cloud AI Bot",
    badge: "Cloud AI Latency",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    summary: "Cloud AI processing vs Elite's local AI SBC solver — instant vs delayed.",
    eliteAdvantage: "9 of 10 categories",
  },
  {
    slug: "autobuyer-vs-elitefutbot",
    name: "Cloud Autobuyers",
    type: "Cloud Bots (General)",
    badge: "Datacenter IPs",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    summary: "The old model: cloud servers, shared IPs, credential exposure. Elite is the next generation.",
    eliteAdvantage: "9 of 10 categories",
  },
  {
    slug: "club-sniping-vs-elitefutbot",
    name: "Club Sniping",
    type: "Manual Community",
    badge: "Human Speed Limit",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    summary: "Manual sniping loses to bots. Elite automates it at 20ms — 50–150x faster.",
    eliteAdvantage: "9 of 10 categories",
  },
  {
    slug: "futchampions-bot-vs-elitefutbot",
    name: "FUT Champions Bot",
    type: "Cloud Bot",
    badge: "Limited Scope",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    summary: "Champion reward focus vs Elite's full market automation + AI SBC solver.",
    eliteAdvantage: "8 of 10 categories",
  },
];

export default function ComparisonGuidePage() {
  return (
    <main className="min-h-screen bg-[#060606] text-gray-200 pt-28 pb-24 relative overflow-hidden font-body selection:bg-primary selection:text-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <header className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">compare_arrows</span>
            Comparison Hub — 10 Detailed Breakdowns
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase font-headline">
            Elite FUT SNIPER vs <span className="text-primary">Every Competitor</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Side-by-side feature, speed, and safety comparisons between Elite FUT SNIPER and every major FUT sniping bot, trading tool, and autobuyer on the market. Updated 2026.
          </p>
        </header>

        {/* Why Local Wins — Quick Summary */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Search Speed", value: "20ms", sub: "vs 100–500ms cloud" },
            { label: "EA Password", value: "Never", sub: "required or shared" },
            { label: "Execution", value: "Local", sub: "100% in your browser" },
            { label: "AI SBC Solver", value: "Built-in", sub: "real-time local AI" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-primary font-headline [text-shadow:0_0_20px_rgba(204,255,0,0.3)]">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
              <div className="text-[10px] text-gray-600">{stat.sub}</div>
            </div>
          ))}
        </section>

        {/* Competitor Cards Grid */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">All Comparisons</span>
            <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
              Choose a Competitor to Compare
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPARISONS.map((comp) => (
              <Link
                key={comp.slug}
                href={`/${comp.slug}`}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-300 space-y-4 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-black text-white font-headline text-lg group-hover:text-primary transition-colors">{comp.name}</p>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{comp.type}</p>
                  </div>
                  <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border ${comp.badgeColor}`}>
                    {comp.badge}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">{comp.summary}</p>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono text-gray-600 uppercase">Elite wins</span>
                  <span className="text-xs font-bold text-primary">{comp.eliteAdvantage}</span>
                </div>

                <div className="flex items-center gap-2 text-primary text-xs font-bold group-hover:gap-3 transition-all">
                  <span>View Full Comparison</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="p-10 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 text-center space-y-6 shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase text-white tracking-tight">
            Stop Comparing. Start Winning.
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Join thousands of FUT traders running Elite FUT SNIPER — the only 100% local Chrome extension with 20ms sniping, AI SBC solving, and zero password sharing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] inline-flex items-center justify-center gap-2"
            >
              Join Discord — Free Beta
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              View Homepage
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
