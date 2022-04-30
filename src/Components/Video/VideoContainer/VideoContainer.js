import React, { useState, useEffect } from "react";
import "./VideoContainer.css";
import { videoLinks } from "../../../Video Gallery Links";

function VideoContainer() {
  const [toggle, setToggle] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(videoLinks);
    setToggle(0);
  }, []);

  const clickHandler = (toggle) => {
    setToggle(toggle);

    if (toggle === 0) {
      setData(videoLinks);
    }

    if (toggle === 1) {
      setData(videoLinks.filter((link) => link.CATEGORY === "About"));
    }

    if (toggle === 2) {
      setData(videoLinks.filter((link) => link.CATEGORY.includes("Products")));
    }

    if (toggle === 3) {
      setData(
        videoLinks.filter((link) =>
          link.CATEGORY.includes("Explainer Products")
        )
      );
    }

    if (toggle == 4) {
      setData(videoLinks.filter((link) => link.CATEGORY.includes("How to")));
    }
    if (toggle == 5) {
      setData(videoLinks.filter((link) => link.CATEGORY.includes("Process")));
    }
  };

  return (
    <div className="video-conatiner-wrapper">
      <div className="video-container-top-nav">
        <div className="video-top-nav-filters">
          <p
            style={{
              color: toggle === 0 ? "#6C6C6C" : "#CDCDCD",
            }}
            onClick={() => clickHandler(0)}
          >
            ALL
          </p>
          <p
            style={{
              color: toggle === 1 ? "#6C6C6C" : "#CDCDCD",
            }}
            onClick={() => clickHandler(1)}
          >
            ABOUT
          </p>
          <p
            style={{
              color: toggle === 2 ? "#6C6C6C" : "#CDCDCD",
            }}
            onClick={() => clickHandler(2)}
          >
            PRODUCTS
          </p>
          <p
            style={{
              color: toggle === 3 ? "#6C6C6C" : "#CDCDCD",
            }}
            onClick={() => clickHandler(3)}
          >
            EXPLAINER VIDEO
          </p>
          <p
            style={{
              color: toggle === 4 ? "#6C6C6C" : "#CDCDCD",
            }}
            onClick={() => clickHandler(4)}
          >
            HOW TO
          </p>
          <p
            style={{
              color: toggle === 5 ? "#6C6C6C" : "#CDCDCD",
            }}
            onClick={() => clickHandler(5)}
          >
            PROCESS
          </p>
        </div>

        <div className="video-top-nav-results">
          Showing {data?.length} results
        </div>
      </div>

      <div className="video-container-box">
        {data?.map((link, index) => (
          <div key={link.id} className="video-container-mono-clip">
            <div className="video-container-mono-clip-video-wrapper">
              <iframe
                width="100%"
                // height="100%"
                src={link.LINK}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoContainer;
