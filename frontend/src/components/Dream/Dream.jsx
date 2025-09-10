import React from "react";
import { Phone, Mail } from "lucide-react"; 
import "./Dream.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

const Dearmsection = () => {
      const navigate = useNavigate();

  return (
    <div className="consultation-container">
      {/* Heading */}
      <h1 className="consultation-title">
        Ready to Find Your Dream Property?
      </h1>

      {/* Subheading */}
      <p className="consultation-subtitle">
       Premium plots, flats, and commercial spaces with verified listings and expert guidance.
      </p>

      {/* Buttons */}
      <div className="consultation-buttons">
        <button className="btn-primary"
                    onClick={() => navigate("/calling")} >

          <Phone size={18} />
          Book Free Site Visit
        </button>



 <div className="consultation-buttons">
      <a
        href="mailto:nidhinagpure21@gmail.com" // 👈 your email address here
        className="btn-secondary"
      >
        <Mail size={18} />
        Get Free Consultation
      </a>
    </div>
      </div>
    </div>
  );
};

export default Dearmsection;
