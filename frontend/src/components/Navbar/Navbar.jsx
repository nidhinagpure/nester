import React from 'react';
import { useNavigate  } from 'react-router';
import { useEffect,useRef } from 'react';
import logo from "./../../assets/global.png";
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
                <div>
                    <p className="global-text">Global</p>
                    <p className="nester-text">Nester</p>
                </div>
                <div className="nav-menu-container">
                    <span>Home</span>
                    <select>
                        <option>Deals</option>
                        <option>Purchases</option>
                        <option>Sales</option>
                        <option>Commercials</option>
                    </select>
                    <span onClick={goToAbout}>About us</span>
                    <div className="contact-details">
                        <button className="btn-contact" onClick={goToContact}>Contact</button>
                        <button className="btn-login" onClick={goToLogin}>Login</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
