import React, { Suspense, lazy } from "react";

import Loader from "../../Assets/images/Loader/loader.gif";
import InspirationBanner from "./InspirationBanner/InspirationBanner";
import InspirationDetail from "./InspirationDetail/InspirationDetail";

function Inspiration() {
  return (
    <>
      <InspirationBanner />

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <InspirationDetail />
      </Suspense>
    </>
  );
}

export default Inspiration;
