const fs = require('fs');

let cssPath = 'app/globals.css';
let cssStr = fs.readFileSync(cssPath, 'utf8');

// I will append a fresh strict override block for mobile
const mobileStrict = `

/* ==========================================================================
   STRICT MOBILE FIXES - VERSION 2 (375px - 768px)
   Based on user feedback: Clean hero, no overlap, wrap fixing, edge-to-edge.
   ========================================================================== */
@media (max-width: 768px) {
    /* --- FIX 1 & 2: Clean Hero & Scroll Block Fix --- */
    /* Hide duplicate/redundant desktop circles in the hero */
    .sp-banner-home .circle-big,
    .sp-banner-home .circle-small {
        display: none !important;
    }
    
    /* Make hero height auto so it immediately flows to the next section */
    section.sp-banner-home,
    .sp-banner-home .container {
        min-height: auto !important;
        height: auto !important;
        padding-bottom: 20px !important;
    }
    
    .sp-banner-home .container {
        padding-top: 140px !important; /* Space for logo/menu */
    }
    
    .banner-text-container {
        position: relative !important;
        bottom: 0 !important;
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
    }

    /* Shrink the interactive SVG section so it acts as the ONLY bubble */
    .sp-quite-simple {
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }
    .sp-quite-simple-svg {
        display: block !important;
        width: 100% !important;
        height: auto !important;
        margin: 0 auto !important;
        padding: 0 !important;
        pointer-events: none !important; /* Scroll block fix */
    }
    
    .sp-quite-simple-svg svg {
        pointer-events: none !important;
        width: 150% !important; /* Zoom into the middle circle */
        margin-left: -25% !important; /* Center the zoomed SVG */
        display: block !important;
    }
    
    /* Make only actual circles clickable */
    .sp-quite-simple-svg .cls-2, 
    .circle-1-g, .circle-2-g, .circle-3-g {
        pointer-events: auto !important;
    }
    
    /* Hide any massive spacer divs */
    div[style*="height: 200px"] {
        display: none !important;
    }

    /* --- FIX 3: Services Section Text Wrap --- */
    /* Use the classes I added */
    .service-list-item {
        flex-wrap: wrap !important;
        padding: 20px 0 !important;
        gap: 10px !important;
    }
    .service-list-num {
        flex: 0 0 100% !important;
        margin-bottom: -5px !important;
    }
    .service-list-title {
        flex: 1 1 100% !important;
        font-size: 24px !important; /* Smaller so it fits cleanly in 1-2 lines */
        padding-left: 0px !important; /* Remove huge desktop padding */
        line-height: 1.2 !important;
        width: 100% !important;
    }
    .service-list-cat {
        flex: 0 0 auto !important;
        margin-top: 5px !important;
    }

    /* --- FIX 4: Contact Section Black Box Gap --- */
    /* Make the black box edge-to-edge */
    .contact-left-panel {
        flex: 1 1 100% !important;
        width: 100vw !important;
        max-width: 100vw !important;
        min-width: 100vw !important;
        margin-left: -20px !important; /* Assuming wrapper has 20px padding */
        padding: 60px 20px !important; /* Standardize padding */
        box-sizing: border-box !important;
    }
    .contact-right-panel {
        flex: 1 1 100% !important;
        width: 100% !important;
        padding: 60px 0px !important;
    }
}
`;

fs.writeFileSync(cssPath, cssStr + '\n' + mobileStrict);
console.log('Appended STRICT mobile overrides to globals.css');
