import React from "react";
import "./WhyTaxila.css";
import About1 from ".././../Assets/images/HomePage/About-us-1.webp";
import About2 from ".././../Assets/images/HomePage/About-us-2.webp";

function WhyTaxila() {
  return (
    <div className="why-taxila-container">
      <div className="why-taxila-grid-1">
        <div className="why-taxila-img-container">
          <img src={About1} alt="About us" />
        </div>
      </div>

      <div className="why-taxila-grid-2">
        <h4 className="why-taxila-grid-head">
          WHY
          <br />
          <span>TAXILA STONE</span>
        </h4>

        <p className="why-taxila-grid-subhead-1">
          no middlemen, exclusives from over the globe, Reliable customer
          service, One stop shop for Designers, providing local products.
        </p>
      </div>

      <div className="why-taxila-grid-3">
        <p className="why-taxila-grid-subhead-2">
          <b> A one-stop solution </b> for designers and builders alike, we at
          Taxila Stone strive to bring the best quality local and imported stone
          surfaces from all over the globe. Without the involvement of any
          third-party vendors, Taxila Stone offers unparalleled and reliable
          customer service to build the home of your dreams.
        </p>

        <button className="why-taxila-btn">About Us</button>
      </div>

      <div className="why-taxila-grid-4">
        <div className="why-taxila-img-container">
          <img src={About2} alt="About us" />
        </div>
      </div>
    </div>
  );
}

export default WhyTaxila;
