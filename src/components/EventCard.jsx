import React from 'react';

function EventCard({ number, title, date, description, subEvent, isLast }) {
  return (
    <div style={{
      background: 'transparent',
      padding: '30px 0',
      borderRadius: '0',
      borderLeft: 'none',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      animation: 'slideInUp 0.6s ease-out',
      position: 'relative',
      paddingLeft: '40px'
    }}>
      {/* Vertical Timeline Line */}
      {!isLast && (
        <div style={{
          position: 'absolute',
          left: '6px',
          top: '40px',
          width: '1px',
          height: 'calc(100% + 20px)',
          background: 'linear-gradient(180deg, #c9a24d 0%, transparent 100%)',
          zIndex: 1
        }}></div>
      )}

      {/* Gold Bullet Point */}
      <div style={{
        position: 'absolute',
        left: '0',
        top: '10px',
        width: '12px',
        height: '12px',
        background: '#c9a24d',
        borderRadius: '50%',
        zIndex: 2
      }}></div>

      <div style={{
        fontSize: '12px',
        color: '#c9a24d',
        fontWeight: '300',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        marginBottom: '8px'
      }}>
        {number}
      </div>

      <h3 style={{
        fontSize: '28px',
        color: '#e8d4c0',
        marginBottom: '10px',
        fontWeight: '300',
        fontFamily: 'Georgia, serif'
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: '13px',
        color: '#a8a8a8',
        marginBottom: '12px',
        fontWeight: '300',
        letterSpacing: '0.5px'
      }}>
        {date}
      </p>

      <p style={{
        fontSize: '13px',
        color: '#a8a8a8',
        lineHeight: '1.8',
        fontWeight: '300',
        fontStyle: 'italic'
      }}>
        {description}
      </p>

      {subEvent && (
        <div style={{
          marginTop: '15px',
          paddingTop: '0',
          borderTop: 'none'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#e8d4c0',
            fontWeight: '300',
            marginBottom: '5px',
            fontFamily: 'Georgia, serif'
          }}>
            {subEvent.title}
          </p>

          <p style={{
            fontSize: '12px',
            color: '#a8a8a8',
            marginBottom: '8px',
            fontWeight: '300',
            letterSpacing: '0.5px'
          }}>
            {subEvent.time}
          </p>

          <p style={{
            fontSize: '13px',
            color: '#a8a8a8',
            lineHeight: '1.8',
            fontStyle: 'italic'
          }}>
            {subEvent.desc}
          </p>
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
    </div>
  );
}

export default EventCard;
