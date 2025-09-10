
import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Herosection from "../../components/HeroSection/HeroSection.jsx";
import Gallary from "../../components/Gallary/Gallary.jsx";
import Card from "../../components/Properties/Properties.jsx";
import Dearmsection from "./../../components/Dream/Dream.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const Home = () => {
  return (
    <div>
        <Navbar />
        <Herosection />
        <Gallary />
        <Card />
        <Dearmsection />
        <Footer />
    </div>
  )
}

export default Home;

