import React, { useState } from "react";
import "./SimilarCarousel.css";
import Slider from "react-slick";

import { GrNext, GrPrevious } from "react-icons/gr";
import Image1 from "../../../Assets/images/Vinci/vinci-1.webp";
import Image2 from "../../../Assets/images/Vinci/vinci-2.webp";
import Image3 from "../../../Assets/images/Vinci/vinci-3.webp";
import Image4 from "../../../Assets/images/Vinci/vinci-4.webp";
import Image5 from "../../../Assets/images/Vinci/vinci-5.webp";

function SimilarCarousel() {
  const [width, setWidth] = useState(window.innerWidth);

  const slides = [
    {
      id: 1,
      image: Image1,
    },
    {
      id: 2,
      image: Image2,
    },
    {
      id: 3,
      image: Image3,
    },
    {
      id: 4,
      image: Image4,
    },
    {
      id: 5,
      image: Image5,
    },
    {
      id: 6,
      image: Image3,
    },
  ];

  const settings = {
    // dots: false,
    // autoplay: false,
    // infinite: false,
    // speed: 500,
    // slidesToShow: width <= 500 ? 1.5 : 3.5,
    // slidesToScroll: 1,
    // nextArrow: <SamplePrevArrow />,
    // prevArrow: <SampleNextArrow />,
    className: "similarCarousalBottom",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="arrow_product arrow_left_product"
        // style={{ ...style, left: "95%" }}
        onClick={onClick}
      >
        <GrPrevious color={"white"} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="arrow_product arrow_right_product"
        // style={{ ...style, right: "95%" }}
        onClick={onClick}
      >
        <GrNext color={"white"} />
      </div>
    );
  }

  return (
    <div className="product__similar__carousel__container__desk">
      <div>
        <Slider {...settings}>
          <div
            className="product_simlar_carousel_prdct_slide"
            style={{ width: 900, margin: "0px 18px 0px 18px" }}
          >
            <h4>View Similar Products</h4>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod
            </p>
          </div>

          {slides?.map((slide) => (
            <div
              key={slide?.id}
              className="product_simlar_carousel_prdct_slide"
              style={{ margin: "0px 18px 0px 18px" , width:"200px" }}
            >
              <img src={slide.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SimilarCarousel;
