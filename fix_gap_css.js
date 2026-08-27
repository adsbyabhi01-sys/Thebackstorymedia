const fs = require('fs');

let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

// Replace the incorrect margin-bottom fix I added earlier
css = css.replace(/margin-bottom: -15vh !important;/g, 'margin-bottom: 5vh !important; padding-bottom: 50px;');

fs.writeFileSync(cssFile, css);
console.log('Gap fixed in CSS');
