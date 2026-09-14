import React, { useState } from 'react';

function PreloadScreen({ onSealTap }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSealClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      onSealTap();
    }, 2500);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // background: 'linear-gradient(180deg, #050a15 0%, #0d1620 50%, #050a15 100%)',
      backgroundColor:'#e8d4c0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 1000,
      padding: '40px 20px',
      overflow: 'hidden',
      opacity: isOpen ? 0 : 1,
      transition: 'opacity 2.5s ease-in'
    }}>
      <div className='text-center'>
      <h1 style={{color:'#c9a24d', fontSize:'40px'}}> K & A</h1>
      </div>
      {/* Main container with images and seal */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        minHeight: '500px',
        paddingBottom: '40px'
      }}>
        {/* Ajmal Image - Left Side */}
        <img 
          src="/ajmal.webp" 
          alt="Ajmal" 
          style={{
            position: 'absolute',
            left: '100px',
            height: '550px',
            width: 'auto',
            maxWidth: 'none',
            objectFit: 'contain',
            filter: 'brightness(1.05)',
            animation: isOpen ? 'openLeft 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'float 3s ease-in-out infinite',
            zIndex: 5
          }}
          onError={(e) => console.log('Ajmal image failed to load')}
        />

        {/* Seal Button - Center */}
        {/* {!isOpen && (
          <div 
            onClick={handleSealClick}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            style={{
              position: 'absolute',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, #d4a574, #a0754f)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.8), inset -2px -2px 8px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 175, 55, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              animation: 'sealPulse 2s ease-in-out infinite',
              zIndex: 20
            }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #fef5e7, #e8d4c0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.1)',
              border: '2px solid #d4a574',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '1px',
              color: '#2c1810',
              textTransform: 'uppercase',
              textAlign: 'center',
              padding: '8px'
            }}>
              A K
            </div>
          </div>
        )} */}

        {/* Khadeeja Image - Right Side */}
        <img 
          src="/khadija.webp" 
          alt="Khadeeja" 
          style={{
            position: 'absolute',
            right: '100px',
            height: '550px',
            width: 'auto',
            maxWidth: 'none',
            objectFit: 'contain',
            filter: 'brightness(1.05)',
            animation: isOpen ? 'openRight 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards' : 'float 3s ease-in-out infinite 0.5s',
            zIndex: 5
          }}
          onError={(e) => console.log('Khadeeja image failed to load')}
        />
      </div>

      {/* Tap Text - Bottom */}
      {!isOpen && (
        <div 
          onClick={handleSealClick}
          style={{
            textAlign: 'center',
            animation: 'fadeInUp 0.6s ease-out',
            cursor: 'pointer'
          }}>
          <p style={{
            fontSize: '12px',
            color: '#c9a24d',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '300',
            marginBottom: '8px',
          }}>
            Tap Here
          </p>
          <div style={{
            fontSize: '20px',
            color: '#c9a24d',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            ↓
          </div>
        </div>
      )}

      <style>{`
        @keyframes sealPulse {
          0%, 100% {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8), inset -2px -2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(212, 175, 55, 0.3);
          }
          50% {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8), inset -2px -2px 8px rgba(0, 0, 0, 0.3), 0 0 40px rgba(212, 175, 55, 0.6);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes openLeft {
          0% {
            transform: translateX(0) rotateZ(0);
          }
          100% {
            transform: translateX(-200px) rotateZ(-20deg);
          }
        }
        
        @keyframes openRight {
          0% {
            transform: translateX(0) rotateZ(0);
          }
          100% {
            transform: translateX(200px) rotateZ(20deg);
          }
        }
      `}</style>
    </div>
  );
}

export default PreloadScreen;
