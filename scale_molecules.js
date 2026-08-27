const fs = require('fs');

let file = 'components/BottomSections.tsx';
let c = fs.readFileSync(file, 'utf-8');

// Container width/height from 200px to 260px
c = c.replace(/width: '200px', height: '200px'/g, "width: '260px', height: '260px'");

// Bubble 1
c = c.replace(/width: '120px', height: '120px'/g, "width: '150px', height: '150px'");
c = c.replace(/top: '10px', left: '10px'/g, "top: '15px', left: '15px'");
c = c.replace(/translate\(-10px, -10px\)/g, "translate(-15px, -15px)");

// Bubble 2
c = c.replace(/width: '140px', height: '140px'/g, "width: '180px', height: '180px'");
c = c.replace(/bottom: '10px', right: '10px'/g, "bottom: '15px', right: '15px'");
c = c.replace(/translate\(10px, 10px\)/g, "translate(15px, 15px)");

// Bubble 3
c = c.replace(/width: '160px', height: '160px'/g, "width: '210px', height: '210px'");
// Font size inside Bubble 3
c = c.replace(/fontSize: '15px'/g, "fontSize: '18px'");

fs.writeFileSync(file, c);
console.log('Molecules scaled up');
