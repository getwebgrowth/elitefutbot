import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FUT Tax Calculator – EA FC 26 5% Market Tax & Profit',
  description: 'Free calculator for EA Sports FC 26 5% transfer market tax, net profit, and break-even sell price calculation.',
  alternates: {
    canonical: 'https://elitefutbot.com/tools/tax-calculator',
  },
  openGraph: {
    title: 'FUT Tax Calculator – EA FC 26 5% Market Tax & Profit',
    description: 'Calculate your EA Sports FC 26 5% transfer market tax, net profit, and break-even sell price instantly.',
    url: 'https://elitefutbot.com/tools/tax-calculator',
  },
  twitter: {
    title: 'FUT Tax Calculator – EA FC 26 5% Market Tax & Profit',
    description: 'Calculate your EA Sports FC 26 5% transfer market tax, net profit, and break-even sell price instantly.',
  },
};

export default function TaxCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
