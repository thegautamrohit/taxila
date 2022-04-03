import React, { useState } from "react";
import "./Specifications.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function Specifications() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="product__specification__container">
      <div className="product__specifictaion__mono__item">
        {open1 ? (
          <div className="product__specification__expanded">
            <div
              className="product__specification__head"
              onClick={() => setOpen1(false)}
            >
              <h4>Product Information</h4>
              <IoIosArrowDown color={"#6C6C6C"} />
            </div>
            <div className="product__specification__content">
              <div className="product__specification__mono__detail">
                <p>Material - </p>
                <p> Granite </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Color Family - </p>
                <p> Green </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Dimensions - </p>
                <p> Varies </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Country of Origin - </p>
                <p> Italy </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Finish - </p>
                <p> Polished </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Thickness - </p>
                <p> Varies </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="product__specification__head__close"
              onClick={() => setOpen1(true)}
            >
              <h4>Product Information</h4>
              <IoIosArrowForward color={"#6C6C6C"} />
            </div>
          </>
        )}
      </div>
      <div className="product__specifictaion__mono__item">
        {open2 ? (
          <div className="product__specification__expanded">
            <div
              className="product__specification__head"
              onClick={() => setOpen2(false)}
            >
              <h4>Technical Specifications</h4>
              <IoIosArrowDown color={"#6C6C6C"} />
            </div>
            <div className="product__specification__content">
              <div className="product__specification__mono__detail">
                <p>PETROGRAPHIC DENOMINATION – </p>
                <p> Granada Leuco Granite </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Hardness - </p>
                <p> 6-7 Mohs </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Apparent Density - </p>
                <p> N/A </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Open Porosity - </p>
                <p> N/A </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Flexural Strength - </p>
                <p> N/A </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Abrasion Strength - </p>
                <p> N/A </p>
              </div>
              <div className="product__specification__mono__detail">
                <p>Compressive Strength - </p>
                <p> N/A </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="product__specification__head__close"
              onClick={() => setOpen2(true)}
            >
              <h4>Technical Specifications</h4>
              <IoIosArrowForward color={"#6C6C6C"} />
            </div>
          </>
        )}
      </div>
      <div className="product__specifictaion__mono__item">
        {open3 ? (
          <div className="product__specification__expanded">
            <div
              className="product__specification__head"
              onClick={() => setOpen3(false)}
            >
              <h4>Care Instructions</h4>
              <IoIosArrowDown color={"#6C6C6C"} />
            </div>
            <div className="product__specification__content">
              <div className="product__specification__content__data">
                <p>
                  <span>Lorem Ipsum</span>
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum.onumy
                </p>
              </div>
              <div className="product__specification__content__data">
                <p>
                  <span>Lorem Ipsum</span>
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum.onumy
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="product__specification__head__close"
              onClick={() => setOpen3(true)}
            >
              <h4>Care Instructions</h4>
              <IoIosArrowForward color={"#6C6C6C"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Specifications;
