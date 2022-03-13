import React from "react";
import "./VideoBanner.css";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

function VideoBanner() {
  return (
    <>
      <div className="video-banner-wrapper">
        <h1>VIDEO</h1>
      </div>

      <div className="video-page-route-indicator">
        <Link to="/" className="video-page-home-link">
          Home <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="video-page-home-link">
          Product Listing <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="video-page-home-link">
          Granite <IoChevronForwardOutline />
        </Link>
      </div>
    </>
  );
}

export default VideoBanner;
