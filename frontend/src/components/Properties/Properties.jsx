/*import React from 'react';
import "./Properties.css";
import cardscommrical from "./../../assets/cardscommercial.jpg";
import cardsflats from "./../../assets/cardsflats.jpg";
import cardsplots from "./../../assets/cardsplots.jpg";

const Card = ({ title, description, features, price, locationIcon, typeIcon, imageSrc, cardType }) => {
  return (

    <div>
    <div className={`card ${cardType}`}>
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
        <span className="card-price-overlay">{price}</span>
        <span className="card-location-icon">{locationIcon}</span>
        <span className="card-type-icon">{typeIcon}</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="card-button">View Details →</button>
      </div>
    </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      title: "Luxury Flats",
      description: "Premium residential apartments with modern amenities, spacious layouts & prime locations.",
      features: ["2-4 BHK Options", "Premium Finishes", "Gated Community", "Modern Amenities"],
      price: "₹45L - ₹1.5Cr",
      locationIcon: "🏠",
      typeIcon: "",
      imageSrc: cardsflats,
      cardType: "luxury-flats"
    },
    {
      title: "Residential Plots",
      description: "Prime residential plots with clear titles, approved layouts, and excellent connectivity.",
      features: ["Clear Titles", "Approved Layouts", "Road Connectivity", "Utilities Ready"],
      price: "₹25L - ₹75L",
      locationIcon: "📍",
      typeIcon: "",
      imageSrc: cardsplots,
      cardType: "residential-plots"
    },
    {
      title: "Commercial Spaces",
      description: "Strategic commercial properties for retail, office, and investment opportunities.",
      features: ["Prime Locations", "High ROI", "Flexible Spaces", "Business Ready"],
      price: "₹75L - ₹5Cr",
      locationIcon: "",
      typeIcon: "🏢",
      imageSrc: cardscommrical,
      cardType: "commercial-spaces"
    },
  ];

  return (
    <div className="cards-container">
        <div className="cards-heading">
        <h1>Our Properties</h1>
        <p>Explore our wide range of plots, flats, and commercial spaces carefully curated to meet your needs.</p>
      </div>
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          description={data.description}
          features={data.features}
          price={data.price}
          locationIcon={data.locationIcon}
          typeIcon={data.typeIcon}
          imageSrc={data.imageSrc}
          cardType={data.cardType}
        />
      ))}
    </div>
  );
};

export default Cards; */
import React from 'react';
import "./Properties.css";
import cardscommercial from "./../../assets/cardscommercial.jpg";
import cardsflats from "./../../assets/cardsflats.jpg";
import cardsplots from "./../../assets/cardsplots.jpg";

const Card = ({ title, description, features, price, locationIcon, typeIcon, imageSrc, cardType }) => {
  return (
    <div className={`card ${cardType}`}>
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
        <span className="card-price-overlay">{price}</span>
        {locationIcon && <span className="card-location-icon">{locationIcon}</span>}
        {typeIcon && <span className="card-type-icon">{typeIcon}</span>}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <ul className="card-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="card-button">View Details →</button>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      title: "Luxury Flats",
      description: "Premium residential apartments with modern amenities, spacious layouts & prime locations.",
      features: ["2-4 BHK Options", "Premium Finishes", "Gated Community", "Modern Amenities"],
      price: "₹45L - ₹1.5Cr",
      locationIcon: "📍",
      typeIcon: "🏠",
      imageSrc: cardsflats,
      cardType: "luxury-flats"
    },
    {
      title: "Residential Plots",
      description: "Prime residential plots with clear titles, approved layouts, and excellent connectivity.",
      features: ["Clear Titles", "Approved Layouts", "Road Connectivity", "Utilities Ready"],
      price: "₹25L - ₹75L",
      locationIcon: "📍",
      typeIcon: "📐",
      imageSrc: cardsplots,
      cardType: "residential-plots"
    },
    {
      title: "Commercial Spaces",
      description: "Strategic commercial properties for retail, office, and investment opportunities.",
      features: ["Prime Locations", "High ROI", "Flexible Spaces", "Business Ready"],
      price: "₹75L - ₹5Cr",
      locationIcon: "📍",
      typeIcon: "🏢",
      imageSrc: cardscommercial,
      cardType: "commercial-spaces"
    },
  ];

  return (
    <div className="cards-container">
      <div className="cards-heading">
        <h1>Our Properties</h1>
        <p>Explore our wide range of plots, flats, and commercial spaces carefully curated to meet your needs.</p>
      </div>
      <div className="cards-grid">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
