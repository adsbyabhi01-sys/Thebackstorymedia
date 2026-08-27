const fs = require('fs');
let lines = fs.readFileSync('app/page.tsx', 'utf-8').split('\n');

// The h1 closes at line 172 (index 171)
// Line 173 (index 172) starts with broken orphan SVG elements
// We need to insert the missing closing/opening tags between them

const insertAfterIndex = 171; // after </h1> at line 172

const missingStructure = [
``,
`                </div>`,
`            </div>`,
`        </div>`,
`    </section>`,
``,
`    <section data-midnight="white" className="sp-quite-simple bg-white section">`,
`      <div className="sp-quite-simple-wrapper">`,
`        <div className="sp-quite-simple-text">`,
`            <div className="sp-quite-simple-text-wrapper">`,
`                 <div  className="sp-quite-simple-heading element i-v">`,
`                    <h2 >Your backstory,`,
`                        o<span>u</span>r craft</h2>`,
`                 </div>`,
`                 <div className="sp-quite-simple-body element i-v">`,
`                    <p className="col-grey">Every brand has a story — we find it, shape it, and build everything around it.`,
`                    </p>`,
`                 </div>`,
`            </div>`,
`        </div>`,
`        <div className="sp-quite-simple-svg" id="defautSection">`,
`            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440.4 768.53">`,
`                <style dangerouslySetInnerHTML={{ __html: \``,
`                    .st2{fill:#FFFFFF !important;}`,
`                \` }} />`,
`                <g id="Layer_2" data-name="Layer 2">`,
`                    <g id="Layer_1-2" data-name="Layer 1">`,
`                        <path stroke="#111"  className="cls-1" />`,
`                            <g className="circle-1-g">`,
];

// Insert the missing lines
lines.splice(insertAfterIndex + 1, 0, ...missingStructure);

fs.writeFileSync('app/page.tsx', lines.join('\n'));
console.log('File structure restored! Total lines now:', lines.length);
