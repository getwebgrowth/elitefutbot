"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function VercelAnalyticsWrapper() {
  const [isProductionEnv, setIsProductionEnv] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !window.location.hostname.includes("localhost") &&
      !window.location.hostname.includes("127.0.0.1")
    ) {
      setIsProductionEnv(true);
    }
  }, []);

  if (!isProductionEnv) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
