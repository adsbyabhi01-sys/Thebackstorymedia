const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf-8');

c = c.replace(/<span style=\{\{ \/\* font-family:'PP Editorial Old'[\s\S]*?<\/span>/gi, '<img src="/images/logo-white.png" alt="The Backstory Media" className="sp-main-logo" />');

fs.writeFileSync('app/page.tsx', c);
console.log('Replaced logo');
