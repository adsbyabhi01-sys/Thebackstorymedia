const fs = require('fs');
let cssFile = 'app/globals.css';
let css = fs.readFileSync(cssFile, 'utf-8');

const fix = `
/* Banner text container — sit below circles, centered */
.banner-text-container {
    width: 100% !important;
    text-align: center !important;
    left: 0 !important;
    right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.banner-text-wrapper {
    justify-content: center !important;
    flex-direction: column !important;
    align-items: center !important;
    width: 100% !important;
}
.banner-text-wrapper h1 {
    text-align: center !important;
    width: 100% !important;
}
`;

fs.writeFileSync(cssFile, css + '\n' + fix);
console.log('Banner container centered');
