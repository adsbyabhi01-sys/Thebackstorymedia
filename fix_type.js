const fs = require('fs');

const pages = ['services', 'process', 'faq'];

pages.forEach(page => {
  let file = 'app/' + page + '/page.tsx';
  let c = fs.readFileSync(file, 'utf-8');

  // Change font size from 12px to 15px
  c = c.replace(/fontSize: '12px'/g, "fontSize: '15px'");
  // Increase letter spacing slightly for bolder look
  c = c.replace(/letterSpacing: '3px'/g, "letterSpacing: '4px'");
  // Change opacity/color to be slightly brighter/bolder looking
  c = c.replace(/color: 'rgba\(255,255,255,0\.6\)'/g, "color: 'rgba(255,255,255,0.8)', fontWeight: 600");

  fs.writeFileSync(file, c);
});

console.log('Fixed typography');
