import React from "react";
import Image from "../../../Assets/images/Vinci/vinci-1.webp";
import "./ProductFeatures.css";
import { GoPrimitiveDot } from "react-icons/go";
import "../../ProductListing/ProductListingFilter/ProductListingFilter.css";

function ProductFeatures() {
  return (
    <div>
      <div className="product-details-features-wrapper-desktop">
        <h4>Features</h4>

        <div className="product-deatils-table-section-wrapper">
          <div className="product-details-table-section-image-wraper">
            <p> Quartzite</p>
            <img src={Image} alt="" />
          </div>

          <div className="product-details-table-section-table-container">
            <table>
              <thead className="details-table-thead-1">
                <tr>
                  {/* <th colSpan={"1"}></th> */}
                  <th colSpan={"6"}>Resistance</th>
                  <th colSpan={"1"}></th>
                </tr>
              </thead>
              <thead className="details-table-thead-2">
                <tr>
                  {/* <th>Category</th> */}
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
                  {/* <td>Granite</td> */}
                  <td>
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                  </td>
                  <td>
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                  </td>
                  <td>
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    {/* <GoPrimitiveDot color={"#6C6C6C"} size={12} /> */}
                  </td>
                  <td>
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                  </td>
                  <td>
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                  </td>
                  <td>
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                    <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                  </td>

                  <td> Hard Surface Easy Maintenance Affordable </td>
                </tr>
              </tbody>
            </table>

            <div className="table-footer-scale">
              <div className="mono-footer-scale-mark">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <p>Fair</p>
              </div>
              <div className="mono-footer-scale-mark">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <p>Good</p>
              </div>
              <div className="mono-footer-scale-mark">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <p>Excellent</p>
              </div>
            </div>
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
                <p>Resistance</p>
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

            <div className="product-listing-table-left-pros">Pros</div>
          </div>
          <div className="product-listing-table-data-container">
            <div className="product-listing-table-right">
              <div className="product-listing-table-right-head">Quartzite</div>

              <div className="table-right-mono-content-block">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
              </div>
              <div className="table-right-mono-content-block">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
              </div>
              <div className="table-right-mono-content-block">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                {/* <GoPrimitiveDot color={"#6C6C6C"} size={12} /> */}
              </div>
              <div className="table-right-mono-content-block">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
              </div>
              <div className="table-right-mono-content-block">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
              </div>
              <div className="table-right-mono-content-block">
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
                <GoPrimitiveDot color={"#6C6C6C"} size={12} />
              </div>

              <div className="product-listing-table-right-foot">
                Hard Surface Easy Maintenance Affordable
              </div>
            </div>
          </div>
        </div>
        <div className="table-footer-scale">
          <div className="mono-footer-scale-mark">
            <GoPrimitiveDot color={"#6C6C6C"} size={12} />
            <p>Fair</p>
          </div>
          <div className="mono-footer-scale-mark">
            <GoPrimitiveDot color={"#6C6C6C"} size={12} />
            <GoPrimitiveDot color={"#6C6C6C"} size={12} />
            <p>Good</p>
          </div>
          <div className="mono-footer-scale-mark">
            <GoPrimitiveDot color={"#6C6C6C"} size={12} />
            <GoPrimitiveDot color={"#6C6C6C"} size={12} />
            <GoPrimitiveDot color={"#6C6C6C"} size={12} />
            <p>Excellent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeatures;
