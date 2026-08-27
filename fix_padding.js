const fs = require('fs');
let c = fs.readFileSync('app/services/page.tsx', 'utf-8');
c = c.replace("paddingLeft: '60px', paddingRight: '60px'", "paddingLeft: '20vw', paddingRight: '60px'");
fs.writeFileSync('app/services/page.tsx', c);
console.log('Fixed services padding');
