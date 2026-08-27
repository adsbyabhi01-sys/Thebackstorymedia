const fs = require('fs');

const pages = ['services', 'process', 'faq', 'contact'];

pages.forEach(page => {
  let file = 'app/' + page + '/page.tsx';
  let c = fs.readFileSync(file, 'utf-8');

  // Change alignItems from flex-end to center and add textAlign center
  c = c.replace(/alignItems: 'flex-end'/g, "alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const");
  
  fs.writeFileSync(file, c);
  console.log('Fixed: ' + page);
});
