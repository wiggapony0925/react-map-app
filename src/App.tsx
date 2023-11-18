import React from 'react';
import MapContainer from './components/MapContainer';
import FloatingModal from './components/modal/FloatingModal';
const App: React.FC = () => {
  return (
    <div>
      <MapContainer />
      <div className="floating-modal-container">
        <FloatingModal />
      </div>
    </div>
  );
};

export default App;
