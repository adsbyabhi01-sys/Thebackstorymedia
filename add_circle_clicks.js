const fs = require('fs');

let pageContent = fs.readFileSync('app/page.tsx', 'utf-8');

const hookScript = `
  useEffect(() => {
    const handleCircleClick = (num) => {
      // Hide all texts and deactivate circles
      [1, 2, 3].forEach(i => {
        const circle = document.getElementById(\`circle-\${i}\`);
        if (circle) circle.classList.remove('active');
        
        document.querySelectorAll(\`.circle-\${i}-active\`).forEach(el => {
          el.classList.remove('active');
        });
      });

      // Activate the clicked one
      const clickedCircle = document.getElementById(\`circle-\${num}\`);
      if (clickedCircle) clickedCircle.classList.add('active');
      
      document.querySelectorAll(\`.circle-\${num}-active\`).forEach(el => {
        el.classList.add('active');
      });
    };

    const c1 = document.querySelector('.circle-1-g');
    const c2 = document.querySelector('.circle-2-g');
    const c3 = document.querySelector('.circle-3-g');

    if(c1) c1.addEventListener('click', () => handleCircleClick(1));
    if(c2) c2.addEventListener('click', () => handleCircleClick(2));
    if(c3) c3.addEventListener('click', () => handleCircleClick(3));

    return () => {
      if(c1) c1.removeEventListener('click', () => handleCircleClick(1));
      if(c2) c2.removeEventListener('click', () => handleCircleClick(2));
      if(c3) c3.removeEventListener('click', () => handleCircleClick(3));
    };
  }, []);
`;

pageContent = pageContent.replace(/useEffect\(\(\) => \{\s*\/\/ We will initialize animations here\s*\}, \[\]\);/, hookScript);

fs.writeFileSync('app/page.tsx', pageContent);
console.log('Script injected in page.tsx');
