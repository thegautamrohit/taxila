import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import VideoBanner from "./VideoBanner/VideoBanner";
const VideoContainer = lazy(() => import("./VideoContainer/VideoContainer"));

function Video() {
  return (
    <div>
      <VideoBanner />

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <VideoContainer />
      </Suspense>
    </div>
  );
}

export default Video;
