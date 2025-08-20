import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-section">
          <h3>Contact Information</h3>
          <div className="contact-details">
            <p><i className="fas fa-phone"></i> +91 6303898944</p>
            <p><i className="fas fa-map-marker-alt"></i> Asifabad, India</p>
            <p><i className="fas fa-envelope"></i> sahithyagandhe@gmail.com</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/sahithyagandhe/" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
              <FaLinkedin className="social-icon" />
              <span className="social-label">LinkedIn</span>
            </a>
            <a href="https://github.com/Sahithya-Gandhe" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
              <FaGithub className="social-icon" />
              <span className="social-label">GitHub</span>
            </a>
            <a href="https://leetcode.com/u/sahithyag_1313/" target="_blank" rel="noopener noreferrer" title="LeetCode Profile">
              <SiLeetcode className="social-icon" />
              <span className="social-label">LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;