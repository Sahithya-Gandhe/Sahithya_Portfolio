import React from 'react';
import '../styles/Navbar.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          <h1>GANDE SAHITHYA</h1>
          <p className="subtitle">AI Enthusiast | Full Stack Developer</p>
        </div>
        <div className="nav-right">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sahithyagandhe/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
              <FaLinkedin className="social-icon" />
              <span className="social-label">LinkedIn</span>
            </a>
            <a href="https://github.com/Sahithya-Gandhe" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
              <FaGithub className="social-icon" />
              <span className="social-label">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;