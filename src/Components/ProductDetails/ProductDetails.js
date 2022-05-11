import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import Banner from "../CommonComponents/Banner/Banner";
import BackGroundImage from "../../Assets/images/HomePage/Marble-2.webp";
const ProductSection = lazy(() => import("./ProductSection/ProductSection"));
const ProductFeatures = lazy(() => import("./ProductFeatures/ProductFeatures"));
const Specifications = lazy(() => import("./Specifications/Specifications"));
const Applications = lazy(() => import("./Applications/Applications"));
const SimilarCarousel = lazy(() => import("./SimilarCarousel/SimilarCarousel"));

function ProductDetails() {
  return (
    <div>
      <Banner BackGround={BackGroundImage} Heading="QUARTZITE" />
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <ProductSection />
      </Suspense>
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <ProductFeatures />
      </Suspense>
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <Applications />
      </Suspense>
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <Specifications />
      </Suspense>
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <SimilarCarousel />
      </Suspense>
    </div>
  );
}

export default ProductDetails;
