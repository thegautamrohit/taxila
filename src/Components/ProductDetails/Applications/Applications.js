import React from "react";
import "./Applications.css";
import CounterTop from "../../../Assets/images/ProductDetail/CounterTop.svg";
import Wall from "../../../Assets/images/ProductDetail/Walls.svg";
import Fireplace from "../../../Assets/images/ProductDetail/Fireplace.svg";
import Floorings from "../../../Assets/images/ProductDetail/Floorings.svg";
import Outdoors from "../../../Assets/images/ProductDetail/Outdoors.svg";
import Shower from "../../../Assets/images/ProductDetail/Shower.svg";

function Applications() {
  return (
    <div className="product__detail__application__wrapper">
      <h4>Applications</h4>

      <div className="product__detail__application__container">
        <div className="mono__application__block">
          <div className="mono__application__block__image">
            <img src={CounterTop} alt="ConterTop" loading="lazy" />
          </div>
          <p>Countertops</p>
        </div>
        <div className="mono__application__block">
          <div className="mono__application__block__image">
            <img src={Wall} alt="Wall" loading="lazy" />
          </div>
          <p>Walls</p>
        </div>
        <div className="mono__application__block">
          <div className="mono__application__block__image">
            <img src={Fireplace} alt="Fireplace" loading="lazy" />
          </div>
          <p>Fireplace</p>
        </div>
        <div className="mono__application__block">
          <div className="mono__application__block__image">
            <img src={Floorings} alt="Floorings" loading="lazy" />
          </div>
          <p>Floorings</p>
        </div>
        <div className="mono__application__block">
          <div className="mono__application__block__image">
            <img src={Shower} alt="Shower" loading="lazy" />
          </div>
          <p>Shower</p>
        </div>
        <div className="mono__application__block">
          <div className="mono__application__block__image">
            <img src={Outdoors} alt="Outdoors" loading="lazy" />
          </div>
          <p>Outdoors</p>
        </div>
      </div>
    </div>
  );
}

export default Applications;
