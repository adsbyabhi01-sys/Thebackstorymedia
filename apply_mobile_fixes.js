const fs = require('fs');
const path = 'app/globals.css';
let css = fs.readFileSync(path, 'utf8');

const mobileOverrides = `
/* ==========================================================================
   MOBILE & RESPONSIVE FIXES (375px - 768px)
   Applied as per instruction to ensure no overflow, proper scaling, 
   no scroll blocking, and minimum touch target sizes.
   ========================================================================== */
@media (max-width: 768px) {
    /* 1. Prevent Horizontal Overflow & Ensure Body Scrolling */
    html, body {
        overflow-x: hidden !important;
        width: 100vw !important;
        position: relative !important;
    }

    /* 2. Logo and Navigation Menu Scaling */
    .sp-main-logo {
        width: 140px !important;
        height: auto !important;
    }
    .header-contents-wrapper {
        padding: 12px 16px !important;
    }
    .simpleplan-menu-text-wrapper span {
        font-size: 14px !important;
    }
    .simpleplan-menu-text-wrapper {
        height: 20px !important;
        line-height: 20px !important;
    }
    #menu-btn-toggle.menu-open .simpleplan-menu-text-wrapper span {
        transform: translateY(-20px) !important;
    }
    .simpleplan-menu-button {
        width: 28px !important;
        height: 28px !important;
    }

    /* 3. Hero Bubbles / Decorative Circles (Scroll Block Fix) */
    .sp-banner-home .circle-big,
    .sp-banner-home .circle-small {
        pointer-events: none !important; /* Do not block scroll */
        transform: scale(0.4) !important; /* Scale down drastically */
        transform-origin: center center !important;
    }
    .sp-banner-home .container {
        pointer-events: none !important; /* Let scroll pass through */
    }
    .banner-text-container {
        pointer-events: auto !important; /* Keep text interactive if needed */
        bottom: 10vh !important;
    }
    .banner-text, .banner-text-3, .banner-text span {
        font-size: 32px !important; /* Scale down hero text */
    }

    /* 4. Interactive SVG Circles (Reach, Impression, Revenue) */
    .sp-quite-simple-svg {
        display: block !important;
        pointer-events: none !important; /* Allow scroll through the SVG bounding box */
        width: 100% !important;
        height: auto !important;
        margin-bottom: 20px !important;
        padding-bottom: 20px !important;
    }
    .sp-quite-simple-svg svg {
        pointer-events: none !important; 
    }
    /* Only allow interaction exactly on the SVG shapes */
    .sp-quite-simple-svg .cls-2,
    .circle-1-g, .circle-2-g, .circle-3-g {
        pointer-events: auto !important;
    }
    /* Fix spacer div height for mobile */
    div[style*="height: 200px"] {
        height: 40px !important; 
        pointer-events: none !important;
    }

    /* 5. General Content & Typography Scaling (Services, Process, FAQ, Contact) */
    h1, h2, .sp-quite-simple-heading h2 {
        font-size: 28px !important;
        line-height: 1.2 !important;
        word-wrap: break-word !important;
    }
    h3, h4 {
        font-size: 22px !important;
        line-height: 1.3 !important;
    }
    p, .sp-quite-simple-body p {
        font-size: 16px !important;
        line-height: 1.5 !important;
    }
    
    .section, section, .sp-quite-simple {
        padding-top: 40px !important;
        padding-bottom: 40px !important;
    }

    /* 6. Touch Targets */
    a, button, .sp-menu-link, input[type="submit"] {
        min-height: 44px !important;
        min-width: 44px !important;
    }
}
`;

fs.writeFileSync(path, css + '\n' + mobileOverrides);
console.log('Mobile overrides appended to globals.css');
