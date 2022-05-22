import React, { useState } from "react";
import "./InspirationDetail.css";
import { InspirationData } from "../../../InspirationData";
import { MdCancel } from "react-icons/md";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
const InspirationDetail = () => {
  const [all, setAll] = useState("All");

  const [oneElement, setOneElement] = useState([]);
  const [details, setDetails] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [title, setTitle] = useState("");
  const [Index, setIndex] = useState(100);

  const modalHandler = (e) => {
    if (
      e.target.className === "inspiration__specific__image__mobile__wrapper"
    ) {
      setOneElement([]);
    }
  };

  return (
    <div className="inspiration__container">
      <div className="ispiration__head__wrapper">
        <div className="inspiration__head">
          <p
            style={all === "All" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }}
            onClick={() => (setAll("All"), setIndex(100))}
          >
            ALL
          </p>
          <p
            style={
              all === "Kitchen" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
            }
            onClick={() => (setAll("Kitchen"), setIndex(100))}
          >
            KITCHEN
          </p>
          <p
            style={
              all === "Bathroom" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
            }
            onClick={() => (setAll("Bathroom"), setIndex(100))}
          >
            BATHROOM
          </p>
          <p
            style={
              all === "Commercial" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
            }
            onClick={() => (setAll("Commercial"), setIndex(100))}
          >
            COMMERCIAL
          </p>
          <p
            style={
              all === "Shower" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
            }
            onClick={() => (setAll("Shower"), setIndex(100))}
          >
            SHOWER
          </p>
        </div>

        <div className="inspiration__head__results">Showing 12 results</div>
      </div>
      <div className="inspiration__image__container">
        <div className="inspiration__image__display">
          {all === "All" &&
            InspirationData.map((item, index) => (
              <div className="inspiration__all__image">
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.image}
                  onClick={() => (
                    setOneElement(item.details),
                    setDetails(item.detailsDescription),
                    setMainImage(item.image),
                    setTitle(item.title),
                    setIndex(index)
                  )}
                />
                <div
                  className="inspiration__specific__image"
                  style={
                    Index === index
                      ? { left: `-${(index % 4) * 374}px` }
                      : { display: "none" }
                  }
                >
                  <div className="inspiration__specific__image__head">
                    <p>{title}</p>
                    <div>
                      <p>{oneElement.length} products in this image</p>
                      <MdCancel onClick={() => setIndex(100)} />
                    </div>
                  </div>
                  <div className="inspiration__specific__image__middle">
                    <div className="inspiration__specific__image__middle__left">
                      <img src={mainImage} />
                    </div>
                    <div className="inspiration__specific__image__middle__right">
                      <div className="inspiration__specific__image__middle__right__image">
                        {oneElement.map((item) => {
                          return (
                            <div>
                              <img src={item.detailImage} />
                              <p>{item.title}</p>
                            </div>
                          );
                        })}
                      </div>
                      <p> {details}</p>
                      <div className="inspiration__specific__image__middle__right__social__media">
                        <AiFillFacebook />
                        <AiOutlineTwitter />
                        <AiOutlineWhatsApp />
                        <AiOutlineInstagram />
                        <FaLinkedinIn />
                        <BsFillShareFill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {all !== "All" &&
            InspirationData.filter((item) => item.category === all).map(
              (item, index) => (
                <div className="inspiration__all__image">
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.image}
                    onClick={() => (
                      setOneElement(item.details),
                      setDetails(item.detailsDescription),
                      setMainImage(item.image),
                      setTitle(item.title),
                      setIndex(index)
                    )}
                  />
                  <div
                    className="inspiration__specific__image"
                    style={
                      Index === index
                        ? { left: `-${(index % 4) * 374}px` }
                        : { display: "none" }
                    }
                  >
                    <div className="inspiration__specific__image__head">
                      <p>{title}</p>
                      <div>
                        <p>{oneElement.length} products in this image</p>
                        <MdCancel onClick={() => setIndex(100)} />
                      </div>
                    </div>
                    <div className="inspiration__specific__image__middle">
                      <div className="inspiration__specific__image__middle__left">
                        <img src={mainImage} />
                      </div>
                      <div className="inspiration__specific__image__middle__right">
                        <div className="inspiration__specific__image__middle__right__image">
                          {oneElement.map((item) => {
                            return (
                              <div>
                                <img src={item.detailImage} />
                                <p>{item.title}</p>
                              </div>
                            );
                          })}
                        </div>
                        <p> {details}</p>
                        <div className="inspiration__specific__image__middle__right__social__media">
                          <AiFillFacebook />
                          <AiOutlineTwitter />
                          <AiOutlineWhatsApp />
                          <AiOutlineInstagram />
                          <FaLinkedinIn />
                          <BsFillShareFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
        {oneElement.length > 0 && (
          <div
            className="inspiration__specific__image__mobile__wrapper"
            onClick={(e) => modalHandler(e)}
          >
            <div className="inspiration__specific__image__mobile">
              <div className="inspiration__specific__image__head__mobile">
                <div>
                  <p>{title}</p>

                  <MdCancel onClick={() => setOneElement([])} />
                </div>
                <p>{oneElement.length} products in this image</p>
              </div>
              <div className="inspiration__specific__image__middle__mobile">
                <div className="inspiration__specific__image__middle__left__mobile">
                  <img src={mainImage} />
                </div>
                <div className="inspiration__specific__image__middle__right__mobile">
                  <div className="inspiration__specific__image__middle__right__image__mobile">
                    {oneElement.map((item) => {
                      return (
                        <div>
                          <img src={item.detailImage} />
                          <p>{item.title}</p>
                        </div>
                      );
                    })}
                  </div>
                  <p> {details}</p>
                  <div className="inspiration__specific__image__middle__right__social__media__mobile">
                    <AiFillFacebook />
                    <AiOutlineTwitter />
                    <AiOutlineWhatsApp />
                    <AiOutlineInstagram />
                    <FaLinkedinIn />
                    <BsFillShareFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InspirationDetail;
