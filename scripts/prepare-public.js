const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'public');

const files = [
  'index.html',
  'products.html',
  'services.html',
  'admin.html',
  'style.css',
  'theme.css',
  'perfume-theme.css',
  'admin.css',
  'app.js',
  'admin.js',
  'perfume-demo.js',
  'manifest.json',
  'sw.js',
  'favicon.svg',
  'logo.svg',
  'logo.webp',
  'main-banner.webp',
  'icon-180.png',
  'icon-192.png',
  'icon-512.png',
  'icon-512-maskable.png'
];

function copyFile(rel) {
  const src = path.join(root, rel);
  const dest = path.join(out, rel);
  if (!fs.existsSync(src)) {
    console.warn(`[prepare-public] Skipping missing file: ${rel}`);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(rel) {
  const src = path.join(root, rel);
  const dest = path.join(out, rel);
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, dest, { recursive: true });
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
files.forEach(copyFile);
copyDir('assets');

const required = ['index.html', 'products.html', 'services.html', 'admin.html', 'style.css', 'app.js', 'admin.js'];
const missing = required.filter((rel) => !fs.existsSync(path.join(out, rel)));
if (missing.length) {
  console.error(`[prepare-public] Missing required output files: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`[prepare-public] Static site prepared in ${out}`);
console.log(`[prepare-public] ${fs.readdirSync(out).length} top-level entries ready for Vercel.`);
