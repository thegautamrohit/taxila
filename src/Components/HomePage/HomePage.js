import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import Header from "../CommonComponents/Header/Header";
import HeroBanner from "./HeroBanner/HeroBanner";
const MarqueeSection = lazy(() => import("./MarqueeSection/MarqueeSection"));
const MarbleSection = lazy(() => import("./MarbleSection/MarbleSection"));
const WhyTaxila = lazy(() => import("./WhyTaxila/WhyTaxila"));
const ProductCarousel = lazy(() => import("./ProductCarousel/ProductCarousel"));
const ShopLink = lazy(() => import("./ShopLink/ShopLink"));
const KeyPoints = lazy(() => import("./KeyPoints/KeyPoints"));
const ContactForm = lazy(() =>
  import("../CommonComponents/ContactForm/ContactForm")
);
const Footer = lazy(() => import("../CommonComponents/Footer/Footer"));

function HomePage() {
  return (
    <>
      <Header />

      <HeroBanner />
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <MarqueeSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <MarbleSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <WhyTaxila />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <ProductCarousel />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <ShopLink />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <KeyPoints />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <ContactForm />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <Footer />
      </Suspense>
    </>
  );
}

export default HomePage;
