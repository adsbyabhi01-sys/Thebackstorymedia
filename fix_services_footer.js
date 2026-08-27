const fs = require('fs');

let pagePath = 'app/services/page.tsx';
let page = fs.readFileSync(pagePath, 'utf8');

// Find the <footer> block and remove it
page = page.replace(/<footer[\s\S]*?<\/footer>/g, '');

fs.writeFileSync(pagePath, page);
console.log('Removed duplicate footer from services page');
