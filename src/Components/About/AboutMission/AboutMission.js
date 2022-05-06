import React from "react";
import "./AboutMission.css";
import Mission from "../../../Assets/images/HomePage/Marble-3.webp";

function AboutMission() {
  return (
    <>
      <div className="about__mission__desk">
        <div className="about__mission__upper__deck">
          <div className="about__mission__content">
            <h1>
              OUR <br />
              <span>MISSION</span>
            </h1>

            <p>
              Our mission is to bridge the gap between the end consumer and the
              accessibility of natural stone surfaces, and also to create
              awareness about the legacy and diversity of the art of stone
              craftsmanship.
            </p>
            <p>
              It is our duty to make our customers and partners understand and
              appreciate the real value of the natural stone and how it has
              shaped and inspired the world before us for centuries now.
            </p>
          </div>
          <div className="about__mission__image">
            <img src={Mission} alt="" />
          </div>
        </div>

        <div className="about__mission__lower__deck">
          <h1>
            MAKE <span>OUR STONE</span> <br />A PART <span>OF YOUR LEGACY</span>
          </h1>
        </div>
      </div>
      <div className="about__mission_mob">
        <div className="about__mission__upper__deck__mob">
          <h1>
            OUR <br />
            <span>MISSION</span>
          </h1>

          <div className="about__mission_mob__image">
            <img src={Mission} alt="" />
          </div>

          <p>
            Our mission is to bridge the gap between the end consumer and the
            accessibility of natural stone surfaces, and also to create
            awareness about the legacy and diversity of the art of stone
            craftsmanship.
          </p>
          <p>
            It is our duty to make our customers and partners understand and
            appreciate the real value of the natural stone and how it has shaped
            and inspired the world before us for centuries now.
          </p>
        </div>

        <div className="about__mission__lower__deck__mob">
          <h1>
            MAKE <span>OUR STONE</span> <br /> A PART OF
            <span> YOUR LEGACY</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default AboutMission;
