import React, { useEffect } from "react";
import KitchenItem from "./KitchenItem/KitchenItem";

const Kitchen = () => {
  useEffect(() => {
    const headerBackground = document.getElementsByClassName(
      "navbar-wrapper-desktop"
    )[0];

    const headerLink = document.getElementsByClassName("mono-quick-link")[0];

    const headerActiveLink =
      document.getElementsByClassName("active__links")[0];

    const footer = document.getElementsByClassName("footer-container")[0];

    footer.style.backgroundColor = "#1D1D1B";
    headerBackground.style.borderBottom = "0.5600000023841858px solid #CDCDCD";
    footer.style.borderTop = "0.5600000023841858px solid #CDCDCD";

    headerBackground.style.backgroundColor = "#1D1D1B";
    headerBackground.style.boxShadow = "2px 2px 20px #82828214";
    headerLink.style.color = "#E6E5E2";
    headerActiveLink.style.fontWeight = "600";
    headerActiveLink.style.color = "#E6E5E2";
    return () => {
      headerBackground.style.backgroundColor = "";
      headerLink.style.color = "";
      headerActiveLink.style.fontWeight = "";
      headerActiveLink.style.color = "";
      headerBackground.style.borderBottom = "";
      headerBackground.style.boxShadow = "";
      footer.style.backgroundColor = "";
      footer.style.borderTop = "";
    };
  }, []);

  return (
    <div>
      <KitchenItem />
    </div>
  );
};

export default Kitchen;
