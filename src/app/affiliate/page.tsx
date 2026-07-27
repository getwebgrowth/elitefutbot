import { Metadata } from "next";
import AffiliatePageClient from "./AffiliatePageClient";

export const metadata: Metadata = {
  title: "Affiliate & Partner Program | Elite FUT SNIPER",
  description: "Join the Elite FUT SNIPER Affiliate Program. Earn 50% lifetime recurring commission promoting the #1 FC 26 & FC 27 sniping bot & autobuyer. Custom discount codes and VIP rates for YouTube, TikTok & Twitch creators.",
  keywords: [
    "Elite FUT SNIPER affiliate",
    "FUT Sniper partner program",
    "FIFA sniping bot commission",
    "FC 26 autobuyer affiliate",
    "FC 27 affiliate program",
    "FIFA trading bot sponsorships",
    "earn with FUT sniping bot",
    "FIFA content creator affiliate",
    "weekly payouts crypto paypal"
  ],
  alternates: {
    canonical: "https://elitefutbot.com/affiliate",
  },
  openGraph: {
    title: "Elite FUT SNIPER Affiliate Program | 50% Lifetime RevShare",
    description: "Earn 50% lifetime recurring commission promoting the fastest FC 26 & FC 27 sniping bot. TikTok, YouTube, & Twitch creators welcome with VIP rates.",
    url: "https://elitefutbot.com/affiliate",
    siteName: "Elite FUT SNIPER",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite FUT SNIPER Affiliate Program | 50% Lifetime RevShare",
    description: "Earn 50% lifetime recurring commission promoting the #1 FC 26 & FC 27 sniping bot. Special creator rates & sponsorships available.",
  }
};

export default function Page() {
  const faqs = [
    {
      q: "How does the 50% Lifetime Commission work?",
      a: "You earn a 50% cut on every subscription payment made by users who sign up through your referral link. As long as your referred user stays subscribed to Elite FUT SNIPER, you keep getting paid every single month!"
    },
    {
      q: "Are TikTok, YouTube, and Twitch content creators eligible for special rates?",
      a: "Yes! Content creators with active audiences on TikTok, YouTube, Twitch, Instagram, or Discord get special rates, custom promo codes for their followers, free review licenses for the bot, and higher tier rev-share up to 60%."
    },
    {
      q: "When and how do I receive my payouts?",
      a: "Payouts are processed weekly every Friday. You can withdraw your earnings via Crypto (USDT / BTC / ETH), PayPal, or Direct Bank Transfer with zero hidden fees."
    },
    {
      q: "What is the cookie duration for referral links?",
      a: "We offer a 90-day cookie window. If a user clicks your link and purchases anytime within 90 days, the referral is automatically credited to your partner account."
    },
    {
      q: "Do I need to pay to join the affiliate program?",
      a: "No! Joining the Elite FUT SNIPER Partner Program is 100% free with instant approval."
    }
  ];

  // AEO/SEO JSON-LD FAQ Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AffiliatePageClient faqs={faqs} />
    </>
  );
}
