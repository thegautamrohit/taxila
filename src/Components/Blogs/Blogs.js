import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import Banner from "../CommonComponents/Banner/Banner";
import BackgroundImage from "../../Assets/images/HomePage/Marble-2.webp";

const BlogContainer = lazy(() => import("./BlogContainer/BlogContainer"));

function Blogs() {
  return (
    <>
      <Banner BackGround={BackgroundImage} Heading="BLOGS" />

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <BlogContainer />
      </Suspense>
    </>
  );
}

export default Blogs;
