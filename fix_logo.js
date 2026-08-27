const fs = require('fs');

let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

const moreOverrides = `
/* Ensure Logo inverts to black when menu is open on white background */
body.menu-open .header-wrapper .sp-main-logo {
    filter: invert(1) !important;
}
`;
fs.writeFileSync(cssFile, css + moreOverrides);
console.log('Logo invert CSS added');
