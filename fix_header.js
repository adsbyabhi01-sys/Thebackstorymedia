const fs = require('fs');
const path = require('path');

// 1. UPDATE GLOBALS.CSS
let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

// Append new header overrides to the end
const overrides = `
/* HEADER SIZING AND MENU FIXES */
.header-wrapper {
    padding-top: 20px !important; 
    padding-bottom: 20px !important;
}
.header-contents-wrapper {
    padding: 0 40px !important;
}
.sp-main-logo {
    width: 260px !important; /* Made logo much bigger */
    max-width: 100% !important;
}
/* Ensure Menu close button is visible when menu is open */
body.menu-open .simpleplan-menu-text-wrapper span:nth-child(2) {
    color: #111 !important; /* Make "Close" text black so it's visible on white background */
    font-weight: 600 !important;
}
/* Ensure the hamburger SVG color inverts when menu is open */
body.menu-open .simpleplan-menu-button svg path {
    stroke: #111 !important;
}
/* Make Menu text slightly larger */
.simpleplan-menu-text-wrapper {
    font-size: 16px !important;
    font-weight: 500 !important;
}
`;
fs.writeFileSync(cssFile, css + overrides);
console.log('CSS updated');

// 2. ADD HOME LINK TO ALL PAGES
const pages = ['page.tsx', 'services/page.tsx', 'process/page.tsx', 'faq/page.tsx', 'contact/page.tsx'];

pages.forEach(p => {
    let filePath = path.join('app', p);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        
        // Check if home already exists to avoid duplicates
        if (!content.includes('href="/">home</a>')) {
            content = content.replace(
                '<div className="sp-menu-link"><a href="/work">work</a></div>',
                '<div className="sp-menu-link"><a href="/">home</a></div>\n                  <div className="sp-menu-link"><a href="/work">work</a></div>'
            );
            fs.writeFileSync(filePath, content);
            console.log('Added Home link to ' + p);
        }
    }
});
