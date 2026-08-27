const fs = require('fs');

// 1. UPDATE custom-animations.js to handle .menu-close-cross click
let jsFile = 'public/js_wp/custom-animations.js';
let jsContent = fs.readFileSync(jsFile, 'utf-8');
jsContent = jsContent.replace(
    /\$\('\.sp-menu-link a, \.sp-menu-secondary-link a'\)\.on\('click'/g,
    "$('.sp-menu-link a, .sp-menu-secondary-link a, .menu-close-cross').on('click'"
);
fs.writeFileSync(jsFile, jsContent);
console.log('Updated custom-animations.js');

// 2. INJECT THE CLOSE CROSS INTO ALL PAGES
const path = require('path');
const pages = ['page.tsx', 'services/page.tsx', 'process/page.tsx', 'faq/page.tsx', 'contact/page.tsx'];

pages.forEach(p => {
    let filePath = path.join('app', p);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        
        // Add the cross if it doesn't exist
        if (!content.includes('menu-close-cross')) {
            content = content.replace(
                /<div className="simpleplan-hamburger-menu">/g,
                `<div className="simpleplan-hamburger-menu">\n              <div className="menu-close-cross" style={{ position: 'absolute', top: '30px', right: '40px', fontSize: '50px', color: '#fff', cursor: 'pointer', zIndex: 100, fontWeight: 300 }}>✕</div>`
            );
            fs.writeFileSync(filePath, content);
            console.log('Added cross to ' + p);
        }
    }
});

// 3. FIX THE CSS FOR MENU TEXT PEEKING
let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

// Replace the previous wrapper css with a strict fixed line-height one
css = css.replace(/\/\* Make Menu text big to match logo \*\/[\s\S]*?(?=\/\* Ensure Menu and Close text are white \*\/)/g, `/* Make Menu text big to match logo */
.simpleplan-menu-text-wrapper {
    font-size: 28px !important;
    font-weight: 400 !important;
    height: 32px !important; /* Strict height */
    overflow: hidden !important;
}
.simpleplan-menu-text-wrapper span {
    height: 32px !important;
    line-height: 32px !important;
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
    transition: transform 0.8s cubic-bezier(0.75, 0, 0.25, 1) !important;
}
/* Properly translate to show "Close" text */
body.menu-open .simpleplan-menu-text-wrapper span {
    transform: translateY(-32px) !important;
}
`);

fs.writeFileSync(cssFile, css);
console.log('Fixed CSS for menu text peeking');
