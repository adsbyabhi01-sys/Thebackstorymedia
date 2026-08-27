'use client';
import React, { useState } from 'react';

const circles = [
  { label: 'Services', href: '/services' },
  { label: 'Work',     href: '/work'     },
  { label: 'Contact',  href: '/contact'  },
];

export default function BottomSections() {
  const [hoveredMolecule, setHoveredMolecule] = useState<number | null>(null);

  return (
    <>
      {/* ── WHAT ARE YOU LOOKING FOR ── */}
      <section data-midnight="white" style={{
        background: '#fff',
        padding: '100px 60px 40px 60px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'PP Editorial Old', serif", fontSize: 'clamp(32px, 4.5vw, 68px)',
          fontWeight: 400, color: '#111', marginBottom: '32px', lineHeight: 1.1,
        }}>
          W<em style={{ fontWeight: 300, fontStyle: 'italic' }}>ha</em>t are you looking for?
        </h2>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '80px', flexWrap: 'wrap' }}>
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Aspekta', sans-serif",
            fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
            color: '#D8031D', display: 'flex', alignItems: 'center',
            gap: '8px', padding: '8px 0', borderBottom: '2px solid transparent',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D8031D', display: 'inline-block' }}></span>
            START A PROJECT
          </button>
        </div>

        {/* Molecules (Circles) */}
        <div style={{ 
          display: 'flex', justifyContent: 'center', alignItems: 'center', 
          gap: '120px', flexWrap: 'wrap', paddingBottom: '60px' 
        }}>
          {circles.map((c, i) => (
            <a key={i} href={c.href} 
               onMouseEnter={() => setHoveredMolecule(i)}
               onMouseLeave={() => setHoveredMolecule(null)}
               style={{ 
                 textDecoration: 'none', display: 'block', position: 'relative', 
                 width: '260px', height: '260px', cursor: 'pointer' 
               }}>
              
              {/* Bubble 1 (Top Left) */}
              <div style={{ 
                width: '150px', height: '150px', borderRadius: '50%', background: '#b00018', 
                position: 'absolute', top: '15px', left: '15px',
                transform: hoveredMolecule === i ? 'translate(-15px, -15px) scale(1.05)' : 'translate(0, 0) scale(1)',
                transition: 'transform 0.5s ease', zIndex: 1
              }}></div>
              
              {/* Bubble 2 (Bottom Right) */}
              <div style={{ 
                width: '180px', height: '180px', borderRadius: '50%', background: '#c5001a', 
                position: 'absolute', bottom: '15px', right: '15px',
                transform: hoveredMolecule === i ? 'translate(15px, 15px) scale(1.05)' : 'translate(0, 0) scale(1)',
                transition: 'transform 0.5s ease', zIndex: 2
              }}></div>
              
              {/* Bubble 3 (Main Center) */}
              <div style={{
                width: '210px', height: '210px', borderRadius: '50%', background: '#D8031D', 
                position: 'absolute', top: '50%', left: '50%',
                transform: hoveredMolecule === i ? 'translate(-50%, -50%) scale(1.1)' : 'translate(-50%, -50%) scale(1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3,
                boxShadow: '0 10px 30px rgba(216, 3, 29, 0.3)',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              }}>
                <span style={{
                  fontFamily: "'Aspekta', sans-serif", fontSize: '18px', letterSpacing: '1px',
                  color: '#fff', fontWeight: 500, textTransform: 'uppercase'
                }}>
                  {c.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CONTACT FORM WITH ARCH ── */}
      <section style={{ background: '#D8031D', position: 'relative' }}>
        
        {/* The White Arch connecting the top section to the red section */}
        <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, backgroundColor: '#D8031D' }}>
          <svg viewBox="0 0 1440 120" style={{ display: 'block', width: '100%', height: '120px' }} preserveAspectRatio="none">
            <path d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z" fill="#fff" />
          </svg>
        </div>

        <div style={{ display: 'flex', minHeight: '600px', flexWrap: 'wrap' }}>
          {/* Left: Form Area */}
          <div style={{
            flex: '1 1 65%', padding: '40px 10% 100px 10%', display: 'flex', flexDirection: 'column',
          }}>
            <h2 style={{ 
              fontFamily: "'PP Editorial Old', serif", fontSize: 'clamp(40px, 6vw, 85px)', 
              fontWeight: 300, color: '#fff', lineHeight: 1.05, marginBottom: '24px' 
            }}>
              Fill this form<br /><em style={{ fontStyle: 'italic' }}>and</em> let&apos;s talk
            </h2>
            <p style={{ 
              fontFamily: "'Aspekta', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.7)', 
              marginBottom: '60px', maxWidth: '420px', lineHeight: 1.6 
            }}>
              After you submit the form, someone from our Consultation team will reach out to you within 24 hours.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '600px' }}>
              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{ fontFamily: "'Aspekta', sans-serif", fontSize: '13px', color: '#fff', display: 'block', marginBottom: '12px' }}>Name</label>
                  <input type="text" placeholder="John Doe" style={{ 
                    width: '100%', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', 
                    padding: '8px 0', fontSize: '16px', outline: 'none', fontFamily: "'Aspekta', sans-serif", 
                    background: 'transparent', color: '#fff', transition: 'border-color 0.3s' 
                  }} 
                  onFocus={e => (e.currentTarget.style.borderBottomColor = '#fff')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.3)')}/>
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{ fontFamily: "'Aspekta', sans-serif", fontSize: '13px', color: '#fff', display: 'block', marginBottom: '12px' }}>Email</label>
                  <input type="email" placeholder="john.doe@gmail.com" style={{ 
                    width: '100%', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', 
                    padding: '8px 0', fontSize: '16px', outline: 'none', fontFamily: "'Aspekta', sans-serif", 
                    background: 'transparent', color: '#fff', transition: 'border-color 0.3s' 
                  }} 
                  onFocus={e => (e.currentTarget.style.borderBottomColor = '#fff')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.3)')}/>
                </div>
              </div>

              <div>
                <label style={{ fontFamily: "'Aspekta', sans-serif", fontSize: '13px', color: '#fff', display: 'block', marginBottom: '12px' }}>Phone Number</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '16px', fontFamily: "'Aspekta', sans-serif", color: '#fff' }}>IN</span>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>+</span>
                  <input type="tel" placeholder="XXXX-XXXX-XX" style={{ 
                    border: 'none', outline: 'none', fontSize: '16px', fontFamily: "'Aspekta', sans-serif", 
                    background: 'transparent', color: '#fff', flex: 1 
                  }} />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: "'Aspekta', sans-serif", fontSize: '13px', color: '#fff', display: 'block', marginBottom: '12px' }}>Project Brief</label>
                <textarea placeholder="Say Hi!" rows={2} style={{ 
                  width: '100%', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', 
                  padding: '8px 0', fontSize: '16px', outline: 'none', fontFamily: "'Aspekta', sans-serif", 
                  background: 'transparent', color: '#fff', resize: 'vertical', transition: 'border-color 0.3s' 
                }} 
                onFocus={e => (e.currentTarget.style.borderBottomColor = '#fff')}
                onBlur={e => (e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.3)')}/>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button type="submit" style={{ 
                  background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Aspekta', sans-serif", 
                  fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', 
                  fontWeight: 600, padding: '0', position: 'relative', display: 'inline-block' 
                }}>
                  <span style={{ position: 'relative', zIndex: 1 }}>HIT SEND</span>
                  <div style={{ 
                    position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', 
                    background: '#fff', transition: 'transform 0.3s', transformOrigin: 'left' 
                  }}></div>
                </button>
              </div>
            </form>
          </div>

          {/* Right: Social Links */}
          <div style={{ 
            flex: '1 1 30%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', 
            padding: '40px 10% 100px 0', gap: '20px', minWidth: '250px' 
          }}>
            {['Behance', 'LinkedIn', 'Instagram', 'YouTube', 'Medium', 'Twitter', 'Legal'].map((link, i) => (
              <a key={i} href="#" style={{ 
                fontFamily: "'PP Editorial Old', serif", fontSize: '22px', fontStyle: 'italic', 
                color: i === 6 ? 'rgba(255,255,255,0.4)' : '#fff', textDecoration: 'none', 
                fontWeight: 300, transition: 'all 0.3s ease' 
              }} 
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.transform = 'translateX(-10px)'; }} 
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateX(0)'; }}>
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px 10%', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' 
        }}>
          <span style={{ fontFamily: "'Aspekta', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
            © {new Date().getFullYear()} The Backstory Media.
          </span>
        </div>
      </section>
    </>
  );
}
