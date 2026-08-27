const fs = require('fs');

let pagePath = 'app/page.tsx';
let pageStr = fs.readFileSync(pagePath, 'utf-8');

// I will add the transform directly to the SVG paths for revenue-1 and revenue-2
// They currently look like: <path className="st2 circle-3-active revenue-1" d="..." />

pageStr = pageStr.replace(/className="st2 circle-3-active revenue-1"/, 'className="st2 circle-3-active revenue-1" transform="translate(250, 0)"');
pageStr = pageStr.replace(/className="st2 circle-3-active revenue-2"/, 'className="st2 circle-3-active revenue-2" transform="translate(250, 0)"');

// Remove the inline transform if it's already there (just in case I re-run)
// For the gap, I will add an empty div with huge height between the SVG and the next section.
pageStr = pageStr.replace(/<div className="sp-quite-simple-safari" id="safariSection">/g, '<div style={{ height: "200px", width: "100%", clear: "both" }}></div>\n        <div className="sp-quite-simple-safari" id="safariSection">');

fs.writeFileSync(pagePath, pageStr);
console.log('Fixed SVG and added gap div');
