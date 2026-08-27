const fs = require('fs');
let c = fs.readFileSync('app/layout.tsx', 'utf-8');
c = c.replace(/<Script src="\/js_wp\/logo-swap\.js"[^>]*\/>/g, '');
c = c.replace(/\{\/\* Auto logo swap: white on dark, red on light backgrounds \*\/\}/g, '');
fs.writeFileSync('app/layout.tsx', c);
console.log('Cleaned layout');
