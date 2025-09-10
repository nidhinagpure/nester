import React from 'react';
import './Gallary.css';

// ✅ Correct imports based on your folder
import building1 from "../../assets/building1.jpg";
import building2 from "../../assets/building2.jpg";
import building3 from "../../assets/building3.jpg";
import flats from "../../assets/flats.jpg";
import flats1 from "../../assets/flats1.jpg";
import flats2 from "../../assets/flats2.jpg";
import plots from "../../assets/plots.jpg";
import plots1 from "../../assets/plots1.jpg";
import plots2 from "../../assets/plots2.jpg";
import plots4 from "../../assets/plots4.jpg";
import cardsflats from "../../assets/cardsflats.jpg";
import commercial from "../../assets/commercial.jpg";
import commercial2 from "../../assets/commercial.jpg";

const Gallary = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-heading">Our Showcase</h2>
      <div className="gallery-grid">
        <img src={building1} alt="Showcase 1" />
        <img src={building2} alt="Showcase 2" />
        <img src={building3} alt="Showcase 3" />
        <img src={flats} alt="Showcase 4" />
        <img src={flats1} alt="Showcase 5" />
        <img src={flats2} alt="Showcase 6" />
        <img src={plots} alt="Showcase 7" />
        <img src={plots1} alt="Showcase 8" />
        <img src={plots2} alt="Showcase 9" />
        <img src={plots4} alt="Showcase 10" />
        <img src={cardsflats} alt="Showcase 11" />
        <img src={commercial} alt="Showcase 12" />
      </div>
    </div>
  );
};

export default Gallary;
