import React from "react";
import "./ShopLink.css";
import { IoIosArrowForward } from "react-icons/io";
function ShopLink() {
  return (
    <div className="shop-link-container">
      <h4>
        SHOP <span>LINK</span>
      </h4>
      <p>
        Explore from the exquisite range <br /> our hidden domains
      </p>
      <button className="why-taxila-btn">
        <span>Get Quote</span>
        <div className="why-taxila-btn-hover">
          <div className="why-taxila-btn-circle"> </div>
          <IoIosArrowForward />
        </div>
      </button>
    </div>
  );
}

export default ShopLink;
