import React from "react";
import "./ShopLink.css";
import { IoIosArrowForward } from "react-icons/io";
function ShopLink() {
  return (
    <div className="shop-link-container">
      <h4>
        SHOP <span>LINK</span>
      </h4>
      {/* <p>
        Explore from the exquisite range <br /> our hidden domains
      </p> */}
      <button className="shop-link-btn">
        <span>Shop All</span>
        <div className="shop-link-btn-hover">
          <div className="shop-link-btn-circle"> </div>
          <IoIosArrowForward />
        </div>
      </button>
    </div>
  );
}

export default ShopLink;
