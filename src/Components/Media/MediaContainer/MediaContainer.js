import React, { useState, useEffect } from "react";
import "./MediaContainer.css";
import { IoIosArrowForward } from "react-icons/io";
import { mediaLinks } from "../../../Media Links";

function MediaContainer() {
  const [toggle, setToggle] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    let arr = [mediaLinks.filter((m) => m.CATEGORY === "Article")];

    setData(arr);
  }, []);

  const clickHandler = (toggle) => {
    setToggle(toggle);
    if (toggle === 0) {
      let arr = [mediaLinks.filter((m) => m.CATEGORY === "Article")];
      setData(arr);
    }
    if (toggle === 1) {
      let arr = [mediaLinks.filter((m) => m.CATEGORY === "Featured")];
      setData(arr);
    }
  };

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
                <img src={d?.IMAGE} alt="media article" />
              </div>

              <div className="media-article-content">
                <h5 className="media-article-title">{d?.HEADING}</h5>

                <span className="media-article-date"> {d?.DATE} </span>
                {d.summary && (
                  <p className="media-article-summary">{d?.BODY_TEXT}</p>
                )}

                <a href={d?.LINK} target="_blank" className="media-article-btn">
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
