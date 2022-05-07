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
            onClick={() => (setAll("All"), setOneElement([]))}
          >
            ALL
          </p>
          <p
            style={
              all === "Kitchen" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
            }
            onClick={() => (setAll("Kitchen"), setOneElement([]))}
          >
            KITCHEN
          </p>
          <p
            style={
              all === "Bathroom" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
            }
            onClick={() => (setAll("Bathroom"), setOneElement([]))}
          >
            BATHROOM
          </p>
          <p
            style={
              all === "Commercial" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
            }
            onClick={() => (setAll("Commercial"), setOneElement([]))}
          >
            COMMERCIAL
          </p>
          <p
            style={
              all === "Shower" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
            }
            onClick={() => (setAll("Shower"), setOneElement([]))}
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
              <div
                className="inspiration__all__image"
                onClick={() => (
                  setOneElement(item.details),
                  setDetails(item.detailsDescription),
                  setMainImage(item.image),
                  setTitle(item.title)
                )}
              >
                <img key={item.id} src={item.image} alt={item.image} />
              </div>
            ))}
          {all !== "All" &&
            InspirationData.filter((item) => item.category === all).map(
              (item, index) => (
                <div
                  onClick={() => (
                    setOneElement(item.details),
                    setDetails(item.detailsDescription),
                    setMainImage(item.image),
                    setTitle(item.title)
                  )}
                >
                  <img key={item.id} src={item.image} alt={item.image} />
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

        {oneElement.length > 0 && (
          <div
            className="inspiration__specific__image"
            style={oneElement.length > 0 ? {} : { display: "none" }}
          >
            <div className="inspiration__specific__image__head">
              <p>{title}</p>
              <div>
                <p>{oneElement.length} products in this image</p>
                <MdCancel onClick={() => setOneElement([])} />
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
        )}
        {/* <div className="inspiration__image__display">
          {InspirationData.slice(4, 8).map((item) => {
            return (
              <div>
                <img key={item.id} src={item.image} alt={item.image} />
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default InspirationDetail;
