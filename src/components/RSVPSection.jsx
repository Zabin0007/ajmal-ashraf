import React, { useState } from 'react';

function RSVPSection() {
  const whatsappNumber = '+917736708859';
  const [showDeclinedMessage, setShowDeclinedMessage] = useState(false);

  const handleRSVP = (response) => {
    if (response) {
      // Send "Count me in" to WhatsApp
      const message = "Yes, I'm coming to Ajmal & Kadeeja's wedding!";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');
    } else {
      // Show message on website for "Sorry, can't make it"
      setShowDeclinedMessage(true);
    }
  };

  return (
    <section style={{
      textAlign: 'center',
      marginBottom: '60px',
      background: 'transparent',
      padding: '20px',
      borderRadius: '0'
    }}>
      {!showDeclinedMessage ? (
        <>
          <h2 style={{
            fontSize: '28px',
            color: '#e8d4c0',
            marginBottom: '15px',
            fontWeight: '300',
            fontFamily: 'Georgia, serif'
          }}>
            Will you be there?
          </h2>

          <p style={{
            fontSize: '13px',
            color: '#a8a8a8',
            marginBottom: '35px',
            fontWeight: '300',
            letterSpacing: '0.5px'
          }}>
            It helps us plan the food. One tap and WhatsApp does the rest.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <button 
              onClick={() => handleRSVP(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e8d4c0';
                e.currentTarget.style.color = '#050a15';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#c9a24d';
                e.currentTarget.style.color = '#0f1729';
              }}
              style={{
                background: '#c9a24d',
                color: '#0f1729',
                padding: '16px 30px',
                borderRadius: '0',
                textDecoration: 'none',
                fontWeight: '300',
                transition: 'all 0.3s ease',
                border: '2px solid #c9a24d',
                cursor: 'pointer',
                fontSize: '15px',
                letterSpacing: '1px',
                fontFamily: 'Georgia, serif',
                textTransform: 'capitalize'
              }}>
              Yes, count me in
            </button>

            <button 
              onClick={() => handleRSVP(false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#e8d4c0';
                e.currentTarget.style.borderColor = '#e8d4c0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#a8a8a8';
                e.currentTarget.style.borderColor = '#a8a8a8';
              }}
              style={{
                background: 'transparent',
                color: '#a8a8a8',
                border: '2px solid #a8a8a8',
                padding: '16px 30px',
                borderRadius: '0',
                fontSize: '15px',
                fontWeight: '300',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'Georgia, serif',
                textTransform: 'capitalize'
              }}>
              Sorry, I can't make it
            </button>
          </div>
        </>
      ) : (
        <div style={{
          textAlign: 'center',
          animation: 'slideInUp 0.6s ease-out'
        }}>
          <h2 style={{
            fontSize: '28px',
            color: '#e8d4c0',
            marginBottom: '20px',
            fontWeight: '300',
            fontFamily: 'Georgia, serif'
          }}>
            We'll miss you
          </h2>
          
          <p style={{
            fontSize: '15px',
            color: '#a8a8a8',
            marginBottom: '30px',
            fontWeight: '300',
            letterSpacing: '0.5px',
            lineHeight: '1.6'
          }}>
            We understand. Your duas will be with us that day.
          </p>

          <button
            onClick={() => setShowDeclinedMessage(false)}
            style={{
              background: 'transparent',
              color: '#c9a24d',
              border: '2px solid #c9a24d',
              padding: '12px 24px',
              borderRadius: '0',
              fontSize: '14px',
              fontWeight: '300',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Georgia, serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#c9a24d';
              e.currentTarget.style.color = '#050a15';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#c9a24d';
            }}
          >
            Go Back
          </button>
        </div>
      )}

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
    </section>
  );
}

export default RSVPSection;
