import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = ['home', 'about',  'skills', 'projects','contact'];
      
      // Find which section is currently in view
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.querySelector('.navbar__menu');
      const toggle = document.querySelector('.navbar__toggle');
      if (isMenuOpen && menu && toggle && 
          !menu.contains(e.target as Node) && 
          !toggle.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle menu item click
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#home" className="navbar__logo" onClick={handleMenuClick}>
          SRIKANTH<span> GANJI</span>
        </a>

        <button 
          className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className={`navbar__link ${activeSection === 'home' ? 'active' : ''}`} onClick={handleMenuClick}>Home</a>
          <a href="#about" className={`navbar__link ${activeSection === 'about' ? 'active' : ''}`} onClick={handleMenuClick}>About</a>
          <a href="#skills" className={`navbar__link ${activeSection === 'skills' ? 'active' : ''}`} onClick={handleMenuClick}>Skills</a>
          <a href="#projects" className={`navbar__link ${activeSection === 'projects' ? 'active' : ''}`} onClick={handleMenuClick}>Projects</a>
          <a href="#contact" className={`navbar__link navbar__cta ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleMenuClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;