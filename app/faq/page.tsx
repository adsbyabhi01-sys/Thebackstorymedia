'use client';
import React, { useState } from 'react';
import Script from 'next/script';
import BottomSections from '../../components/BottomSections';

const faqs = [
  {
    q: 'What makes The Backstory Media different from other agencies?',
    a: 'We start every project by finding the "why" behind your business, not just the "what." That story shapes the strategy, brand and marketing that follow — so nothing feels generic or borrowed from another brand\'s playbook.'
  },
  {
    q: 'Which industries do you work with?',
    a: 'Healthcare brands, doctors and hospitals, startups and founders, personal brands, luxury businesses, sports organisations and government projects — anywhere trust matters as much as attention.'
  },
  {
    q: 'Do you work with early-stage founders and startups?',
    a: 'Yes. Some of the best backstories are still being written. We shape brand and strategy early so growth has something solid to build on.'
  },
  {
    q: 'What\'s included — branding, website, marketing, or all three?',
    a: 'Whatever your story needs. Some projects start with brand identity, others with a website or performance marketing. We scope every engagement around what will actually move the story forward.'
  },
  {
    q: 'What\'s the first step to start?',
    a: 'A short conversation. Tell us about your business through the form below, and we\'ll come back with how we\'d approach your story.'
  }
];

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div 
      style={{ 
        borderBottom: '1px solid rgba(255,255,255,0.1)', 
        padding: '32px 0', 
        cursor: 'pointer' 
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ 
          fontFamily: "'PP Editorial Old', serif", 
          fontSize: 'clamp(24px, 3vw, 40px)', 
          fontWeight: 300, 
          color: isOpen ? '#D8031D' : '#fff', 
          margin: 0, 
          transition: 'color 0.3s ease' 
        }}>
          {q}
        </h3>
        <span style={{ 
          color: isOpen ? '#D8031D' : 'rgba(255,255,255,0.5)', 
          fontSize: '24px', 
          fontWeight: 300,
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'all 0.3s ease'
        }}>
          +
        </span>
      </div>
      <div style={{ 
        maxHeight: isOpen ? '500px' : '0px', 
        overflow: 'hidden', 
        transition: 'max-height 0.4s ease',
        opacity: isOpen ? 1 : 0,
      }}>
        <p style={{ 
          fontFamily: "'Aspekta', sans-serif", 
          fontSize: '16px', 
          lineHeight: 1.6, 
          color: 'rgba(255,255,255,0.8)', 
          marginTop: '24px', 
          marginBottom: 0, 
          maxWidth: '800px',
          fontWeight: 300
        }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* LOADER */}
      <div id="loader">
        <div className="loader-icons">
          <div className="white-circle"></div><div className="black-circle"></div>
          <div className="white-overlay"></div><div className="black-overlay"></div><div className="red-overlay"></div>
        </div>
      </div>

      {/* CURSOR */}
      <div className="cursor-wrapper">
        <div className="cursor-circle cursor-2"></div>
        <div className="cursor-circle cursor-3"></div>
        <div className="cursor-circle cursor-main"></div>
      </div>

      <div className="wrapper">
        {/* HEADER */}
        <header>
          <nav className="header-wrapper">
            <div className="header-contents-wrapper flex flex-jsb">
              <div className="simpleplan-logo">
                <a href="/" style={{ textDecoration: 'none' }}>
                  <img src="/images/logo-white.png" alt="The Backstory Media" className="sp-main-logo" />
                </a>
              </div>
              <div className="header-menu-wrap">
                <a className="flex" href="javascript:void(0)">
                  <div id="menu-btn-toggle" className="simpleplan-menu flex align flex-jsb">
                    <div className="simpleplan-menu-text">
                      <div className="simpleplan-menu-text-wrapper"><span>Menu</span><span>Close</span></div>
                    </div>
                    <div className="simpleplan-menu-button"></div>
                  </div>
                </a>
              </div>
            </div>
          </nav>

          {/* HAMBURGER MENU */}
          <div className="ham-menu">
            <div className="simpleplan-overlay"></div>
            <div className="simpleplan-hamburger-menu">
              <div className="menu-close-cross" style={{ position: 'absolute', top: '30px', right: '40px', fontSize: '50px', color: '#fff', cursor: 'pointer', zIndex: 100, fontWeight: 300 }}>✕</div>
              <div className="simpleplan-hamburger-wrapper flex flex-jsb">
                <div className="sp-menu-links flex flex-c">
                  <div className="sp-menu-link">
                  <a href="/">home</a>
                </div>
                <div className="sp-menu-link">
                  <a href="/work">work</a>
                </div>
                  <div className="sp-menu-link"><a href="/services">services</a></div>
                  <div className="sp-menu-link"><a href="/about">about</a></div>
                  <div className="sp-menu-link"><a href="/process">process</a></div>
                  <div className="sp-menu-link"><a href="/faq">faq</a></div>
                  <div className="sp-menu-link"><a href="/contact">contact</a></div>
                </div>
                <div className="sp-menu-second flex align-e">
                  <div className="sp-menu-second-wrapper flex">
                    <div className="sp-menu-closer-look"><span>Take a closer look</span></div>
                    <div className="sp-menu-secondary flex flex-c">
                      <div className="sp-menu-secondary-link"><a href="/story">Our Story</a></div>
                      <div className="sp-menu-secondary-link"><a href="/contact">Contact</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── SECTION 1: HERO ── */}
        <section style={{
          minHeight: '65vh', paddingTop: '160px',
          background: '#D8031D',
          display: 'flex',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const,
          paddingBottom: '80px',
          paddingLeft: '60px',
          paddingRight: '60px',
          position: 'relative',
        }}>
          <div>
            <p style={{
              fontFamily: "'Aspekta', sans-serif", fontSize: '15px', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: '24px',
            }}>FAQ</p>
            <h1 style={{
              fontFamily: "'PP Editorial Old', serif", fontSize: 'clamp(48px, 6vw, 90px)',
              fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.05, margin: 0,
            }}>
              Before you start<br />your story.
            </h1>
          </div>
        </section>

        {/* ── SECTION 2: FAQ ACCORDION ── */}
        <section style={{ background: '#111111', paddingTop: '100px', paddingBottom: '140px' }}>
          <div className="container" style={{ paddingLeft: '60px', paddingRight: '60px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {faqs.map((faq, index) => (
                <FaqItem key={index} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM SECTIONS ── */}
        <BottomSections />

        
      </div>

      <Script src="/js_wp/custom-animations.js" strategy="afterInteractive" />
    </>
  );
}
