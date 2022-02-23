import React from "react";
import Banner1 from "../../../Assets/images/HomePage/Banner-1.webp";
import Banner2 from "../../../Assets/images/HomePage/Banner-2.webp";
import Banner3 from "../../../Assets/images/HomePage/Banner-3.webp";
import Slider from "react-slick";
import "./HeroBanner.css";

function HeroBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: false,
  };

  return (
    <div className="hero-banner-slider-wrapper">
      <Slider {...settings}>
        <div className="single-banner-slide">
          <div className="banner-img-wrapper">
            <img src={Banner1} alt="" />
          </div>
          <div className="hero-banner-content">
            EXPERIENCE <br /> A LIFESTYLE WITH <br /> <span>TAXILA STONE</span>
          </div>
        </div>
        <div className="single-banner-slide">
          <div className="banner-img-wrapper">
            <img src={Banner2} alt="" />
          </div>
          <div className="hero-banner-content">
            EXPERIENCE <br /> A LIFESTYLE WITH <br /> <span>TAXILA STONE</span>
          </div>
        </div>
        <div className="single-banner-slide">
          <div className="banner-img-wrapper">
            <img src={Banner3} alt="" />
          </div>
          <div className="hero-banner-content">
            EXPERIENCE <br /> A LIFESTYLE WITH <br /> <span>TAXILA STONE</span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroBanner;
