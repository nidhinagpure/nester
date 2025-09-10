import React from "react";
import { FaBuilding, FaUsers, FaLightbulb, FaCogs } from "react-icons/fa"; // Icons
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <div>
        <Navbar />
    <div className="about-page">
  {/* Hero Section */}
  <section className="hero">
    <div className="hero-content">
      <h1>About Global Nester</h1>
      <p>We build dreams with quality, trust, and innovation, creating homes that last a lifetime.</p>
      <button className="hero-btn">Learn More</button>
    </div>
  </section>

      {/* Company Info with Icons */}
      <section className="company-info">
        <h2>Who We Are</h2>
        <div className="info-cards">
          <div className="info-card">
            <FaBuilding className="info-icon" />
            <h3>Experience</h3>
            <p>Over 20 years in the construction industry delivering excellence.</p>
          </div>
          <div className="info-card">
            <FaUsers className="info-icon" />
            <h3>Expert Team</h3>
            <p>Architects, engineers, and project managers ensuring quality.</p>
          </div>
          <div className="info-card">
            <FaLightbulb className="info-icon" />
            <h3>Innovation</h3>
            <p>Modern designs and sustainable solutions for every project.</p>
          </div>
          <div className="info-card">
            <FaCogs className="info-icon" />
            <h3>Technology</h3>
            <p>Advanced construction techniques for efficiency and durability.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vision">
          <h3>Our Vision</h3>
          <p>To be a globally recognized construction company known for innovation, sustainability, and customer satisfaction.</p>
        </div>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>Deliver high-quality construction projects on time and within budget while maintaining ethical practices.</p>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="John Doe" />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Jane Smith" />
            <h4>Jane Smith</h4>
            <p>Chief Architect</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Michael Lee" />
            <h4>Michael Lee</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaBuilding className="service-icon" />
            <h4>Residential Construction</h4>
            <p>Modern homes and apartments built to last.</p>
          </div>
          <div className="service-card">
            <FaCogs className="service-icon" />
            <h4>Commercial Projects</h4>
            <p>Offices, malls, and industrial spaces with precision.</p>
          </div>
          <div className="service-card">
            <FaLightbulb className="service-icon" />
            <h4>Renovation & Interiors</h4>
            <p>Innovative interior solutions and space transformations.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Get in Touch</h2>
        <p>Contact us today to discuss your next construction project!</p>
        <a href="/contact" className="contact-btn">Contact Us</a>
      </section>
    </div>
     </div>
  );
};

export default About;
