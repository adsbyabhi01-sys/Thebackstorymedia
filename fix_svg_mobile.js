const fs = require('fs');

let cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

const svgFix = `
@media (max-width: 768px) {
    /* Hide the connecting thin lines in SVG */
    .sp-quite-simple-svg .cls-1 {
        display: none !important;
    }
    /* Hide the small inactive circles */
    .sp-quite-simple-svg .cls-2:not(.active) {
        display: none !important;
    }
    /* Hide the + sign paths inside the inactive circles */
    .sp-quite-simple-svg .path-1 {
        display: none !important;
    }
}
`;

fs.writeFileSync(cssPath, css + '\n' + svgFix);
console.log('Appended SVG line and plus hide for mobile');
