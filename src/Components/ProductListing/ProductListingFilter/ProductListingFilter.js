import React, { useState } from "react";
import "./ProductListingFilter.css";
import { FiChevronDown } from "react-icons/fi";
import { IoChevronForwardSharp } from "react-icons/io5";

import Image from "../../../Assets/images/HomePage/Marble-5.webp";
import Image2 from "../../../Assets/images/HomePage/Marble-1.webp";
import Image3 from "../../../Assets/images/HomePage/Marble-2.webp";
import Image4 from "../../../Assets/images/HomePage/Marble-3.webp";
import Icon from "../../../Assets/images/Product Listing/taxila-icon.png";

function ProductListingFilter() {
  const [toggle, setToggle] = useState(0);

  const tiles = [
    {
      id: 1,
      title: "Tile 1",
      Image: Image2,
    },
    {
      id: 2,
      title: "Tile 2",
      Image: Image3,
    },
    {
      id: 3,
      title: "Tile 3",
      Image: Image4,
    },
    {
      id: 4,
      title: "Tile 4",
      Image: Image3,
    },
    {
      id: 5,
      title: "Tile 5",
      Image: Image2,
    },
    {
      id: 6,
      title: "Tile 5",
      Image: Image4,
    },
  ];

  const marbles = [
    "Granite",
    "Marble",
    "Quartz",
    "Quartzite",
    "Idilium",
    "Granite",
    "Marble",
    "Quartz",
    "Quartzite",
    "Idilium",
    "Etc",
  ];

  return (
    <div className="product-listing-filter-container">
      <div className="product-listing-filter-drop-desk">
        <p className="product-listing-filter-head">
          Product Categories <FiChevronDown color="#A09F9D" size={"22"} />
        </p>
        {marbles.map((marble, index) => (
          <p
            key={index}
            className={
              toggle === index
                ? "product-listing-mono-product highlight"
                : "product-listing-mono-product"
            }
            onClick={() => setToggle(index)}
          >
            {marble}
          </p>
        ))}
      </div>

      <div className="product-listing-description-section">
        <div className="product-listing-details">
          <div className="product-listing-details-description">
            <h4>Details</h4>
            <p>
              Granite is an extremely durable natural stone that transcends many
              styles. Granite is both distinctive and durable and an excellent
              choice for kitchen countertops, flooring, and other heavy traffic
              surfaces due to its hardness, low absorption, and resistance to
              high temperatures.
            </p>
          </div>
          <div className="product-listing-details-image">
            <img src={Image} alt="" />
          </div>
        </div>

        <div className="product-listing-features-wrapper-desktop">
          <h4>Features</h4>
          <table>
            <thead className="table-thead-1">
              <tr>
                <th colSpan={"1"}></th>
                <th colSpan={"6"}>Resistance</th>
                <th colSpan={"1"}></th>
              </tr>
            </thead>
            <thead className="table-thead-2">
              <tr>
                <th>Category</th>
                <th>Chips</th>
                <th>Heat</th>
                <th>Stain</th>
                <th>Scratch</th>
                <th>Water</th>
                <th>Frost</th>
                <th>Pros</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Granite</td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>

                <td> Hard Surface Easy Maintenance Affordable </td>
              </tr>
              <tr>
                <td>Granite</td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td>
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </td>
                <td> Hard Surface Easy Maintenance Affordable </td>
              </tr>
            </tbody>
          </table>

          <div className="table-footer-scale">
            <div className="mono-footer-scale-mark">
              <img src={Icon} alt="" />
              <p>Fair</p>
            </div>
            <div className="mono-footer-scale-mark">
              <img src={Icon} alt="" />
              <img src={Icon} alt="" />
              <p>Good</p>
            </div>
            <div className="mono-footer-scale-mark">
              <img src={Icon} alt="" />
              <img src={Icon} alt="" />
              <img src={Icon} alt="" />
              <p>Excellent</p>
            </div>
          </div>
        </div>

        <div className="product-listing-features-wrapper-mob">
          <h4>Features</h4>

          <div className="product-listing-features-table">
            <div className="product-listing-table-left">
              <div className="product-listing-table-left-head">Category</div>

              <div className="product-listing-table-left-wrap">
                <div className="product-listing-table-left-content">
                  Resistance
                </div>
                <div className="product-listing-table-left-stats">
                  <p>Chips</p>
                  <p>Heat</p>
                  <p>Stain</p>
                  <p>Scratch</p>
                  <p>Water</p>
                  <p>Frost</p>
                </div>
              </div>

              <div className="product-listing-table-left-head">Pros</div>
            </div>
            <div className="product-listing-table-right">
              <div className="product-listing-table-right-head">Granite</div>
              <div className="product-listing-table-right-content">
                <div className="table-right-mono-content-block">
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </div>
                <div className="table-right-mono-content-block">
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </div>
                <div className="table-right-mono-content-block">
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </div>
                <div className="table-right-mono-content-block">
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </div>
                <div className="table-right-mono-content-block">
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </div>
                <div className="table-right-mono-content-block">
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                  <img src={Icon} alt="" />
                </div>
              </div>
              <div className="product-listing-table-right-foot">
                Hard Surface Easy Maintenance Affordable
              </div>
            </div>
          </div>
        </div>

        <div className="product-listing-explore-products-wrapper">
          <div className="product-listing-explore-products-wrapper-head">
            <h4>Explore Products</h4>
            <p>6 Results</p>
          </div>

          <div className="product-listing-explore-products-results">
            {tiles?.map((tile) => (
              <div
                key={tile.id}
                className="product-listing-explore-products-mono-result"
              >
                <div className="product-listing-explore-products-mono-result-img">
                  <img src={tile.Image} alt="" />
                </div>
                <div className="product-listing-explore-products-mono-result-desc">
                  <h4>{tile?.title}</h4>
                  <span>
                    view product
                    <IoChevronForwardSharp size={22} color={"#cdcdcd"} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListingFilter;
