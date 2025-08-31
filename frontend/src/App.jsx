import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./style.css";
import Herosection from './components/HeroSection/Herosections';


const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Herosection />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index

