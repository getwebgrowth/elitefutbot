"use client";

import { useEffect } from "react";

export default function AnalyticsScripts() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.location.hostname.includes("localhost") ||
      window.location.hostname.includes("127.0.0.1")
    ) {
      return;
    }

    // Load Google Analytics
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-224X1P08Z4";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    function gtag(...args: unknown[]) {
      win.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-224X1P08Z4");

    // Load Microsoft Clarity
    (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "y24lqc637w");
  }, []);

  return null;
}
