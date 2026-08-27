const fs = require('fs');
let c = fs.readFileSync('app/globals.css', 'utf-8');

c = c.replace('.sp-main-logo { height: 40px; width: auto; max-width: 150px; object-fit: contain; }', '.sp-main-logo { height: auto !important; width: 220px !important; max-width: 100% !important; object-fit: contain; }');
c = c.replace(".midnightHeader.white .sp-main-logo, .midnightHeader.black .sp-main-logo { content: url('/images/logo-red.png'); }", ".midnightHeader.white .sp-main-logo { content: url('/images/logo-red.png') !important; filter: none !important; }\n.midnightHeader.black .sp-main-logo, .midnightHeader.default .sp-main-logo { content: url('/images/logo-white.png') !important; filter: none !important; }");

fs.writeFileSync('app/globals.css', c);
console.log('Fixed logo CSS');
