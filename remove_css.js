const fs = require('fs');
let cssPath = 'app/globals.css';
let cssStr = fs.readFileSync(cssPath, 'utf-8');

// Remove the conflicting CSS rule
cssStr = cssStr.replace(/\.revenue-1, \.revenue-2 \{[\s\S]*?\}/g, '');

fs.writeFileSync(cssPath, cssStr);
console.log('Removed conflicting CSS');
