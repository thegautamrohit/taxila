import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import NaturalSurface from "./Components/Natural Surfaces/NaturalSurface";
import Header from "./Components/CommonComponents/Header/Header";
import Footer from "./Components/CommonComponents/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/natural-surfaces" element={<NaturalSurface />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
