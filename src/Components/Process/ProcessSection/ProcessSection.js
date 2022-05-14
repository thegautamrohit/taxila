import React from "react";
import "./ProcessSection.css";
import Icon1 from "../../../Assets/images/Process/dream.svg";
import Icon2 from "../../../Assets/images/Process/select.svg";
import Icon3 from "../../../Assets/images/Process/order.svg";
import Icon4 from "../../../Assets/images/Process/shipping.svg";
import Icon5 from "../../../Assets/images/Process/installation.svg";

function ProcessSection() {
  return (
    <div className="process__section__container">
      <div className="process__section__main__text">
        <h1>
          You order a <br /> <span>stone</span>, we offer <br /> a
          <span> lifestyle</span>
        </h1>
      </div>

      <div className="process_section_process_flow_wrapper_parent">
        <div className="process__section__process__flow__wrapper">
          <div className="process__section__single__process">
            <img src={Icon1} alt="" />

            <p>Dream List</p>

            <div className="process__section__dot"></div>
          </div>
          <div className="process__section__single__process">
            <img src={Icon2} alt="" />

            <p>Select</p>

            <div className="process__section__dot"></div>
          </div>
          <div className="process__section__single__process">
            <img src={Icon3} alt="" />

            <p>Order</p>

            <div className="process__section__dot"></div>
          </div>
          <div className="process__section__single__process">
            <img src={Icon4} alt="" />

            <p>Shipping</p>

            <div className="process__section__dot"></div>
          </div>
          <div className="process__section__single__process">
            <img src={Icon5} alt="" />

            <p>Installation</p>

            <div className="process__section__dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
