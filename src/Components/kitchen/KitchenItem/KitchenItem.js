import React, { useState } from "react";
import { kitchenItem, kitchenItemMaistri } from "../../../kitchenItem";
import Carousel, {
  CarouselItem,
} from "../../CommonComponents/carousal/carousalKitchen";
import "./KitchenItem.css";
const KitchenItem = () => {
  const [select, setSelect] = useState("MAISTRI");

  const [heading, setHeading] = useState(kitchenItem[0].RANGE);

  const [data, setData] = useState([...kitchenItem[0].IMAGE_LINKS]);

  const [heading_Maistri, setHeading_Maistri] = useState(
    kitchenItemMaistri[0].RANGE
  );

  const [data_Maistri, setData_Maistri] = useState([
    ...kitchenItemMaistri[0].IMAGE_LINKS,
  ]);

  const [details, setDetails] = useState(kitchenItem[0].DESCRIPTION_ENGLISH);

  return (
    <div className="kitchenItem__container">
      <div className="kitchenItem__side__bar">
        <div
          style={select === "MAISTRI" ? { backgroundColor: "#2a2a2a" } : {}}
          onClick={() => setSelect("MAISTRI")}
        >
          <p style={select === "MAISTRI" ? { color: "#6C6C6C" } : {}}>
            MAISTRI
          </p>
        </div>
        <div
          style={
            select === "MINOTTICUCINE"
              ? { backgroundColor: "#2a2a2a", color: "#6C6C6C" }
              : {}
          }
          onClick={() => setSelect("MINOTTICUCINE")}
        >
          <p style={select === "MINOTTICUCINE" ? { color: "#6C6C6C" } : {}}>
            MINOTTICUCINE
          </p>
        </div>
      </div>
      {select === "MINOTTICUCINE" && (
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
          <Carousel details={details} title="Mini">
            {data?.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <img src={item.image} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      )}

      {select === "MAISTRI" && (
        <div className="kitchenItem__middle__bar">
          <div
            className="kitchenItem__middle__bar__upper"
            style={{
              gridTemplateColumns: `repeat(${
                kitchenItemMaistri.length + 2
              } , 1fr)`,
            }}
          >
            {kitchenItemMaistri.map((item) => (
              <>
                <div
                  style={
                    heading_Maistri !== item.RANGE ? { color: "#434343" } : {}
                  }
                  onClick={() => (
                    setHeading_Maistri(item.RANGE),
                    setData_Maistri([...item.IMAGE_LINKS])
                  )}
                >
                  {item.RANGE}
                </div>
                {item.RANGE === "viva" && (
                  <div
                    style={{
                      width: "3px",
                      height: "37px",
                      backgroundColor: "#DDD5C9",
                      alignSelf: "center",
                    }}
                  ></div>
                )}
              </>
            ))}
          </div>
          <Carousel title="Maistri" head={heading_Maistri}>
            {data_Maistri?.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <img src={item.image} />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default KitchenItem;
