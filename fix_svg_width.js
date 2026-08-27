const fs = require('fs');

let cssPath = 'app/globals.css';
let cssStr = fs.readFileSync(cssPath, 'utf8');

cssStr = cssStr.replace(/width: 150% !important; \/\* Zoom into the middle circle \*\//, 'width: 100% !important;');
cssStr = cssStr.replace(/margin-left: -25% !important; \/\* Center the zoomed SVG \*\//, 'margin-left: 0 !important;');

fs.writeFileSync(cssPath, cssStr);
console.log('Fixed SVG width to 100%');
