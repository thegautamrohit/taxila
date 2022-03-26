import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

import "./Banner.css";

function Banner({ BackGround, Heading }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="banner-container"
      >
        <h1>{Heading}</h1>
      </div>

      <div className="banner-route-indicator">
        <Link to="/" className="banner-home-link">
          Home <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="banner-home-link">
          Product Listing <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="banner-home-link">
          Granite <IoChevronForwardOutline />
        </Link>
      </div>
    </>
  );
}

export default Banner;
