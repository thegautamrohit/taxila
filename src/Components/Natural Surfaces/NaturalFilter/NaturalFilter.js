import React from "react";
import "./NaturalFilter.css";
import { BsChevronDown } from "react-icons/bs";
import tile1 from "../../../Assets/images/Natural Surfaces/2.1 Atlantis (Quartzite) - DECOLORES ATLANTIS QUARTZITE CLOSEUP.webp";
import tile2 from "../../../Assets/images/Natural Surfaces/2.2 Bronzite (Quartzite) - DECOLORES BRONZITE QUARTZITE POLIDO CLOSEUP.webp";
import tile3 from "../../../Assets/images/Natural Surfaces/2.3 Calacatta Lux (Quartzite) - SITE-CHAPA-Calacatta-Lux-300x300.webp";
import tile4 from "../../../Assets/images/Natural Surfaces/2.4 Cristal (Quartzite) - DECOLORES LUCENT QUARTIZITE BACKLIGHT CLOSEUP 2.webp";
import tile5 from "../../../Assets/images/Natural Surfaces/2.5 Da Vinci (Quartzite) - DECOLORES DA VINCI QUARTIZITE CLOSEUP.webp";
import tile6 from "../../../Assets/images/Natural Surfaces/2.6 Denali (Quartzite) - DECOLORES QUARTZITE DENALI CLOSEUP PADRÃO 2020.webp";
import tile7 from "../../../Assets/images/Natural Surfaces/2.7 Explosion Rouge (Quartzite) - Rouge Slab 1.webp";
import tile8 from "../../../Assets/images/Natural Surfaces/2.8 Fantasy Lux (Quartzite) - FantasyLux5 1.webp";

import { IoChevronForwardOutline } from "react-icons/io5";

function NaturalFilter() {
  const tiles = [
    {
      id: 1,
      img: tile1,
      title: "Tile 1",
    },
    {
      id: 2,
      img: tile2,
      title: "Tile 2",
    },
    {
      id: 3,
      img: tile3,
      title: "Tile 3",
    },
    {
      id: 4,
      img: tile4,
      title: "Tile 4",
    },
    {
      id: 5,
      img: tile5,
      title: "Tile 5",
    },
    {
      id: 6,
      img: tile6,
      title: "Tile 6",
    },
    {
      id: 7,
      img: tile7,
      title: "Tile 7",
    },
    {
      id: 8,
      img: tile8,
      title: "Tile 8",
    },
  ];

  return (
    <div className="natural-filter-container">
      <div className="natural-filter-tiles-filter">
        <div className="mono-filter-title">
          <span>MONTENAPOLEONE</span>
          <BsChevronDown />
        </div>
        <div className="mono-filter-title">
          <span>MONTENAPOLEONE</span>
          <BsChevronDown />
        </div>
        <div className="mono-filter-title">
          <span>MONTENAPOLEONE</span>
          <BsChevronDown />
        </div>
        <div className="mono-filter-title">
          <span>MONTENAPOLEONE</span>
          <BsChevronDown />
        </div>
        <div className="mono-filter-title">
          <span>MONTENAPOLEONE</span>
          <BsChevronDown />
        </div>
      </div>
      <div className="natural-filter-tiles-result-images">
        {tiles.map((tile) => (
          <div key={tile.id} className="mono-natural-tile-card">
            <div className="mono-natural-tile-card-image">
              <img src={tile?.img} alt={tile?.title} />
            </div>
            <p className="mono-natural-card-title"> {tile?.title} </p>

            <div className="mono-natural-hover-state">
              <p>view product</p>
              <span>
                <IoChevronForwardOutline />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NaturalFilter;
