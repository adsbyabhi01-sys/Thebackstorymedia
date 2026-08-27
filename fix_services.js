const fs = require('fs');
let c = fs.readFileSync('app/services/page.tsx', 'utf-8');

c = c.replace(/className="sp-are-you section element i-v" style=\{\{/g, 'className="sp-are-you section element i-v" data-midnight="white" style={{');

fs.writeFileSync('app/services/page.tsx', c);
console.log('Fixed services page data-midnight');
