import React from "react";
import Logo from "../../../Assets/images/HomePage/Taxila-logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div>
      <nav className="navbar-wrapper-desktop">
        <NavLink to="/" className="navbar-logo-wrapper">
          <img src={Logo} alt="Taxila Stone" />
        </NavLink>

        <div className="navbar-quick-links-wrapper">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active__links" : "mono-quick-link"
            }
            to="/natural-surfaces"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active__links" : "mono-quick-link"
            }
            to="/natural-surfaces"
          >
            Natural
          </NavLink>
          <div className="mono-quick-link">Engineered</div>
          <div className="mono-quick-link">Tiles</div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active__links" : "mono-quick-link"
            }
            to="/kitchen"
          >
            Kitchen{" "}
          </NavLink>
          <div className="mono-quick-link">Accessories</div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active__links" : "mono-quick-link"
            }
            to="/inspiration"
          >
            Inspiration
          </NavLink>
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
