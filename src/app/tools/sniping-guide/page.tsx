import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "FC 25 Trading Guide - Advanced Market Filters",
  description: "Master the art of trading in FC 25 with our comprehensive guide. Expert filter settings for Mbappé, Vinícius Jr, and elite division cards.",
  keywords: ["FC 25 trading guide", "FIFA market filters", "how to trade FIFA players", "trading layout settings"],
};

export default function SnipingGuidePage() {
  return (
    <div className="flex max-w-[1440px] mx-auto bg-[#1c1b1b] min-h-screen text-slate-100 font-body selection:bg-primary selection:text-black">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col min-h-screen sticky top-[72px] w-64 bg-[#131313] py-8 px-4 border-r border-[#353534]">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 rounded-lg bg-[#2a2a2a] flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">shield</span>
          </div>
          <div>
            <div className="font-headline font-bold text-sm text-primary kinetic-headline">Elite Trader</div>
            <div className="label-sm-allcaps text-slate-400">Gold Member</div>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <Link className="flex items-center gap-3 px-4 py-3 text-[#c4c9ac] hover:bg-[#2a2a2a] hover:translate-x-1 transition-all duration-200 rounded-lg group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
            <span className="font-headline font-medium text-sm">Dashboard</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 bg-[#2a2a2a] text-primary rounded-lg shadow-[inset_2px_0_0_#CCFF00]" href="#">
            <span className="material-symbols-outlined">trending_up</span>
            <span className="font-headline font-medium text-sm">Price Alerts</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-[#c4c9ac] hover:bg-[#2a2a2a] hover:translate-x-1 transition-all duration-200 rounded-lg group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">target</span>
            <span className="font-headline font-medium text-sm">Market Assistant</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 text-[#c4c9ac] hover:bg-[#2a2a2a] hover:translate-x-1 transition-all duration-200 rounded-lg group" href="#">
            <span className="material-symbols-outlined group-hover:text-primary">payments</span>
            <span className="font-headline font-medium text-sm">Profit Log</span>
          </Link>
        </nav>
        <div className="mt-auto pt-6 border-t border-[#353534]">
          <button className="w-full flex items-center justify-center gap-2 py-3 mb-4 bg-gradient-to-br from-white to-primary text-black font-headline font-bold text-xs uppercase tracking-widest rounded-lg hover:scale-[0.98] transition-transform shadow-[0_4px_12px_rgba(204,255,0,0.1)]">
            <span className="material-symbols-outlined text-sm">bolt</span> Get the Extension
          </button>
          <div className="space-y-1">
            <Link className="flex items-center gap-3 px-4 py-2 label-sm-allcaps text-slate-400 hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">help</span> Help
            </Link>
            <Link className="flex items-center gap-3 px-4 py-2 label-sm-allcaps text-slate-400 hover:text-white transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">logout</span> Logout
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 space-y-10 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative rounded-md overflow-hidden bg-[#0e0e0e] min-h-[320px] flex items-end p-8 md:p-12">
          <div className="absolute inset-0 opacity-40">
            <Image 
              fill
              alt="Football stadium at night with dramatic lights" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsEiYb30W0MYLEw7CmXyrZ3txd8kzzXlefbb0CocEMpZ71u1s2wLrjCedIstMVCnBllWHzGl4_w16SO_OJdPh_eUYPNhW7fNIfvCBTSPb8B0523HlrymWtQxLHxP0g6NCPTCKjxqWUN1kjK4Y35H5gw_muePIqZXKaXUnuObVkKFkbABI4-3T0DtKv8oh_gct10TAeJfjV9H9fcYACBbyodYL6S1zdek0Lg4qyKn2dXv-o6uCZifMQNZYj1W877fyFNZG11ZRzDQY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-widest mb-4 rounded-sm">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
              Live Filter
            </div>
            <h1 className="font-headline font-black text-4xl md:text-6xl text-white leading-tight kinetic-headline italic uppercase">
              Kylian Mbappé <br />
              <span className="text-primary">FC 26 Market Filter</span>
            </h1>
            <p className="mt-4 text-slate-400 font-body text-lg max-w-lg">
              The definitive price guide and tactical filter settings for the world&apos;s most elite digital athlete.
            </p>
          </div>
          <div className="absolute top-8 right-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-sm shadow-[0_0_8px_#ccff00]"></div>
            <span className="label-sm-allcaps text-slate-400">System Live</span>
          </div>
        </section>

        {/* Data Modules Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hardware-Style Price Monitor Card */}
          <div className="lg:col-span-2 hardware-module p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline font-bold text-xl text-white uppercase kinetic-headline">Price Monitor</h3>
                <p className="label-sm-allcaps text-slate-400 mt-1 italic opacity-60">Real-time market analytics</p>
              </div>
              <span className="material-symbols-outlined text-primary/80">analytics</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="label-sm-allcaps text-slate-400">Market Price</span>
                  <span className="live-pulse"></span>
                </div>
                <div className="data-display font-headline font-black text-4xl text-white tabular-nums tracking-tighter">950,000</div>
              </div>
              <div className="space-y-2">
                <span className="label-sm-allcaps text-slate-400">Trading Target</span>
                <div className="data-display font-headline font-black text-4xl text-primary tabular-nums tracking-tighter">850,000</div>
              </div>
              <div className="space-y-2">
                <span className="label-sm-allcaps text-primary">Estimated Profit</span>
                <div className="data-display flex flex-col items-center">
                  <div className="font-headline font-black text-3xl text-primary neon-glow tabular-nums tracking-tighter">+52,500</div>
                  <p className="label-sm-allcaps text-primary/50 mt-1 italic">After EA Tax</p>
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-[#2a2a2a] p-8 rounded-md relative">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-primary"></div>
              <h3 className="font-headline font-bold text-lg text-white uppercase kinetic-headline">Filters</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="label-sm-allcaps text-slate-400">League</span>
                <span className="text-sm text-white font-headline font-bold">La Liga</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="label-sm-allcaps text-slate-400">Nation</span>
                <span className="text-sm text-white font-headline font-bold">France</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="label-sm-allcaps text-slate-400">Club</span>
                <span className="text-sm text-white font-headline font-bold">Real Madrid</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="label-sm-allcaps text-slate-400">Quality</span>
                <span className="text-sm text-white font-headline font-bold">Gold</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="label-sm-allcaps text-slate-400">Rarity</span>
                <span className="text-sm font-headline font-bold text-[#C5A059]">Rare</span>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Timing Intelligence */}
          <div className="bg-[#2a2a2a] p-8 rounded-md">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline font-bold text-xl text-white uppercase kinetic-headline italic">Velocity Windows</h3>
              <span className="material-symbols-outlined text-[#8e9379]">schedule</span>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-[#0e0e0e] rounded-md border-l-4 border-primary relative overflow-hidden group">
                <div className="absolute right-[-20px] top-[-20px] opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">bolt</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="label-sm-allcaps text-primary">Prime Velocity</span>
                  <span className="label-sm-allcaps text-slate-400">HIGH LIQUIDITY</span>
                </div>
                <div className="text-2xl font-headline font-bold text-white uppercase kinetic-headline">02:00 — 04:00 AM UK</div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">Maximum supply injection during late-night US hours results in the highest frequency of underpriced listings.</p>
              </div>
              <div className="p-5 bg-[#0e0e0e] rounded-md opacity-60">
                <div className="flex justify-between items-center mb-2">
                  <span className="label-sm-allcaps text-white">Secondary Window</span>
                  <span className="label-sm-allcaps text-slate-400">MID LIQUIDITY</span>
                </div>
                <div className="text-2xl font-headline font-bold text-white uppercase kinetic-headline">06:00 — 08:00 PM UK</div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">High competition window during content drops. Recommended for advanced traders only.</p>
              </div>
            </div>
          </div>
          {/* Similar Opportunities */}
          <div className="space-y-6">
            <h3 className="font-headline font-bold text-xl text-white uppercase kinetic-headline italic">Tactical Alternates</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#2a2a2a] p-6 rounded-md hover:bg-[#353534] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 rounded bg-[#0e0e0e] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs text-primary">trending_up</span>
                  </div>
                  <span className="label-sm-allcaps text-[#b5d25e]">+4.2%</span>
                </div>
                <div className="font-headline font-bold text-lg text-white group-hover:text-primary transition-colors kinetic-headline">Vinícius Jr.</div>
                <div className="label-sm-allcaps text-slate-400 mt-1">Real Madrid • LW</div>
              </div>
              <div className="bg-[#2a2a2a] p-6 rounded-md hover:bg-[#353534] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 rounded bg-[#0e0e0e] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs text-primary">trending_up</span>
                  </div>
                  <span className="label-sm-allcaps text-[#b5d25e]">+2.8%</span>
                </div>
                <div className="font-headline font-bold text-lg text-white group-hover:text-primary transition-colors kinetic-headline">Bellingham</div>
                <div className="label-sm-allcaps text-slate-400 mt-1">Real Madrid • CM</div>
              </div>
              <div className="bg-[#2a2a2a] p-6 rounded-md hover:bg-[#353534] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 rounded bg-[#0e0e0e] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs text-primary">trending_up</span>
                  </div>
                  <span className="label-sm-allcaps text-[#b5d25e]">+5.1%</span>
                </div>
                <div className="font-headline font-bold text-lg text-white group-hover:text-primary transition-colors kinetic-headline">Fede Valverde</div>
                <div className="label-sm-allcaps text-slate-400 mt-1">Real Madrid • CM</div>
              </div>
              <div className="bg-[#2a2a2a] p-6 rounded-md hover:bg-[#353534] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-8 h-8 rounded bg-[#0e0e0e] flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs text-primary">trending_up</span>
                  </div>
                  <span className="label-sm-allcaps text-[#b5d25e]">+1.5%</span>
                </div>
                <div className="font-headline font-bold text-lg text-white group-hover:text-primary transition-colors kinetic-headline">Camavinga</div>
                <div className="label-sm-allcaps text-slate-400 mt-1">Real Madrid • CDM</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main SaaS CTA */}
        <section className="relative rounded-md overflow-hidden bg-gradient-to-br from-white via-primary to-[#b5d25e] p-10 md:p-16 text-black shadow-[0_20px_60px_-15px_rgba(204,255,0,0.3)] mb-12">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-[12rem]" style={{ fontVariationSettings: "'FILL' 1" }}>target</span>
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
            <h2 className="font-headline font-black text-3xl md:text-5xl uppercase italic kinetic-headline leading-none">
              Unleash the Elite Market Assistant
            </h2>
            <p className="text-black font-medium text-lg opacity-90 max-w-xl mx-auto">
              Stop manual refreshing. Access Kylian Mbappé&apos;s advanced algorithmic filters and let our extension highlight the deals for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-black text-primary font-headline font-black uppercase tracking-[0.15em] rounded hover:translate-y-[-4px] transition-transform duration-200 shadow-xl">
                Upgrade to Elite
              </button>
              <button className="w-full sm:w-auto px-12 py-5 border-2 border-black text-black font-headline font-bold uppercase tracking-[0.15em] rounded hover:bg-black hover:text-primary transition-all">
                View Live Demo
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
