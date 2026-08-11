import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EA FC 26 & FC 27 Tax Calculator | EA Sports FC Profit Calculator",
  description: "Calculate your net profit, break-even sell price, and 5% EA Sports FC transfer market tax instantly. Free EA FC tax calculator tool.",
  keywords: "ea fc tax calculator, fifa tax calculator, ea fc 26 tax calculator, fut profit calculator, transfer market tax",
};

export default function TaxCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
