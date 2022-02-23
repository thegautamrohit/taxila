import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

import "./NaturalBanner.css";

function NaturalBanner() {
  return (
    <>
      <div className="natural-banner-container">
        <h1>NATURAL SURFACES</h1>
      </div>

      <div className="natural-surface-route-indicator">
        <Link to="/" className="natural-surface-home-link">
          Home <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="natural-surface-home-link">
          Product Listing <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="natural-surface-home-link">
          Granite <IoChevronForwardOutline />
        </Link>
      </div>
    </>
  );
}

export default NaturalBanner;
