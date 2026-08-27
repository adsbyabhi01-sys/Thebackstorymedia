const fs = require('fs');
let page = fs.readFileSync('app/services/page.tsx', 'utf-8');

page = page.replace("import Script from 'next/script';", "import Script from 'next/script';\nimport BottomSections from '../../components/BottomSections';");

// Use a strict regex to remove Section 3 and Section 4 entirely
const bottomRegex = /\{\/\* ── SECTION 3: WHAT ARE YOU LOOKING FOR ── \*\/\}[\s\S]*?(?=\{\/\* FOOTER \*\/\}|\{\/\* ── FOOTER ── \*\/})/g;

page = page.replace(bottomRegex, "{/* ── BOTTOM SECTIONS ── */}\n        <BottomSections />\n\n        ");

// Also remove `tabs` and `circles` and `activeTab` useState if they exist in services page.
page = page.replace(/const tabs = \['START A PROJECT', 'JOIN OUR TEAM', 'HAVE A CHAT'\];\s*const circles = \[[\s\S]*?\];/g, '');
page = page.replace(/const \[activeTab, setActiveTab\] = useState\(0\);/g, '');
page = page.replace(/import React, \{ useState \} from 'react';/g, "import React from 'react';");

fs.writeFileSync('app/services/page.tsx', page);
console.log('Updated services page');
