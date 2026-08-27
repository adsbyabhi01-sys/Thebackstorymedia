const fs = require('fs');

let page = fs.readFileSync('app/process/page.tsx', 'utf-8');

// Add import at the top
page = page.replace("import Script from 'next/script';", "import Script from 'next/script';\nimport BottomSections from '../../components/BottomSections';");

// Remove the old CTA section
const ctaRegex = /\{\/\* ── SECTION 3: CTA ── \*\/\}[\s\S]*?<\/section>/;
page = page.replace(ctaRegex, "{/* ── BOTTOM SECTIONS ── */}\n        <BottomSections />");

fs.writeFileSync('app/process/page.tsx', page);
console.log('Updated process page');
