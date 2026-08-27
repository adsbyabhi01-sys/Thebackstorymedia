const fs = require('fs');

let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

// Replace 32px with 36px to give the text more vertical breathing room
css = css.replace(/height: 32px !important;/g, "height: 36px !important;");
css = css.replace(/line-height: 32px !important;/g, "line-height: 36px !important;");
css = css.replace(/translateY\(-32px\)/g, "translateY(-36px)");

fs.writeFileSync(cssFile, css);
console.log('Fixed clipping on MENU text');
