const fs = require('fs');

// 1. Fix GSAP circles in custom-animations.js
let animPath = 'public/js_wp/custom-animations.js';
let animContent = fs.readFileSync(animPath, 'utf8');

if (!animContent.includes("if (document.querySelector('.circle-1'))")) {
  animContent = animContent.replace(
    /gsap\.to\('\.circle-1', [^{]+{[^}]+}\);[\s\S]*?gsap\.to\('\.circle-6', [^{]+{[^}]+}\);/,
    `if (document.querySelector('.circle-1')) {
        gsap.to('.circle-1', { duration: 3, y: -25, x: -20, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-2', { duration: 2.5, y: -15, x: 20, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-3', { duration: 3.2, y: 15, x: 15, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-4', { duration: 2.8, y: 20, x: -15, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-5', { duration: 3, y: 12, x: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-6', { duration: 2.6, y: -10, x: -10, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }`
  );
  fs.writeFileSync(animPath, animContent);
  console.log('Fixed custom-animations.js GSAP circles');
}

// 2. Remove jquery.in-viewport-class.js from layout.tsx
let layoutPath = 'app/layout.tsx';
let layoutContent = fs.readFileSync(layoutPath, 'utf8');
if (layoutContent.includes('jquery.in-viewport-class.js')) {
    layoutContent = layoutContent.replace(/<Script src="\/js_wp\/jquery\.in-viewport-class\.js"[^>]*>\s*<\/Script>/g, '');
    fs.writeFileSync(layoutPath, layoutContent);
    console.log('Removed jquery.in-viewport-class.js from layout.tsx');
}

// 3. Fix swiper warning in page.tsx (duplicate slides or disable loop)
// For simplicity, I'll disable loop mode in custom-animations.js for mySwiper
if (animContent.includes('new Swiper(".mySwiper"')) {
    animContent = animContent.replace(/loop:\s*true,/, 'loop: false,');
    fs.writeFileSync(animPath, animContent);
    console.log('Disabled loop for mySwiper to prevent warnings');
}
