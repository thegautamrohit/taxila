import React from "react";
import "./ProcessSteps.css";
import One from "../../../Assets/images/Process/one.svg";
import Two from "../../../Assets/images/Process/two.svg";
import Three from "../../../Assets/images/Process/three.svg";
import Four from "../../../Assets/images/Process/four.svg";
import Five from "../../../Assets/images/Process/five.svg";
import { IoIosArrowForward } from "react-icons/io";

function ProcessSteps() {
  return (
    <>
      <div className="process__steps__container">
        <div
          className="process__steps__card"
          style={{
            backgroundImage: `url(${One})`,
          }}
        >
          <div className="process__steps__card__content">
            <h4>DREAM LIST</h4>

            <p>
              Curate your Dream list with Taxila Stone– Start right with knowing
              what you want and what are the options available in the realm of
              stone that is the Taxila Stone website. Pick your own favorites
              and save it for your reference. Check our buying guide for more.
              Your scheduled visit to Taxila will be much easier with the help
              of your own wishlist and a fabricator or a stone specialist to
              guide your imagination to reality.
            </p>
          </div>
        </div>
        <div
          className="process__steps__card"
          style={{
            backgroundImage: `url(${Two})`,
          }}
        >
          <div className="process__steps__card__content">
            <h4>SELECT</h4>

            <p>
              Take A Look around – Browse through your studio gallery and get an
              insight about the different varieties of stone surfaces. Narrowing
              down your range and selecting a stone is a task that is
              facilitated by our team of professional stone experts. Visiting
              the gallery will add a vision to your stone selection journey.
            </p>
          </div>
        </div>
        <div
          className="process__steps__card"
          style={{
            backgroundImage: `url(${Three})`,
          }}
        >
          <div className="process__steps__card__content">
            <h4>ORDER</h4>

            <p>
              Place an order – Stone selection is followed by the pricing and
              order confirmation of the stone slabs within the network of our
              stone fabricators. The pricing varies from natural to engineered
              surfaces with ranges from inexpensive, premium, exotic to
              precious. Our professional team of stone experts will guide you
              through the pricing and reservation process seamlessly.
            </p>
          </div>
        </div>
        <div
          className="process__steps__card"
          style={{
            backgroundImage: `url(${Four})`,
          }}
        >
          <div className="process__steps__card__content">
            <h4>SHIPPING</h4>

            <p>
              Shipping – Free delivery services by Taxila Stone offers
              convenient delivery of the selected surfaces to the fabricator of
              your choice in the DFW region. The further processing is carried
              out for inspection, measurement and delivery to another location
              if required.
            </p>
          </div>
        </div>
        <div
          className="process__steps__card"
          style={{
            backgroundImage: `url(${Five})`,
          }}
        >
          <div className="process__steps__card__content">
            <h4>INSTALLATION</h4>

            <p>
              Final Showdown – The installation and fabrication will be carried
              out by your fabricator to complete the project as per your
              requirements and design. The time has come to unveil the final
              artwork that is the home of your dreams.
            </p>
          </div>
        </div>
        <div className="process__steps__card__last">
          <div className="process__steps__card__content__last">
            <h4>
              SHOP
              <span> LINK</span>
            </h4>
            <p>Explore from the exquisite range our hidden domains</p>
          </div>
          <button className="process__steps__btn">
            <span>Get Quote</span>
            <div className="process__steps__btn-hover">
              <div className="process__steps__btn-circle"> </div>
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default ProcessSteps;
