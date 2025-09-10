import React, { useState } from "react";
import "./Sales.css";
import Navbar from "./../../components/Navbar/Navbar"

const Sale = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Plot",
    propertyName: "",
    location: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Property Information Submitted Successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "Plot",
      propertyName: "",
      location: "",
      price: "",
      description: "",
    });
  };

  return (
    <div>

        <Navbar/>
    <div className="sale-page">
      {/* Hero Section */}
      <section className="sale-hero">
        <div className="hero-content">
          <h1>Sell Your Property</h1>
          <p>Fill out the form below to list your plot, flat, or building for sale.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="sale-form-section">
        <h2>Property Information Form</h2>
        <form className="sale-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="Plot">Plot</option>
              <option value="Flat">Flat</option>
              <option value="Building">Building</option>
            </select>
          </div>
          <div className="form-row">
            <input
              type="text"
              name="propertyName"
              placeholder="Property Name / Title"
              value={formData.propertyName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
            />
          </div>
          <button type="submit" className="submit-btn">Submit Property</button>
        </form>
      </section>
    </div>
    </div>
  );
};

export default Sale;
