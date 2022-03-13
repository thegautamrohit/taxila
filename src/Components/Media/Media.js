import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import MediaBanner from "./MediaBanner/MediaBanner";

const MediaContainer = lazy(() => import("./MediaContainer/MediaContainer"));

function Media() {
  return (
    <div>
      <MediaBanner />

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <MediaContainer />
      </Suspense>
    </div>
  );
}

export default Media;
