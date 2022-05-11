import React, { useEffect } from "react";
import KitchenItem from "./KitchenItem/KitchenItem";
import WhiteLogo from "../../Assets/images/HomePage/whiteLogo.png";
import Logo from "../../Assets/images/HomePage/Taxila-logo.png";
const Kitchen = () => {
  useEffect(() => {
    const headerBackground = document.getElementsByClassName(
      "navbar-wrapper-desktop"
    )[0];
    const logo = document.getElementsByClassName("navbar-logo-wrapper")[0];
    const logoMob = document.getElementsByClassName(
      "navbar-small-logo-wrappper"
    )[0];
    // console.log(logo);
    const headerLink = document.getElementsByClassName("mono-quick-link")[0];

    const mobileHeaderLink = document.getElementsByClassName(
      "navbar-wrapper-small"
    )[0];

    const headerActiveLink =
      document.getElementsByClassName("active__links")[0];

    const footer = document.getElementsByClassName("footer-container")[0];
    logo.innerHTML = `<img src=${WhiteLogo} alt="Taxila Stone" />`;
    logoMob.innerHTML = `<img src=${WhiteLogo} alt="Taxila Stone" />`;
    footer.style.backgroundColor = "#1D1D1B";
    headerBackground.style.borderBottom = "0.5600000023841858px solid #CDCDCD";
    footer.style.borderTop = "0.5600000023841858px solid #CDCDCD";
    mobileHeaderLink.style.borderBottom = "0.5600000023841858px solid #CDCDCD";
    mobileHeaderLink.style.backgroundColor = "#1D1D1B";
    headerBackground.style.backgroundColor = "#1D1D1B";
    headerBackground.style.boxShadow = "2px 2px 20px #82828214";
    headerLink.style.color = "#E6E5E2";
    headerActiveLink.style.fontWeight = "600";
    headerActiveLink.style.color = "#E6E5E2";
    return () => {
      mobileHeaderLink.style.backgroundColor = "";
      headerBackground.style.backgroundColor = "";
      headerLink.style.color = "";
      headerActiveLink.style.fontWeight = "";
      headerActiveLink.style.color = "";
      headerBackground.style.borderBottom = "";
      headerBackground.style.boxShadow = "";
      footer.style.backgroundColor = "";
      footer.style.borderTop = "";
      mobileHeaderLink.style.borderBottom = "";
      logo.innerHTML = `<img src=${Logo} alt="Taxila Stone" />`;
      logoMob.innerHTML = `<img src=${Logo} alt="Taxila Stone" />`;
    };
  }, []);

  return <KitchenItem />;
};

export default Kitchen;
