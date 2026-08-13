#!/bin/bash
# Final verification audit - pages with known fixes applied

PAGES=("/bakers-bot-vs-elitefutbot" "/futearn-vs-elitefutbot" "/tools/comparison-guide" "/bakers-bot-developer" "/" "/fc27-fut-snipe-bot" "/article/tactical-intel" "/affiliate" "/terms" "/privacy")
FILES=("lh-v2-bakers-bot" "lh-v2-futearn" "lh-v2-comparison-guide" "lh-v2-bakers-bot-dev" "lh-v2-homepage" "lh-v2-fc27" "lh-v2-article" "lh-v2-affiliate" "lh-v2-terms" "lh-v2-privacy")
BASE="http://localhost:3000"

echo "=== FINAL VERIFICATION AUDIT ==="
for i in "${!PAGES[@]}"; do
  PAGE="${PAGES[$i]}"
  FILE="${FILES[$i]}.json"
  URL="${BASE}${PAGE}"
  echo "Auditing: $URL"
  npx lighthouse "$URL" \
    --output=json \
    --output-path="./$FILE" \
    --chrome-flags="--headless --no-sandbox --disable-gpu" \
    --only-categories=performance,accessibility,best-practices,seo \
    --quiet 2>/dev/null
  
  node -e "
    const r = require('./$FILE');
    const c = r.categories;
    const perf = Math.round(c.performance.score * 100);
    const a11y = Math.round(c.accessibility.score * 100);
    const bp = Math.round(c['best-practices'].score * 100);
    const seo = Math.round(c.seo.score * 100);
    
    const allPass = a11y === 100 && bp >= 96 && seo === 100;
    const status = allPass ? '✅' : '❌';
    console.log(status + ' ${PAGE}: perf=' + perf + ' a11y=' + a11y + ' bp=' + bp + ' seo=' + seo);
    
    if (!allPass) {
      ['accessibility', 'best-practices'].forEach(cat => {
        c[cat].auditRefs.forEach(ref => {
          const audit = r.audits[ref.id];
          if (audit && audit.score !== null && audit.score < 1) {
            console.log('  FAIL [' + cat.substring(0,4) + '] ' + ref.id + ': ' + audit.title);
            if (audit.details && audit.details.items) {
              audit.details.items.slice(0, 2).forEach(item => {
                if (item.node) console.log('    node: ' + item.node.selector);
                else console.log('    item: ' + JSON.stringify(item).substring(0, 150));
              });
            }
          }
        });
      });
    }
  "
done
echo "=== FINAL VERIFICATION COMPLETE ==="
