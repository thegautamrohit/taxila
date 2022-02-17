import React, { useState } from "react";
import Slider from "react-slick";
import Bathroom from "../../Assets/images/HomePage/Bathroom.webp";
// import Kitchen from "../../Assets/images/HomePage/Kitchen.webp";
import LivingRoom from "../../Assets/images/HomePage/LivingRoom.webp";
import Outdoor from "../../Assets/images/HomePage/Outdoor.webp";
import Commercial from "../../Assets/images/HomePage/Commercial.webp";
import "./ProductCarousel.css";
import { GrNext, GrPrevious } from "react-icons/gr";

function ProductCarousel() {
  const images = [
    {
      id: 1,
      src: Bathroom,
      title: "BATHROOMS",
    },
    {
      id: 2,
      src: Outdoor,
      title: "OUTDOORS",
    },
    {
      id: 3,
      src: Bathroom,
      title: "KITCHEN",
    },
    {
      id: 4,
      src: LivingRoom,
      title: "LIVING ROOM",
    },
    {
      id: 5,
      src: Commercial,
      title: "Commercial",
    },
    {
      id: 6,
      src: Bathroom,
      title: "BATHROOMS",
    },
    {
      id: 7,
      src: Outdoor,
      title: "OUTDOORS",
    },
    {
      id: 8,
      src: Bathroom,
      title: "KITCHEN",
    },
    {
      id: 9,
      src: LivingRoom,
      title: "LIVING ROOM",
    },
    {
      id: 10,
      src: Commercial,
      title: "Commercial",
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <GrNext color={"#924A90"} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <GrPrevious color={"#ddd5c9"} />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => print(next, current),
  };

  const print = (a, b) => {
    setImageIndex(a);
  };

  const slideHandler = (index) => {
    console.log(index, imageIndex);

    if (index === imageIndex) {
      return "active slide";
    } else if (index - 1 === imageIndex) {
      return "adjacent slide";
    } else if (index + 1 === imageIndex) {
      return "adjacent slide";
    } else {
      return "dead slide";
    }
  };

  return (
    <div className="Product-carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            id={index}
            className={
              // (index === imageIndex ? "slide activeSlide" : "slide") &&
              // (index === imageIndex - 1 || index === imageIndex + 1) &&
              // "slide adjacent"

              slideHandler(index)
            }
          >
            <div className="over-lay"></div>

            <img src={img.src} alt={img.title} />

            <div className="product-card-content">
              <span className="product-title"> {img?.title} </span>
              <div className="product-explore-link"> explore {img?.title} </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
