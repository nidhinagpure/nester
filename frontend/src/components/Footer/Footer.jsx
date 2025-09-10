/*import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <h2>Ready to Find Your Property?</h2>
      <p>
        Connect with our expert team to discover the perfect property for your needs.
        We're here to help you make the right investment.
      </p>

      {/* Contact Info 
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <h4>Call Us</h4>
          <p>+91 98765 00000</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h4>Email Us</h4>
          <p>info@propertyhub.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <h4>Visit Us</h4>
          <p>MG Road, Bangalore</p>
        </div>
      </div>

      {/* Social Icons 
      <div className="social-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaEnvelope /></a>
        <a href="#"><FaWhatsapp /></a>
      </div>

      {/* Button 
      <button className="consultation-btn">Schedule a Consultation</button>
    </footer>
  );
};

export default Footer; 

import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-section">
      <h2>Ready to Find Your Property?</h2>
      <p>
        Connect with our expert team to discover the perfect property for your needs.
        We're here to help you make the right investment.
      </p>

      {/* Contact Info 
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <h4>Call Us</h4>
          <p><a href="tel:+919876500000">+91 98765 00000</a></p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h4>Email Us</h4>
          <p><a href="mailto:info@propertyhub.com">info@propertyhub.com</a></p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <h4>Visit Us</h4>
          <p>MG Road, Bangalore</p>
        </div>
      </div>

      {/* Social Icons 
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="mailto:info@propertyhub.com"><FaEnvelope /></a>
        <a href="https://wa.me/919876500000" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>

      {/* Button → Navigates to Calling Page 
      <button
        className="consultation-btn"
        onClick={() => navigate("/calling")}
      >
        Schedule a Consultation
      </button>
    </footer>
  );
};

export default Footer; */
import React from "react";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <h2>Ready to Find Your Property?</h2>
      <p>
        Connect with our expert team to discover the perfect property for your
        needs. We're here to help you make the right investment.
      </p>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <h4>Call Us</h4>
          <p>
            <a href="tel:+919876500000">+91 98765 00000</a>
          </p>
        </div>

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h4>Email Us</h4>
          <p>
            <a href="mailto:info@propertyhub.com">info@propertyhub.com</a>
          </p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <h4>Visit Us</h4>
          <p>
            <a
              href="https://www.google.com/maps?q=MG+Road+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
            >
              MG Road, Bangalore
            </a>
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="mailto:info@propertyhub.com">
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/919876500000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Button */}
      <button className="consultation-btn">Schedule a Consultation</button>
    </footer>
  );
};

export default Footer;

