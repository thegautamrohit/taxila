import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import NaturalBanner from "./NaturalBanner/NaturalBanner";
const NaturalCarousel = lazy(() => import("./NaturalCarousel/NaturalCarousel"));
const NaturalFilter = lazy(() => import("./NaturalFilter/NaturalFilter"));

function NaturalSurface() {
  return (
    <>
      <NaturalBanner />

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <NaturalCarousel />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <NaturalFilter />
      </Suspense>
    </>
  );
}

export default NaturalSurface;
