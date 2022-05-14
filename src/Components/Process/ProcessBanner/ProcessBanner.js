import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

import "../../About/AboutBanner/AboutBanner.css";

function ProcessBanner() {
  return (
    <>
      <div className="about-banner-container">
        <h1>OUR PROCESS</h1>
      </div>

      <div className="about-route-indicator">
        <Link to="/" className="about-home-link">
          Home <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="about-home-link">
          Process
          {/* <IoChevronForwardOutline /> */}
        </Link>
      </div>
    </>
  );
}

export default ProcessBanner;
