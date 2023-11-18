// FloatingModal.tsx

import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../search/SearchBar';
import './FloatingModal.css'; // Import the CSS file

interface FloatingModalProps {
  // Add props as needed
}

const FloatingModal: React.FC<FloatingModalProps> = () => {
  // Implement the floating modal logic here

  return (
    <motion.div
      className="floating-modal" // Apply the CSS class
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
    >
      {/* Logo at the top center */}
      <div className="logo-container">
        <img src="zagat.png" alt="Logo" />
      </div>

      {/* SearchBar component */}
      <div className="search-bar">
      <SearchBar />
      </div>

      {/* Your filtering content goes here */}
      <h2>Filter Options</h2>
      {/* Add your filtering components (e.g., dropdowns, checkboxes, etc.) */}
      <p>Filter by:</p>
      {/* Add your filtering components here */}
    </motion.div>
  );
};

export default FloatingModal;
