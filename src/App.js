import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage/HomePage";
import NaturalSurface from "./Components/Natural Surfaces/NaturalSurface";
import Header from "./Components/CommonComponents/Header/Header";
import Footer from "./Components/CommonComponents/Footer/Footer";
import Downloads from "./Components/Downloads/Downloads";
import Video from "./Components/Video/Video";
import Media from "./Components/Media/Media";
import Inspiration from "./Components/Inspiration/Inspiration";

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
      <Routes>
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
      <Routes>
        <Route path="/video" element={<Video />} />
      </Routes>
      <Routes>
        <Route path="/media" element={<Media />} />
      </Routes>
      <Routes>
        <Route path="/inspiration" element={<Inspiration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
