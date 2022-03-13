import React from "react";
import "./Banner.css";
import BannerImage from "../../../Assets/images/Natural Surfaces/naturalBanner.webp";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="download__banner__container">
      <img src={BannerImage} />
      <div className="download__banner__link">
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
    </div>
  );
};

export default Banner;
