import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        <div className="contact-form-head">
          <h4>
            GET IN <br />
            <span>TOUCH</span>
          </h4>
        </div>

        <div className="contact-form-subhead">
          <p>
            We offer 24x7 assistance with the help of our experienced staff with
            their unsurpassable expertise in the industry. <br /> <br /> <br />
            Kindly get in touch with our team for any queries and doubts by
            filling out the form and we will get back to you at the earliest.
          </p>
        </div>
      </div>
      <div className="contact-form-input-box">
        <div className="contact-form-input-container">
          <div className="input-wrapper">
            <input type="text" placeholder="Name" />
          </div>

          <div className="input-wrapper">
            <input type="email" placeholder="Email Id" />
          </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Company Name" />
          </div>

          <div className="input-wrapper">
            <input type="number" placeholder="Phone Number" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="Requirement details">Requirement details</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>

        <button className="contact-form-quote-btn">Get Quote</button>
      </div>
    </div>
  );
}

export default ContactForm;
