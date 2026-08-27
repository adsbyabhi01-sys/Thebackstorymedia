const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

// 1. Remove SVG plus sign from all pages
walkDir('app', function(filePath) {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content.replace(
            /<div className="simpleplan-menu-button">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/g,
            '<div className="simpleplan-menu-button"></div>'
        );
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent);
            console.log('Removed plus SVG from:', filePath);
        }
    }
});

// 2. Fix MENU text cut in mobile (increase height in globals.css)
let cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

// The strict mobile override has this? Wait, let's just append a very specific override.
const textFix = `
@media (max-width: 768px) {
    .simpleplan-menu-text-wrapper {
        height: 24px !important;
        line-height: 24px !important;
        overflow: visible !important;
    }
    #menu-btn-toggle.menu-open .simpleplan-menu-text-wrapper span {
        transform: translateY(-24px) !important;
    }
    .simpleplan-menu-text-wrapper span {
        display: block !important;
        padding-bottom: 4px !important;
    }
}
`;
fs.writeFileSync(cssPath, css + '\n' + textFix);
console.log('Appended Menu text height fix to globals.css');
