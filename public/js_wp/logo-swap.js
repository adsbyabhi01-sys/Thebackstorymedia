// Logo Swap Script — swaps white/red logo based on header position over light/dark sections
(function() {
  function initLogoSwap() {
    var logo = document.querySelector('.sp-main-logo');
    if (!logo) return;

    var whiteSrc = '/images/logo-white.png';
    var redSrc = '/images/logo-red.png';

    function checkBg() {
      var header = document.querySelector('.header-wrapper');
      if (!header) return;
      var rect = header.getBoundingClientRect();
      var midY = rect.top + rect.height / 2;
      var midX = window.innerWidth / 4;

      var el = document.elementFromPoint(midX, midY);
      if (!el) return;

      // Walk up to find section-level element with a background
      var bg = '';
      var node = el;
      while (node && node !== document.body) {
        var cs = window.getComputedStyle(node);
        var bgColor = cs.backgroundColor;
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          bg = bgColor;
          break;
        }
        node = node.parentElement;
      }

      if (!bg) bg = 'rgb(0, 0, 0)'; // default dark

      // Parse the RGB to check brightness
      var match = bg.match(/\d+/g);
      if (match) {
        var r = parseInt(match[0]);
        var g = parseInt(match[1]);
        var b = parseInt(match[2]);
        var brightness = (r * 299 + g * 587 + b * 114) / 1000;
        
        if (brightness > 160) {
          // Light background → use red logo
          logo.src = redSrc;
        } else {
          // Dark/red background → use white logo
          logo.src = whiteSrc;
        }
      }
    }

    window.addEventListener('scroll', checkBg, { passive: true });
    setTimeout(checkBg, 500);
    setTimeout(checkBg, 2000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogoSwap);
  } else {
    initLogoSwap();
  }
})();
