import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./style.css";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Calling from "./pages/Calling/Calling.jsx";
import Purchase from "./pages/Purchases/Purchase.jsx";
import Sales from "./pages/Sales/Sales.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calling" element={<Calling />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
