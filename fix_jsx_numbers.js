const fs = require('fs');

let file = 'app/page.tsx';
let c = fs.readFileSync(file, 'utf-8');

// Replace standard numeric attributes with JSX numeric expressions
// We'll target the specific attributes mentioned
const attributesToReplace = ['size', 'maxLength', 'minLength', 'cols', 'rows', 'tabIndex'];

attributesToReplace.forEach(attr => {
    // Regex matches the attribute name, equals, double quote, optional minus sign, digits, double quote
    const regex = new RegExp(`\\b${attr}="(-?\\d+)"`, 'g');
    c = c.replace(regex, `${attr}={$1}`);
});

fs.writeFileSync(file, c);
console.log('Fixed numeric string props in JSX');
