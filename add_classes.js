const fs = require('fs');

let path = 'app/services/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/<div key=\{i\} style=\{\{/g, '<div key={i} className="service-list-item" style={{');
c = c.replace(/<span style=\{\{\s*fontFamily: "'PP Editorial Old', serif",\s*fontSize: '13px',/g, '<span className="service-list-num" style={{\n                  fontFamily: "\'PP Editorial Old\', serif",\n                  fontSize: \'13px\',');
c = c.replace(/<span\s*style=\{\{\s*flex: 1,\s*fontFamily: "'PP Editorial Old', serif",\s*fontSize: 'clamp\(24px, 3vw, 52px\)',/g, '<span className="service-list-title"\n                  style={{\n                    flex: 1,\n                    fontFamily: "\'PP Editorial Old\', serif",\n                    fontSize: \'clamp(24px, 3vw, 52px)\',');
c = c.replace(/<span style=\{\{\s*fontFamily: "'Aspekta', sans-serif",\s*fontSize: '10px',/g, '<span className="service-list-cat" style={{\n                  fontFamily: "\'Aspekta\', sans-serif",\n                  fontSize: \'10px\',');

fs.writeFileSync(path, c);
console.log('Added class names to services page');
