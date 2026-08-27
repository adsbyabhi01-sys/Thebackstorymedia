const fs = require('fs');
let layoutPath = 'app/layout.tsx';
let layoutContent = fs.readFileSync(layoutPath, 'utf8');

// The line is: <Script src="https://www.thebackstorymedia.com/wp-content/themes/thebackstory/assets/js_wp/jquery.in-viewport-class.js" strategy="beforeInteractive" />
layoutContent = layoutContent.replace(/<Script src="https:\/\/www\.thebackstorymedia\.com\/wp-content[^>]*\/>/g, '');
layoutContent = layoutContent.replace(/<Script src="https:\/\/www\.thebackstorymedia\.com\/wp-content[^>]*><\/Script>/g, '');

fs.writeFileSync(layoutPath, layoutContent);
console.log('Removed full wp-content script from layout.tsx');
