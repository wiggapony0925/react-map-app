// Navbar.tsx

import React, { useState } from 'react';
import "./Navbar.css"; // Import the CSS file for styling

interface NavbarProps {
  // Add props as needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="navbar">
      {/* Move the menu button to the left */}
      <div className="button-container">
        {/* Replace modal button with menu button */}
        <div className="menu-icon" onClick={handleModalOpen}>
          ☰
        </div>
      </div>

      <div className="logo-container">
        {/* Your logo image */}
        <img src="chase.svg" alt="Logo" />
      </div>

      <div className="link-container">
        <a href="#" className="survey-link">
          Submit a Survey
        </a>
      </div>
    </div>
  );
};

export default Navbar;
