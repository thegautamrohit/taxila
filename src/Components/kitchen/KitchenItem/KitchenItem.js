import React, { useState } from "react";
import { kitchenItem, kitchenItemMaistri } from "../../../kitchenItem";
import Carousel, {
  CarouselItem,
} from "../../CommonComponents/carousal/carousalKitchen";

import CarouselBig, {
  CarouselItemBig,
} from "../../CommonComponents/carousal/BigCarausal";
import "./KitchenItem.css";
import { RiCloseFill } from "react-icons/ri";

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

  const [maistriBig, setMaistriBig] = useState(1000);
  const [miniBig, setMiniBig] = useState(1000);
  const [active, setActive] = useState(0);
  const [details, setDetails] = useState(kitchenItem[0].DESCRIPTION_ENGLISH);

  console.log(maistriBig);
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
          <Carousel
            details={details}
            title="Mini"
            Index={(val) => setActive(val)}
          >
            {data?.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <img src={item.image} onClick={() => setMiniBig(index)} />
                </CarouselItem>
              );
            })}
          </Carousel>

          {miniBig !== 1000 && (
            <div className="maistri__Carousal__big">
              <div
                className="maistri__Carousal__big__close"
                onClick={() => setMiniBig(1000)}
              >
                <RiCloseFill size={25} /> Close
              </div>
              <CarouselBig title="MINOTTICUCINE" head={heading} Index={miniBig}>
                {data?.map((item, index) => {
                  return (
                    <CarouselItemBig key={index}>
                      <img src={item.image} />
                    </CarouselItemBig>
                  );
                })}
              </CarouselBig>
            </div>
          )}
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
          <Carousel
            title="Maistri"
            head={heading_Maistri}
            Index={(val) => setActive(val)}
          >
            {data_Maistri?.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <img src={item.image} onClick={() => setMaistriBig(index)} />
                </CarouselItem>
              );
            })}
          </Carousel>
          {maistriBig !== 1000 && (
            <div className="maistri__Carousal__big">
              <div
                className="maistri__Carousal__big__close"
                onClick={() => setMaistriBig(1000)}
              >
                <RiCloseFill size={25} /> Close
              </div>
              <CarouselBig
                title="Maistri"
                head={heading_Maistri}
                Index={maistriBig}
              >
                {data_Maistri?.map((item, index) => {
                  return (
                    <CarouselItemBig key={index}>
                      <img src={item.image} />
                    </CarouselItemBig>
                  );
                })}
              </CarouselBig>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KitchenItem;
