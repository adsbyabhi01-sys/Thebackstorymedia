const fs = require('fs');

// Fix app/page.tsx
let file = 'app/page.tsx';
let c = fs.readFileSync(file, 'utf-8');

// Fix implicit 'any' on num parameter
c = c.replace(/const handleCircleClick = \(num\) => \{/, 'const handleCircleClick = (num: number) => {');

// Fix noValidate="noValidate" to noValidate
c = c.replace(/noValidate="noValidate"/g, 'noValidate');

fs.writeFileSync(file, c);
console.log('Fixed page.tsx remaining TS errors');
