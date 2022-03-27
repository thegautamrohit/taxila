import React, { useState, useEffect } from "react";
import Image from "../../../Assets/images/HomePage/Banner-2.webp";
import "./MediaContainer.css";
import { IoIosArrowForward } from "react-icons/io";

function MediaContainer() {
  const [toggle, setToggle] = useState(0);
  const [data, setData] = useState();

  const media = [
    {
      id: 1,
      category: "Feature",
      image: "",
      head: "Featured on Paper City Magazine",
      date: "22 March, 2020",
      summary: "",
      link: "http://papercitymagazine.uberflip.com/i/1439511-papercity-dallas-january-february-2022/15?",
    },
    {
      id: 2,
      category: "Feature",
      image: "",
      head: "Featured on Dallas Modern Luxury",
      date: "22 March, 2020",
      summary: "",
      link: "https://digital.modernluxury.com/publication/?m=3620&i=738656&p=56&ver=html5",
    },
    {
      id: 3,
      category: "Article",
      image: "",
      head: "Conversations with Josh Caballero",
      date: "17 March, 2022",
      summary:
        "Hi Josh, so excited to have you with us today. What can you tell us about your story? How we got here is a complex story. Here’s the short version – The principals of the three show rooms opening in the metroplex come from hospitality and furniture backgrounds. We are creating the showrooms we feel would have made some of our projects in the past easier. We want to offer a wide variety of hard-to-find and fashionable materials and furnishings to DFW from all over the world. ",
      link: "http://voyagedallas.com/interview/conversations-with-josh-caballero/",
    },
    {
      id: 4,
      category: "Feature",
      image: "",
      head: "Featured on Paper City Magazine",
      date: "17 March, 2022",
      summary: "",
      link: "http://papercitymagazine.uberflip.com/i/1455228-papercity-dallas-march-2022/57?",
    },
    {
      id: 5,
      category: "Feature",
      image: "",
      head: "Featured on Dallas Modern Luxury",
      date: "17 March, 2022",
      summary: "",
      link: "http://digital.modernluxury.com/publication/?m=3620&i=729885&p=186&ver=html5",
    },
  ];

  useEffect(() => {
    let arr = [media.filter((m) => m.category === "Article")];

    setData(arr);
  }, []);

  const clickHandler = (toggle) => {
    setToggle(toggle);
    if (toggle === 0) {
      let arr = [media.filter((m) => m.category === "Article")];

      setData(arr);
    }
    if (toggle === 1) {
      let arr = [media.filter((m) => m.category === "Feature")];

      setData(arr);
    }
  };

  console.log(data);

  return (
    <div className="media-container-wrapper">
      <div className="media-toggle-section-container">
        <div
          className="media-toggle-section-mono-bar"
          style={{
            color: toggle === 0 ? "#6C6C6C" : "#CDCDCD",
          }}
          onClick={() => clickHandler(0)}
        >
          Articles
        </div>
        <div
          className="media-toggle-section-mono-bar"
          style={{
            color: toggle === 1 ? "#6C6C6C" : "#CDCDCD",
          }}
          onClick={() => clickHandler(1)}
        >
          Features
        </div>
      </div>

      <div className="media-container-articles-wrapper">
        {data &&
          data[0]?.map((d) => (
            <div key={d.id} className="media-container-mono-article">
              <div className="media-article-img-box">
                <img src={Image} alt="media article" />
              </div>

              <div className="media-article-content">
                <h5 className="media-article-title">{d?.head}</h5>

                <span className="media-article-date"> {d?.date} </span>
                {d.summary && (
                  <p className="media-article-summary">{d?.summary}</p>
                )}

                <a href={d?.link} target="_blank" className="media-article-btn">
                  <span>Read More</span>
                  <div className="media-article-btn-hover">
                    <div className="media-article-btn-circle"> </div>
                    <IoIosArrowForward />
                  </div>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MediaContainer;
