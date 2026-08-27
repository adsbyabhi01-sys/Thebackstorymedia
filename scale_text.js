const fs = require('fs');

let file = 'components/BottomSections.tsx';
let c = fs.readFileSync(file, 'utf-8');

// Increase font size of START A PROJECT from 11px to 14px
c = c.replace(/fontSize: '11px'/g, "fontSize: '14px', fontWeight: 600");

// Increase the red dot size proportionally from 6px to 8px
c = c.replace(/width: '6px', height: '6px'/g, "width: '8px', height: '8px'");

fs.writeFileSync(file, c);
console.log('START A PROJECT text enlarged');
