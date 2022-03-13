import React from "react";
import Banner from "./Banner/Banner";
import DownloadItem from "./DownloadItem/DownloadItem";
import "./Downloads.css";
const Downloads = () => {
  return (
    <div className="downloads__container">
      <Banner />
      <DownloadItem />
    </div>
  );
};

export default Downloads;
