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
  "/easyfutweb-vs-elitefutbot",
  "/easysbc-vs-elitefutbot",
  "/exesniper-vs-elitefutbot",
  "/fc26snipingbot-vs-elitefutbot",
  "/fc27-fut-snipe-bot",
  "/fifasnipebot-vs-elitefutbot",
  "/futbotclub-vs-elitefutbot",
  "/futbotmanager-vs-elitefutbot",
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
  "/futrich-vs-elitefutbot",
  "/futsimpletrader-vs-elitefutbot",
  "/futsniper-vs-elitefutbot",
  "/futsniperweb-vs-elitefutbot",
  "/futsnipingbot-vs-elitefutbot",
  "/futsnipingbot24-vs-elitefutbot",
  "/futtbot-vs-elitefutbot",
  "/futultimatesniper-vs-elitefutbot",
  "/links",
  "/paletools-vs-elitefutbot",
  "/privacy",
  "/sbc-solver",
  "/shortfuts-vs-elitefutbot",
  "/snipesensei-vs-elitefutbot",
  "/steviessniper-vs-elitefutbot",
  "/terms",
  "/tools/comparison-guide",
  "/tools/sniping-guide",
  "/tools/tax-calculator",
  "/volt-velocity"
];

console.log(`Starting comprehensive audit of ${PAGES.length} pages...`);

const results = [];
const outDir = path.join(__dirname, "lh-results");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

for (let i = 0; i < PAGES.length; i++) {
  const page = PAGES[i];
  const slug = page === "/" ? "homepage" : page.replace(/\//g, "_").replace(/^_/, "");
  const outFile = path.join(outDir, `${slug}.json`);
  const url = `http://localhost:3000${page}`;
  
  console.log(`[${i + 1}/${PAGES.length}] Auditing: ${page}`);
  try {
    execSync(
      `npx lighthouse "${url}" --output=json --output-path="${outFile}" --chrome-flags="--headless --no-sandbox --disable-gpu" --only-categories=performance,accessibility,best-practices,seo --quiet 2>/dev/null`,
      { stdio: "ignore" }
    );

    const data = JSON.parse(fs.readFileSync(outFile, "utf8"));
    const c = data.categories;
    const perf = Math.round((c.performance?.score || 0) * 100);
    const a11y = Math.round((c.accessibility?.score || 0) * 100);
    const bp = Math.round((c["best-practices"]?.score || 0) * 100);
    const seo = Math.round((c.seo?.score || 0) * 100);

    const failures = [];
    ["accessibility", "best-practices", "seo"].forEach((catKey) => {
      if (!c[catKey]) return;
      c[catKey].auditRefs.forEach((ref) => {
        const audit = data.audits[ref.id];
        if (audit && audit.score !== null && audit.score < 1) {
          failures.push({
            category: catKey,
            id: ref.id,
            title: audit.title,
            details: audit.details?.items?.slice(0, 2)
          });
        }
      });
    });

    results.push({ page, perf, a11y, bp, seo, failures });
    const status = (a11y === 100 && bp >= 96 && seo === 100) ? "✅" : "⚠️";
    console.log(`  ${status} Perf: ${perf} | A11y: ${a11y} | BP: ${bp} | SEO: ${seo}`);
    if (failures.length > 0) {
      failures.forEach((f) => {
        console.log(`     -> [${f.category}] ${f.id}: ${f.title}`);
      });
    }
  } catch (err) {
    console.error(`  ❌ Error auditing ${page}: ${err.message}`);
    results.push({ page, error: err.message });
  }
}

fs.writeFileSync("all-pages-audit-summary.json", JSON.stringify(results, null, 2), "utf8");
console.log("\n=== AUDIT SUMMARY COMPLETED ===");
console.log(`Total audited: ${results.length}`);
