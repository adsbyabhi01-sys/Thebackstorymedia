const fs = require('fs');

let cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

css = css.replace(
    /\.sp-banner-home \.circle-big,\s*\.sp-banner-home \.circle-small\s*\{\s*display:\s*none\s*!important;\s*\}/g,
    `.sp-banner-home .circle-big,
    .sp-banner-home .circle-small {
        display: block !important;
        transform: scale(0.4) !important;
        pointer-events: none !important;
    }`
);

fs.writeFileSync(cssPath, css);
console.log('Restored hero bubbles on mobile');
