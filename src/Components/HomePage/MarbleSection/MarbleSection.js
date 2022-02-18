import React from "react";
import Marble1 from "../../../Assets/images/HomePage/Marble-1.webp";
import Marble2 from "../../../Assets/images/HomePage/Marble-2.webp";
import Marble3 from "../../../Assets/images/HomePage/Marble-3.webp";
import Marble4 from "../../../Assets/images/HomePage/Marble-4.webp";
import Marble5 from "../../../Assets/images/HomePage/Marble-5.webp";

import "./MarbleSection.css";

function MarbleSection() {
  return (
    <div className="Marble-section-container">
      {/* tile-1 */}
      <div className="marble-section-tile-1">
        <div className="outer-block">
          <div className="background-outer">
            <img src={Marble1} alt="" />
          </div>
          <span>MARBLE</span>
        </div>

        <div className="overlay-section">
          <div className="overlay-content">
            <span>MARBLE</span>
            <div className="view-collection-link">View Collection</div>
          </div>
        </div>
      </div>

      {/* Tile-2 */}

      <div className="marble-section-tile-2">
        <div className="outer-block">
          <div className="background-outer">
            <img src={Marble2} alt="" />
          </div>
          <span>IDYLIUM</span>
        </div>

        <div className="overlay-section">
          <div className="overlay-content">
            <span>IDYLIUM</span>
            <div className="view-collection-link">View Collection</div>
          </div>
        </div>
      </div>

      {/* Tile-3 */}

      <div className="marble-section-tile-3">
        <div className="outer-block">
          <div className="background-outer">
            <img src={Marble3} alt="" />
          </div>
          <span>QUARTZFORMS</span>
        </div>

        <div className="overlay-section">
          <div className="overlay-content">
            <span>QUARTZFORMS</span>
            <div className="view-collection-link">View Collection</div>
          </div>
        </div>
      </div>

      {/* Tile-4 */}

      <div className="marble-section-tile-4">
        <div className="outer-block">
          <div className="background-outer">
            <img src={Marble4} alt="" />
          </div>
          <span>LE PRESENT</span>
        </div>

        <div className="overlay-section">
          <div className="overlay-content">
            <span>LE PRESENT</span>
            <div className="view-collection-link">View Collection</div>
          </div>
        </div>
      </div>

      {/* Tile-5 */}

      <div className="marble-section-tile-5">
        <div className="outer-block">
          <div className="background-outer">
            <img src={Marble5} alt="" />
          </div>
          <span>QUARTZITE</span>
        </div>

        <div className="overlay-section">
          <div className="overlay-content">
            <span>QUARTZITE</span>
            <div className="view-collection-link">View Collection</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarbleSection;
