import React, { useState } from "react";
import "./DownloadItem.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import { MdDownloading } from "react-icons/md";
const downloadItem = [
  {
    id: 1,
    file: "White Dallas",
  },
  {
    id: 2,
    file: "White Dallas",
  },
  {
    id: 3,
    file: "White Dallas",
  },
  {
    id: 4,
    file: "White Dallas",
  },
  {
    id: 5,
    file: "White Dallas",
  },
  {
    id: 6,
    file: "White Dallas",
  },
  {
    id: 7,
    file: "White Dallas",
  },
  {
    id: 8,
    file: "White Dallas",
  },
];

const Item = ({ heading }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div
          className="download__items__container__expand"
          onClick={() => setOpen(false)}
        >
          <div className="download__items__container__expand__head">
            <h3>{heading}</h3>
            <IoIosArrowDown />
          </div>
          <div className="download__items__container__expand__item">
            {downloadItem.map((item) => {
              return (
                <div key={item.id}>
                  <MdDownloading />
                  <p>{item.file}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className="download__items__container__head"
          onClick={() => setOpen(true)}
        >
          <h3>{heading}</h3>
          <IoIosArrowForward />
        </div>
      )}
    </>
  );
};

const DownloadItem = () => {
  return (
    <div className="download__items__container">
      <div className="download__items">
        <Item heading="Limestone & Sandstone" />
      </div>
      <div className="download__items">
        <Item heading="Granite" />
      </div>
      <div className="download__items">
        <Item heading="Quartzforms" />
      </div>
      <div className="download__items">
        <Item heading="Palissandro" />
      </div>
    </div>
  );
};

export default DownloadItem;
