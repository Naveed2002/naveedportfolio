import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Naveed nawaz</h2>
          <p className="text-gray-400 text-sm mb-4">
            Full-Stack Developer | Building modern web experiences
          </p>
          <p className="text-gray-500 text-xs">
            &copy; {year} Naveed nawaz. All rights reserved.
          </p>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex flex-col md:flex-row items-center mt-6 md:mt-0 space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
