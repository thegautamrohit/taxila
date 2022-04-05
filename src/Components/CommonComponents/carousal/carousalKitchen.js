import React, { useState, useEffect } from "react";
import "./carousalKitchen.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const CarousalKitchen = ({ kitchen, details }) => {
  useEffect(() => {
    setImages([...kitchen]);
  }, [kitchen, details]);

  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [removedImages, setRemovedImages] = useState([]);

  const leftClick = () => {
    if (images.length < kitchen[0].IMAGE_LINKS.length) {
      let arr = images;
      let remove = removedImages;
      arr.unshift(remove[remove.length - 1]);
      remove.pop();

      setImages([...arr]);
      setRemovedImages([...remove]);
    }
  };

  const rightClick = () => {
    if (images.length > 1) {
      let arr = images;
      let remove = removedImages;
      let singleImage = arr.shift();
      remove.push(singleImage);

      setImages([...arr]);
      setRemovedImages([...remove]);
    }
  };

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= kitchen.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="kitchen__carousal__container">
      {showDetails ? (
        <div className="kitchen__carousal__data">
          <p className="kitchen__carousal__data__heading">Introduction</p>
          <p className="kitchen__carousal__data__details">{details}</p>
          <p
            className="kitchen__carousal__data__show"
            onClick={() => setShowDetails(!showDetails)}
          >
            Explore Images
          </p>
        </div>
      ) : (
        <>
          <div className="kitchen__carousal__image">
            {images?.map((item, n) => {
              let position =
                n > index
                  ? "nextCard"
                  : n === index
                  ? "activeCard"
                  : "prevCard";
              return (
                <div
                  key={n}
                  className={`kitchen__carousal__image__single ${position}`}
                >
                  <img src={item.image} />
                </div>
              );
            })}
          </div>
          <div className="kitchen__carousal__arrow">
            <p onClick={() => setShowDetails(!showDetails)}>Explore Details</p>
            <div>
              <BsArrowLeft onClick={() => slideLeft()} />
              <BsArrowRight onClick={() => slideRight()} />
            </div>
          </div>
          <div className="kitchen__carousal__details">
            <p>0{index + 1}</p> <p>-</p> <p>0{kitchen.length}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CarousalKitchen;
