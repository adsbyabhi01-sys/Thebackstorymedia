const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf-8');

// Fix React DOM properties
c = c.replace(/fetchpriority=/gi, 'fetchPriority=');
c = c.replace(/frameborder=/gi, 'frameBorder=');
c = c.replace(/referrerpolicy=/gi, 'referrerPolicy=');
c = c.replace(/allowfullscreen/gi, 'allowFullScreen');
c = c.replace(/maxlength=/gi, 'maxLength=');
c = c.replace(/minlength=/gi, 'minLength=');
c = c.replace(/autocomplete=/gi, 'autoComplete=');
c = c.replace(/novalidate/gi, 'noValidate');
c = c.replace(/onclick="[^"]*"/gi, ''); // Remove inline onclicks (React expects a function)

fs.writeFileSync('app/page.tsx', c);
console.log('Fixed React DOM properties');
