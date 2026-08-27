const fs = require('fs');

let cssPath = 'public/css/bundled_sp.css';
let css = fs.readFileSync(cssPath, 'utf8');

// The font-face src URLs are broken: url(/fonts/) format('woff2'), url(/fonts/) format('woff')
// We need to replace each @font-face block for PP Editorial Old + Aspekta

// Strategy: Parse each @font-face block and replace based on font-weight + font-style combo
const fontMappings = [
  { weight: '200', style: 'italic',  file: 'PPEditorialOld-UltralightItalic.woff2' },
  { weight: '700', style: 'normal',  file: 'PPEditorialOld-Ultrabold.woff2' },
  { weight: '400', style: 'italic',  file: 'PPEditorialOld-Italic.woff2' },
  { weight: '200', style: 'normal',  file: 'PPEditorialOld-Ultralight.woff2' },
  { weight: '400', style: 'normal',  file: 'PPEditorialOld-Regular.woff2' },
  { weight: '700', style: 'italic',  file: 'PPEditorialOld-UltraboldItalic.woff2' },
];

fontMappings.forEach(({ weight, style, file }) => {
  // Match the specific @font-face block for PP Editorial Old with given weight and style
  const regex = new RegExp(
    `(@font-face \\{\\s*font-family: 'PP Editorial Old';\\s*src: url\\(\\/fonts\\/\\) format\\('woff2'\\), url\\(\\/fonts\\/\\) format\\('woff'\\);\\s*font-weight: ${weight};\\s*font-style: ${style};\\s*font-display: swap\\s*\\})`,
    'g'
  );
  const replacement = `@font-face {\n    font-family: 'PP Editorial Old';\n    src: url(/fonts/${file}) format('woff2');\n    font-weight: ${weight};\n    font-style: ${style};\n    font-display: swap\n}`;
  css = css.replace(regex, replacement);
});

// Fix Aspekta - weight 100 900 block
css = css.replace(
  /@font-face \{\s*font-family: 'Aspekta';\s*font-weight: 100 900;\s*font-display: swap;\s*font-style: normal;\s*src: url\(\/fonts\/\) format\('woff2'\);\s*\}/,
  `@font-face {\n    font-family: 'Aspekta';\n    font-weight: 100 900;\n    font-display: swap;\n    font-style: normal;\n    src: url(/fonts/AspektaVF.woff2) format('woff2');\n}`
);

// Fix any remaining empty Aspekta blocks 
css = css.replace(
  /@font-face \{\s*font-family: 'Aspekta';[\s\S]*?src: url\(\/fonts\/\) format\('woff2'\)\s*\}/g,
  `@font-face {\n    font-family: 'Aspekta';\n    font-weight: 100 900;\n    font-display: swap;\n    font-style: normal;\n    src: url(/fonts/AspektaVF.woff2) format('woff2');\n}`
);

fs.writeFileSync(cssPath, css);
console.log('✅ Font paths replaced. Verifying...');

// Verify
const result = css.match(/src: url\(\/fonts\/\) format/g);
if (result) {
  console.log(`❌ Still ${result.length} broken font URLs remaining`);
} else {
  console.log('✅ All font URLs fixed!');
}
