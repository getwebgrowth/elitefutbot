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

    let loaded = false;

    const loadAnalytics = () => {
      if (loaded) return;
      loaded = true;

      // Clean up event listeners
      window.removeEventListener("scroll", loadAnalytics);
      window.removeEventListener("touchstart", loadAnalytics);
      window.removeEventListener("mousemove", loadAnalytics);
      window.removeEventListener("click", loadAnalytics);

      // 1. Google Analytics
      try {
        const gaScript = document.createElement("script");
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-224X1P08Z4";
        gaScript.async = true;
        gaScript.onerror = () => {
          // Gracefully ignore blocked trackers
        };
        document.head.appendChild(gaScript);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const win = window as any;
        win.dataLayer = win.dataLayer || [];
        function gtag(...args: unknown[]) {
          win.dataLayer.push(args);
        }
        gtag("js", new Date());
        gtag("config", "G-224X1P08Z4");
      } catch {
        // Ignore analytics initialization errors
      }

      // 2. Microsoft Clarity
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
          c[a] =
            c[a] ||
            function () {
              (c[a].q = c[a].q || []).push(arguments);
            };
          t = l.createElement(r);
          t.async = 1;
          t.src = "https://www.clarity.ms/tag/" + i;
          t.onerror = () => {
            // Gracefully ignore blocked trackers
          };
          y = l.getElementsByTagName(r)[0];
          if (y && y.parentNode) {
            y.parentNode.insertBefore(t, y);
          }
        })(window, document, "clarity", "script", "y24lqc637w");
      } catch {
        // Ignore Clarity initialization errors
      }
    };

    // Trigger on user intent or after browser idle time (4s)
    window.addEventListener("scroll", loadAnalytics, { once: true, passive: true });
    window.addEventListener("touchstart", loadAnalytics, { once: true, passive: true });
    window.addEventListener("mousemove", loadAnalytics, { once: true, passive: true });
    window.addEventListener("click", loadAnalytics, { once: true, passive: true });

    const idleTimer = typeof window.requestIdleCallback === "function"
      ? window.requestIdleCallback(() => setTimeout(loadAnalytics, 3500))
      : setTimeout(loadAnalytics, 4000);

    return () => {
      window.removeEventListener("scroll", loadAnalytics);
      window.removeEventListener("touchstart", loadAnalytics);
      window.removeEventListener("mousemove", loadAnalytics);
      window.removeEventListener("click", loadAnalytics);
      if (typeof window.cancelIdleCallback === "function" && typeof idleTimer === "number") {
        window.cancelIdleCallback(idleTimer);
      } else {
        clearTimeout(idleTimer as unknown as NodeJS.Timeout);
      }
    };
  }, []);

  return null;
}
