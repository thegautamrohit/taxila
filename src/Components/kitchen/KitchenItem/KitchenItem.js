import React, { useState } from "react";
import { kitchenItem } from "../../../kitchenItem";
import Carousel, {
  CarouselItem,
} from "../../CommonComponents/carousal/carousalKitchen";
import "./KitchenItem.css";
const KitchenItem = () => {
  const [select, setSelect] = useState("MAISTRI");

  const [heading, setHeading] = useState(kitchenItem[0].RANGE);

  const [data, setData] = useState([...kitchenItem[0].IMAGE_LINKS]);

  const [details, setDetails] = useState(kitchenItem[0].DESCRIPTION_ENGLISH);

  return (
    <div className="kitchenItem__container">
      <div className="kitchenItem__side__bar">
        <div
          style={select === "MAISTRI" ? { backgroundColor: "#2a2a2a" } : {}}
          onClick={() => setSelect("MAISTRI")}
        >
          <p>MAISTRI</p>
        </div>
        <div
          style={
            select === "MINOTTICUCINE" ? { backgroundColor: "#2a2a2a" } : {}
          }
          onClick={() => setSelect("MINOTTICUCINE")}
        >
          <p>MINOTTICUCINE</p>
        </div>
      </div>
      <div className="kitchenItem__middle__bar">
        <div
          className="kitchenItem__middle__bar__upper"
          style={{
            gridTemplateColumns: `repeat(${kitchenItem.length + 1} , 1fr)`,
          }}
        >
          {kitchenItem.map((item) => (
            <div
              style={heading !== item.RANGE ? { color: "#434343" } : {}}
              onClick={() => (
                setHeading(item.RANGE),
                setData([...item.IMAGE_LINKS]),
                setDetails(item.DESCRIPTION_ENGLISH)
              )}
            >
              {item.RANGE}
            </div>
          ))}
        </div>
        <Carousel details={details}>
          {data?.map((item, index) => {
            return (
              <CarouselItem key={index} >
                <img src={item.image} />
              </CarouselItem>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default KitchenItem;
