import React from 'react';
import '../styles/Footer.css';

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
        </div>
      </div>
    </footer>
  );
};

export default Footer;