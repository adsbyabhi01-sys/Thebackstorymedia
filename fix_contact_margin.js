const fs = require('fs');

let cssPath = 'app/globals.css';
let cssStr = fs.readFileSync(cssPath, 'utf8');

cssStr = cssStr.replace(/margin-left: -20px !important; \/\* Assuming wrapper has 20px padding \*\//, 'margin-left: 0 !important;');

fs.writeFileSync(cssPath, cssStr);
console.log('Fixed contact panel margin');
