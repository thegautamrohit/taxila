import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./carousalKitchen.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="kitchen__carousal__image__single" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children, details }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setisMobile] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // if (window.innerWidth < "450px") {
    //   setisMobile(true);
    // }
    // const interval = setInterval(() => {
    //   if (!paused) {
    //     updateIndex(activeIndex + 1);
    //   }
    if (window.innerWidth < 500) {
      setisMobile(true);
    }
  }, [window.innerWidth]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  console.log(window.innerWidth);
  return (
    <>
      <div className="kitchen__carousal__container__desktop">
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
          <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="inner"
              style={{
                transform: `translateX(-${952 * activeIndex + 0.5}px)`,
              }}
            >
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { width: "911px" });
              })}
            </div>
            <div className="kitchen__carousal__arrow">
              <p onClick={() => setShowDetails(!showDetails)}>
                Explore Details
              </p>
              <div>
                <BsArrowLeft
                  onClick={() => {
                    updateIndex(activeIndex - 1);
                  }}
                />
                <BsArrowRight
                  onClick={() => {
                    updateIndex(activeIndex + 1);
                  }}
                />
              </div>
            </div>
            <div className="kitchen__carousal__details">
              <p>0{activeIndex + 1}</p> <p>-</p>{" "}
              <p>0{React.Children.count(children)}</p>
            </div>
          </div>
        )}
      </div>
      <div className="kitchen__carousal__container__mobile">
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
          <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="inner"
              style={{
                transform: `translateX(-${355 * activeIndex + 0.5}px)`,
              }}
            >
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { width: "911px" });
              })}
            </div>
            <div className="kitchen__carousal__arrow">
              <p onClick={() => setShowDetails(!showDetails)}>
                Explore Details
              </p>
              <div className="kitchen__carousal__details">
                <p>0{activeIndex + 1}</p> <p>-</p>{" "}
                <p>0{React.Children.count(children)}</p>
              </div>
            </div>

            <div className="kitchen__carousal__arrow__mobile">
              <BsArrowLeft
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
              />
              <BsArrowRight
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Carousel;
