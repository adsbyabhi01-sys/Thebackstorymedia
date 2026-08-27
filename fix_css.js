const fs = require('fs');

let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

// Find the line index where the corrupted block starts (after the original sp-main-logo filter)
const cleanUpIndex = css.indexOf('/* Made logo much bigger */');
if (cleanUpIndex > -1) {
    css = css.substring(0, cleanUpIndex);
    // Remove any trailing extra closing braces if they were left before the block
    css = css.replace(/\}\s*$/g, '}');
}

// Ensure there is no stray "filter: invert(1)" on the logo in the original block
css = css.replace(/\.menu-open \.midnightHeader\.white \.simpleplan-logo img\.sp-main-logo \{\s*filter: invert\(1\) !important;\s*\}/g, '');
css = css.replace(/,\s*\.menu-open \.midnightHeader\.white \.simpleplan-logo img\.sp-main-logo/g, '');


const overrides = `
/* HEADER SIZING AND MENU FIXES - V2 */
.header-wrapper {
    padding-top: 20px !important; 
    padding-bottom: 20px !important;
}
.header-contents-wrapper {
    padding: 0 40px !important;
}
/* Make Logo Big */
.sp-main-logo {
    width: 260px !important;
    max-width: 100% !important;
}
/* Stop logo from turning black on menu open */
body.menu-open .header-wrapper .sp-main-logo, 
body.menu-open .sp-main-logo,
.midnightHeader.white .simpleplan-logo img.sp-main-logo {
    filter: none !important;
}
/* Make Menu text big to match logo */
.simpleplan-menu-text-wrapper {
    font-size: 28px !important;
    font-weight: 400 !important;
    height: 34px !important; /* Fixed height for translation */
}
/* Properly translate to show "Close" text */
body.menu-open .simpleplan-menu-text-wrapper span {
    transform: translateY(-34px) !important;
}
/* Ensure Menu and Close text are white */
.simpleplan-menu-text-wrapper span {
    color: #fff !important;
}
.simpleplan-menu-text-wrapper span:nth-child(2) {
    color: #fff !important;
}
/* Ensure hamburger icon stays white */
.simpleplan-menu-button svg path {
    stroke: #fff !important;
}
`;

fs.writeFileSync(cssFile, css.trim() + '\n\n' + overrides);
console.log('CSS Fixed');
