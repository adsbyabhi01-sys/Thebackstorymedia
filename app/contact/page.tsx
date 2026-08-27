'use client';
import React, { useState } from 'react';
import Script from 'next/script';
import BottomSections from '../../components/BottomSections';

const servicesList = [
  'Brand Strategy & Identity',
  'Logo & Visual Identity',
  'Website Design & Development',
  'Content Creation & Photography',
  'Video Editing & Post-Production',
  'Social Media Management',
  'Performance Marketing & Meta Ads',
  'Google Ads & Lead Generation',
  'SEO & AI Automation',
  'Creative Direction',
];

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <div style={{ maxWidth: '700px' }}>
            <p style={{
              fontFamily: "'Aspekta', sans-serif", fontSize: '15px', fontWeight: 600, letterSpacing: '4px',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: '24px',
            }}>Contact</p>
            <h1 style={{
              fontFamily: "'PP Editorial Old', serif", fontSize: 'clamp(48px, 6vw, 90px)',
              fontStyle: 'italic', fontWeight: 400, color: '#fff', lineHeight: 1.05, margin: 0,
            }}>
              Let&apos;s start<br />your story.
            </h1>
          </div>
        </section>

        {/* ── SECTION 2: CONTACT INFO + FORM ── */}
        <section data-midnight="white" style={{ background: '#fff', display: 'flex', minHeight: '700px', flexWrap: 'wrap' }}>

          {/* LEFT: Info Panel */}
          <div style={{
            flex: '0 0 38%', minWidth: '320px', background: '#111', padding: '80px 60px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <h2 style={{
                fontFamily: "'PP Editorial Old', serif", fontSize: 'clamp(28px, 3vw, 44px)',
                fontStyle: 'italic', fontWeight: 300, color: '#fff', lineHeight: 1.2, marginBottom: '48px',
              }}>
                Every great brand<br />starts with a<br />conversation.
              </h2>

              <div style={{ marginBottom: '48px' }}>
                <p style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '11px', letterSpacing: '3px',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px',
                }}>Email</p>
                <a href="mailto:hello@thebackstorymedia.com" style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '16px', color: '#fff',
                  textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)',
                  paddingBottom: '4px', transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#D8031D')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}>
                  hello@thebackstorymedia.com
                </a>
              </div>

              <div style={{ marginBottom: '48px' }}>
                <p style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '11px', letterSpacing: '3px',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '16px',
                }}>Instagram</p>
                <a href="https://instagram.com/thebackstorymedia" target="_blank" rel="noopener noreferrer" style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '16px', color: '#fff',
                  textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)',
                  paddingBottom: '4px', transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#D8031D')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}>
                  @thebackstorymedia
                </a>
              </div>
            </div>

            <div>
              <div style={{ width: '60px', height: '2px', background: '#D8031D', marginBottom: '20px' }}></div>
              <p style={{
                fontFamily: "'Aspekta', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.6,
              }}>
                Tell us what you&apos;re building.<br />We&apos;ll tell you how we&apos;d tell its story.
              </p>
            </div>
          </div>

          {/* RIGHT: Form Panel */}
          <div style={{
            flex: 1, minWidth: '360px', padding: '80px 60px 80px 80px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <h3 style={{
              fontFamily: "'PP Editorial Old', serif", fontSize: 'clamp(28px, 3vw, 48px)',
              fontWeight: 300, color: '#111', marginBottom: '48px', fontStyle: 'italic',
            }}>
              Tell us about your project
            </h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '36px', maxWidth: '560px' }}>
              {/* Name */}
              <div>
                <label style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '11px', letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '10px',
                }}>Your name</label>
                <input type="text" placeholder="John Doe" style={{
                  width: '100%', border: 'none', borderBottom: '1px solid #ddd', padding: '12px 0',
                  fontSize: '16px', outline: 'none', fontFamily: "'Aspekta', sans-serif",
                  background: 'transparent', transition: 'border-color 0.3s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = '#D8031D')}
                onBlur={e => (e.currentTarget.style.borderColor = '#ddd')} />
              </div>

              {/* Email */}
              <div>
                <label style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '11px', letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '10px',
                }}>Email</label>
                <input type="email" placeholder="you@company.com" style={{
                  width: '100%', border: 'none', borderBottom: '1px solid #ddd', padding: '12px 0',
                  fontSize: '16px', outline: 'none', fontFamily: "'Aspekta', sans-serif",
                  background: 'transparent', transition: 'border-color 0.3s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = '#D8031D')}
                onBlur={e => (e.currentTarget.style.borderColor = '#ddd')} />
              </div>

              {/* Service Dropdown */}
              <div style={{ position: 'relative' }}>
                <label style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '11px', letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '10px',
                }}>What are you starting?</label>
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    width: '100%', borderBottom: dropdownOpen ? '1px solid #D8031D' : '1px solid #ddd',
                    padding: '12px 0', fontSize: '16px', fontFamily: "'Aspekta', sans-serif",
                    color: selectedService ? '#111' : '#999', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    transition: 'border-color 0.3s',
                  }}>
                  <span>{selectedService || 'Select a service'}</span>
                  <span style={{
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s', fontSize: '12px', color: '#999',
                  }}>▼</span>
                </div>
                {dropdownOpen && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0,
                    background: '#fff', border: '1px solid #eee', borderTop: 'none',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.1)', zIndex: 10,
                    maxHeight: '240px', overflowY: 'auto',
                  }}>
                    {servicesList.map((s, i) => (
                      <div key={i}
                        onClick={() => { setSelectedService(s); setDropdownOpen(false); }}
                        style={{
                          padding: '12px 16px', fontSize: '14px', fontFamily: "'Aspekta', sans-serif",
                          color: '#333', cursor: 'pointer', transition: 'all 0.2s',
                          borderBottom: '1px solid #f5f5f5',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#D8031D'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#333'; }}>
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tell us about it */}
              <div>
                <label style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '11px', letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#999', display: 'block', marginBottom: '10px',
                }}>Tell us about it</label>
                <textarea placeholder="A brief about your project, goals, timeline..." rows={4} style={{
                  width: '100%', border: 'none', borderBottom: '1px solid #ddd', padding: '12px 0',
                  fontSize: '16px', outline: 'none', fontFamily: "'Aspekta', sans-serif",
                  background: 'transparent', resize: 'none', transition: 'border-color 0.3s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = '#D8031D')}
                onBlur={e => (e.currentTarget.style.borderColor = '#ddd')} />
              </div>

              {/* Submit */}
              <div style={{ marginTop: '16px' }}>
                <button type="submit" style={{
                  background: '#D8031D', color: '#fff', border: 'none', cursor: 'pointer',
                  fontFamily: "'Aspekta', sans-serif", fontSize: '12px', letterSpacing: '3px',
                  textTransform: 'uppercase', fontWeight: 700, padding: '18px 52px',
                  borderRadius: '100px', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#111'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#D8031D'; }}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ── BOTTOM SECTIONS ── */}
        <BottomSections />

        
      </div>

      <Script src="/js_wp/custom-animations.js" strategy="afterInteractive" />
    </>
  );
}
