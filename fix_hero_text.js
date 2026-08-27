const fs = require('fs');

let file = 'app/page.tsx';
let c = fs.readFileSync(file, 'utf-8');

// Replace the banner text part
c = c.replace(/<h1>[\s\S]*?<\/h1>/, `<h1>
                        <span className="banner-text banner-text-1">
                            Behind every brand, 
                        </span>
                        <span className="banner-text banner-text-2">
                            there's a 
                        </span>
                        <span className="banner-text-3">
                         backstory.
                        </span>
                    </h1>`);

fs.writeFileSync(file, c);
console.log('Homepage hero text updated');
