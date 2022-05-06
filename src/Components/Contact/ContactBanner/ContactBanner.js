import React from "react";
import { Link } from "react-router-dom";
import { IoChevronForwardOutline } from "react-icons/io5";

import "./ContactBanner.css";

function ContactBanner() {
  return (
    <>
      <div className="contact-banner-container">
        <div className="contact-banner-head">
          <h1>WE ARE HERE FOR YOU</h1>

          <p>
            Reach out to us for any queries below. Taxila Stone is at your
            service.
          </p>
        </div>
      </div>

      <div className="contact-route-indicator">
        <Link to="/" className="contact-home-link">
          Home <IoChevronForwardOutline />
        </Link>
        <Link to="/" className="contact-home-link">
          Contact Us
          {/* <IoChevronForwardOutline /> */}
        </Link>
      </div>
    </>
  );
}

export default ContactBanner;
