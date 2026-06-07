import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program - Earn with FUT Sniper",
  description: "Join the FUT Sniper affiliate program and earn high commissions by promoting the world's most advanced FC 25 trading suite.",
  keywords: ["FUT Sniper affiliate", "earn with FIFA bot", "FC 25 affiliate program", "trading bot commissions"],
};

export default function AffiliatePage() {
  return (
    <main className="pt-32 pb-20 overflow-hidden bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-lg border border-outline-variant/20">
            <span className="w-2 h-2 bg-primary-container rounded-full pulse-pips"></span>
            <span className="text-xs font-label font-bold uppercase tracking-widest text-primary-fixed-dim">Status: Recruitment Live</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none">
            Become a <span className="text-primary-container">Strategic</span> Partner.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Join the most advanced automated trading network in FC 26. We build the tech; you scale the reach. Earn 50% Lifetime Commission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed px-8 py-4 font-headline font-black uppercase tracking-widest rounded-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform neon-glow">
              INITIALIZE PARTNERSHIP <span className="material-symbols-outlined">bolt</span>
            </button>
            <button className="border border-outline text-on-surface px-8 py-4 font-headline font-bold uppercase tracking-widest rounded-lg hover:bg-surface-container-highest transition-colors">
              VIEW INTEL REVEAL
            </button>
          </div>
        </div>
        
        {/* Central Card: Commission Module */}
        <div className="relative">
          <div className="absolute -inset-10 bg-primary-container/10 blur-[100px] rounded-full"></div>
          <div className="relative bg-surface-container-low p-1 rounded-xl border border-outline-variant/20">
            <div className="bg-surface p-12 rounded-lg border border-outline-variant/10 flex flex-col items-center text-center space-y-6">
              <span className="text-xs font-label font-black tracking-[0.3em] uppercase text-on-surface-variant">Primary Yield Rate</span>
              <div className="text-9xl font-headline font-black tracking-tighter text-primary-container neon-glow">50%</div>
              <div className="text-2xl font-headline font-bold uppercase tracking-tighter">LIFETIME COMMISSION</div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent my-4"></div>
              <div className="flex gap-8">
                <div className="text-center">
                  <div className="text-lg font-headline font-bold text-on-surface">INSTANT</div>
                  <div className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest">Payouts</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-headline font-bold text-on-surface">RECURRING</div>
                  <div className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-headline font-bold text-on-surface">0.00%</div>
                  <div className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest">Fee Structure</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Asymmetric Floating Data */}
          <div className="absolute -bottom-8 -left-8 glass-panel p-4 rounded-lg border border-outline-variant/30 shadow-2xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              </div>
              <div>
                <div className="text-xs font-label font-bold text-on-surface-variant uppercase">Network Growth</div>
                <div className="text-lg font-headline font-bold">+244% <span className="text-sm font-normal text-secondary opacity-70">Weekly</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Payout Ticker */}
      <div className="w-full bg-surface-container-lowest py-4 border-y border-outline-variant/10 overflow-hidden mb-32">
        <div className="flex whitespace-nowrap gap-12 items-center animate-marquee">
          <div className="flex items-center gap-2 px-4 border-r border-outline-variant/30">
            <div className="w-1.5 h-1.5 bg-primary-container rounded-full pulse-pips"></div>
            <span className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">Live Extraction Feed:</span>
          </div>
          <div className="flex gap-12 font-label text-sm font-medium tracking-tight">
            <span className="text-on-surface-variant">USER_882 extracted <span className="text-primary-container neon-glow">$450.00</span> via Crypto</span>
            <span className="text-on-surface-variant">USER_119 extracted <span className="text-primary-container neon-glow">$120.00</span> via PayPal</span>
            <span className="text-on-surface-variant">USER_004 extracted <span className="text-primary-container neon-glow">$2,105.00</span> via Crypto</span>
            <span className="text-on-surface-variant">USER_551 extracted <span className="text-primary-container neon-glow">$88.50</span> via PayPal</span>
            <span className="text-on-surface-variant">USER_992 extracted <span className="text-primary-container neon-glow">$670.00</span> via Crypto</span>
          </div>
        </div>
      </div>

      {/* Section 1: PARTNERSHIP BENEFITS */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-headline font-black uppercase tracking-tighter mb-4 italic">PARTNERSHIP BENEFITS</h2>
          <div className="h-1 w-20 bg-primary-container mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-container-high p-8 rounded-lg border-t-2 border-primary transition-all hover:bg-surface-container-highest group">
            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            </div>
            <h3 className="text-lg font-headline font-bold uppercase mb-4 tracking-tight">High-Octane Payouts</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Receive 50% of every subscription for as long as the user stays active.</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-lg border-t-2 border-transparent hover:border-primary transition-all hover:bg-surface-container-highest group">
            <div className="mb-6 text-primary-fixed-dim group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">shield</span>
            </div>
            <h3 className="text-lg font-headline font-bold uppercase mb-4 tracking-tight">Instant Credibility</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Promote a tool with 99.9% uptime and elite anti-ban &apos;Stealth Technology&apos;.</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-lg border-t-2 border-transparent hover:border-primary transition-all hover:bg-surface-container-highest group">
            <div className="mb-6 text-primary-fixed-dim group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">analytics</span>
            </div>
            <h3 className="text-lg font-headline font-bold uppercase mb-4 tracking-tight">Real-Time Tracking</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">Access a private dashboard to monitor your Conversion Heatmap and earnings live.</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-lg border-t-2 border-transparent hover:border-primary transition-all hover:bg-surface-container-highest group">
            <div className="mb-6 text-primary-fixed-dim group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl">deployed_code</span>
            </div>
            <h3 className="text-lg font-headline font-bold uppercase mb-4 tracking-tight">Ready-to-Deploy Assets</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">High-converting banners, videos, and Intel Reports provided.</p>
          </div>
        </div>
      </section>

      {/* Section 2: Earnings Potential Slider */}
      <section className="bg-surface-container-low py-24 mb-32 border-y border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-headline font-bold uppercase tracking-tighter italic">ESTIMATED YIELD CALCULATOR</h2>
            <p className="text-on-surface-variant font-label text-sm tracking-widest uppercase mt-2">Adjust referrals to see your monthly potential</p>
          </div>
          <div className="bg-surface p-12 rounded-xl border border-outline-variant/30">
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-end mb-6">
                  <label className="text-lg font-headline font-bold uppercase tracking-tight">Monthly Active Referrals</label>
                  <span className="text-4xl font-headline font-black text-primary-container">250</span>
                </div>
                <input className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-container" max="500" min="1" type="range" defaultValue="250" />
                <div className="flex justify-between mt-4 text-[10px] font-label font-black text-on-surface-variant uppercase tracking-widest">
                  <span>Minimum Engagement</span>
                  <span>Tier 1 Target</span>
                </div>
              </div>
              <div className="pt-12 border-t border-outline-variant/20 text-center">
                <div className="text-xs font-label font-black text-on-surface-variant uppercase tracking-[0.4em] mb-4">Your Estimated Monthly Yield</div>
                <div className="text-7xl md:text-8xl font-headline font-black gold-text tracking-tighter leading-none">$3,750.00</div>
                <p className="text-xs text-on-surface-variant mt-6 italic">Based on a $30 monthly subscription per user at 50% commission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 3-Step Deployment */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute -top-10 -left-4 text-9xl font-headline font-black text-surface-container-high opacity-40 select-none group-hover:text-primary-container/20 transition-colors">01</div>
            <div className="relative pt-12">
              <h3 className="text-2xl font-headline font-black uppercase italic mb-4">Register</h3>
              <p className="text-on-surface-variant leading-relaxed">Sign up for your unique Partner ID in 60 seconds. Instant approval for qualified creators.</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -top-10 -left-4 text-9xl font-headline font-black text-surface-container-high opacity-40 select-none group-hover:text-primary-container/20 transition-colors">02</div>
            <div className="relative pt-12">
              <h3 className="text-2xl font-headline font-black uppercase italic mb-4">Deploy</h3>
              <p className="text-on-surface-variant leading-relaxed">Share your link in Discord, YouTube descriptions, or Twitter threads using our tactical assets.</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -top-10 -left-4 text-9xl font-headline font-black text-surface-container-high opacity-40 select-none group-hover:text-primary-container/20 transition-colors">03</div>
            <div className="relative pt-12">
              <h3 className="text-2xl font-headline font-black uppercase italic mb-4">Extract</h3>
              <p className="text-on-surface-variant leading-relaxed">Withdraw your 50% cut every Friday via Crypto or PayPal. 100% transparent ledger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Asset Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="bg-obsidian rounded-xl p-12 border border-outline-variant/20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8">
            <span className="material-symbols-outlined text-outline/20 text-9xl select-none">inventory_2</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-headline font-bold uppercase tracking-tight mb-12">MARKETING ASSET REPOSITORY</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-surface-container-high p-6 rounded-lg border border-outline-variant/10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim">movie</span>
                  <span className="font-headline font-bold uppercase tracking-widest text-sm">VIDEO INTEL</span>
                </div>
                <button className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-widest py-3 hover:text-white transition-colors">PREVIEW CONTENT</button>
              </div>
              <div className="bg-surface-container-high p-6 rounded-lg border border-outline-variant/10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim">imagesmode</span>
                  <span className="font-headline font-bold uppercase tracking-widest text-sm">BANNER KITS</span>
                </div>
                <button className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-widest py-3 hover:text-white transition-colors">PREVIEW CONTENT</button>
              </div>
              <div className="bg-surface-container-high p-6 rounded-lg border border-outline-variant/10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim">terminal</span>
                  <span className="font-headline font-bold uppercase tracking-widest text-sm">COPY HOOKS</span>
                </div>
                <button className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-widest py-3 hover:text-white transition-colors">PREVIEW CONTENT</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-8 text-center pb-20">
        <div className="p-16 rounded-3xl bg-gradient-to-b from-surface-container-high to-background border border-outline-variant/20 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container/10 blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-container/10 blur-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-8 italic">READY TO COMMAND?</h2>
          <p className="text-on-surface-variant mb-12 max-w-lg mx-auto leading-relaxed">Secure your position in the network today. Deploy your influence and extract high-frequency profits.</p>
          <button className="bg-primary-container text-on-primary-fixed px-12 py-5 font-headline font-black uppercase tracking-widest text-lg rounded-lg neon-glow hover:scale-105 transition-transform active:scale-95">
            INITIALIZE PARTNERSHIP
          </button>
        </div>
      </section>
    </main>
  );
}
