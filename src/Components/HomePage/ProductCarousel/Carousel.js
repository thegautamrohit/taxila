import React, { useState } from "react";
import Bathroom from "../../Assets/images/HomePage/Bathroom.webp";
// import Kitchen from "../../Assets/images/HomePage/Kitchen.webp";
import LivingRoom from "../../Assets/images/HomePage/LivingRoom.webp";
import Outdoor from "../../Assets/images/HomePage/Outdoor.webp";
import Commercial from "../../Assets/images/HomePage/Commercial.webp";
import "./ProductCarousel.css";
import { GrNext, GrPrevious } from "react-icons/gr";

function Carousel() {
  const [images, setImages] = useState([
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
  ]);

  const nextHandler = () => {
    let arr = [...images];
    let value = arr.shift();
    arr.push(value);
    setImages(arr);
  };

  const prevHandler = () => {
    let arr = [...images];
    let value = arr.pop();
    arr.unshift(value);
    setImages(arr);
  };

  const slidehandler = (index) => {
    if (index === 2) {
      return "active slide";
    } else if (index === 1) {
      return "second slide";
    } else if (index === 3) {
      return "third slide";
    } else if (index === 0) {
      return "first slide";
    } else if (index === 4) {
      return "last slide";
    }
  };

  return (
    <div className="Product-carousel-container">
      <div className="product-carousel-wrapper">
        <div className="prev" onClick={() => prevHandler()}>
          <GrPrevious />
        </div>

        {images.map((img, index) => (
          <div key={index} className={slidehandler(index)}>
            <div className="over-lay"></div>

            <img src={img.src} alt={img.title} />

            <div className="product-card-content">
              <span className="product-title"> {img?.title} </span>
              <div className="product-explore-link"> explore {img?.title} </div>
            </div>
          </div>
        ))}
        <div className="next" onClick={() => nextHandler()}>
          <GrNext />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
