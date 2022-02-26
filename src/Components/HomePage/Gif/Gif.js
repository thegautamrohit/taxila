import React, { useState } from "react";
import "./Gif.css";
import Video from "../../../Assets/Gif/1.1 Video GIF option 1.gif";
import OverLay from "../../../Assets/images/HomePage/gif overlay.webp";
import GifPlayer from "react-gif-player";
import { FaPlay } from "react-icons/fa";

function Gif() {
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState(true);

  const playHandler = (playing) => {
    setShow(false);
    setPlay(playing);
  };

  return (
    <div className="home-page-gif-container">
      {show && (
        <div className="home-page-gif-overlay" onClick={() => setShow(false)}>
          <img src={OverLay} alt="Taxila Stone" />
          <div className="overlay-play-btn">
            <FaPlay size={50} color={"#fff"} />
          </div>
        </div>
      )}
      <GifPlayer
        gif={Video}
        autoplay
        onTogglePlay={(playing) => playHandler(playing)}
      />
      {/* <img src={Video} alt="" /> */}
    </div>
  );
}

export default Gif;
