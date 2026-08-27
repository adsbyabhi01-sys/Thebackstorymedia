const fs = require('fs');

let cssPath = 'app/globals.css';
let css = fs.readFileSync(cssPath, 'utf8');

const fixes = `
@media (max-width: 768px) {
    /* Fix 1: Hide/shrink the 200px spacer that creates white gap */
    div[style*="height: 200px"] {
        height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        display: none !important;
    }

    /* Fix 2: Remove top padding from sp-quite-simple-safari (slider section) */
    .sp-quite-simple-safari {
        padding-top: 0 !important;
        margin-top: 0 !important;
    }
    
    /* Fix 3: Reduce the quite-simple section gap */
    .sp-quite-simple {
        padding-bottom: 0 !important;
    }

    /* Fix 4: Force video-sec and all sections after the bubble to be visible */
    .video-sec,
    .sp-works,
    .sp-we-do,
    .sp-give-our-best,
    .sp-glad-meet,
    .sp-are-you,
    .sp-quite-simple-safari {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
    }
    
    /* Fix 5: Force all child headings and paragraphs visible on mobile */
    .video-sec *,
    .sp-works *,
    .sp-we-do *,
    .sp-give-our-best *,
    .sp-glad-meet *,
    .sp-are-you * {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
    }
}
`;

fs.writeFileSync(cssPath, css + '\n' + fixes);
console.log('Applied white gap fix and force-visibility for post-bubble sections');
