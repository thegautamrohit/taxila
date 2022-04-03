import React, { useState } from "react";
import "./ProductSection.css";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import Image1 from "../../../Assets/images/Natural Surfaces/2.1 Atlantis (Quartzite) - DECOLORES ATLANTIS QUARTZITE CLOSEUP.webp";
import Image2 from "../../../Assets/images/Natural Surfaces/2.4 Cristal (Quartzite) - DECOLORES LUCENT QUARTIZITE BACKLIGHT CLOSEUP 2.webp";
import Image3 from "../../../Assets/images/Natural Surfaces/2.5 Da Vinci (Quartzite) - DECOLORES DA VINCI QUARTIZITE CLOSEUP.webp";
import Image4 from "../../../Assets/images/Natural Surfaces/2.6 Denali (Quartzite) - DECOLORES QUARTZITE DENALI CLOSEUP PADRÃO 2020.webp";
import Image5 from "../../../Assets/images/Natural Surfaces/2.7 Explosion Rouge (Quartzite) - Rouge Slab 1.webp";
import Image6 from "../../../Assets/images/Natural Surfaces/2.8 Fantasy Lux (Quartzite) - FantasyLux5 1.webp";
import Pdf from "../../../Assets/Specs/pdf.pdf";

function ProductSection() {
  const [active, setActive] = useState(0);

  const Product = [
    {
      id: 1,
      title: "Granite",
      heading: "Lorem ipsu",
      bodyText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr",

      images: [
        { id: 1, image: Image1 },
        { id: 2, image: Image2 },
        { id: 3, image: Image3 },
        { id: 4, image: Image4 },
        { id: 5, image: Image5 },
        { id: 6, image: Image6 },
      ],
      specs: Pdf,
    },
  ];

  return (
    <div className="product__section__container">
      <div className="product__section__image__wrapper">
        <div className="product__images__vertical__drawer">
          {Product[0]?.images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setActive(index)}
              style={{
                opacity: active === index ? 1 : 0.3,
              }}
              className="product__image__vertical__tile"
            >
              <img src={img.image} alt="" />
            </div>
          ))}
        </div>
        <div className="product__images__active__image">
          <img src={Product[0]?.images[active].image} alt="" />
        </div>
      </div>
      <div className="product__section__details__container">
        <div className="product__section__details__head">
          <h4> {Product[0]?.title}</h4>

          <div className="product__details__download__specs__section__mob">
            <p>
              Download <br /> Specs
            </p>

            <a
              download
              href={Product[0]?.specs}
              className="product__details__download__specs__btn"
            >
              <MdOutlineDownloadForOffline color={"#B1B4AE"} size={30} />
            </a>
          </div>
        </div>

        <p className="product__section__details__subhead">
          {Product[0]?.heading}
        </p>
        <p className="product__section__details__bodytext">
          {Product[0]?.bodyText}
        </p>

        <button className="product__details__section__btn">
          <span>Shop</span>
          <div className="product__details__section__btn-hover">
            <div className="product__details__section__btn-circle"> </div>
            <IoIosArrowForward />
          </div>
        </button>

        <div className="product__details__bottom__wrapper">
          <div className="product__details__download__specs__section">
            <p>
              Download <br /> Specs
            </p>

            <a
              download
              href={Product[0]?.specs}
              className="product__details__download__specs__btn"
            >
              <MdOutlineDownloadForOffline color={"#B1B4AE"} size={30} />
            </a>
          </div>

          <div className="product__details__social__share__icons__wrapper">
            <p>Share this Product</p>
            <div className="product__details__social__share__icons">
              <AiFillFacebook color={"#B1B4AE"} size={22} />
              <FaWhatsapp color={"#B1B4AE"} size={22} />
              <AiFillInstagram color={"#B1B4AE"} size={22} />
              <AiOutlineTwitter color={"#B1B4AE"} size={22} />
              <AiFillLinkedin color={"#B1B4AE"} size={22} />
              <BsFillShareFill color={"#B1B4AE"} size={22} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
