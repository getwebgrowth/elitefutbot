import { Metadata } from "next";
import AffiliatePageClient from "./AffiliatePageClient";

export const metadata: Metadata = {
  title: "Earn 50% Lifetime Commission – FC 26 & FC 27 Bot Affiliate Program | Elite FUT SNIPER",
  description: "Join the Elite FUT SNIPER Affiliate Program. Earn 50% lifetime recurring commission ($10 to $17.50+ per sale) promoting the #1 FC 26 & FC 27 sniping bot & autobuyer. Instant Daily Payouts via Crypto USDT, PayPal & Bank Wire.",
  alternates: {
    canonical: "https://elitefutbot.com/affiliate",
  },
  openGraph: {
    title: "Earn 50% Lifetime Commission – FC 26 & FC 27 Bot Affiliate Program | Elite FUT SNIPER",
    description: "Earn 50% lifetime recurring commission ($10 to $17.50+ per sale) promoting the world's fastest FC 26 & FC 27 sniping bot. Instant Daily Payouts, 90-day cookies & special creator rates.",
    url: "https://elitefutbot.com/affiliate",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [
      {
        url: "https://elitefutbot.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elite FUT SNIPER Affiliate Program - Earn 50% Lifetime Commission",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earn 50% Lifetime Commission – FC 26 & FC 27 Bot Affiliate Program",
    description: "Earn $10 to $17.50+ per sale (50% Lifetime RevShare) promoting the #1 FC 26 & FC 27 Sniping Bot. Instant Daily Payouts & 90-day cookies.",
    images: ["https://elitefutbot.com/og-image.png"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "How does the 50% Lifetime Commission work for FC 26 & FC 27?",
      a: "You earn a guaranteed 50% cut on every purchase made through your affiliate referral link or custom promo code. At our current launch price of $20, you earn $10.00 pure revenue per sale. When the price increases to $35, your payout automatically scales to $17.50 per sale! As long as referred users remain active or renew for upcoming seasons (FC 26 & FC 27), you continue to receive recurring 50% commission."
    },
    {
      q: "What is the current bot price and commission per sale?",
      a: "Elite FUT SNIPER is currently priced at an introductory $20 flat license (earning you $10.00 revenue per sale). As we roll out advanced AI SBC solving and FC 27 modules, the price will increase to $35, delivering an enhanced $17.50 revenue per sale directly to your affiliate balance at 50% revshare."
    },
    {
      q: "When and how do I receive my affiliate payouts?",
      a: "Affiliate payouts are processed Daily with zero processing fees. You can request or receive automated daily withdrawals directly to your Crypto wallet (USDT TRC20/ERC20, Bitcoin), PayPal, or Direct Bank Wire Transfer."
    },
    {
      q: "Are TikTok, YouTube, and Twitch content creators eligible for special VIP rates?",
      a: "Yes! Content creators with active audiences on TikTok, YouTube, Twitch, Instagram, or Discord trading servers qualify for VIP Creator status. Perks include boosted commission rates up to 60% ($12 to $21+ per sale), custom follower promo discount codes, free lifetime bot review licenses, and upfront video sponsorship bonuses."
    },
    {
      q: "What is the cookie tracking duration for referral links?",
      a: "We offer an industry-leading 90-day cookie window with first-click/last-touch persistent tracking. If a visitor clicks your referral link and buys anytime within 90 days, you receive full 50% credit for the sale."
    },
    {
      q: "Why does Elite FUT SNIPER have such a high conversion rate (14.8%+)?",
      a: "Elite FUT SNIPER operates as a 100% local Chrome extension that never requires the user's EA account password or session tokens. Because it eliminates the security concerns associated with dangerous cloud bots while providing unmatched sub-20ms search speeds and a built-in AI SBC solver, traffic converts at over 14.8% on average."
    },
    {
      q: "Do I need to pay to join the affiliate program?",
      a: "No! Joining the Elite FUT SNIPER Affiliate & Partner Program is 100% free with instant approval via our official Discord community. There are zero signup fees, minimum traffic requirements, or lock-in contracts."
    },
    {
      q: "Can Discord server owners integrate automated bot trading signals?",
      a: "Yes! If you run an FC 26 or FC 27 trading Discord server, we provide automated webhook signal feeds and customized server bot integrations, allowing your members to snipe profitable cards directly while attributing every purchase to your affiliate ID."
    }
  ];

  // AEO/SEO JSON-LD FAQ & Program Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://elitefutbot.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Affiliate Program",
            "item": "https://elitefutbot.com/affiliate"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Elite FUT SNIPER Affiliate Program",
        "description": "Earn 50% lifetime recurring commission promoting the #1 FC 26 & FC 27 sniping bot and autobuyer. $10 to $17.50+ revenue per sale with daily automated payouts.",
        "offers": {
          "@type": "Offer",
          "price": "20.00",
          "priceCurrency": "USD",
          "description": "50% Affiliate Revenue Share ($10.00 per sale, increasing to $17.50 per sale at $35 regular price)",
          "seller": {
            "@type": "Organization",
            "name": "Elite FUT SNIPER",
            "url": "https://elitefutbot.com"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AffiliatePageClient faqs={faqs} />
    </>
  );
}
