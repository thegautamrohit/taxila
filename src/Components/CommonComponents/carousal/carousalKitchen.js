import React, { useState, useEffect } from "react";
import "./carousalKitchen.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const CarousalKitchen = ({ kitchen }) => {
  useEffect(() => {
    setImages([...kitchen[0].IMAGE_LINKS]);
  }, [kitchen]);

  const [images, setImages] = useState([]);

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

  console.log(removedImages, images);

  return (
    <div className="kitchen__carousal__container">
      <div className="kitchen__carousal__image">
        {images?.map((item, index) => {
          return (
            <div key={index} className="kitchen__carousal__image__single">
              <img src={item.image} />
            </div>
          );
        })}
      </div>
      <div className="kitchen__carousal__arrow">
        <p>Explore Details</p>
        <div>
          <BsArrowLeft onClick={() => leftClick()} />
          <BsArrowRight onClick={() => rightClick()} />
        </div>
      </div>
      <div className="kitchen__carousal__details">
        <p>0{removedImages.length + 1}</p> <p>-</p>{" "}
        <p>0{kitchen[0].IMAGE_LINKS.length}</p>
      </div>
    </div>
  );
};

export default CarousalKitchen;
