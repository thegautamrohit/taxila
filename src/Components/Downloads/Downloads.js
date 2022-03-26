import React from "react";
import DownloadsBanner from "./Banner/DownloadsBanner";
import DownloadItem from "./DownloadItem/DownloadItem";
import "./Downloads.css";
const Downloads = () => {
  return (
    <>
      <DownloadsBanner />
      <DownloadItem />
    </>
  );
};

export default Downloads;
