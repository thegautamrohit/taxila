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
import Image1 from "../../../Assets/images/Vinci/vinci-1.webp";
import Image2 from "../../../Assets/images/Vinci/vinci-2.webp";
import Image3 from "../../../Assets/images/Vinci/vinci-3.webp";
import Image4 from "../../../Assets/images/Vinci/vinci-4.webp";
import Image5 from "../../../Assets/images/Vinci/vinci-5.webp";
import Image6 from "../../../Assets/images/Vinci/vinci-6.webp";
import Pdf from "../../../Assets/Specs/pdf.pdf";
import CarouselBig, {
  CarouselItemBig,
} from "../../CommonComponents/carousal/BigCarausal";
import { RiCloseFill } from "react-icons/ri";
function ProductSection() {
  const [active, setActive] = useState(0);
  const [miniBig, setMiniBig] = useState(1000);
  const Product = [
    {
      id: 1,
      title: "DA VINCI QUARTZITE",
      heading: "Da Vinci",
      bodyText:
        "Taxila Stone features Da Vinci, one-of-a-kind quartzite representing the magic and unfiltered beauty of natural surfaces. The green-colored stone adds a sense of allure and wonder with its translucent visual and exudes an attractive and unique aesthetic.",

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
              onClick={() => (setActive(index), setMiniBig(index))}
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

      {miniBig !== 1000 && (
        <div className="maistri__Carousal__big">
          <div
            className="maistri__Carousal__big__close"
            onClick={() => setMiniBig(1000)}
          >
            <RiCloseFill size={25} /> Close
          </div>
          <CarouselBig title="MINOTTICUCINE" Index={miniBig}>
            {Product[0]?.images?.map((item, index) => {
              return (
                <CarouselItemBig key={index}>
                  <img src={item.image} />
                </CarouselItemBig>
              );
            })}
          </CarouselBig>
        </div>
      )}
    </div>
  );
}

export default ProductSection;
