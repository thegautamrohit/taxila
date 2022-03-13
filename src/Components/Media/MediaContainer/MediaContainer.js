import React from "react";
import Image from "../../../Assets/images/HomePage/Banner-2.webp";
import "./MediaContainer.css";
import { IoIosArrowForward } from "react-icons/io";

function MediaContainer() {
  return (
    <div className="media-container-wrapper">
      <div className="media-container-mono-article">
        <div className="media-article-img-box">
          <img src={Image} alt="media article" />
        </div>

        <div className="media-article-content">
          <h5 className="media-article-title">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </h5>

          <span className="media-article-date">17 FEBRUARY, 2020</span>

          <p className="media-article-summary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est...
          </p>

          <button className="media-article-btn">
            <span>Read More</span>
            <div className="media-article-btn-hover">
              <div className="media-article-btn-circle"> </div>
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
      <div className="media-container-mono-article">
        <div className="media-article-img-box">
          <img src={Image} alt="media article" />
        </div>

        <div className="media-article-content">
          <h5 className="media-article-title">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </h5>

          <span className="media-article-date">17 FEBRUARY, 2020</span>

          <p className="media-article-summary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est...
          </p>

          <button className="media-article-btn">
            <span>Read More</span>
            <div className="media-article-btn-hover">
              <div className="media-article-btn-circle"> </div>
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
      <div className="media-container-mono-article">
        <div className="media-article-img-box">
          <img src={Image} alt="media article" />
        </div>

        <div className="media-article-content">
          <h5 className="media-article-title">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </h5>

          <span className="media-article-date">17 FEBRUARY, 2020</span>

          <p className="media-article-summary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
            est...
          </p>

          <button className="media-article-btn">
            <span>Read More</span>
            <div className="media-article-btn-hover">
              <div className="media-article-btn-circle"> </div>
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MediaContainer;
