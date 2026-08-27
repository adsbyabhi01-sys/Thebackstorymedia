const fs = require('fs');

// Remove duplicate footers from pages that use BottomSections
['process', 'faq', 'contact'].forEach(page => {
  let file = 'app/' + page + '/page.tsx';
  let c = fs.readFileSync(file, 'utf-8');
  
  // Remove standalone footer sections (since BottomSections now has the footer)
  c = c.replace(/\{\/\* FOOTER \*\/\}\s*<footer[\s\S]*?<\/footer>/g, '');
  c = c.replace(/\{\/\* ── FOOTER ── \*\/\}\s*<footer[\s\S]*?<\/footer>/g, '');
  
  fs.writeFileSync(file, c);
  console.log('Cleaned footer from: ' + page);
});
