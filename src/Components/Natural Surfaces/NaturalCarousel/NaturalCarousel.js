import React from "react";
import "./NaturalCarousel.css";
import Slider from "react-slick";
import Slider1 from ".././../../Assets/images/Natural Surfaces/slider1.webp";
import Slider2 from ".././../../Assets/images/Natural Surfaces/slider2.webp";
import Slider3 from ".././../../Assets/images/Natural Surfaces/slider3.webp";

function NaturalCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    // dotsClass: "natural-surface-slider-dots",
  };

  const images = [
    { id: 1, img: Slider1, title: "MONTENAPOLEONE" },
    { id: 2, img: Slider2, title: "DUOMO" },
    { id: 3, img: Slider3, title: "BRERA" },
    { id: 4, img: Slider1, title: "MONTENAPOLEONE" },
    { id: 5, img: Slider2, title: "DUOMO" },
    { id: 6, img: Slider3, title: "BRERA" },
    { id: 7, img: Slider1, title: "MONTENAPOLEONE" },
    { id: 8, img: Slider2, title: "DUOMO" },
    { id: 9, img: Slider3, title: "BRERA" },
  ];

  return (
    <div className="natural-carousel-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="naturalcarousel-mono-card">
            <div className="natural-carousel-img-wrapper">
              <img src={image.img} alt={image.title} />
            </div>
            <h4> {image.title} </h4>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NaturalCarousel;
