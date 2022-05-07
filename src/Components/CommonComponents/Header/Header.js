import React, { useState } from "react";
import Logo from "../../../Assets/images/HomePage/Taxila-logo.png";
import WhiteLogo from "../../../Assets/images/HomePage/whiteLogo.webp";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  const closeHandler = (e) => {
    console.log(e.target.className);
  };

  return (
    <div>
      <nav className="navbar-wrapper-desktop">
        <NavLink to="/" className="navbar-logo-wrapper">
          <img
            src={
              window.location.pathname.split("/")[1] === "kitchen"
                ? WhiteLogo
                : Logo
            }
            alt="Taxila Stone"
          />
        </NavLink>

        <div className="navbar-quick-links-wrapper">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active__links" : "mono-quick-link"
            }
            to="/about-us"
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
          <NavLink
            className={({ isActive }) =>
              isActive ? "active__links" : "mono-quick-link"
            }
            to="/product-listing"
          >
            Tiles
          </NavLink>
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
          <NavLink
            className={({ isActive }) =>
              isActive ? "active__links" : "mono-quick-link"
            }
            to="/media"
          >
            Media
          </NavLink>
          <div className="mono-quick-link">Contact</div>
        </div>
      </nav>

      <nav className="navbar-wrapper-small">
        <div className="navbar-small-logo-wrappper">
          <img
            src={
              window.location.pathname.split("/")[1] === "kitchen"
                ? WhiteLogo
                : Logo
            }
            alt="Taxila Stone"
          />
        </div>

        <div className="navbar-small-menu-bar" onClick={() => clickHandler()}>
          <span> {!show ? "Menu" : "Close"} </span>

          <div className={show ? "hamburger-icon open" : "hamburger-icon"}>
            <div className="hamburger_btn_burger_1"></div>
            <div className="hamburger_btn_burger_2"></div>
          </div>
        </div>

        <div
          className={show ? "navbar-menu-slider open" : "navbar-menu-slider"}
          onClick={(e) => closeHandler(e)}
        >
          <div className="navbar_slider_content">
            <p>About</p>
            <p>Natural</p>
            <p>Engineered</p>
            <p>Tiles</p>
            <p>Kitchen</p>
            <p>Accessories</p>
            <p>Inspiration</p>
            <p>Resources</p>
            <p>Shop</p>
            <p>Media</p>
            <p>Contact</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
