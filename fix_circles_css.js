const fs = require('fs');

let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

const fix = `
/* Gap between the SVG circles and the red section below */
.sp-quite-simple-svg {
    margin-bottom: -15vh !important; /* Adjust if they are overlapping */
    position: relative;
    z-index: 10;
}

/* On mobile/smaller screens give it some specific spacing */
@media (max-width: 767px) {
    .sp-quite-simple-svg {
        margin-bottom: 20px !important;
    }
}

/* Make circles clickable */
.circle-1-g, .circle-2-g, .circle-3-g {
    cursor: pointer !important;
}

/* Increase hit area for mobile/desktop */
.cls-2 {
    pointer-events: all;
    cursor: pointer;
}
`;

fs.writeFileSync(cssFile, css + '\n' + fix);
console.log('CSS fixed');
