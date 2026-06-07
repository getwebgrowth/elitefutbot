import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tactical Intel Hub - FC 25 Trading Blog",
  description: "Get the latest market analysis, trading intel, and protocol updates for FC 25 and 26. Master the 59th minute with our expert guides.",
  keywords: ["FC 25 trading blog", "FIFA market analysis", "sniping guide", "FUT Sniper updates"],
};

export default function BlogHubPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 selection:bg-primary selection:text-black font-body text-slate-100">
      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1.5 h-1.5 bg-primary animate-ping"></div>
          <span className="font-headline text-xs tracking-[0.3em] text-primary uppercase font-bold">Tactical Intelligence Hub</span>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white">
          Intel <span className="text-on-surface-variant/20">Grid</span>
        </h1>
        <div className="flex flex-wrap gap-1 border-y border-outline-variant/20 py-4">
          <button className="px-6 py-2 bg-surface-container-high text-white text-[10px] font-headline font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">All Streams</button>
          <button className="px-6 py-2 bg-[#0A0A0A] text-slate-400 text-[10px] font-headline font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">Market Analysis</button>
          <button className="px-6 py-2 bg-[#0A0A0A] text-slate-400 text-[10px] font-headline font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">Protocol Updates</button>
          <button className="px-6 py-2 bg-[#0A0A0A] text-slate-400 text-[10px] font-headline font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">Trading Intel</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-1">
          {/* Featured Intel */}
          <section className="intel-card group relative overflow-hidden bg-[#1A1A1A]">
            <div className="grid md:grid-cols-2 min-h-[400px]">
              <div className="relative overflow-hidden">
                <Image 
                  fill
                  alt="Abstract data visual" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsNTGZE9eyBUMnaJtN8iE_RTvWOmPn5SLnINdLHIFCIYd58oYPzYBiDQwe8hCLB6xc8dLxxxd4dECL1hSgnYXwfZ5QMUDDOVJr4uMpTkkwQElt1_b44GvT2C67Fts4CpTIqH4_2e_IUs7uA1CtV3ATwbTvRXcnD88aDA_L-DxfUD5Fp99c5rVn29kesXsAywu4PA_44tYkjdgWwBU8PN5hUCrjpcSsJpIqGixK401mG2hYVSdjV7lcaMXSnaOMW2YOA1Uza5x_4b4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent md:hidden"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-[#1A1A1A]/80 z-10 backdrop-blur-sm">
                <span className="text-primary font-headline text-[10px] font-black uppercase tracking-[0.3em] mb-4">Market Analysis // FEAT_01</span>
                <h2 className="font-headline text-3xl font-bold tracking-tight mb-4 uppercase leading-tight text-white">Mastering the 59th Minute: High-Frequency Sniping Protocol</h2>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 font-body">Algorithm patterns and predictive price drop anticipation for v4.2 systems.</p>
                <Link className="pulse-lime inline-flex items-center gap-4 text-white font-headline text-xs font-black uppercase tracking-[0.2em]" href="/article/tactical-intel">
                  Initialize Protocol <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Intel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {/* Card 1 */}
            <article className="intel-card bg-[#0F0F0F] p-8 group">
              <span className="text-primary font-headline text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Protocol Updates</span>
              <h3 className="font-headline text-xl font-bold tracking-tight mb-4 uppercase leading-tight text-white">Antisurge Protection: Stealth Deployment</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8 font-body">Human-imitation algorithms and 20ms response latency benchmarks.</p>
              <Link className="pulse-lime text-white font-headline text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2" href="/article/tactical-intel">
                Access Data <span className="material-symbols-outlined text-xs">terminal</span>
              </Link>
            </article>
            {/* Card 2 */}
            <article className="intel-card bg-[#0F0F0F] p-8 group">
              <span className="text-primary font-headline text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Market Analysis</span>
              <h3 className="font-headline text-xl font-bold tracking-tight mb-4 uppercase leading-tight text-white">Post-TOTY Recovery: Profit Heatmaps</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8 font-body">Liquidating high-tier fodder based on historical rebound telemetry.</p>
              <Link className="pulse-lime text-white font-headline text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2" href="/article/tactical-intel">
                Access Data <span className="material-symbols-outlined text-xs">analytics</span>
              </Link>
            </article>
            {/* Card 3 */}
            <article className="intel-card bg-[#0F0F0F] p-8 group">
              <span className="text-primary font-headline text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Trading Intel</span>
              <h3 className="font-headline text-xl font-bold tracking-tight mb-4 uppercase leading-tight text-white">Bronze Method 2.0: Revised Logic</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8 font-body">Volume-based accumulation strategies for entry-level capital building.</p>
              <Link className="pulse-lime text-white font-headline text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2" href="/article/tactical-intel">
                Access Data <span className="material-symbols-outlined text-xs">data_exploration</span>
              </Link>
            </article>
            {/* Card 4 */}
            <article className="intel-card bg-[#0F0F0F] p-8 group">
              <span className="text-primary font-headline text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Trading Intel</span>
              <h3 className="font-headline text-xl font-bold tracking-tight mb-4 uppercase leading-tight text-white">Web-App Encryption Security</h3>
              <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8 font-body">Proxy rotation cycles and session isolation for console security.</p>
              <Link className="pulse-lime text-white font-headline text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2" href="/article/tactical-intel">
                Access Data <span className="material-symbols-outlined text-xs">security</span>
              </Link>
            </article>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-1">
          {/* Beta Access */}
          <div className="bg-primary p-8 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className="material-symbols-outlined text-black font-bold">radar</span>
                <span className="font-headline text-[10px] font-black uppercase tracking-widest text-black">Live Signal Cluster</span>
              </div>
              <h3 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter text-black mb-6">
                87 Slots <br />Remaining
              </h3>
              <p className="text-xs text-black/80 font-bold leading-relaxed mb-8">
                Join 5,000+ elite traders receiving real-time market signals and instant access keys.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-black/20 h-1.5 w-full">
                <div className="bg-black h-full w-[13%]"></div>
              </div>
              <button className="w-full bg-black py-4 font-headline font-black uppercase tracking-tight text-primary hover:translate-y-[-2px] transition-transform">
                Join Discord
              </button>
            </div>
          </div>
          {/* Trending Intel */}
          <div className="intel-card bg-[#1A1A1A] p-8">
            <h4 className="font-headline text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-slate-500">Hot Signals</h4>
            <div className="space-y-8">
              <div className="group cursor-pointer">
                <div className="text-[10px] font-bold text-primary/40 mb-1">01_ANALYSIS</div>
                <div className="font-headline text-sm font-bold uppercase tracking-tight text-slate-300 group-hover:text-primary transition-colors">Market Crash Prediction: SBC Leak</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[10px] font-bold text-primary/40 mb-1">02_COMPARISON</div>
                <div className="font-headline text-sm font-bold uppercase tracking-tight text-slate-300 group-hover:text-primary transition-colors">Auto-Buy vs Sniper: Technical Diff</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[10px] font-bold text-primary/40 mb-1">03_STATUS</div>
                <div className="font-headline text-sm font-bold uppercase tracking-tight text-slate-300 group-hover:text-primary transition-colors">Global Node Status: Optimal</div>
              </div>
            </div>
          </div>
          {/* Protocol Feed */}
          <div className="intel-card bg-[#0F0F0F] p-8 border-t border-primary/20">
            <h4 className="font-headline text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-white">Protocol Feed</h4>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-8">Technical updates via encrypted mail.</p>
            <div className="space-y-2">
              <input className="w-full bg-[#1A1A1A] border-none text-[10px] font-headline font-bold placeholder:text-slate-500 p-4 focus:ring-1 focus:ring-primary uppercase tracking-widest text-white" placeholder="AGENT_ID@INTEL.NET" type="email" />
              <button className="w-full bg-primary py-4 text-[10px] font-headline font-black uppercase tracking-widest text-black hover:brightness-110 transition-all">
                INITIALIZE FEED
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
