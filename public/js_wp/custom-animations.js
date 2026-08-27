
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

// ==========================================
// 1. SIMPLEPLAN EXACT 3-BALL CURSOR

// ==========================================
(function() {
    const $bigBall = document.querySelector('.cursor-circle.cursor-main');
    const $smallBall1 = document.querySelector('.cursor-circle.cursor-3');
    const $smallBall2 = document.querySelector('.cursor-circle.cursor-2');

    if ($bigBall && $smallBall1 && $smallBall2) {
        window.addEventListener('mousemove', function(e) {
            gsap.to($bigBall, { duration: 0.1, x: e.clientX - 15, y: e.clientY - 15 });
            gsap.to($smallBall2, { duration: 0.35, x: e.clientX - 10, y: e.clientY - 10 });
            gsap.to($smallBall1, { duration: 0.65, x: e.clientX - 10, y: e.clientY - 10 });
        });

        // Hover expansions
        document.querySelectorAll('a, button, input, select, textarea, .sp-menu-link, #menu-btn-toggle').forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to($bigBall, { scale: 1.6, opacity: 0.7, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to($bigBall, { scale: 1, opacity: 1, duration: 0.3 });
            });
        });
    }
})();

// ==========================================
// 2. SIMPLEPLAN EXACT ROTATING LOADER ANIMATION
// ==========================================
(function() {
    const whiteCircle = document.querySelector('.white-circle');
    const blackCircle = document.querySelector('.black-circle');
    const whiteOverlay = document.querySelector('.white-overlay');
    const blackOverlay = document.querySelector('.black-overlay');
    const redOverlay = document.querySelector('.red-overlay');
    const loader = document.getElementById('loader');

    let rotationAngle = 0;
    let rotationSpeed = 3;
    let translateX = 15;
    let isLoaded = false;
    let animDone = false;

    function animateLoader() {
        if (isLoaded && !animDone) {
            rotationSpeed += 0.8;
            translateX -= 0.04 * translateX;

            if (translateX <= 2.5) {
                animDone = true;
                if (whiteOverlay) whiteOverlay.classList.add("active");
                if (blackOverlay) blackOverlay.classList.add("active");
                if (redOverlay) redOverlay.classList.add("active");
                if (loader) loader.classList.add("active");

                // Clean up overlays so screen is 100% visible
                setTimeout(() => {
                    if (whiteOverlay) whiteOverlay.classList.add("done");
                    if (blackOverlay) blackOverlay.classList.add("done");
                    if (redOverlay) redOverlay.classList.add("done");
                    if (loader) loader.style.display = 'none';
                    document.body.classList.remove('stay');
                }, 1100);
            }
        }

        rotationAngle += rotationSpeed;

        if (whiteCircle && blackCircle) {
            whiteCircle.style.transform = "rotate(" + rotationAngle + "deg) translateX(-" + translateX + "vw)";
            blackCircle.style.transform = "rotate(" + rotationAngle + "deg) translateX(" + translateX + "vw)";
        }

        if (!animDone) {
            requestAnimationFrame(animateLoader);
        }
    }

    animateLoader();

    // Trigger after DOM is ready
    window.addEventListener('load', () => {
        setTimeout(() => { isLoaded = true; }, 300);
    });
    // Fallback safety trigger
    setTimeout(() => { isLoaded = true; }, 1500);
})();

// ==========================================
// 3. HAMBURGER MENU CIRCLE REVEAL
// ==========================================
$(document).ready(function() {
    $('.header-menu-wrap a').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-open');
        $('.simpleplan-hamburger-menu').toggleClass('active');
        $('.simpleplan-overlay').toggleClass('active');
    });

    $('.sp-menu-link a, .sp-menu-secondary-link a, .menu-close-cross').on('click', function() {
        $('body').removeClass('menu-open');
        $('.simpleplan-hamburger-menu').removeClass('active');
        $('.simpleplan-overlay').removeClass('active');
    });

    // Midnight header
    try {
        // $('.header-wrapper').midnight();
    } catch(e) {}

    // Swiper Slider
    try {
        new Swiper(".mySwiper", {
            direction: "vertical",
            loop: false,
            autoplay: { delay: 2500, disableOnInteraction: false }
        });
    } catch(e) {}

    // Hero floating circle GSAP
    try {
        gsap.to('.circle-1', { duration: 3, y: -25, x: -20, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-2', { duration: 2.5, y: -15, x: 20, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-3', { duration: 3.2, y: 15, x: 15, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-4', { duration: 2.8, y: 20, x: -15, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-5', { duration: 3, y: 12, x: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        gsap.to('.circle-6', { duration: 2.6, y: -10, x: -10, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    } catch(e) {}
});
