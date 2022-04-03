import React, { useState } from "react";
import "./VideoContainer.css";
import { FaPlayCircle } from "react-icons/fa";
import Image1 from "../../../Assets/images/Natural Surfaces/1.2 Quartzite - DECOLORES FUSION QUARTZITE CLOSEUP 2.webp";
import Image2 from "../../../Assets/images/Natural Surfaces/1.3 Granite - DECOLORES BLUE NILE GRANITE CLOSE UP 1.webp";
import Image3 from "../../../Assets/images/Natural Surfaces/2.1 Atlantis (Quartzite) - DECOLORES ATLANTIS QUARTZITE CLOSEUP.webp";
import Image4 from "../../../Assets/images/Natural Surfaces/2.2 Bronzite (Quartzite) - DECOLORES BRONZITE QUARTZITE POLIDO CLOSEUP.webp";
import Image5 from "../../../Assets/images/Natural Surfaces/2.5 Da Vinci (Quartzite) - DECOLORES DA VINCI QUARTIZITE CLOSEUP.webp";
import Image6 from "../../../Assets/images/Natural Surfaces/2.7 Explosion Rouge (Quartzite) - Rouge Slab 1.webp";

function VideoContainer() {
  const [show, setShow] = useState();

  const links = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/2LaOMBcbdZ8",
      background: Image1,
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/OWL2ePuTlWY",
      background: Image2,
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/JZ4k2zgkf1E",
      background: Image3,
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/1ZNKztWhu9E",
      background: Image4,
    },
    {
      id: 5,
      link: "https://www.youtube.com/embed/snUhZoncyVc",
      background: Image5,
    },
    {
      id: 6,
      link: "https://www.youtube.com/embed/T5mXTuhBi90",
      background: Image6,
    },
    {
      id: 7,
      link: "https://www.youtube.com/embed/7zLOyBf06QE",
      background: Image1,
    },
    {
      id: 8,
      link: "https://www.youtube.com/embed/fgkPbyv0iEE",
      background: Image2,
    },
    {
      id: 9,
      link: "https://www.youtube.com/embed/chc0R93qvYk",
      background: Image3,
    },
    {
      id: 10,
      link: "https://www.youtube.com/embed/vbfDhkpCbXk",
      background: Image4,
    },
    {
      id: 11,
      link: "https://www.youtube.com/embed/lNvkbwRwp8I",
      background: Image5,
    },
    {
      id: 12,
      link: "https://www.youtube.com/embed/1Wv7z_IeBwI",
      background: Image6,
    },
  ];

  return (
    <div className="video-conatiner-wrapper">
      <div className="video-container-top-nav">
        <div className="video-top-nav-filters">
          <h5>ALL</h5>
          <h5>ABOUT</h5>
          <h5>PRODUCTS</h5>
          <h5>EXPLAINER VIDEO</h5>
        </div>

        <div className="video-top-nav-results">
          Showing {links.length} results
        </div>
      </div>

      <div className="video-container-box">
        {links?.map((link, index) => (
          <div key={link.id} className="video-container-mono-clip">
            <div className="video-container-mono-clip-video-wrapper">
              <iframe
                width="100%"
                // height="100%"
                src={link.link}
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
