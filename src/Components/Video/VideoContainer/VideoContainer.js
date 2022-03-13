import React from "react";
import "./VideoContainer.css";
import { FaPlayCircle } from "react-icons/fa";

function VideoContainer() {
  return (
    <div className="video-conatiner-wrapper">
      <div className="video-container-top-nav">
        <div className="video-top-nav-filters">
          <h5>ALL</h5>
          <h5>ABOUT</h5>
          <h5>PRODUCTS</h5>
          <h5>EXPLAINER VIDEO</h5>
        </div>

        <div className="video-top-nav-results">Showing 24 results</div>
      </div>

      <div className="video-container-box">
        <div className="video-container-mono-clip">
          <div className="mono-clip-play-btn">
            <FaPlayCircle size={40} color={"#fff"} />
          </div>
        </div>
        <div className="video-container-mono-clip">
          <div className="mono-clip-play-btn">
            <FaPlayCircle size={40} color={"#fff"} />
          </div>
        </div>
        <div className="video-container-mono-clip">
          <div className="mono-clip-play-btn">
            <FaPlayCircle size={40} color={"#fff"} />
          </div>
        </div>
        <div className="video-container-mono-clip">
          <div className="mono-clip-play-btn">
            <FaPlayCircle size={40} color={"#fff"} />
          </div>
        </div>
        <div className="video-container-mono-clip">
          <div className="mono-clip-play-btn">
            <FaPlayCircle size={40} color={"#fff"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoContainer;
