import React, { useState } from 'react';
import PreloadScreen from './components/PreloadScreen';
import InvitationScreen from './components/InvitationScreen';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  const handleSealTap = () => {
    setShowInvitation(true);
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh'
    }}>
      {!showInvitation ? (
        <PreloadScreen onSealTap={handleSealTap} />
      ) : (
        <InvitationScreen />
      )}
    </div>
  );
}

export default App;
