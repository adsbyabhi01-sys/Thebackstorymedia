const fs = require('fs');
let cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(/section, div \{\s*opacity: 1 !important;\s*transform: none !important;\s*animation: none !important;\s*\}/g, '');

fs.writeFileSync(cssPath, css);
console.log('Removed dangerous div selector');
