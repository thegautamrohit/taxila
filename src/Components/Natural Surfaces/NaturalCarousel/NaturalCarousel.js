import React from "react";
import "./NaturalCarousel.css";
import Slider from "react-slick";
import Slider1 from ".././../../Assets/images/Natural Surfaces/1.1 Marble - Aurisina Chiara Fioritello detail.webp";
import Slider2 from ".././../../Assets/images/Natural Surfaces/1.2 Quartzite - DECOLORES FUSION QUARTZITE CLOSEUP 2.webp";
import Slider3 from ".././../../Assets/images/Natural Surfaces/1.3 Granite - DECOLORES BLUE NILE GRANITE CLOSE UP 1.webp";
import Slider4 from ".././../../Assets/images/Natural Surfaces/1.4 Quartz - Calacatta Leonardo.webp";
import Slider5 from ".././../../Assets/images/Natural Surfaces/1.5 Lava Stone.webp";
import { GrNext, GrPrevious } from "react-icons/gr";
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="arrow arrow-left"
      style={{ ...style, left: "90%", display: "flex" }}
      onClick={onClick}
    >
      <GrNext color={"white"} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="arrow arrow-right"
      style={{ ...style, right: "95%", display: "flex" }}
      onClick={onClick}
    >
      <GrPrevious color="white" />
    </div>
  );
}

function NaturalCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1146,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { id: 1, img: Slider1, title: "MONTENAPOLEONE" },
    { id: 2, img: Slider2, title: "DUOMO" },
    { id: 3, img: Slider3, title: "BRERA" },
    { id: 4, img: Slider4, title: "MISSORI" },
    { id: 5, img: Slider5, title: "TURATI" },
    { id: 6, img: Slider1, title: "MONTENAPOLEONE" },
    { id: 7, img: Slider2, title: "DUOMO" },
    { id: 8, img: Slider3, title: "BRERA" },
    { id: 9, img: Slider4, title: "MISSORI" },
    { id: 10, img: Slider5, title: "TURATI" },
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
