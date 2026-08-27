const fs = require('fs');

const pages = ['services', 'process', 'faq'];

pages.forEach(page => {
  let file = 'app/' + page + '/page.tsx';
  let c = fs.readFileSync(file, 'utf-8');

  // 1. Reduce the gap by changing 100vh to 60vh and adding top padding
  c = c.replace(/minHeight: '100vh'/g, "minHeight: '65vh', paddingTop: '160px'");

  // 2. Make the small label text slightly bigger and bolder
  c = c.replace(/fontSize: '12px', letterSpacing: '3px',\s*textTransform: 'uppercase', color: 'rgba\(255,255,255,0\.6\)'/g, 
                "fontSize: '15px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)'");

  // 3. Just in case they meant the H1 title text, let's bump its weight slightly from 300 to 400
  // and increase the base clamp size slightly
  c = c.replace(/fontWeight: 300, color: '#fff', lineHeight: 1\.05/g, 
                "fontWeight: 400, color: '#fff', lineHeight: 1.05");

  fs.writeFileSync(file, c);
});

console.log('Updated all pages');
