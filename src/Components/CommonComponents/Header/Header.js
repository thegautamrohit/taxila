import React from "react";
import Logo from "../../../Assets/images/HomePage/Taxila-logo.png";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-logo-wrapper">
        <img src={Logo} alt="" />
      </div>

      <div className="navbar-quick-links-wrapper">
        <div className="mono-quick-link">Home</div>
        <div className="mono-quick-link">Natural</div>
        <div className="mono-quick-link">Engineered</div>
        <div className="mono-quick-link">Tiles</div>
        <div className="mono-quick-link">Accessories</div>
        <div className="mono-quick-link">Inspiration</div>
        <div className="mono-quick-link">Resources</div>
        <div className="mono-quick-link">Shop</div>
        <div className="mono-quick-link">Media</div>
      </div>
    </nav>
  );
}

export default Header;
