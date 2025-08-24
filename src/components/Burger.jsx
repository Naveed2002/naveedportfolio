import React, { useState } from 'react';

const Burger = ({ menuOpen, setMenuOpen }) => {
  return (
    <button 
      className={`hamburger ${menuOpen ? 'open' : ''}`} 
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Menu"
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </button>
  );
};

export default Burger;