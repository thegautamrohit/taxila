import React from "react";
import Logo from "../../../Assets/images/HomePage/Taxila-logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div>
      <nav className="navbar-wrapper-desktop">
        <Link to="/" className="navbar-logo-wrapper">
          <img src={Logo} alt="Taxila Stone" />
        </Link>

        <div className="navbar-quick-links-wrapper">
          <div className="mono-quick-link">About</div>
          <Link to="/natural-surfaces" className="mono-quick-link">
            Natural
          </Link>
          <div className="mono-quick-link">Engineered</div>
          <div className="mono-quick-link">Tiles</div>
          <div className="mono-quick-link">Kitchen</div>
          <div className="mono-quick-link">Accessories</div>
          <div className="mono-quick-link">Inspiration</div>
          <div className="mono-quick-link">Resources</div>
          <div className="mono-quick-link">Shop</div>
          <div className="mono-quick-link">Media</div>
          <div className="mono-quick-link">Contact</div>
        </div>
      </nav>

      <nav className="navbar-wrapper-small">
        <div className="navbar-small-logo-wrappper">
          <img src={Logo} alt="Taxila Stone" />
        </div>

        <div className="navbar-small-menu-bar">
          <span>Menu</span>
          <GiHamburgerMenu size={20} color={"#6C6C6C"} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
