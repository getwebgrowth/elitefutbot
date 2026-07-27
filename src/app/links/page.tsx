import Link from "next/link";

export const metadata = {
  title: "Site Directory | Elite FUT SNIPER",
  description: "Temporary directory of all pages on the Elite FUT SNIPER website.",
};

export default function LinksPage() {
  const links = [
    { href: "/", label: "Homepage", category: "Core Pages", desc: "Main landing page showcasing features, pricing, and community reviews." },
    { href: "/bio", label: "Link in Bio", category: "Core Pages", desc: "Social media hub containing TikTok, Instagram, Twitter X, Discord & Telegram." },
    { href: "/affiliate", label: "Affiliate Program", category: "Core Pages", desc: "Earn commission by referring traders to Elite FUT SNIPER." },
    { href: "/contact", label: "Contact Us", category: "Support & Legal", desc: "Get in touch with the support and developer team." },
    { href: "/privacy", label: "Privacy Policy", category: "Support & Legal", desc: "Our privacy policy and data protection terms." },
    { href: "/terms", label: "Terms of Service", category: "Support & Legal", desc: "Usage terms and condition specifications." },
    
    { href: "/ai-sbc-solver", label: "AI SBC Solver Engine", category: "SBC Solving", desc: "Access the 1-click AI-powered SBC solver engine." },
    { href: "/sbc-solver", label: "SBC Solutions Catalog", category: "SBC Solving", desc: "Browse solved squad building challenges." },
    
    { href: "/tools/sniping-guide", label: "Sniping Guide", category: "Tools & Resources", desc: "Step-by-step tutorial on sniping settings and safety." },
    { href: "/tools/tax-calculator", label: "Tax Calculator", category: "Tools & Resources", desc: "Calculate EA tax and project profit from market trading." },
    { href: "/volt-velocity", label: "Volt Velocity", category: "Tools & Resources", desc: "Optimizing connection speed and response times." },
    { href: "/bakers-bot-developer", label: "Developer Origin Story", category: "Tools & Resources", desc: "The story behind the creation of Elite FUT SNIPER." },
    
    { href: "/blog", label: "Tactical Intel Hub (Blog)", category: "Content", desc: "Articles and updates on FC market trading strategy." },
    { href: "/article/tactical-intel", label: "Latest Briefing", category: "Content", desc: "Recent strategic market insight and bot configuration details." },
  ];

  // Group links by category
  const categories = Array.from(new Set(links.map(link => link.category)));

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
              Temporary Tool
            </span>
          </div>
          <h1 className="text-4xl font-black tracking-tight uppercase font-headline">
            Site <span className="text-primary italic">Directory</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm max-w-xl">
            A temporary map of all active routes in this project. Use this directory to easily inspect page layouts, navigation, and contents.
          </p>
        </header>

        <div className="space-y-12">
          {categories.map(category => (
            <section key={category} className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {links
                  .filter(l => l.category === category)
                  .map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex flex-col p-5 bg-dark/40 hover:bg-dark/80 border border-white/5 hover:border-primary/30 rounded-xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[24px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-white group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                        <span className="text-gray-500 group-hover:text-primary transition-colors text-xs font-mono">
                          {link.href}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                        {link.desc}
                      </p>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
