import React, { useState, useEffect } from 'react';

function Countdown() {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('September 26, 2026 18:00:00').getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
        return;
      }

      const daysValue = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursValue = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secondsValue = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(String(daysValue).padStart(2, '0'));
      setHours(String(hoursValue).padStart(2, '0'));
      setMinutes(String(minutesValue).padStart(2, '0'));
      setSeconds(String(secondsValue).padStart(2, '0'));
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      textAlign: 'center',
      marginBottom: '80px',
      padding: '40px 20px',
      background: 'transparent',
      borderRadius: '0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        marginBottom: '25px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '48px',
            fontWeight: '300',
            color: '#c9a24d',
            lineHeight: '1',
            fontFamily: 'Georgia, serif'
          }}>
            {days}
          </span>
          <span style={{
            fontSize: '12px',
            color: '#a8a8a8',
            marginTop: '12px',
            letterSpacing: '2px',
            fontWeight: '300',
            textTransform: 'uppercase'
          }}>
            DAYS
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '48px',
            fontWeight: '300',
            color: '#c9a24d',
            lineHeight: '1',
            fontFamily: 'Georgia, serif'
          }}>
            {hours}
          </span>
          <span style={{
            fontSize: '12px',
            color: '#a8a8a8',
            marginTop: '12px',
            letterSpacing: '2px',
            fontWeight: '300',
            textTransform: 'uppercase'
          }}>
            HRS
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '48px',
            fontWeight: '300',
            color: '#c9a24d',
            lineHeight: '1',
            fontFamily: 'Georgia, serif'
          }}>
            {minutes}
          </span>
          <span style={{
            fontSize: '12px',
            color: '#a8a8a8',
            marginTop: '12px',
            letterSpacing: '2px',
            fontWeight: '300',
            textTransform: 'uppercase'
          }}>
            MIN
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '48px',
            fontWeight: '300',
            color: '#c9a24d',
            lineHeight: '1',
            fontFamily: 'Georgia, serif'
          }}>
            {seconds}
          </span>
          <span style={{
            fontSize: '12px',
            color: '#a8a8a8',
            marginTop: '12px',
            letterSpacing: '2px',
            fontWeight: '300',
            textTransform: 'uppercase'
          }}>
            SEC
          </span>
        </div>
      </div>
      
      <p style={{
        fontSize: '14px',
        color: '#a8a8a8',
        letterSpacing: '1px',
        textTransform: 'lowercase'
      }}>
        until the nikah
      </p>
    </section>
  );
}

export default Countdown;
