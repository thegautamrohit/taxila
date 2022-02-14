import React from "react";
import "./KeyPoints.css";
import Passion from "../../Assets/images/keyPoints/passion.svg";
import Value from "../../Assets/images/keyPoints/value.svg";
import Integrity from "../../Assets/images/keyPoints/integrity.svg";
import PartnerCentric from "../../Assets/images/keyPoints/partner-centric.svg";
import Culture from "../../Assets/images/keyPoints/culture.svg";

function KeyPoints() {
  return (
    <div className="key-points-whole-wrapper">
      <div className="key-points-container">
        <div className="key-points-mono-card border">
          <div className="key-img-box">
            <img src={Passion} alt="Passion" />
          </div>
          <h4>Passion</h4>
          <p>
            Our unyielding passion for the craft, the process, the product, and
            our customers make Taxila Stone an invaluable asset to the stone
            industry.
          </p>
        </div>
        <div className="key-points-mono-card border">
          <div className="key-img-box">
            <img src={Value} alt="Value" />
          </div>
          <h4>Value</h4>
          <p>
            With a mindset to create value for all involved parties in the
            process, we at Taxila Stone strive to provide affordable and quality
            products and services.
          </p>
        </div>
        <div className="key-points-mono-card border">
          <div className="key-img-box">
            <img src={Integrity} alt="Integrity" />
          </div>
          <h4>Integrity</h4>
          <p>
            With righteous products and best quality, righteous partners and
            honest logistics, Taxila Stone vows to provide upright services to
            our valued customers.
          </p>
        </div>
        <div className="key-points-mono-card border">
          <div className="key-img-box">
            <img src={PartnerCentric} alt="Partner Centric" />
          </div>
          <h4>Partner Centric</h4>
          <p>
            Our belief is to provide unparalleled support and guidance to the
            end consumer with the idea of offering all related services under
            one roof.
          </p>
        </div>
        <div className="key-points-mono-card">
          <div className="key-img-box">
            <img src={Culture} alt="Culture" />
          </div>
          <h4>Culture</h4>
          <p>
            With deep respect and understanding towards our partners, consumers,
            and everyone involved in the process, we aim to cultivate an
            encouraging environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyPoints;
