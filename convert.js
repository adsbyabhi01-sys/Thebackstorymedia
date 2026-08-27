const fs = require('fs');

const htmlPath = 'C:\\Users\\ADMIN\\Desktop\\The Backstory Media\\index.html';
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Extract body
const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

// class to className
bodyContent = bodyContent.replace(/\bclass=/g, 'className=');
bodyContent = bodyContent.replace(/\bfor=/g, 'htmlFor=');

// Self-closing tags
const tagsToClose = ['img', 'input', 'hr', 'br', 'source'];
tagsToClose.forEach(tag => {
    const regex = new RegExp(`(<${tag}[^>]*?)(?<!/)>`, 'gi');
    bodyContent = bodyContent.replace(regex, '$1 />');
});

// Inline styles (basic fix)
bodyContent = bodyContent.replace(/style="([^"]+)"/g, 'style={{ /* $1 */ }}');

// Remove scripts and comments
bodyContent = bodyContent.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// SVG properties
bodyContent = bodyContent.replace(/stroke-width/g, 'strokeWidth');
bodyContent = bodyContent.replace(/stroke-miterlimit/g, 'strokeMiterlimit');
bodyContent = bodyContent.replace(/stroke-linecap/g, 'strokeLinecap');
bodyContent = bodyContent.replace(/stroke-linejoin/g, 'strokeLinejoin');
bodyContent = bodyContent.replace(/fill-rule/g, 'fillRule');
bodyContent = bodyContent.replace(/clip-rule/g, 'clipRule');
bodyContent = bodyContent.replace(/viewbox/gi, 'viewBox');
bodyContent = bodyContent.replace(/tabindex/gi, 'tabIndex');
bodyContent = bodyContent.replace(/onclick/gi, 'onClick');
bodyContent = bodyContent.replace(/onsubmit/gi, 'onSubmit');
bodyContent = bodyContent.replace(/stroke-dasharray/gi, 'strokeDasharray');
bodyContent = bodyContent.replace(/stroke-dashoffset/gi, 'strokeDashoffset');
bodyContent = bodyContent.replace(/xmlns:xlink/gi, 'xmlnsXlink');

const pageTsx = `
'use client';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // We will initialize animations here
  }, []);

  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync('C:\\Users\\ADMIN\\Desktop\\the-backstory-media\\app\\page.tsx', pageTsx, 'utf-8');
console.log('page.tsx generated!');
