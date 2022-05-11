import React, { useState } from "react";
import "./Team.css";
import Slider from "react-slick";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "../../../Assets/images/About/avatar.webp";

function Team() {
  const [width, setWidth] = useState(window.innerWidth);

  const team = [
    {
      id: 1,
      name: "Hari Polavarapu ",
      image: Image,
      designation: "Chairman/CEO",
      linked: "https://www.linkedin.com/in/haripolavarapu/",
      mail: "hari.polavarapu@taxilastone.com",
      call: "+1 (732) 216-4639",
      profile:
        "Hari co-founded Taxila with Sharmila Polavarapu. Hari brings senior leadership and experience as the Chairman & CEO of Taxila. He is a serial entrepreneur and has held numerous leadership roles at several start-up companies including Numbers Only Inc, AtPar Inc, NforcePro, Genesis Business Solutions, News Café India, Zintec Software, and Varam Bio Energy. His experience spans various industries including information technology, supply chain, hospitality, distribution, and renewable energy.",
    },
    {
      id: 2,
      name: "Sharmila Polavarapu",
      image: Image,
      designation: "President",
      linked: " https://www.linkedin.com/in/sharmila-polavarapu-8701567/",
      mail: "sharmila.polavarapu@taxilastone.com",
      call: "+1 (732) 216-4639",
      profile:
        "Sharmila co-founded Taxila with Hari Polavarapu and serves as the President. She actively manages the operational issues at Taxila. She has held several leadership roles at companies spanning various industries including information technology, distribution, and staffing. She is an active member of the community and mentors several women-owned small businesses.",
    },
    {
      id: 3,
      name: "Josh Caballero",
      image: Image,
      designation: "General Manager",
      linked: "https://www.linkedin.com/in/haripolavarapu/",
      mail: "josh.caballero@taxilastone.com",
      call: "+1 (936) 443-9846",
      subText:
        "“I have always had an interest in architecture, landscapes, furnishings, and design.  I am grateful to be involved with a business that I enjoy.”",
      profile:
        "As General Manager of Taxila Stone, Josh brings over 20 years of experience to our team in retail sales, outside sales, account management, and sales team leadership, as well as having owned and operated two businesses of his own.  Josh has a functional knowledge of logistics, and warehouse/showroom management and has built working relationships with architects, retailers, and designers for residential and hospitality in Texas, Arkansas and Oklahoma.",
    },
    {
      id: 4,
      name: "Lizbeth Rodriguez",
      image: Image,
      designation: "Account Manager",
      linked: "https://www.linkedin.com/in/haripolavarapu/",
      mail: "Liz.rodriguez@taxilastone.com",
      call: "+1 (732) 216-4639",
      subText:
        "Lizbeth is also a social media pro and a rising Instagram star.",
      profile:
        "Lizbeth Rodriguez, originally from Chihuahua, Mexico is now a resident of the Dallas Metroplex. Lizbeth loves sales and loves to interact and help customers. She loves working at Taxila because she works with some of the most beautiful surfaces from across the globe and meet great people. Lizbeth loves to travel and would love to visit all the places that these stone originate from.",
    },
    {
      id: 5,
      name: "Yasmine Duran",
      image: Image,
      designation: "Account Manager",
      linked: "",
      mail: "yasmine.duran@taxilastone.com",
      call: "+1 (214) 395-5479",
      subText: "Please connect with Yasmine for your stone requirements.",
      profile:
        "Yasmine Duran, one of our earliest recruit, has been a corner stone of our progress as a company in the DFW metroplex. Yasmine is a great listener and goes the extra mile to make sure that the clients requirements are met. Yasmine is also one of our stone experts and has extensive knowledge about our products. Yasmine can help you source the any material for your project.        ",
    },
    {
      id: 6,
      name: "Joanna García",
      image: Image,
      designation: "Account Manager",
      linked: "",
      mail: "joanna.garcia@taxilastone.com",
      call: "+1 (214) 609-3711",
      subText: "",
      profile:
        "Joanna García is an Account Manager at Taxila and has extensive experience in sales. She is passionate about helping her customers and has been building relationships in the Dallas metroplex since 2002. Joanna is also very knowledgeable about stone surfaces and can assist you in finding that perfect slab of stone. She has a 15-year-old son and loves to spend time with him doing outdoor activities. She is also a fitness enthusiast and loves to work out regularly.",
    },
    {
      id: 7,
      name: "Oriana Ordonez",
      image: Image,
      designation: "Account Manager",
      linked: "",
      mail: "oriana.ordonez@taxilastone.com",
      call: " +1 (682) 306-0888",
      subText: "",
      profile:
        "Oriana Ordonez is one of our newest account managers at Taxila Stone, she has over 8 years experience in the stone industry. Her extensive background in the field started back in 2013 in fabrication and she has since transitioned to the supplier end of the industry. Over the years, she has built many strong connections with many fabricators, contractors, and suppliers in the DFW area that allow her to connect clients with quality materials. Oriana enjoys serving others and demonstrates this quality by helping clients achieve their dream interior projects when they come to the showroom needing a little guidance. She will make sure you are paired with the right quality stone that fits your budget.      ",
    },
    {
      id: 8,
      name: "Blake Hahn",
      image: Image,
      designation: "TBD",
      linked: "",
      mail: "Blake.hahn@taxilastone.com",
      call: "+1 (214) 616-5100",
      subText: "",
      profile:
        " Blake has attention to detail, which allows him to anticipate the needs of others, multitalented sales-driven modern-day male Martha Stewart. From interior design, furniture and home restoration, makeup, and carpentry to IT and Cyber Security, he can do anything he puts his mind to. Blake became West Coast Executive trainer for a high-end cosmetic company at a young age. Blake learned that when you have the knowledge and a great product, it sells itself, making Taxila Stone the perfect place for him to use all his talents.     ",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: width > 500 ? 3 : 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="arrow_team arrow-left_team"
        // style={{ ...style, left: "95%" }}
        onClick={onClick}
      >
        <GrPrevious color={"#DDD5C9"} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="arrow_team arrow-right_team"
        // style={{ ...style, right: "95%" }}
        onClick={onClick}
      >
        <GrNext color={"#DDD5C9"} />
      </div>
    );
  }

  return (
    <div className="contact__team__container">
      <h2>
        OUR
        <span> TEAM</span>
      </h2>

      <div className="team__slider__wrapper">
        <Slider {...settings}>
          {team?.map((t) => (
            <div key={t?.id} className="team_member_card">
              <div className="team_member_card_upper_deck">
                <div className="team_member_card_image">
                  <img src={t.image} alt="" />
                </div>
                <div className="team_member_profile">
                  <h4>{t?.name}</h4>
                  <p>{t?.designation}</p>
                  <div className="team_social_icon_bar">
                    {t?.linked !== "" ? (
                      <div className="team_linkedin">
                        <a href={t?.linked}>
                          <FaLinkedinIn color="#707070" size={22} />
                        </a>
                      </div>
                    ) : null}
                    <div className="team_mail">
                      <a href={t?.mail}>
                        <FiMail color="#707070" size={22} />
                      </a>
                    </div>
                    <div className="team_call">
                      <a href={`tell:${t?.call}`}>
                        <IoCall color="#707070" size={22} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team_member_card_lower_deck">
                <p>{t?.profile}</p>
                {t?.subText?.length > 1 && <p>{t?.subText}</p>}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Team;
