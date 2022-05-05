import React, { lazy, Suspense } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import AboutBanner from "./AboutBanner/AboutBanner";
const AboutSection = lazy(() => import("./AboutSection/AboutSection"));
const AboutMission = lazy(() => import("./AboutMission/AboutMission"));

function About() {
  return (
    <>
      <AboutBanner />

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <AboutSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <AboutMission />
      </Suspense>
    </>
  );
}

export default About;
