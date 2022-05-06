import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

import "./AboutBanner.css";

function AboutBanner() {
  return (
    <>
      <div className="about-banner-container">
        <h1>ABOUT US</h1>
      </div>

      <div className="about-route-indicator">
        <Link to="/" className="about-home-link">
          Home <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="about-home-link">
          About Us
          {/* <IoChevronForwardOutline /> */}
        </Link>
      </div>
    </>
  );
}

export default AboutBanner;
