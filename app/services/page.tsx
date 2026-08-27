'use client';
import React from 'react';
import Script from 'next/script';
import BottomSections from '../../components/BottomSections';

const services = [
  { num: '01', name: 'Brand Strategy & Identity',       cat: 'Strategy' },
  { num: '02', name: 'Logo & Visual Identity',          cat: 'Branding' },
  { num: '03', name: 'Website Design & Development',    cat: 'UI / UX'  },
  { num: '04', name: 'Content Creation & Photography',  cat: 'Content'  },
  { num: '05', name: 'Video Editing & Post-Production', cat: 'Motion'   },
  { num: '06', name: 'Social Media Management',         cat: 'Content'  },
  { num: '07', name: 'Performance Marketing & Meta Ads',cat: 'Growth'   },
  { num: '08', name: 'Google Ads & Lead Generation',    cat: 'Growth'   },
  { num: '09', name: 'SEO & AI Automation',             cat: 'Growth'   },
  { num: '10', name: 'Creative Direction',              cat: 'Studio'   },
];



export default function ServicesPage() {
  

  return (
    <>
      {/* LOADER */}
      <div id="loader">
        <div className="loader-icons">
          <div className="white-circle"></div>
          <div className="black-circle"></div>
          <div className="white-overlay"></div>
          <div className="black-overlay"></div>
          <div className="red-overlay"></div>
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
                      <div className="simpleplan-menu-text-wrapper">
                        <span>Menu</span><span>Close</span>
                      </div>
                    </div>
                    <div className="simpleplan-menu-button">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 1V7" stroke="white" strokeLinecap="square" strokeLinejoin="round"/>
                        <path d="M1 4H7" stroke="white" strokeLinecap="square" strokeLinejoin="round"/>
                      </svg>
                    </div>
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

        {/* ── SECTION 1: HERO (no floating circles) ── */}
        <section style={{
          minHeight: '65vh', paddingTop: '160px',
          background: '#D8031D',
          display: 'flex',
          alignItems: 'center', justifyContent: 'center', textAlign: 'center' as const,
          paddingBottom: '80px',
          paddingLeft: '60px',
          paddingRight: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{
              fontFamily: "'Aspekta', sans-serif",
              fontSize: '15px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)', fontWeight: 600,
              marginBottom: '24px',
            }}>Our Services</p>
            <h1 style={{
              fontFamily: "'PP Editorial Old', serif",
              fontSize: 'clamp(48px, 7vw, 100px)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.05,
              margin: 0,
            }}>
              Everything a story<br />needs to travel.
            </h1>
          </div>
        </section>

        {/* ── SECTION 2: SERVICES LIST ── */}
        <section style={{ background: '#111111', paddingTop: '80px', paddingBottom: '120px' }}>
          <div style={{ paddingLeft: '20vw', paddingRight: '60px' }}>
            {services.map((s, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                padding: '28px 0',
                cursor: 'default',
              }}>
                <span style={{
                  fontFamily: "'PP Editorial Old', serif",
                  fontSize: '13px',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.3)',
                  minWidth: '44px',
                }}>{s.num}</span>

                <span
                  style={{
                    flex: 1,
                    fontFamily: "'PP Editorial Old', serif",
                    fontSize: 'clamp(24px, 3vw, 52px)',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: '#fff',
                    paddingLeft: '24px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#D8031D')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                >
                  {s.name}
                </span>

                <span style={{
                  fontFamily: "'Aspekta', sans-serif",
                  fontSize: '10px',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '5px 14px',
                  borderRadius: '100px',
                  whiteSpace: 'nowrap',
                }}>{s.cat}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
          </div>
        </section>

        {/* ── BOTTOM SECTIONS ── */}
        <BottomSections />

        {/* FOOTER */}
        <footer style={{
          background: '#D8031D',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          padding: '20px 60px',
          textAlign: 'center',
        }}>
          <span style={{ fontFamily: "'Aspekta', sans-serif", fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} The Backstory Media. All rights reserved.
          </span>
        </footer>
      </div>

      <Script src="/js_wp/custom-animations.js" strategy="afterInteractive" />
    </>
  );
}
