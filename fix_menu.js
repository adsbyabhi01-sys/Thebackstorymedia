const fs = require('fs');
const path = require('path');

// 1. CLEAN AND FIX GLOBALS.CSS
let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

// Remove all my previous bad overrides to start fresh
css = css.replace(/\/\* HEADER SIZING AND MENU FIXES \*\/[\s\S]*?(?=\/\*|$)/g, '');
css = css.replace(/\/\* Ensure Logo inverts to black when menu is open on white background \*\/[\s\S]*?(?=\/\*|$)/g, '');

// Append correct overrides
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
body.menu-open .header-wrapper .sp-main-logo {
    filter: none !important;
}
/* Make Menu text big to match logo */
.simpleplan-menu-text-wrapper {
    font-size: 24px !important;
    font-weight: 400 !important;
    height: 30px !important; /* Fixed height for translation */
}
/* Properly translate to show "Close" text */
body.menu-open .simpleplan-menu-text-wrapper span {
    transform: translateY(-30px) !important;
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
fs.writeFileSync(cssFile, css.trim() + '\n' + overrides);
console.log('CSS updated');

// 2. ADD HOME LINK TO ALL PAGES (Handling multiline formatting)
const pages = ['page.tsx', 'services/page.tsx', 'process/page.tsx', 'faq/page.tsx', 'contact/page.tsx'];

pages.forEach(p => {
    let filePath = path.join('app', p);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        
        // Remove old incorrect inline home link if it exists
        content = content.replace(/<div className="sp-menu-link"><a href="\/">home<\/a><\/div>\s*<div className="sp-menu-link"><a href="\/work">work<\/a><\/div>/g, '<div className="sp-menu-link"><a href="/work">work</a></div>');
        
        // Match the multiline formatting in page.tsx
        const regexMultiline = /<div className="sp-menu-link">\s*<a href="\/work">work<\/a>\s*<\/div>/;
        const inlineFormat = '<div className="sp-menu-link"><a href="/work">work</a></div>';
        
        // If it already has home link, skip
        if (content.includes('>home</a></div>') || content.includes('href="/">home</a>')) {
            // Might already be there correctly
        } else if (regexMultiline.test(content)) {
            content = content.replace(regexMultiline, '<div className="sp-menu-link">\n                  <a href="/">home</a>\n                </div>\n                <div className="sp-menu-link">\n                  <a href="/work">work</a>\n                </div>');
            fs.writeFileSync(filePath, content);
            console.log('Added multiline Home link to ' + p);
        } else if (content.includes(inlineFormat)) {
            content = content.replace(inlineFormat, '<div className="sp-menu-link"><a href="/">home</a></div>\n                  <div className="sp-menu-link"><a href="/work">work</a></div>');
            fs.writeFileSync(filePath, content);
            console.log('Added inline Home link to ' + p);
        }
    }
});
