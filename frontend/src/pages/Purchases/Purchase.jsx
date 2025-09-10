/*import React from "react";
import "./Purchase.css";
import Navbar from "../../components/Navbar/Navbar";
import PropertyCards from "../../components/Projects/Projects";

const Purchase = () => {
  return (
    <div>
      <Navbar />
    <div className="purchase-page">
      {/* Hero Section 
      <section className="purchase-hero">
        <div className="hero-content">
          <h1>Property Purchase</h1>
          <p>
            Explore a seamless property purchasing experience with expert guidance,
            market analysis, and investment advisory.
          </p>
        </div>
      </section>

      {/* Info Section 
      <section className="purchase-info">
        <div className="info-text">
          <h2>Why Choose Us?</h2>
          <p>
            We provide end-to-end support for property acquisition, ensuring
            transparency, fair pricing, and legal compliance. Our team of experts
            helps you make informed decisions every step of the way.
          </p>
          <ul>
            <li>Market Analysis and Research</li>
            <li>Investment Advisory</li>
            <li>Property Valuation</li>
            <li>Negotiation & Documentation Support</li>
          </ul>
        </div>
        <div className="info-images">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Property 1" />
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Property 2" />
        </div>
      </section>
    </div>
    <PropertyCards />
    </div>
  );
};

export default Purchase; */
import React from "react";
import "./Purchase.css";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects"; // ✅ Correct import

const Purchase = () => {
  return (
    <div>
      <Navbar />

      <div className="purchase-page">
        {/* Hero Section */}
        <section className="purchase-hero">
          <div className="hero-content">
            <h1>Property Purchase</h1>
            <p>
              Explore a seamless property purchasing experience with expert
              guidance, market analysis, and investment advisory.
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="purchase-info">
          <div className="info-text">
            <h2>Why Choose Us?</h2>
            <p>
              We provide end-to-end support for property acquisition, ensuring
              transparency, fair pricing, and legal compliance. Our team of
              experts helps you make informed decisions every step of the way.
            </p>
            <ul>
              <li>Market Analysis and Research</li>
              <li>Investment Advisory</li>
              <li>Property Valuation</li>
              <li>Negotiation & Documentation Support</li>
            </ul>
          </div>

          <div className="info-images">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Property 1"
            />
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Property 2"
            />
          </div>
        </section>
      </div>

      {/* Projects Section (Property Cards) */}
      <Projects />
    </div>
  );
};

export default Purchase;
