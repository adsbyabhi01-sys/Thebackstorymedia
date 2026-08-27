const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf-8');

// Replace value="" with defaultValue="" inside inputs and textareas to avoid React warning
c = c.replace(/(<(?:input|textarea)[^>]*?)value=/gi, '$1defaultValue=');

fs.writeFileSync('app/page.tsx', c);
console.log('Fixed defaultValue warnings');
