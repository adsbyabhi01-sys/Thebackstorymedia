const fs = require('fs');
let cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

const forceVisible = `
@media (max-width: 768px) {
    /* Force visibility of animated elements on mobile */
    .sp-quite-simple-heading h2,
    .sp-quite-simple-body p,
    .sp-works-work-heading,
    .sp-we-do-circle,
    .spwd-head,
    .spwd-body,
    .sp-gob-heading,
    .sp-glad-content,
    .vs-heading h2,
    .sp-banner-home h1,
    .banner-text-wrapper h1 {
        opacity: 1 !important;
        transform: none !important;
        animation: none !important;
    }
}
`;

fs.writeFileSync(cssPath, css + '\n' + forceVisible);
console.log('Appended fixed force visible CSS for mobile');
