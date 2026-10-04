import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve(process.cwd(), 'dist');
const sourceFile = path.join(distDir, 'index.html');
const targetFile = path.join(distDir, '404.html');

const legacyRedirects = {
  '/Contact': '/contact/',
  '/Contact/': '/contact/',
  '/CTA': '/contact/',
  '/CTA/': '/contact/',
  '/partner_contact': '/partner-contact/',
  '/partner_contact/': '/partner-contact/',
  '/BeOurPartner': '/be-our-partner/',
  '/BeOurPartner/': '/be-our-partner/',
  '/privacy_policy': '/privacy-policy/',
  '/privacy_policy/': '/privacy-policy/',
  '/terms_of_service': '/terms-of-service/',
  '/terms_of_service/': '/terms-of-service/',
  '/services/Supply_chain': '/services/supply-chain/',
  '/services/Supply_chain/': '/services/supply-chain/',
  '/services/supply_chain': '/services/supply-chain/',
  '/services/supply_chain/': '/services/supply-chain/',
  '/services/import_export': '/services/import-export/',
  '/services/import_export/': '/services/import-export/',
  '/industries/cold_chain': '/industries/cold-chain/',
  '/industries/cold_chain/': '/industries/cold-chain/',
  '/industries/e_commerce': '/industries/e-commerce/',
  '/industries/e_commerce/': '/industries/e-commerce/',
  '/industries/fmcg_industry': '/industries/fmcg-industry/',
  '/industries/fmcg_industry/': '/industries/fmcg-industry/',
  '/industries/food_beverages': '/industries/food-beverages/',
  '/industries/food_beverages/': '/industries/food-beverages/'
};

const html = fs.readFileSync(sourceFile, 'utf8');
const withoutHomepagePreload = html.replace(
  /<link rel="preload" as="image" href="\/images\/indus-hero\.webp" fetchpriority="high"\s*\/?>\s*/,
  '',
);
const redirectScript = `<script src="/404-redirect.js" defer></script>`;
const withRedirect = withoutHomepagePreload.replace('</head>', `${redirectScript}\n</head>`);
fs.writeFileSync(targetFile, withRedirect, 'utf8');

const redirectModule = `(() => {
  const legacyRedirects = ${JSON.stringify(legacyRedirects, null, 2)};
  const path = window.location.pathname;
  const query = window.location.search || '';
  const hash = window.location.hash || '';
  const normalized = path.replace(/\\/+$/, '') || '/';
  const target = legacyRedirects[normalized] || legacyRedirects[path] || null;

  if (target) {
    window.location.replace('https://saudexglobal.com' + target + query + hash);
    return;
  }

  const underscored = path.includes('_') || /[A-Z]/.test(path);
  if (underscored) {
    const slug = path
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/_/g, '-')
      .replace(/\\/+/g, '/');

    if (slug && slug !== path) {
      window.location.replace('https://saudexglobal.com' + slug + query + hash);
    }
  }
})();`;
fs.writeFileSync(path.join(distDir, '404-redirect.js'), redirectModule, 'utf8');
console.log('Generated canonical redirect page at dist/404.html');
