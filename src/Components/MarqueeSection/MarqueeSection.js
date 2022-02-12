import React from "react";
import "./MarqueeSection.css";

function MarqueeSection() {
  return (
    <div className="marquee-section-container">
      <div className="marquee-text-wrapper-1">
        <div className="marquee-text">
          <span>ART * </span>
          <span>TECHNOLOGY * </span>
          <span>DESIGN * </span>
          <span>QUALITY * </span>
          <span>MODERN LIVING * </span>
        </div>
      </div>
      <div className="marquee-text-wrapper-2">
        <div className="marquee-text-2">
          <span>TECHNOLOGY * </span>
          <span>ART * </span>
          <span>MODERN LIVING * </span>
          <span>QUALITY * </span>
          <span>DESIGN * </span>
        </div>
      </div>
      <div className="marquee-text-wrapper-3">
        <div className="marquee-text-3">
          <span>DESIGN * </span>
          <span>ART * </span>
          <span>MODERN LIVING * </span>
          <span>TECHNOLOGY * </span>
          <span>QUALITY * </span>
        </div>
      </div>
    </div>
  );
}

export default MarqueeSection;
