import React, { useEffect, useState } from "react";
import Carousel, {
  CarouselItem,
} from "../../CommonComponents/carousal/naturalCaraousal";
import { GrNext, GrPrevious } from "react-icons/gr";
import "../../HomePage/MarbleSection/MarbleSection.css";
import Slider from "react-slick";

import Slider1 from ".././../../Assets/images/Natural Surfaces/1.1 Marble - Aurisina Chiara Fioritello detail.webp";
import Slider2 from ".././../../Assets/images/Natural Surfaces/1.2 Quartzite - DECOLORES FUSION QUARTZITE CLOSEUP 2.webp";
import Slider3 from ".././../../Assets/images/Natural Surfaces/1.3 Granite - DECOLORES BLUE NILE GRANITE CLOSE UP 1.webp";
import Slider4 from ".././../../Assets/images/Natural Surfaces/1.4 Quartz - Calacatta Leonardo.webp";
import Slider5 from ".././../../Assets/images/Natural Surfaces/1.5 Lava Stone.webp";

function NaturalCarousel() {
  const images = [
    { id: 1, img: Slider1, title: "MONTENAPOLEONE" },
    { id: 2, img: Slider2, title: "DUOMO" },
    { id: 3, img: Slider3, title: "BRERA" },
    { id: 4, img: Slider4, title: "MISSORI" },
    { id: 5, img: Slider5, title: "TURATI" },
    { id: 6, img: Slider3, title: "BRERA" },
    { id: 7, img: Slider3, title: "BRERA" },
    { id: 8, img: Slider1, title: "MONTENAPOLEONE" },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const settings = {
    dots: false,
    autoplay: false,
    infinite: false,
    speed: 500,
    slidesToShow: width <= 500 ? 1 : 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="arrow arrow-left"
        style={{ ...style, left: "87%" }}
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
        style={{ ...style, right: "87%" }}
        onClick={onClick}
      >
        <GrPrevious color="white" />
      </div>
    );
  }

  return (
    <div className="natural__carousal__container__desktop">
      <div className="carousel">
        <Slider {...settings}>
          {images?.map((item) => (
            <div key={item?.id} className="natural__carousal__image__single">
              <img src={item.img} alt="" />
              <h4>{item?.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default NaturalCarousel;
