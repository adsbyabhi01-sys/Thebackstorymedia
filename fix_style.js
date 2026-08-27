const fs = require('fs');
let c = fs.readFileSync('app/page.tsx', 'utf-8');
c = c.replace(/<style dangerouslySetInnerHTML=\{\{ __html: ([\s\S]*?) \}\} \/>/gi, (m, p1) => {
    // Escape backticks if needed, but here we just wrap it properly.
    return "<style dangerouslySetInnerHTML={{ __html: `" + p1.replace(/`/g, '\\`') + "` }} />";
});
fs.writeFileSync('app/page.tsx', c);
console.log('Fixed style tags');
