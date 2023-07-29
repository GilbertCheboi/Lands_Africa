import React from 'react';
import './Footer.css'; // Import your CSS file for Footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Lands Africa</h3>
          <p>
            Lenana Towers - Lenana road, Nairobi, Kenya
            <br />
            Phone: +254700236628
            <br />
            Email: info@landafrica.com
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            {/* Add more footer links as needed */}
          </ul>
        </div>

        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-linkedin"></i>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LandAfrica. All rights reserved.</p>
        <p>Designed and Developed by LandAfrica</p>
      </div>
    </footer>
  );
};

export default Footer;
