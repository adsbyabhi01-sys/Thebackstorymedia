const fs = require('fs');

let pagePath = 'app/page.tsx';
let page = fs.readFileSync(pagePath, 'utf8');

// Remove the SECOND standalone sp-quite-slider-wrapper (the duplicate)
// It starts right after the closing </div> of sp-quite-simple-safari section's slider
// and ends just before </div> </section>
// Pattern: a div.sp-quite-slider-wrapper with class only (NOT inside sp-quite-simple-safari)

// Find both occurrences of sp-quite-slider-wrapper
const first = page.indexOf('sp-quite-slider-wrapper');
const second = page.indexOf('sp-quite-slider-wrapper', first + 1);

if (second !== -1) {
    // Find the opening <div> tag of the second one
    let openTag = page.lastIndexOf('<div', second);
    
    // Find the matching closing </div> - count nested divs
    let depth = 0;
    let pos = openTag;
    while (pos < page.length) {
        if (page.substring(pos, pos + 4) === '<div') {
            depth++;
            pos = pos + 4;
        } else if (page.substring(pos, pos + 6) === '</div>') {
            depth--;
            pos = pos + 6;
            if (depth === 0) break;
        } else {
            pos++;
        }
    }
    
    const before = page.substring(0, openTag);
    const after = page.substring(pos);
    page = before + after;
    
    fs.writeFileSync(pagePath, page);
    console.log('Removed duplicate sp-quite-slider-wrapper at position', openTag);
} else {
    console.log('No duplicate found');
}
