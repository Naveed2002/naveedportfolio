import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const MenuOverlay = ({ setMenuOpen }) => {
  return (
    <motion.div 
      className="menu-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="menu-links">
        <Link 
          to="work" 
          smooth={true} 
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Work
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;