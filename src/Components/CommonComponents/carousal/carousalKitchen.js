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

const Carousel = ({ children, details, title, head }) => {
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
      <div className="kitchen__carousal__container__desktop">
        {showDetails ? (
          <>
            {title === "Mini" && (
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
            )}
            {title === "Maistri" && (
              <div className="kitchen__carousal__data__Maistri">
                <p className="kitchen__carousal__data__heading__Maistri">
                  FULL KITCHEN SYSTEM
                </p>
                <div className="kitchen__carousal__data__Mistri">
                  <div>
                    <h3>BASI / BASE UNITS</h3>
                    <p
                      style={
                        head.toLowerCase() === "giza"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Giza basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Viva basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "altea"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Altea basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Arka basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "arena"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Arena basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "ktable / viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      K-TABLE basi / base units
                    </p>
                  </div>
                  <div>
                    {" "}
                    <h3>PENSILI / WALL UNITS </h3>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "viva" ||
                        head.toLowerCase() === "giza / arena" ||
                        head.toLowerCase() === "giza" ||
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - pensile con gola / wall unit with grip-recessed
                    </p>
                    <p>- pensile con maniglia / wall unit with handle</p>
                  </div>
                  <div>
                    {" "}
                    <h3>COLONNE / TALL UNITS </h3>
                    <p
                      style={
                        head.toLowerCase() === "viva" ||
                        head.toLowerCase() === "giza / arena" ||
                        head.toLowerCase() === "giza / viva" ||
                        head.toLowerCase() === "giza" ||
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - colonne con gola / tall unit with grip-recessed
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "ktable / viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - colonna con maniglia / tall unit with handle
                    </p>
                  </div>
                  <div>
                    <h3>SOLUZIONI PROGETTUALI / DESIGN SOLUTIONS</h3>
                    <p>
                      - basi con anta neolith 12 mm / 12 mm thick neolith door
                      for base units{" "}
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - basi composti / modular base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - basi living / living room base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "ktable / viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - colonne libreria / bookcase tall units{" "}
                    </p>
                    <p>
                      {" "}
                      - colonne angolo ripostiglio / tall corner walk pantry
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "giza / viva" ||
                        head.toLowerCase() === "giza"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - colonne sfioro pavimento / tall units with extended door
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "ktable / viva" ||
                        head.toLowerCase() === "viva" ||
                        head.toLowerCase() === "giza / viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      {" "}
                      - colonne anta rientrante / tall units with pocket door
                    </p>
                    <p>- colonne hole / “hole” tall units</p>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - pensili composti / modular wall units
                    </p>
                    <p>
                      {" "}
                      - elementi living e a giorno / living and open box units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "giza"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - bancone scorrevole / sliding counter
                    </p>
                    <p>- boisere / boiserie </p>
                    <p
                      style={
                        head.toLowerCase() === "giza / arena"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - vetrine / glass units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "giza / viva" ||
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - personalizzazione su richiesta / custom on requested
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "giza / arena"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - basi neolith 12 mm / 12 mm thick neolith door
                    </p>
                  </div>
                </div>
                <p
                  className="kitchen__carousal__data__show"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Explore Images
                </p>
              </div>
            )}
          </>
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
            <div className="kitchen__carousal__details">
              <p>0{activeIndex + 1}</p> <p>-</p>{" "}
              <p>0{React.Children.count(children)}</p>
            </div>
          </div>
        )}
      </div>
      <div className="kitchen__carousal__container__mobile">
        {showDetails ? (
          <>
            {title === "Mini" && (
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
            )}
            {title === "Maistri" && (
              <div className="kitchen__carousal__data__Maistri">
                <p className="kitchen__carousal__data__heading__Maistri">
                  FULL KITCHEN SYSTEM
                </p>
                <div className="kitchen__carousal__data__Mistri">
                  <div>
                    <h3>BASI / BASE UNITS</h3>
                    <p
                      style={
                        head.toLowerCase() === "giza"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Giza basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Viva basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "altea"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Altea basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Arka basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "arena"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      Arena basi / base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "ktable / viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      K-TABLE basi / base units
                    </p>
                  </div>
                  <div>
                    {" "}
                    <h3>PENSILI / WALL UNITS </h3>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "viva" ||
                        head.toLowerCase() === "giza / arena" ||
                        head.toLowerCase() === "giza" ||
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - pensile con gola / wall unit with grip-recessed
                    </p>
                    <p>- pensile con maniglia / wall unit with handle</p>
                  </div>
                  <div>
                    {" "}
                    <h3>COLONNE / TALL UNITS </h3>
                    <p
                      style={
                        head.toLowerCase() === "viva" ||
                        head.toLowerCase() === "giza / arena" ||
                        head.toLowerCase() === "giza / viva" ||
                        head.toLowerCase() === "giza" ||
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - colonne con gola / tall unit with grip-recessed
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "ktable / viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - colonna con maniglia / tall unit with handle
                    </p>
                  </div>
                  <div>
                    <h3>SOLUZIONI PROGETTUALI / DESIGN SOLUTIONS</h3>
                    <p>
                      - basi con anta neolith 12 mm / 12 mm thick neolith door
                      for base units{" "}
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - basi composti / modular base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - basi living / living room base units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "ktable / viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - colonne libreria / bookcase tall units{" "}
                    </p>
                    <p>
                      {" "}
                      - colonne angolo ripostiglio / tall corner walk pantry
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "giza / viva" ||
                        head.toLowerCase() === "giza"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - colonne sfioro pavimento / tall units with extended door
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "ktable / viva" ||
                        head.toLowerCase() === "viva" ||
                        head.toLowerCase() === "giza / viva"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      {" "}
                      - colonne anta rientrante / tall units with pocket door
                    </p>
                    <p>- colonne hole / “hole” tall units</p>
                    <p
                      style={
                        head.toLowerCase() === "altea" ||
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - pensili composti / modular wall units
                    </p>
                    <p>
                      {" "}
                      - elementi living e a giorno / living and open box units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "giza"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - bancone scorrevole / sliding counter
                    </p>
                    <p>- boisere / boiserie </p>
                    <p
                      style={
                        head.toLowerCase() === "giza / arena"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - vetrine / glass units
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "giza / viva" ||
                        head.toLowerCase() === "arka"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - personalizzazione su richiesta / custom on requested
                    </p>
                    <p
                      style={
                        head.toLowerCase() === "giza / arena"
                          ? { color: "#ffffff" }
                          : {}
                      }
                    >
                      - basi neolith 12 mm / 12 mm thick neolith door
                    </p>
                  </div>
                </div>
                <p
                  className="kitchen__carousal__data__show"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  Explore Images
                </p>
              </div>
            )}
          </>
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
        )}
      </div>
    </>
  );
};

export default Carousel;
