
import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MiddleSection from "../../components/MiddleSection/MiddleSection.jsx";
import Gallary from "../../components/Gallary/Gallary.jsx";
import Card from "../../components/Properties/Properties.jsx";
import Dearmsection from "../../components/Dream/Dream.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const Home = () => {
  return (
    <div>
        <Navbar />
        <MiddleSection />
        <Gallary />
        <Card />
        <Dearmsection />
        <Footer />
    </div>
  )
}

export default Home;

