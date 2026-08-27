const fs = require('fs');

let path = 'app/contact/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/flex: '0 0 38%', minWidth: '320px', background: '#111'/g, 'flex: "1 1 100%", width: "100%", background: "#111"');
c = c.replace(/flex: '1 1 62%', minWidth: '320px', padding: '80px 10%'/g, 'flex: "1 1 100%", width: "100%", padding: "80px 10%"');

fs.writeFileSync(path, c);
console.log('Fixed contact page flex values');
