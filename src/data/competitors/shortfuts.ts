import { CompetitorData } from "./types";

export const shortFutsData: CompetitorData = {
  slug: "shortfuts-vs-elitefutbot",
  competitorName: "Shortfuts",
  competitorType: "local",
  tagline: "Move Beyond Manual Keybind Tapping to Fully Autonomous 20ms Sniping and AI SBC Solving.",
  verdict:
    "Shortfuts provides basic keyboard shortcut bindings for the Web App, requiring players to sit at their keyboard tapping keys thousands of times to search and buy. Elite FUT SNIPER replaces repetitive manual strain with true hands-free automation — executing autonomous 20ms search loops, auto-sniping mispriced cards, solving SBCs via real-time neural AI, and protecting accounts with humanized Gaussian jitter for FC 26 and FC 27.",
  publishedDate: "2026-08-01",
  modifiedDate: "2026-08-14",
  fc27SupportNote:
    "Shortfuts keybind listeners frequently misfire when EA modifies Web App navigation DOM trees in FC 27. Elite FUT SNIPER's decoupled architecture operates smoothly without relying on brittle keyboard event listeners on FC 27 launch day.",
  
  keyStatistics: [
    { label: "Automation Level", value: "100% Autonomous", source: "Hands-Free Execution vs Manual Hotkey Mashing" },
    { label: "Execution Latency", value: "Sub-20ms", source: "Direct DOM WebSocket Benchmark" },
    { label: "AI SBC Chemistry Solver", value: "Built-In AI Engine", source: "1-Click Untradeable Solution Test" },
    { label: "FC 27 Event Architecture", value: "Decoupled DOM", source: "Manifest V3 Integration Audit" },
  ],

  citations: [
    { label: "Keyboard Hotkeys vs Autonomous Sniping Engines", url: "https://elitefutbot.com/tools/comparison-guide" },
    { label: "Ergonomics & Efficiency in High-Volume FUT Trading", url: "https://elitefutbot.com/tools/sniping-guide" },
    { label: "FC 27 Autonomous DOM Engine Specs", url: "https://elitefutbot.com/fc27-fut-snipe-bot" },
  ],

  comparisonRows: [
    { feature: "Trading Workflow", elite: "100% Autonomous (Set Filters & Let It Run)", competitor: "Manual Keybind Mashing (Requires Active User Presence)", winner: "elite" },
    { feature: "Action Execution Speed", elite: "Sub-20ms Direct In-Browser WebSocket", competitor: "350ms–700ms Human Keypress Reaction Time", winner: "elite" },
    { feature: "AI SBC Chemistry Solver", elite: "Included Neural AI Club Solver + Auto-Buy", competitor: "Basic Navigation Shortcuts Only", winner: "elite" },
    { feature: "User Interface", elite: "Chrome Side Panel HUD with Live Charts", competitor: "Injected Hotkey Menu Overlay", winner: "elite" },
    { feature: "Physical Fatigue", elite: "Zero Physical Effort (Fully Automated)", competitor: "Repetitive Strain from Thousands of Keypresses", winner: "elite" },
    { feature: "Anti-Ban Protection", elite: "Gaussian Behavioral Jitter & Micro-Pauses", competitor: "Relies on User's Manual Tapping Rhythm", winner: "elite" },
    { feature: "EA FC 27 Day-One Support", elite: "Guaranteed Zero-Downtime Launch", competitor: "Community Keybind Patch Required", winner: "elite" },
    { feature: "EA Password Handling", elite: "100% In-Browser Local Session", competitor: "100% In-Browser Local Session", winner: "tie" },
  ],

  faqs: [
    {
      question: "Why is autonomous sniping better than using Shortfuts keyboard shortcuts?",
      answer:
        "Tapping shortcuts still requires you to sit in front of your screen for hours, and your human reaction time (300ms–600ms) will still lose high-value 59th-minute snipes to 20ms bots. Elite FUT SNIPER automates the entire process in the background, purchasing targets in under 20ms without any physical effort.",
    },
    {
      question: "Can I use Elite FUT SNIPER while studying or working on my computer?",
      answer:
        "Yes! Elite FUT SNIPER runs inside Chrome's Side Panel, allowing you to browse websites, write documents, or watch streams while the bot autonomously snipes cards and tracks profits in real time.",
    },
    {
      question: "Does Elite FUT SNIPER support solving Squad Building Challenges automatically?",
      answer:
        "Yes. Unlike Shortfuts which only speeds up manual navigation, Elite FUT SNIPER contains a neural AI SBC solver that scans your club's untradeable players and buys missing chemistry links in 1 click.",
    },
  ],

  reviewQuotes: [
    {
      text: "I used Shortfuts for a year, but my fingers hurt from mashing keys during promo hours. Elite FUT SNIPER does the entire job automatically and snipes way faster.",
      author: "Casper N., Verified Ultimate Team Trader",
      platform: "Discord Community",
    },
    {
      text: "Hands-free 20ms trading plus the AI SBC solver is the ultimate combination. I make 200k+ coins a day without touching my keyboard.",
      author: "Mikael L., FUT Champions Elite",
      platform: "Twitter / X",
    },
  ],
};
