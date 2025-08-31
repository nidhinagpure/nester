import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./style.css";
import Navbar from './components/Navbar/Navbar.jsx';


const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default index

