const fs = require('fs');
let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

const fix = `
/* Push banner text lower — into the blue-marked empty area */
.banner-text-container {
    bottom: 2vh !important;
    padding-bottom: 20px !important;
}
`;

fs.writeFileSync(cssFile, css + '\n' + fix);
console.log('Banner pushed down');
