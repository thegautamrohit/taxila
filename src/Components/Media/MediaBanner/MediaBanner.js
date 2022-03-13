import React from "react";
import "./MediaBanner.css";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

function MediaBanner() {
  return (
    <>
      <div className="media-banner-wrapper">
        <h1>MEDIA</h1>
      </div>

      <div className="media-page-route-indicator">
        <Link to="/" className="media-page-home-link">
          Home <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="media-page-home-link">
          News
          <IoChevronForwardOutline />
        </Link>
      </div>
    </>
  );
}

export default MediaBanner;
