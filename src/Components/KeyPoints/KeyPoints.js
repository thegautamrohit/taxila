import React from "react";
import "./KeyPoints.css";
import Passion from "../../Assets/images/keyPoints/passion.svg";
import Value from "../../Assets/images/keyPoints/value.svg";
import Integrity from "../../Assets/images/keyPoints/integrity.svg";
import PartnerCentric from "../../Assets/images/keyPoints/partner-centric.svg";
import Culture from "../../Assets/images/keyPoints/culture.svg";

function KeyPoints() {
  const keyPoints = [
    {
      id: 1,
      image: Passion,
      title: "Passion",
      description:
        "Our unyielding passion for the craft, the process, the product, and our customers make Taxila Stone an invaluable asset to the stone industry.",
    },
    {
      id: 2,
      image: Value,
      title: "Value",
      description:
        "With a mindset to create value for all involved parties in the process, we at Taxila Stone strive to provide affordable and quality products and services.",
    },
    {
      id: 3,
      image: Integrity,
      title: "Integrity",
      description:
        "With righteous products and best quality, righteous partners and honest logistics, Taxila Stone vows to provide upright services to our valued customers.",
    },
    {
      id: 4,
      image: PartnerCentric,
      title: "Partner Centric",
      description:
        "Our belief is to provide unparalleled support and guidance to the end consumer with the idea of offering all related services under one roof.",
    },
    {
      id: 5,
      image: Culture,
      title: "Culture",
      description:
        "With deep respect and understanding towards our partners, consumers, and everyone involved in the process, we aim to cultivate an encouraging environment.",
    },
  ];

  return (
    <div className="why-taxila-container">
      {keyPoints.map((point, index) => (
        <>
          <div key={point.id} className="why-taxila-mono-card">
            <div className="key-img-box">
              <img src={point.image} alt={point.title} />
            </div>
            <h4> {point.title} </h4>
            <p>{point.description}</p>
          </div>
          {keyPoints.length - 1 == index ? (
            ""
          ) : (
            <hr className="why-taxila-vertical-seperation"></hr>
          )}
        </>
      ))}
    </div>
  );
}

export default KeyPoints;
