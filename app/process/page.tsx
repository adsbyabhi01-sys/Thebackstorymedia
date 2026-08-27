'use client';
import React from 'react';
import Script from 'next/script';
import BottomSections from '../../components/BottomSections';

const steps = [
  { num: '01', title: 'Discover',   desc: "We dig into your business, your market and your customers until we find the story that's actually true." },
  { num: '02', title: 'Understand', desc: "We shape that story into a clear position — what you stand for, who it's for, and why it matters." },
  { num: '03', title: 'Build',      desc: "Brand, website and content take form — every detail built to carry the story, not decorate it." },
  { num: '04', title: 'Launch',     desc: "Your story meets the world — across the channels where your audience actually pays attention." },
  { num: '05', title: 'Scale',      desc: "We track, refine and grow what's working — turning attention into a brand people keep coming back to." },
];

export default function ProcessPage() {
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
            }}>Our Process</p>
            <h1 style={{
              fontFamily: "'PP Editorial Old', serif", fontSize: 'clamp(48px, 7vw, 100px)',
              fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.05, margin: 0,
            }}>
              Five steps.<br />One story.
            </h1>
          </div>
        </section>

        {/* ── SECTION 2: PROCESS STEPS ── */}
        <section style={{ background: '#111111', paddingTop: '120px', paddingBottom: '120px' }}>
          <div className="container" style={{ paddingLeft: '60px', paddingRight: '60px', maxWidth: '1000px', margin: '0 auto' }}>
            {steps.map((s, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                padding: '60px 0',
                position: 'relative',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                  
                  {/* Left: Number & Title */}
                  <div style={{ flex: '1', minWidth: '280px' }}>
                    <span style={{
                      fontFamily: "'PP Editorial Old', serif", fontSize: '20px', fontStyle: 'italic',
                      color: '#D8031D', display: 'block', marginBottom: '16px',
                    }}>{s.num}</span>
                    <h2 style={{
                      fontFamily: "'PP Editorial Old', serif", fontSize: 'clamp(32px, 4vw, 56px)',
                      fontWeight: 300, color: '#fff', margin: 0, fontStyle: 'italic',
                    }}>{s.title}</h2>
                  </div>

                  {/* Right: Description */}
                  <div style={{ flex: '1.5', minWidth: '300px' }}>
                    <p style={{
                      fontFamily: "'Aspekta', sans-serif", fontSize: '16px', lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.7)', margin: 0, fontWeight: 300,
                    }}>
                      {s.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
          </div>
        </section>

        {/* ── BOTTOM SECTIONS ── */}
        <BottomSections />

        
      </div>

      <Script src="/js_wp/custom-animations.js" strategy="afterInteractive" />
    </>
  );
}
