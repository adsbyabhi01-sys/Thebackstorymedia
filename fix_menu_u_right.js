const fs = require('fs');

let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

const fix = `
/* Fix MENU text U clipping on the right side due to original left: 10px */
.simpleplan-menu-text-wrapper span:nth-child(1) {
    left: 0 !important;
    padding-right: 4px !important;
}
.simpleplan-menu-text-wrapper {
    width: auto !important;
    padding-right: 5px !important;
}
`;

fs.writeFileSync(cssFile, css + '\n' + fix);
console.log('Fixed left alignment and padding to prevent U clipping');
