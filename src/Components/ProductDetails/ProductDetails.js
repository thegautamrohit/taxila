import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import Banner from "../CommonComponents/Banner/Banner";
import BackGroundImage from "../../Assets/images/HomePage/Marble-2.webp";
const ProductSection = lazy(() => import("./ProductSection/ProductSection"));

function ProductDetails() {
  return (
    <div>
      <Banner BackGround={BackGroundImage} Heading="GRANITE" />
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <ProductSection />
      </Suspense>
    </div>
  );
}

export default ProductDetails;
