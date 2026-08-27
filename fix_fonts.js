const fs = require('fs');

// ============================================================
// FIX 1: Font paths in bundled_sp.css
// The @font-face rules have empty src: url(/fonts/) — fix them
// to point to actual files in /public/fonts/
// ============================================================
let cssPath = 'public/css/bundled_sp.css';
let css = fs.readFileSync(cssPath, 'utf8');

// PP Editorial Old — all variants point to empty /fonts/ path
// We have these files in /public/fonts/:
// PPEditorialOld-Italic.woff2, PPEditorialOld-Regular.woff2,
// PPEditorialOld-Ultrabold.woff2, PPEditorialOld-UltraboldItalic.woff2
// PPEditorialOld-Ultralight.woff2, PPEditorialOld-UltralightItalic.woff2

// Replace @font-face blocks with proper paths
// Weight 200 italic => UltralightItalic
// Weight 200 normal => Ultralight
// Weight 400 italic => Italic
// Weight 400 normal => Regular
// Weight 700 normal => Ultrabold
// Weight 700 italic => UltraboldItalic

const fontFaceBlock = `@font-face {
    font-family: 'PP Editorial Old';
    src: url(/fonts/PPEditorialOld-UltralightItalic.woff2) format('woff2');
    font-weight: 200;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: 'PP Editorial Old';
    src: url(/fonts/PPEditorialOld-Ultrabold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: 'PP Editorial Old';
    src: url(/fonts/PPEditorialOld-Italic.woff2) format('woff2');
    font-weight: 400;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: 'PP Editorial Old';
    src: url(/fonts/PPEditorialOld-Ultralight.woff2) format('woff2');
    font-weight: 200;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: 'PP Editorial Old';
    src: url(/fonts/PPEditorialOld-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: 'PP Editorial Old';
    src: url(/fonts/PPEditorialOld-UltraboldItalic.woff2) format('woff2');
    font-weight: 700;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: 'Aspekta';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    src: url(/fonts/AspektaVF.woff2) format('woff2');
}`;

// Replace the broken font-face block (from @font-face { \n    font-family: 'PP Editorial Old'; to the end of the Aspekta @font-face)
css = css.replace(
  /@font-face \{\s*font-family: 'PP Editorial Old'[\s\S]*?src: url\(\/fonts\/\) format\('woff2'\);\s*\}[\s\S]*?@font-face \{\s*font-family: 'Aspekta';[\s\S]*?src: url\(\/fonts\/\) format\('woff2'\);\s*\}/,
  fontFaceBlock
);

fs.writeFileSync(cssPath, css);
console.log('✅ Font paths fixed in bundled_sp.css');
