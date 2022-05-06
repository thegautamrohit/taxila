import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import "../../Media/MediaContainer/MediaContainer.css";
import "./BlogContainer.css";
import Blog1 from "../../../Assets/images/HomePage/Marble-3.webp";
import Blog2 from "../../../Assets/images/HomePage/Marble-4.webp";
import Blog3 from "../../../Assets/images/HomePage/Marble-5.webp";

function BlogContainer() {
  const blogs = [
    {
      id: 1,
      image: Blog1,
      head: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "17 FEBRUARY, 2020",
      summary:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est...",
    },
    {
      id: 2,
      image: Blog2,
      head: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "17 FEBRUARY, 2020",
      summary:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero ..",
    },
    {
      id: 3,
      image: Blog3,
      head: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      date: "17 FEBRUARY, 2020",
      summary:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est...",
    },
  ];

  return (
    <div className="blogs-container-articles-wrapper">
      {blogs?.map((blog) => (
        <div key={blog.id} className="media-container-mono-article">
          <div className="media-article-img-box">
            <img src={blog?.image} alt="media article" />
          </div>

          <div className="media-article-content">
            <h5 className="media-article-title">{blog?.head}</h5>
            <span className="media-article-date"> {blog?.date} </span>
            <p className="media-article-summary">{blog?.summary}</p>

            <a href={blog?.LINK} target="_blank" className="media-article-btn">
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
  );
}

export default BlogContainer;
