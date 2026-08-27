const fs = require('fs');

const scriptContent = `
// Replace jquery.in-viewport functionality
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                entry.target.classList.add('was-in-viewport');
            } else {
                entry.target.classList.remove('in-viewport');
            }
        });
    }, { threshold: 0.1 });

    const elementsToWatch = document.querySelectorAll(
        'section, .sp-quite-simple-heading, .sp-quite-simple-body, ' + 
        '.sp-works-work-heading, .sp-we-do-circle, .sp-gob-heading, ' +
        '.sp-glad-content, .sp-are-you-heading, .video-sec, .vs-heading'
    );
    
    elementsToWatch.forEach(el => observer.observe(el));
});
`;

let jsPath = 'public/js_wp/custom-animations.js';
let js = fs.readFileSync(jsPath, 'utf8');

if (!js.includes('IntersectionObserver')) {
    fs.writeFileSync(jsPath, scriptContent + '\n' + js);
    console.log('Added IntersectionObserver to custom-animations.js');
} else {
    console.log('IntersectionObserver already exists');
}
