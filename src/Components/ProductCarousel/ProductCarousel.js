import React, { useState } from "react";
import Slider from "react-slick";
import "./ProductCarousel.css";
import Bathroom from "../../Assets/images/HomePage/Bathroom.webp";
import Outdoors from "../../Assets/images/HomePage/Outdoors.webp";
import Progetti from "../../Assets/images/HomePage/Progetti.webp";
import Kitchen from "../../Assets/images/HomePage/Kitchen.webp";
import LivingRoom from "../../Assets/images/HomePage/LivingRoom.webp";

function Productcarousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {">"}
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {"<"}
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const images = [Bathroom, Outdoors, Progetti, Kitchen, LivingRoom];

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  console.log(settings.beforeChange);

  return (
    <div className="product-carousel-container">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Productcarousel;
