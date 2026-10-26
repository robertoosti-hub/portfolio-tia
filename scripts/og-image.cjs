/**
 * Genera public/og-image.png (1200×630), l'anteprima mostrata quando
 * il sito viene condiviso su social e app di messaggistica.
 *
 * Uso (facoltativo, richiede Playwright installato a parte):
 *   npm run build && npx astro preview   # in un terminale
 *   node scripts/og-image.cjs             # in un altro
 */
const { chromium } = require('playwright');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.goto(process.env.PREVIEW_URL ?? 'http://localhost:4321/', { waitUntil: 'networkidle' });
  // Riutilizza l'illustrazione della hero e i font già caricati dalla pagina
  await page.evaluate(() => {
    const art = document.querySelector('.hero svg').outerHTML;
    document.body.innerHTML = `
      <div style="position:fixed;inset:0;display:grid;grid-template-columns:1fr 1fr;background:#f3efe5">
        <div style="padding:64px 56px;display:flex;flex-direction:column;justify-content:space-between">
          <p style="font:600 15px/1 'Instrument Sans Variable';letter-spacing:.14em;text-transform:uppercase;color:#713d45;margin:0">Portfolio professionale · Viticoltura</p>
          <div>
            <h1 style="margin:0;font:300 112px/.88 'Fraunces Variable';letter-spacing:-.045em;color:#283f35">Matteo<br><em style="color:#713d45;padding-left:.4em">Ferrari</em></h1>
            <p style="margin:32px 0 0;font:400 30px/1.25 'Fraunces Variable';color:#283f35">Coltivo competenze.<br><em style="color:#713d45">Progetto il futuro.</em></p>
          </div>
          <p style="font:500 16px/1.4 'Instrument Sans Variable';color:#5b5f55;margin:0">4° anno TIA · Fondazione Edmund Mach · Esempio didattico</p>
        </div>
        <div style="position:relative">${art}</div>
      </div>`;
    document.querySelector('svg').style.cssText = 'position:absolute;inset:0;width:100%;height:100%';
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(__dirname, '..', 'public', 'og-image.png') });
  await browser.close();
  console.log('Creato public/og-image.png');
})();
