const fs = require('fs');

let path = 'app/contact/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/flex: "1 1 100%", width: "100%", background: "#111"/g, 'flex: "0 0 38%", minWidth: "320px", background: "#111"');
c = c.replace(/flex: "1 1 100%", width: "100%", padding: "80px 10%"/g, 'flex: "1 1 62%", minWidth: "320px", padding: "80px 10%"');

// Add classes instead
c = c.replace(/<div style=\{\{\s*flex: "0 0 38%",/g, '<div className="contact-left-panel" style={{\n            flex: "0 0 38%",');
c = c.replace(/<div style=\{\{\s*flex: "1 1 62%",/g, '<div className="contact-right-panel" style={{\n            flex: "1 1 62%",');

fs.writeFileSync(path, c);
console.log('Restored and added classes to contact page');
