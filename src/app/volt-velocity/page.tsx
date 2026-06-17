import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volt Velocity - Elite FUT SNIPER Design System",
  description: "The core design system behind Elite FUT SNIPER. Kinetic aesthetics, high-performance UI components, and premium trading interfaces.",
  keywords: ["Volt Velocity", "design system", "Elite FUT SNIPER UI", "FUT Sniper UI", "trading interface design"],
};

export default function VoltVelocityDesignSystemPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 font-body selection:bg-primary selection:text-black min-h-screen text-slate-100">
      <header className="mb-16 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary animate-pulse"></div>
          <span className="font-headline text-xs uppercase tracking-[0.2rem] text-primary">System Architecture</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-white">
          Tactical <span className="text-primary italic">Velocity</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          The Kinetic Command Center Design System. Engineered for elite performance, this system rejects flat design in favor of technical depth, active glows, and intentional asymmetry.
        </p>
      </header>

      <div className="space-y-24">
        {/* Colors Section */}
        <section>
          <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-white mb-8 border-b border-[#444933]/30 pb-4">
            Color &amp; Tonal Architecture
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="h-24 bg-[#131313] rounded-lg border border-[#444933]/30 flex items-end p-4">
                <span className="text-xs font-headline text-slate-400">#131313</span>
              </div>
              <p className="font-headline text-sm font-bold text-white">Surface</p>
              <p className="text-xs text-slate-400">Base level canvas</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-[#1c1b1b] rounded-lg border border-[#444933]/30 flex items-end p-4">
                <span className="text-xs font-headline text-slate-400">#1C1B1B</span>
              </div>
              <p className="font-headline text-sm font-bold text-white">Surface Low</p>
              <p className="text-xs text-slate-400">Sectioning groupings</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-[#2a2a2a] rounded-lg border border-[#444933]/30 flex items-end p-4">
                <span className="text-xs font-headline text-slate-400">#2A2A2A</span>
              </div>
              <p className="font-headline text-sm font-bold text-white">Surface High</p>
              <p className="text-xs text-slate-400">Tactical modules</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-primary rounded-lg flex items-end p-4 shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                <span className="text-xs font-headline text-black font-bold">#CCFF00</span>
              </div>
              <p className="font-headline text-sm font-bold text-white">Primary Neon</p>
              <p className="text-xs text-slate-400">Active interaction</p>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-white mb-8 border-b border-[#444933]/30 pb-4">
            Typography: Technical Authority
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-headline text-slate-400 uppercase tracking-widest mb-2">Display &amp; Headlines</p>
                <div className="p-6 bg-[#1c1b1b] rounded-lg border border-[#444933]/10">
                  <h3 className="font-headline text-4xl font-black text-white italic kinetic-headline">Space Grotesk</h3>
                  <p className="text-sm text-slate-400 mt-4 leading-relaxed font-body">Used for high-impact numbers and section headers. Conveys a modern, algorithmic feel.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-headline text-slate-400 uppercase tracking-widest mb-2">Body &amp; Labels</p>
                <div className="p-6 bg-[#1c1b1b] rounded-lg border border-[#444933]/10">
                  <h3 className="font-body text-4xl font-medium text-white">Inter</h3>
                  <p className="text-sm text-slate-400 mt-4 leading-relaxed font-body">Used for all data tables and readable body content. High x-height ensures legibility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interface Modules */}
        <section>
          <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-white mb-8 border-b border-[#444933]/30 pb-4">
            Tactical Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-[#1c1b1b] rounded-lg border border-[#444933]/20 space-y-8">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-widest">Buttons (Tactical Triggers)</h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-headline text-slate-400 uppercase tracking-widest">Primary</p>
                  <button className="bg-gradient-to-br from-white to-primary text-black font-headline font-black text-xs px-6 py-3 rounded uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                    Engage Protocol
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-headline text-slate-400 uppercase tracking-widest">Secondary</p>
                  <button className="border border-[#444933] text-slate-300 font-headline font-bold text-xs px-6 py-3 rounded uppercase tracking-widest hover:bg-[#353534] transition-colors">
                    Cancel Sync
                  </button>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#1c1b1b] rounded-lg border border-[#444933]/20 space-y-8">
              <h3 className="font-headline text-sm font-bold text-white uppercase tracking-widest">Indicators &amp; Chips</h3>
              <div className="space-y-8">
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-headline text-slate-400 uppercase tracking-widest">Status Pulse</p>
                  <div className="flex items-center gap-2">
                    <span className="live-pulse"></span>
                    <span className="label-sm-allcaps text-slate-300">System Live</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-[10px] font-headline text-slate-400 uppercase tracking-widest">Value Chip</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5d7602] text-[#defd83] rounded-sm text-xs font-bold w-max">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                    +5.2% Margin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
