// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Optional: close menu when scrolling
  useEffect(() => {
    const closeOnScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', closeOnScroll);
    return () => window.removeEventListener('scroll', closeOnScroll);
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-lg dark:bg-gray-800/80 dark:shadow-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            <i className="fas fa-code mr-2"></i>Fiqry O.A
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['home', 'about', 'tools', 'projects', 'contact'].map(link => (
              <a
                key={link}
                href={`#${link}`}
                className="nav-link text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
            <button
              className="dark-mode-toggle p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300"
              onClick={() =>
                document.documentElement.classList.toggle('dark')
              }
            >
              <i className="fas fa-moon dark:hidden"></i>
              <i className="fas fa-sun hidden dark:block"></i>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="dark-mode-toggle p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300"
              onClick={() =>
                document.documentElement.classList.toggle('dark')
              }
            >
              <i className="fas fa-moon dark:hidden"></i>
              <i className="fas fa-sun hidden dark:block"></i>
            </button>
            <button onClick={toggleMobileMenu}>
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {['home', 'about', 'skills', 'projects', 'contact'].map(link => (
              <a
                key={link}
                href={`#${link}`}
                className="block py-2 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
