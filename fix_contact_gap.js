const fs = require('fs');

let pagePath = 'app/contact/page.tsx';
let page = fs.readFileSync(pagePath, 'utf8');

page = page.replace(
  /<section data-midnight="white" style=\{\{\s*background: '#fff',\s*display: 'flex',/g,
  '<section className="contact-info-section" data-midnight="white" style={{ background: \'#fff\', display: \'flex\','
);

fs.writeFileSync(pagePath, page);

let cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');
css += `
@media (max-width: 768px) {
    .contact-info-section {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
    }
}
`;
fs.writeFileSync(cssPath, css);

console.log('Fixed contact page white gap by removing padding on the wrapper section');
