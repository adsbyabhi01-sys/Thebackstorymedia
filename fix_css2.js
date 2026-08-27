const fs = require('fs');
let c = fs.readFileSync('app/globals.css', 'utf-8');

c = c.replace(/\/\* ── Logo styling ── \*\/[\s\S]*?(?=\n\n|$)/, `/* ── Logo styling ── */
.sp-main-logo {
  height: auto !important;
  width: 220px !important;
  max-width: 100% !important;
  object-fit: contain;
  transition: opacity 0.2s ease;
}

/* Force default header logo to remain normal (white) */
.midnightHeader.default .simpleplan-logo img.sp-main-logo,
.midnightHeader.black .simpleplan-logo img.sp-main-logo {
  filter: none !important;
}

/* Force white header logo to invert (become black) */
.midnightHeader.white .simpleplan-logo img.sp-main-logo,
.menu-open .midnightHeader.white .simpleplan-logo img.sp-main-logo {
  filter: invert(1) !important;
}

@media (max-width: 767px) {
  .sp-main-logo {
    height: 30px !important;
    width: auto !important;
    max-width: 120px !important;
  }
}`);

fs.writeFileSync('app/globals.css', c);
console.log('Fixed CSS logic');
