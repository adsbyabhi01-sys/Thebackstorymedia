const fs = require('fs');

let file = 'app/faq/page.tsx';
let c = fs.readFileSync(file, 'utf-8');

// Replace the redundant fontWeight
c = c.replace(/color: 'rgba\(255,255,255,0\.8\)', fontWeight: 600,/g, "color: 'rgba(255,255,255,0.8)',");

fs.writeFileSync(file, c);
console.log('Fixed faq TS error');
