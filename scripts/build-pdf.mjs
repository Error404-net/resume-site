// Renders public/print/ to static/Jesse-Durkee-Resume.pdf with the installed Chrome.
// Usage: hugo --minify && node scripts/build-pdf.mjs && hugo --minify
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
const require = createRequire(process.env.PUPPETEER_FROM ?? path.join(process.env.HOME, 'GitHub/Branding-Guide/'));
const puppeteer = require('puppeteer-core');
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--allow-file-access-from-files'],
});
const page = await browser.newPage();
await page.goto(pathToFileURL(path.resolve('public/print/index.html')).href, { waitUntil: 'networkidle0' });
await page.evaluateHandle('document.fonts.ready');
await page.pdf({ path: 'static/Jesse-Durkee-Resume.pdf', preferCSSPageSize: true, printBackground: true });
await browser.close();
