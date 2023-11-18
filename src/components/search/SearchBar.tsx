// SearchBar.tsx

import React from 'react';
import "./SearchBar.css";

interface SearchBarProps {
  // Add props as needed
}

const SearchBar: React.FC<SearchBarProps> = () => {
  // Implement search bar logic here

  return (
    <div className="search-bar">
      <input className="search-input" type="text" placeholder="Search..." />
      

      {/* Tags Section */}
      <div className="tags-section">
        <div className="tag">Asian</div>
        <div className="tag">Vegan</div>
        {/* Add more tags as needed */}
      </div>
    </div>
  );
};

export default SearchBar;

