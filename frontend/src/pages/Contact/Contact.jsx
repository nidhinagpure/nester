import React from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div class="property-cta">
  <h1>Ready to Find Your Property?</h1>
  <p>Connect with our expert team to discover the perfect property for your needs. We're</p>
  <p>here to help you make the right investment.</p>
</div>
    <div className="contact-form-container">
      <h2 className="contact-title">Get in Touch with Our Builders</h2>
      <p className="contact-subtitle">
        Fill out the form below and our expert team will contact you soon
      </p>

      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="+91 98765 43210" />
          </div>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="your.email@example.com" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Property Interest</label>
            <select>
              <option>Land Plots</option>
              <option>Flats</option>
              <option>Commercial</option>
            </select>
          </div>
          <div className="form-group">
            <label>Budget Range</label>
            <select>
              <option>₹50L - ₹75L</option>
              <option>₹75L - ₹1Cr</option>
              <option>₹1Cr+</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Tell us about your requirements, preferred location, timeline, or any specific questions..."></textarea>
        </div>

        <button type="submit" className="submit-button">Send Inquiry</button>
      </form>
    </div>
    </>
  );
};

export default Contact;
