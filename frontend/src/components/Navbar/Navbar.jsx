/*import React from 'react';
import { useNavigate  } from 'react-router';
import { useEffect,useRef } from 'react';
import logo from "./../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate(); // initialize

  const goToAbout = () => {
    navigate("/about"); // navigate to About page
  };
   const goToContact = () => {
    navigate("/contact"); // navigate to Contact page
  };
  const goToLogin = () => {
    navigate("/login"); // navigate to Login page
  };

    const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
    return (
        <nav ref={navRef} className="navar-container">
            <div className="logo-conatainer">
                <img className="logo-image" src={logo} alt="logo-image" />
                <div className="nav-menu-container">
                    <span>Home</span>
                    <span>Purchase</span>
                    <span>Sales</span>
                    <span>Commercials</span>
                    <span>Services</span>
                    <span onClick={goToAbout}>About us</span>
                    <span></span>
                    <div className="contact-details">
                        <button className="btn-contact" onClick={goToContact}>Contact</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; */

import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import logo from "./../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="navar-container">
      {/* Left: Logo */}
      <div className="logo-container">
        <img className="logo-image" src={logo} alt="logo" />
      </div>

      {/* Center: Menu */}
      <div className="nav-menu-container">
        <span onClick={() => navigate("/")}>Home</span>
        <span onClick={() => navigate("/purchase")}>Purchase</span>
        <span onClick={() => navigate("/sales")}>Sales</span>
        <span>Commercials</span>
        <span onClick={() => navigate("/about")}>About us</span>
      </div>

      {/* Right: Buttons */}
      <div className="contact-details">
        <button className="btn-contact" onClick={() => navigate("/calling")}>
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
