import React from 'react';
import MapContainer from './components/MapContainer';
import FloatingModal from './components/modal/FloatingModal';
import Navbar from './components/navbar/Navbar';
const App: React.FC = () => {

  return (
    <div>
      <MapContainer />
      <Navbar />
      <div className="floating-modal-container">
        <FloatingModal />
      </div>
    </div>
  );
};

export default App;
