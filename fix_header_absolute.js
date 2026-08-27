const fs = require('fs');

// 1. Disable midnight.js initialization
let js = fs.readFileSync('public/js_wp/custom-animations.js', 'utf-8');
js = js.replace("$('.header-wrapper').midnight();", "// $('.header-wrapper').midnight();");
fs.writeFileSync('public/js_wp/custom-animations.js', js);

// 2. Force header to be absolute in globals.css
let css = fs.readFileSync('app/globals.css', 'utf-8');
css += `
/* Force header to stay at the top and not follow scroll */
.header-wrapper {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 100 !important;
}
/* Hide any leftover midnight headers if they were already created */
.midnightInner, .midnightHeader {
    display: none !important;
}
.header-wrapper .sp-main-logo {
    filter: none !important;
}
`;
fs.writeFileSync('app/globals.css', css);

console.log('Fixed header to top');
