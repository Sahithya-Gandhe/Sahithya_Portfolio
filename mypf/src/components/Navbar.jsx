import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          <h1>SAHITHYA GANDE</h1>
          <p className="subtitle">AI Enthusiast | Full Stack Developer</p>
        </div>
        <div className="nav-right">
          <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links${menuOpen ? ' show' : ''}`}>
            <li><Link to="hero" smooth={true} duration={500} onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="projects" smooth={true} duration={500} onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="experience" smooth={true} duration={500} onClick={handleLinkClick}>Experience</Link></li>
            <li><Link to="education" smooth={true} duration={500} onClick={handleLinkClick}>Education</Link></li>
            <li><Link to="achievements" smooth={true} duration={500} onClick={handleLinkClick}>Achievements</Link></li>
            <li><Link to="footer" smooth={true} duration={500} onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;