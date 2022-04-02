import React, { useState } from "react";
import "./KitchenItem.css";
const KitchenItem = () => {
  const [select, setSelect] = useState("MAISTRI");
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
        <div className="kitchenItem__middle__bar__upper">
          <div>ANIMA</div>
          <div>HANAMI FIBONACCI</div>
          <div>GANDHARA</div>
          <div>HANAMI FIBONACCI</div>
          <div>GANDHARA</div>
          <div>HANAMI FIBONACCI</div>
          <div>GANDHARA</div>
        </div>
      </div>
    </div>
  );
};

export default KitchenItem;
