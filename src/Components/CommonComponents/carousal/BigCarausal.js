import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./carousalKitchen.css";

export const CarouselItemBig = ({ children, width }) => {
  return (
    <div className="kitchen__carousal__image__single__big">{children}</div>
  );
};

const BigCarousal = ({ children, details, title, head }) => {
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

  return (
    <>
      <div className="kitchen__carousal__container__Big__desktop">
        <div
          {...handlers}
          className="carousel__Big"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="inner__Big"
            style={{
              transform: `translateX(-${92.5 * activeIndex + 0}vw)`,
              gridTemplateColumns: `repeat(${React.Children.count(
                children
              )} , 90vw)`,
            }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "911px" });
            })}
          </div>
          <div className="kitchen__carousal__arrow__maistri">
            <p onClick={() => setShowDetails(!showDetails)}></p>
            <div>
              <BsArrowLeft
                style={
                  activeIndex === 0
                    ? { opacity: 0.4, pointerEvents: "none" }
                    : {}
                }
                onClick={() => {
                  updateIndex(activeIndex - 1);
                }}
              />

              <BsArrowRight
                style={
                  activeIndex + 1 === React.Children.count(children)
                    ? { opacity: 0.4, pointerEvents: "none" }
                    : {}
                }
                onClick={() => {
                  updateIndex(activeIndex + 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="kitchen__carousal__container__big__mobile">
        <div
          {...handlers}
          className="carousel__Big"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="inner__Big"
            style={{
              transform: `translateX(-${355 * activeIndex + 0.5}px)`,
              gridTemplateColumns: `repeat(${React.Children.count(
                children
              )} , 90vw)`,
            }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "911px" });
            })}
          </div>
          <div className="kitchen__carousal__arrow">
            <p onClick={() => setShowDetails(!showDetails)}></p>
            <div className="kitchen__carousal__details">
              <p>0{activeIndex + 1}</p> <p>-</p>{" "}
              <p>0{React.Children.count(children)}</p>
            </div>
          </div>

          <div className="kitchen__carousal__arrow__mobile">
            <BsArrowLeft
              style={
                activeIndex === 0 ? { opacity: 0.4, pointerEvents: "none" } : {}
              }
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            />

            <BsArrowRight
              style={
                activeIndex + 1 === React.Children.count(children)
                  ? { opacity: 0.4, pointerEvents: "none" }
                  : {}
              }
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCarousal;
