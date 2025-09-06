import React from 'react';
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

export default Navbar;
