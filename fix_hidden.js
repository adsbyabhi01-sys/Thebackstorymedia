const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf-8');

// Remove the CF7 hidden fields
c = c.replace(/<fieldset className="hidden-fields-container">[\s\S]*?<\/fieldset>/gi, '');

// Also remove any remaining hidden inputs that might be modified by WP scripts
c = c.replace(/<input type="hidden"[^>]*\/>/gi, '');

fs.writeFileSync('app/page.tsx', c);
console.log('Fixed controlled input warnings by removing WP hidden fields');
