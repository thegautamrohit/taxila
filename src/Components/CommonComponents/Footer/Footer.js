import React from "react";
import Logo from "../../../Assets/images/HomePage/Taxila-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo-bar">
        <div className="footer-logo-wrapper">
          <img src={Logo} alt="Taxila Stone" />
        </div>
      </div>
      <div className="footer-quick-links-bar">
        <div className="footer-mono-quick-link">Home</div>
        <div className="footer-mono-quick-link">Natural</div>
        <div className="footer-mono-quick-link">Engineered</div>
        <div className="footer-mono-quick-link">Engineered</div>
        <div className="footer-mono-quick-link">Tiles</div>
        <div className="footer-mono-quick-link">Accessories</div>
        <div className="footer-mono-quick-link">Inspiration</div>
        <div className="footer-mono-quick-link">Resources</div>
        <div className="footer-mono-quick-link">Shop</div>
        <div className="footer-mono-quick-link">Media</div>
      </div>
      <div className="footer-bottom-bar">
        <div className="footer-term-link">terms and conditions</div>
        <div className="footer-term-link">privacy policy</div>
      </div>
    </footer>
  );
}

export default Footer;
