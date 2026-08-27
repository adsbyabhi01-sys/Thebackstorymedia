const fs = require('fs');
let c = fs.readFileSync('app/globals.css', 'utf-8');

// Remove old logo CSS rules and replace with cleaner ones
c = c.replace('.sp-main-logo { height: auto !important; width: 220px !important; max-width: 100% !important; object-fit: contain; }', '');
c = c.replace(".midnightHeader.white .sp-main-logo { content: url('/images/logo-red.png') !important; filter: none !important; }", '');
c = c.replace(".midnightHeader.black .sp-main-logo, .midnightHeader.default .sp-main-logo { content: url('/images/logo-white.png') !important; filter: none !important; }", '');
c = c.replace("@media (max-width: 767px) { .sp-main-logo { height: 30px; max-width: 120px; } }", '');

// Add fresh, clean logo CSS
c += `
/* ── Logo styling ── */
.sp-main-logo {
  height: auto !important;
  width: 220px !important;
  max-width: 100% !important;
  object-fit: contain;
  filter: none !important;
  transition: opacity 0.2s ease;
}
/* Prevent bundled CSS invert filters from messing with our logo images */
.simpleplan-logo img.sp-main-logo,
.midnightHeader.default .simpleplan-logo img.sp-main-logo,
.midnightHeader.white .simpleplan-logo img.sp-main-logo,
.midnightHeader.black .simpleplan-logo img.sp-main-logo,
.menu-open .midnightHeader.white .simpleplan-logo img.sp-main-logo {
  filter: none !important;
}
@media (max-width: 767px) {
  .sp-main-logo {
    height: 30px !important;
    width: auto !important;
    max-width: 120px !important;
  }
}
`;

fs.writeFileSync('app/globals.css', c);
console.log('Fixed logo CSS rules');
