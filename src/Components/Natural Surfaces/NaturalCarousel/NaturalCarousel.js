import React from "react";
import "./NaturalCarousel.css";
import Slider from "react-slick";
import Slider1 from ".././../../Assets/images/Natural Surfaces/1.1 Marble - Aurisina Chiara Fioritello detail.webp";
import Slider2 from ".././../../Assets/images/Natural Surfaces/1.2 Quartzite - DECOLORES FUSION QUARTZITE CLOSEUP 2.webp";
import Slider3 from ".././../../Assets/images/Natural Surfaces/1.3 Granite - DECOLORES BLUE NILE GRANITE CLOSE UP 1.webp";
import Slider4 from ".././../../Assets/images/Natural Surfaces/1.4 Quartz - Calacatta Leonardo.webp";
import Slider5 from ".././../../Assets/images/Natural Surfaces/1.5 Lava Stone.webp";

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
    { id: 4, img: Slider4, title: "MISSORI" },
    { id: 5, img: Slider5, title: "TURATI" },
  ];

  return (
    <div className="natural-carousel-parent">
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
    </div>
  );
}

export default NaturalCarousel;
