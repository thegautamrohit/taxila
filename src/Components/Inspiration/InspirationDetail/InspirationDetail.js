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
  console.log(oneElement);
  return (
    <div className="inspiration__container">
      <div className="inspiration__head">
        <p
          style={all === "All" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }}
          onClick={() => setAll("All")}
        >
          ALL
        </p>
        <p
          style={
            all === "Kitchen" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
          }
          onClick={() => setAll("Kitchen")}
        >
          KITCHEN
        </p>
        <p
          style={
            all === "Bathroom" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
          }
          onClick={() => setAll("Bathroom")}
        >
          BATHROOM
        </p>
        <p
          style={
            all === "Commercial" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }
          }
          onClick={() => setAll("Commercial")}
        >
          COMMERCIAL
        </p>
        <p
          style={all === "Shower" ? { color: "#6C6C6C" } : { color: "#CDCDCD" }}
          onClick={() => setAll("Shower")}
        >
          SHOWER
        </p>
      </div>
      <div className="inspiration__image__container">
        <div className="inspiration__image__display">
          {all === "All" &&
            InspirationData.map((item) => {
              return (
                <div
                  onClick={() => (
                    setOneElement(item.details),
                    setDetails(item.detailsDescription),
                    setMainImage(item.image)
                  )}
                >
                  <img key={item.id} src={item.image} alt={item.image} />
                </div>
              );
            })}
          {all !== "All" &&
            InspirationData.filter((item) => item.category === all).map(
              (item) => {
                return (
                  <div
                    onClick={() => (
                      setOneElement(item.details),
                      setDetails(item.detailsDescription),
                      setMainImage(item.image)
                    )}
                  >
                    <img key={item.id} src={item.image} alt={item.image} />
                  </div>
                );
              }
            )}
        </div>
        {oneElement.length > 0 && (
          <div className="inspiration__specific__image">
            <div className="inspiration__specific__image__head">
              <p>{oneElement.title}</p>
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
