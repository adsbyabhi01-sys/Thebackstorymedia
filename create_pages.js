const fs = require('fs');

const pages = [
  { slug: 'work', label: 'Work', component: 'WorkPage' },
  { slug: 'services', label: 'Services', component: 'ServicesPage' },
  { slug: 'about', label: 'About', component: 'AboutPage' },
  { slug: 'process', label: 'Process', component: 'ProcessPage' },
  { slug: 'faq', label: 'FAQ', component: 'FAQPage' },
  { slug: 'contact', label: 'Contact', component: 'ContactPage' },
  { slug: 'story', label: 'Our Story', component: 'StoryPage' },
];

pages.forEach(p => {
  const content = `'use client';
import React from 'react';

export default function ${p.component}() {
  return (
    <main>
      <section className="sp-banner-home element" style={{ minHeight: '60vh', background: '#D8031D', display: 'flex', alignItems: 'flex-end', paddingBottom: '80px' }}>
        <div className="container" style={{ paddingLeft: '60px' }}>
          <h1 style={{ color: '#fff', fontFamily: "'PP Editorial Old', serif", fontSize: '80px', fontStyle: 'italic', fontWeight: 300, lineHeight: '1' }}>
            ${p.label}
          </h1>
        </div>
      </section>
      {/* CONTENT COMING SOON */}
    </main>
  );
}
`;
  fs.writeFileSync('app/' + p.slug + '/page.tsx', content);
  console.log('Created: app/' + p.slug + '/page.tsx');
});
