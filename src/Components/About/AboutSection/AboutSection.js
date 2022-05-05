import React from "react";
import "./AboutSection.css";
import About1 from "../../../Assets/images/HomePage/Marble-1.webp";
import About2 from "../../../Assets/images/HomePage/Marble-3.webp";
import About3 from "../../../Assets/images/HomePage/Marble-4.webp";
import About4 from "../../../Assets/images/HomePage/Marble-5.webp";

function AboutSection() {
  return (
    <>
      <div className="about__section__container__desk">
        <h1>
          DISCOVER A STONE AS <br />
          <span>SPECIAL AS YOU ARE</span>
        </h1>

        <div className="about__section__content__wrapper">
          <div className="about__section__images__box">
            <div className="about__section__images__upper">
              <div className="about__section__image_item_1">
                <img src={About1} alt="" />
              </div>
              <div className="about__section__image_item_2">
                <img src={About2} alt="" />
              </div>
            </div>

            <div className="about__section__images__lower">
              <div className="about__section__image_item_3">
                <img src={About3} alt="" />
              </div>
              <div className="about__section__image_item_4">
                <img src={About4} alt="" />
              </div>
            </div>
          </div>
          <div className="about__section__text__box">
            <p>
              A city of ruins that was once a flourishing hub of artistry &
              craftsmanship spanning decades and empires including Persian,
              Mauryan, Indo-Greek, Indo-Scythian, & Kushan.
            </p>
            <p>
              Takshashila- City of cut stone, in its glory, was a pinnacle and
              junction of creative cultivation & religious learning which
              attracted artists & scholars alike till it was destroyed by the
              Huns in the 5th century.
            </p>
            <p>
              One of the great trade routes of its time is now a highly
              significant archaeological & designated UNESCO Heritage site. The
              ruins of the city serve as a reminder of an era now forgotten,
              influence and legacy to be remembered and followed.
            </p>
            <p>
              With the legacy of Takshashila as an inspiration, Taxila Stone
              aspires to deliver the perfect stone surfaces from the different
              corners of the world. Our passion and integrity for the craft with
              the idea to provide value to everyone as we promote the culture of
              natural resources is what defines Taxila Stone.
            </p>

            <p>
              Following our legacy and fascination with the art of natural stone
              and the process of elevating a stone to a lifestyle, Taxila Stone
              aspires to present your dream home and promote the culture
              embedded in the natural resources.
            </p>
          </div>
        </div>
      </div>
      <div className="about__section__container__mob">
        <h1>
          DISCOVER A STONE AS <br />
          <span>SPECIAL AS YOU ARE</span>
        </h1>

        <div className="about__section__image__upper_mob">
          <div className="about__section__mob__image_1">
            <img src={About1} alt="" />
          </div>
          <div className="about__section__mob__image_2">
            <img src={About2} alt="" />
          </div>
        </div>

        <p>
          A city of ruins that was once a flourishing hub of artistry &
          craftsmanship spanning decades and empires including Persian, Mauryan,
          Indo-Greek, Indo-Scythian, & Kushan.
        </p>
        <p>
          Takshashila- City of cut stone, in its glory, was a pinnacle and
          junction of creative cultivation & religious learning which attracted
          artists & scholars alike till it was destroyed by the Huns in the 5th
          century.
        </p>
        <p>
          One of the great trade routes of its time is now a highly significant
          archaeological & designated UNESCO Heritage site. The ruins of the
          city serve as a reminder of an era now forgotten, influence and legacy
          to be remembered and followed.
        </p>

        <div className="about__section__image__lower_mob">
          <div className="about__section__mob__image_3">
            <img src={About3} alt="" />
          </div>
          <div className="about__section__mob__image_4">
            <img src={About4} alt="" />
          </div>
        </div>

        <p>
          With the legacy of Takshashila as an inspiration, Taxila Stone aspires
          to deliver the perfect stone surfaces from the different corners of
          the world. Our passion and integrity for the craft with the idea to
          provide value to everyone as we promote the culture of natural
          resources is what defines Taxila Stone.
        </p>
        <p>
          Following our legacy and fascination with the art of natural stone and
          the process of elevating a stone to a lifestyle, Taxila Stone aspires
          to present your dream home and promote the culture embedded in the
          natural resources
        </p>
      </div>
    </>
  );
}

export default AboutSection;
