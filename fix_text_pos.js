const fs = require('fs');

let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

// Replace the previous gap fix
css = css.replace(/margin-bottom: 5vh !important; padding-bottom: 50px;/g, 'margin-bottom: 15vh !important; padding-bottom: 150px !important;');

const fix = `
/* Fix the physical position of the "revenue" text in SVG so it aligns with the 3rd circle */
.revenue-1, .revenue-2 {
    transform: translate(180px, 40px) !important;
}

/* Add massive gap above the red section below */
.sp-quite-simple-safari, .sp-works {
    margin-top: 15vh !important;
}
`;

fs.writeFileSync(cssFile, css + '\n' + fix);
console.log('Fixed CSS positions and gap');
