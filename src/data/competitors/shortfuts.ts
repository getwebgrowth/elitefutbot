import type { CompetitorData } from "./types";

export const shortFutsData: CompetitorData = {
  slug: "shortfuts-vs-elitefutbot",
  competitorName: "ShortFuts",
  competitorType: "extension",
  tagline: "A Chrome extension for FUT that provides shortcut hotkeys, transfer list management, quick sell tools, and UI productivity enhancements.",
  verdict: "ShortFuts is a productivity Chrome extension that significantly improves FUT Web App navigation with hotkeys and UI shortcuts. However, it provides no automated sniping, no AI SBC solving, and no anti-ban automation. It is a UI tool, not a trading bot. Elite FUT SNIPER provides all the trading automation — 20ms auto-sniping, AI SBC solving, FUTBIN price integration — plus complete FC 26 & FC 27 support as the world's first bot to achieve it.",
  publishedDate: "2026-08-14",
  modifiedDate: "2026-08-14",
  fc27SupportNote: "Elite FUT SNIPER is the world's first FC 26 & FC 27 sniping bot. ShortFuts is a keyboard shortcut tool with no sniping automation.",
  keyStatistics: [
    { label: "Auto-Snipe Speed", value: "20ms", source: "Internal Network Tests" },
    { label: "FC 27 Support", value: "World's First", source: "Developer Release Log" },
    { label: "AI SBC Solver", value: "Included", source: "Feature Specification" },
    { label: "Automation Level", value: "100% Auto", source: "Extension Architecture" }
  ],
  citations: [
    { label: "EA Sports FC Official Web App", url: "https://www.ea.com/games/ea-sports-fc" },
    { label: "ShortFuts Extension", url: "https://shortfuts.com/" },
    { label: "FUTBIN Market Reference", url: "https://www.futbin.com/" }
  ],
  comparisonRows: [
    { feature: "Product Type", elite: "Automated snipe bot + AI SBC solver", competitor: "Keyboard shortcut / UI productivity tool", winner: "elite" },
    { feature: "Market Auto-Sniping", elite: "Yes — 20ms fully automated", competitor: "No — manual with keyboard shortcuts", winner: "elite" },
    { feature: "AI SBC Solver", elite: true, competitor: false, winner: "elite" },
    { feature: "EA Password Required", elite: "No", competitor: "No", winner: "tie" },
    { feature: "Side Panel HUD Integration", elite: true, competitor: false, winner: "elite" },
    { feature: "FC 27 Compatibility", elite: "Yes — World's First FC 26 & FC 27 auto-snipe", competitor: "FC 26 shortcuts (no auto-trading)", winner: "elite" },
    { feature: "Anti-Ban Jitter Engine", elite: true, competitor: false, winner: "elite" },
    { feature: "Keyboard Shortcuts", elite: false, competitor: true, winner: "competitor" },
    { feature: "Transfer List Management", elite: "Automated relisting", competitor: "Manual with shortcuts", winner: "elite" }
  ],
  faqs: [
    {
      question: "What is the difference between ShortFuts and Elite FUT SNIPER?",
      answer: "ShortFuts provides keyboard shortcuts and UI enhancements that make manual FUT trading faster. Elite FUT SNIPER fully automates the trading process — sniping players at 20ms, solving SBCs automatically, and managing listings — so you don't need to manually interact with the transfer market at all."
    },
    {
      question: "Can ShortFuts auto-snipe players in FC 26 & FC 27?",
      answer: "ShortFuts provides productivity shortcuts but cannot automatically snipe players. Elite FUT SNIPER executes automated snipes at 20ms in both FC 26 and FC 27 without any manual input — it is the world's first FC 26 & FC 27 automated sniping bot."
    },
    {
      question: "Do ShortFuts and Elite FUT SNIPER work together?",
      answer: "They could be used separately, but Elite FUT SNIPER provides automation that makes ShortFuts' manual shortcuts unnecessary. With Elite's AI SBC Solver and auto-sniper, you don't need to manually navigate the transfer market at all."
    }
  ],
  reviewQuotes: [
    { text: "ShortFuts saves me time with shortcuts. Elite FUT SNIPER saves me time by doing EVERYTHING automatically. These are not equivalent tools.", author: "FullAutomation_FUT", platform: "Discord" },
    { text: "I used ShortFuts for months thinking I was being efficient. Elite FUT SNIPER's auto-sniper makes manual hotkeys completely irrelevant.", author: "ManualToAuto", platform: "Reddit" },
    { text: "Elite FUT SNIPER has world-first FC 27 auto-sniping. ShortFuts has... keyboard shortcuts. One of these things generates coins.", author: "CoinsNotShortcuts", platform: "Discord" }
  ]
};
