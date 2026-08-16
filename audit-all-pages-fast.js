const { exec } = require("child_process");
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

const CONCURRENCY = 4;
const outDir = path.join(__dirname, "lh-results");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`Starting parallel audit of ${PAGES.length} pages (Concurrency: ${CONCURRENCY})...`);

const results = [];
let completedCount = 0;

function auditPage(page) {
  return new Promise((resolve) => {
    const slug = page === "/" ? "homepage" : page.replace(/\//g, "_").replace(/^_/, "");
    const outFile = path.join(outDir, `${slug}.json`);
    const url = `http://localhost:3000${page}`;
    const cmd = `npx lighthouse "${url}" --output=json --output-path="${outFile}" --preset=desktop --chrome-flags="--headless --no-sandbox --disable-gpu" --only-categories=performance,accessibility,best-practices,seo --quiet`;

    exec(cmd, (err) => {
      completedCount++;
      if (err || !fs.existsSync(outFile)) {
        console.error(`[${completedCount}/${PAGES.length}] ❌ ${page}: ${err ? err.message : "No output file"}`);
        results.push({ page, error: err ? err.message : "Audit failed" });
        return resolve();
      }

      try {
        const data = JSON.parse(fs.readFileSync(outFile, "utf8"));
        const c = data.categories;
        const perf = Math.round((c.performance?.score || 0) * 100);
        const a11y = Math.round((c.accessibility?.score || 0) * 100);
        const bp = Math.round((c["best-practices"]?.score || 0) * 100);
        const seo = Math.round((c.seo?.score || 0) * 100);

        const failures = [];
        ["accessibility", "best-practices", "seo", "performance"].forEach((catKey) => {
          if (!c[catKey]) return;
          c[catKey].auditRefs?.forEach((ref) => {
            const audit = data.audits[ref.id];
            if (audit && audit.score !== null && audit.score < 1) {
              failures.push({
                category: catKey,
                id: ref.id,
                title: audit.title
              });
            }
          });
        });

        results.push({ page, perf, a11y, bp, seo, failures });
        const icon = (perf >= 95 && a11y === 100 && bp >= 95 && seo === 100) ? "✅" : "⚠️";
        console.log(`[${completedCount}/${PAGES.length}] ${icon} ${page.padEnd(35)} | Perf: ${String(perf).padStart(3)} | A11y: ${String(a11y).padStart(3)} | BP: ${String(bp).padStart(3)} | SEO: ${String(seo).padStart(3)}`);
      } catch (parseErr) {
        console.error(`[${completedCount}/${PAGES.length}] ❌ ${page}: JSON Parse error`);
        results.push({ page, error: "Parse error" });
      }
      resolve();
    });
  });
}

async function runPool() {
  const queue = [...PAGES];
  const workers = Array(CONCURRENCY).fill(null).map(async () => {
    while (queue.length > 0) {
      const page = queue.shift();
      if (page) await auditPage(page);
    }
  });

  await Promise.all(workers);
  
  // Sort results by page name order
  results.sort((a, b) => PAGES.indexOf(a.page) - PAGES.indexOf(b.page));
  
  fs.writeFileSync("all-pages-audit-summary.json", JSON.stringify(results, null, 2), "utf8");
  console.log("\n=== ALL 53 PAGES AUDIT COMPLETED ===");
  const perfectPages = results.filter(r => r.perf >= 95 && r.a11y === 100 && r.bp >= 95 && r.seo === 100).length;
  console.log(`Total Pages: ${results.length} | Top-Tier / Perfect: ${perfectPages}`);
}

runPool();
