import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";

import ProductListingBanner from "./ProductListingBanner/ProductListingBanner";
const ProductListingFilter = lazy(() =>
  import("./ProductListingFilter/ProductListingFilter")
);

function ProductListing() {
  return (
    <div>
      <ProductListingBanner />
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <ProductListingFilter />
      </Suspense>
    </div>
  );
}

export default ProductListing;
