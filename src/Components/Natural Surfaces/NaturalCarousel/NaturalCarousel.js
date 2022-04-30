import React from "react";
import Carousel, {
  CarouselItem,
} from "../../CommonComponents/carousal/naturalCaraousal";

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
  ];

  return (
    <Carousel details={images}>
      {images?.map((item, index) => {
        return (
          <CarouselItem key={index}>
            <img src={item.img} alt={item.title} />
            <h4> {item.title} </h4>
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}

export default NaturalCarousel;
