const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PAGES = [
  "/",
  "/affiliate",
  "/ai-sbc-solver",
  "/article/tactical-intel",
  "/bakers-bot-developer",
  "/bakers-bot-vs-elitefutbot",
  "/bio",
  "/blog",
  "/contact",
  "/eafcsniper-vs-elitefutbot",
  "/easyfutweb-vs-elitefutbot",
  "/easysbc-vs-elitefutbot",
  "/exesniper-vs-elitefutbot",
  "/fc26snipingbot-vs-elitefutbot",
  "/fc27-fut-snipe-bot",
  "/fifasnipebot-vs-elitefutbot",
  "/futbotclub-vs-elitefutbot",
  "/futbotmanager-vs-elitefutbot",
  "/futcloud-vs-elitefutbot",
  "/futcoinbuddy-vs-elitefutbot",
  "/futdroid-vs-elitefutbot",
  "/futearn-vs-elitefutbot",
  "/futgenie-vs-elitefutbot",
  "/futgg-vs-elitefutbot",
  "/futhunter-vs-elitefutbot",
  "/futinator-vs-elitefutbot",
  "/futlocker-vs-elitefutbot",
  "/futmaker-vs-elitefutbot",
  "/futmania-vs-elitefutbot",
  "/futmillionaire-vs-elitefutbot",
  "/futrich-vs-elitefutbot",
  "/futsimpletrader-vs-elitefutbot",
  "/futsniper-vs-elitefutbot",
  "/futsniperweb-vs-elitefutbot",
  "/futsnipingbot-vs-elitefutbot",
  "/futsnipingbot24-vs-elitefutbot",
  "/futstarz-vs-elitefutbot",
  "/futtbot-vs-elitefutbot",
  "/futultimatesniper-vs-elitefutbot",
  "/links",
  "/paletools-vs-elitefutbot",
  "/privacy",
  "/sbc-solver",
  "/shortfuts-vs-elitefutbot",
  "/sniperbotitalia-vs-elitefutbot",
  "/snipesensei-vs-elitefutbot",
  "/steviessniper-vs-elitefutbot",
  "/terms",
  "/tools/comparison-guide",
  "/tools/sniping-guide",
  "/tools/tax-calculator",
  "/utsniper-vs-elitefutbot",
  "/volt-velocity"
];

const outDir = path.join(__dirname, "lh-results-dual");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Starting DUAL (Mobile & PC) audit of ${PAGES.length} pages...`);

const results = [];

function runSingleAudit(url, mode, outFile) {
  const extraFlags = mode === "desktop" ? "--preset=desktop" : "--form-factor=mobile";
  const cmd = `npx lighthouse "${url}" --output=json --output-path="${outFile}" ${extraFlags} --chrome-flags="--headless --no-sandbox --disable-gpu" --only-categories=performance,accessibility,best-practices,seo --quiet`;
  try {
    execSync(cmd, { stdio: "ignore" });
    if (!fs.existsSync(outFile)) return { error: "No output file" };
    const data = JSON.parse(fs.readFileSync(outFile, "utf8"));
    const c = data.categories;
    const perf = Math.round((c.performance?.score || 0) * 100);
    const a11y = Math.round((c.accessibility?.score || 0) * 100);
    const bp = Math.round((c["best-practices"]?.score || 0) * 100);
    const seo = Math.round((c.seo?.score || 0) * 100);
    return { perf, a11y, bp, seo };
  } catch (err) {
    return { error: err.message };
  }
}

for (let i = 0; i < PAGES.length; i++) {
  const page = PAGES[i];
  const slug = page === "/" ? "homepage" : page.replace(/\//g, "_").replace(/^_/, "");
  const desktopOut = path.join(outDir, `${slug}_desktop.json`);
  const mobileOut = path.join(outDir, `${slug}_mobile.json`);
  const url = `http://localhost:3000${page}`;

  console.log(`[${i + 1}/${PAGES.length}] Auditing: ${page}`);
  const desktopRes = runSingleAudit(url, "desktop", desktopOut);
  const mobileRes = runSingleAudit(url, "mobile", mobileOut);

  const dStr = desktopRes.perf !== undefined ? `Perf: ${String(desktopRes.perf).padStart(3)} | A11y: ${String(desktopRes.a11y).padStart(3)} | BP: ${String(desktopRes.bp).padStart(3)} | SEO: ${String(desktopRes.seo).padStart(3)}` : "ERR";
  const mStr = mobileRes.perf !== undefined ? `Perf: ${String(mobileRes.perf).padStart(3)} | A11y: ${String(mobileRes.a11y).padStart(3)} | BP: ${String(mobileRes.bp).padStart(3)} | SEO: ${String(mobileRes.seo).padStart(3)}` : "ERR";

  console.log(`      Desktop -> ${dStr}\n      Mobile  -> ${mStr}`);

  results.push({
    page,
    desktop: desktopRes,
    mobile: mobileRes
  });
}

fs.writeFileSync("all-pages-audit-summary-mobile-pc.json", JSON.stringify(results, null, 2), "utf8");
console.log("\n=== DUAL PRESET (MOBILE & PC) AUDIT COMPLETED ===");
console.log(`Total Pages Audited: ${results.length}`);
