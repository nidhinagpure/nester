import React from "react";
import "./Projects.css";

const Projects = () => {
  const properties = [
    {
      type: "Plot",
      price: "₹45 Lakhs",
      image:
        "https://images.unsplash.com/photo-1581091215369-7b5a4e36f97a?auto=format&fit=crop&w=800&q=80",
      title: "Residential Plot - DTCP Approved",
      location: "📍 Sarjapur Road, Bangalore",
      area: "📐 1,800 sq ft",
      features: ["DTCP Approved", "Clear Title", "Water Connection"],
      builder: { name: "Ozone Group", role: "Builder" },
    },
    {
      type: "Commercial",
      price: "₹1.8 Crores",
      image:
        "https://images.unsplash.com/photo-1522098543979-ffc7f79d8f63?auto=format&fit=crop&w=800&q=80",
      title: "Premium Office Space",
      location: "📍 MG Road, Bangalore",
      area: "📐 2,500 sq ft",
      features: ["Central AC", "Elevator", "Security"],
      builder: { name: "Embassy Group", role: "Builder" },
    },
    {
      type: "Flat",
      price: "₹85 Lakhs",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Luxury 3BHK Apartment",
      location: "📍 Whitefield, Bangalore",
      area: "📐 1,450 sq ft · 3 BHK · 2 Bath",
      features: ["Swimming Pool", "Gym", "Club House"],
      builder: { name: "Prestige Group", role: "Builder" },
    },
  ];

  return (
    <div className="projects-grid">
      {properties.map((prop, idx) => (
        <PropertyCard key={idx} {...prop} />
      ))}
    </div>
  );
};

export default Projects;
