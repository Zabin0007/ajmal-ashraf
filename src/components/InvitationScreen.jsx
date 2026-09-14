import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';
import EventCard from './EventCard';
import RSVPSection from './RSVPSection';

function InvitationScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #050a15 0%, #0d1620 50%, #050a15 100%)',
      padding: '60px 20px',
      fontFamily: 'Georgia, Garamond, serif',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 3s ease-in'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>

        {/* Intro Section */}
        <section style={{
          textAlign: 'center',
          marginBottom: '60px',
          animation: 'slideInUp 0.8s ease-out',
          borderTop: 'none',
          borderBottom: 'none',
          padding: '50px 0'
        }}>
          <div style={{
            fontSize: '2.7rem',
            color: '#c9a24d',
            marginBottom: '30px',
            letterSpacing: '3px',
            fontWeight: '300',
            fontFamily: '"Aref Ruqaa", serif',
            lineHeight: '1'
          }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          
          <p style={{
            fontSize: '14px',
            color: '#a8a8a8',
            marginBottom: '35px',
            fontWeight: '300',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            With the blessings of the Almighty and our families
          </p>
          
          <div style={{ marginBottom: '30px' }}>
            <h1 style={{
              fontSize: '48px',
              color: '#e8d4c0',
              fontWeight: '300',
              marginBottom: '20px',
              letterSpacing: '2px',
              fontFamily: 'Georgia, serif'
            }}>
              Ajmal Ashraf
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#c9a24d',
              margin: '20px 0',
              fontWeight: '300',
              fontStyle: 'italic'
            }}>
              and
            </p>
            <h1 style={{
              fontSize: '48px',
              color: '#e8d4c0',
              fontWeight: '300',
              marginBottom: '20px',
              letterSpacing: '2px',
              fontFamily: 'Georgia, serif'
            }}>
              Khadeeja
            </h1>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <p style={{
              fontSize: '18px',
              color: '#e8d4c0',
              fontWeight: '300',
              letterSpacing: '2px',
              fontFamily: 'Georgia, serif'
            }}>
              Karoth Villa
            </p>
          </div>

          <div style={{ marginBottom: '0' }}>
            <p style={{
              fontSize: '13px',
              color: '#a8a8a8',
              fontWeight: '300',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              25, 26 and 27 September 2026
            </p>
          </div>
        </section>

        {/* Countdown Section */}
        <Countdown />

        {/* Events Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#c9a24d',
            marginBottom: '50px',
            fontWeight: '300',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Three nights, one house
          </h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px'
          }}>
            <EventCard
              number="Night one"
              title="Sangeeth & DJ Night"
              date="Friday, 25 September — 7:00 pm onwards"
              description="Wear something you can dance in. The music runs late."
              isLast={false}
            />

            <EventCard
              number="Night two"
              title="Nikah"
              date="Saturday, 26 September — after Maghrib"
              description="Nikah ceremony"
              subEvent={{
                title: "Mylanchi Night",
                time: "Straight after the nikah",
                desc: "Henna, songs, and far too much food."
              }}
              isLast={false}
            />

            <EventCard
              number="Night three"
              title="Reception"
              date="Sunday, 27 September — 7:00 pm onwards"
              description="Come hungry. Stay for the photos."
              isLast={true}
            />
          </div>
        </section>

        {/* Location Section */}
        <section style={{
          textAlign: 'center',
          marginBottom: '60px',
          background: 'transparent',
          padding: '0',
          borderRadius: '0'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{
              fontSize: '28px',
              color: '#e8d4c0',
              marginBottom: '20px',
              fontWeight: '300',
              fontFamily: 'Georgia, serif'
            }}>
              Karoth Villa
            </h2>
          </div>
          
          <p style={{
            fontSize: '13px',
            color: '#a8a8a8',
            marginBottom: '25px',
            lineHeight: '1.8',
            fontWeight: '300'
          }}>
            Every one of the three nights is here. There's parking, and there will be someone at the gate to point you in.
          </p>
          
          <a 
            href="https://maps.app.goo.gl/yNb6YWtDSaVwPUAF8" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'transparent',
              color: '#a8a8a8',
              padding: '14px 50px',
              borderRadius: '0',
              textDecoration: 'none',
              fontWeight: '300',
              transition: 'all 0.3s ease',
              letterSpacing: '1px',
              border: '2px solid #a8a8a8',
              cursor: 'pointer',
              fontSize: '14px',
              fontFamily: 'Georgia, serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#e8d4c0';
              e.currentTarget.style.borderColor = '#e8d4c0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a8a8a8';
              e.currentTarget.style.borderColor = '#a8a8a8';
            }}
          >
            Open in Maps
          </a>
        </section>

        {/* RSVP Section */}
        <RSVPSection />

        {/* Closing Section */}
        <section style={{
          textAlign: 'center',
          padding: '40px 20px',
          marginTop: '60px',
          borderTop: 'none'
        }}>
          <p style={{
            fontSize: '13px',
            color: '#a8a8a8',
            marginBottom: '25px',
            lineHeight: '1.8',
            fontWeight: '300',
            fontStyle: 'italic'
          }}>
            Your duas matter to us as much as your presence.
          </p>
          
          <p style={{
            fontSize: '16px',
            color: '#e8d4c0',
            lineHeight: '1.8',
            fontFamily: 'Georgia, serif'
          }}>
            With love, from<br />
            <strong style={{ fontWeight: '300', fontSize: '18px' }}>Karoth family</strong>
          </p>
        </section>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default InvitationScreen;
