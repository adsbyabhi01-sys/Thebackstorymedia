const fs = require('fs');

let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

// Force banner h1 to always be visible (overriding the animation default hidden state)
const fix = `
/* Force homepage banner text to be visible */
.banner-text-wrapper h1 {
    transform: translateY(0%) !important;
    opacity: 1 !important;
}
`;

fs.writeFileSync(cssFile, css + '\n' + fix);
console.log('Banner text forced visible');
