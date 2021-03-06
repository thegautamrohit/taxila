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
import ProductListing from "./Components/ProductListing/ProductListing";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Kitchen from "./Components/kitchen/kitchen";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Process from "./Components/Process/Process";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/natural-surfaces" element={<NaturalSurface />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/video" element={<Video />} />
        <Route path="/media" element={<Media />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/process" element={<Process />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
