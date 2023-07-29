import React from 'react';
import Header from './Header';
import './Contact.css'; // Import your CSS file for AboutPage styling
import Footer from './Footer';


export function  Login () {
  return (
    <div>
    <Header />
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you! Feel free to get in touch with us using
        the contact information provided below or by filling out the contact form.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <i className="fa fa-phone"></i>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-envelope"></i>
          <p>Email: info@example.com</p>
        </div>
        <div className="contact-item">
          <i className="fa fa-map-marker"></i>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <Footer />
  </div>
  );
};

