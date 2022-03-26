import React from "react";
import "./ProductListingBanner.css";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

function ProductListingBanner() {
  return (
    <>
      <div className="product-listing-banner-container">
        <h1>PRODUCT LISTING</h1>
      </div>

      <div className="product-listing-banner-route-indicator">
        <Link to="/" className="product-listing-banner-home-link">
          Home <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="product-listing-banner-home-link">
          Product Listing <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="product-listing-banner-home-link">
          Granite <IoChevronForwardOutline />
        </Link>
      </div>
    </>
  );
}

export default ProductListingBanner;
