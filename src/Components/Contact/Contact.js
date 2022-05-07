import React, { Suspense, lazy } from "react";
import Loader from "../../Assets/images/Loader/loader.gif";
import ContactBanner from "./ContactBanner/ContactBanner";
const ContactSection = lazy(() => import("./ContactSection/ContactSection"));
const ContactForm = lazy(() =>
  import("../CommonComponents/ContactForm/ContactForm")
);

function Contact() {
  return (
    <>
      <ContactBanner />
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <ContactSection />
      </Suspense>
      <Suspense
        fallback={
          <div className="loader">
            <img src={Loader} alt="Loader" />
          </div>
        }
      >
        <div
          style={{
            backgroundColor: "#F5F5F5",
          }}
        >
          <ContactForm />
        </div>
      </Suspense>
    </>
  );
}

export default Contact;
