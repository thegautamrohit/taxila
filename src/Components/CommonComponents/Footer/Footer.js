import React from "react";
import Logo from "../../../Assets/images/footer/logo.png";
import Footer1 from "../../../Assets/images/footer/HCA-logo.webp";
import Footer2 from "../../../Assets/images/footer/footerLogo-2.webp";
import { GrFacebook } from "react-icons/gr";
import { BsWhatsapp, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-upper-section">
        <div className="footer-section-1">
          <div className="footer-logo-wrapper">
            <img src={Logo} alt="Taxila Stone" loading="lazy" />
          </div>
        </div>

        {/* <div className="footer-quick-links-parent"> */}
        <div className="footer-section-2">
          <div className="footer-mono-quick-link">About Us</div>
          <div className="footer-mono-quick-link">Process</div>
          <div className="footer-mono-quick-link">Media</div>
          <div className="footer-mono-quick-link">Careers</div>
        </div>
        <div className="footer-section-3">
          <div className="footer-mono-quick-link">Terms of Sale</div>
          <div className="footer-mono-quick-link">Contact</div>
          <div className="footer-mono-quick-link">Resources</div>
          <div className="footer-mono-quick-link">Inspiration</div>
          <div className="footer-mono-quick-link">FAQs</div>
        </div>
        {/* </div> */}

        <div className="footer-section-4">
          <div className="footer-mono-quick-link">Associations</div>

          <div className="footer-asso-logo-wrapper">
            <div className="footer-association-logo-1">
              <img src={Footer1} alt="" />
            </div>
            <div className="footer-association-logo-2">
              <img src={Footer2} alt="" />
            </div>
          </div>
        </div>

        <div className="footer-section-5">
          <GrFacebook color="#fff" size={20} style={{ margin: "0 10px " }} />
          <BsWhatsapp color="#fff" size={20} style={{ margin: "0 10px " }} />
          <BsInstagram color="#fff" size={20} style={{ margin: "0 10px " }} />
          <BsTwitter color="#fff" size={20} style={{ margin: "0 10px " }} />
          <BsLinkedin color="#fff" size={20} style={{ margin: "0 10px " }} />
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          tenetur velit illum dolorem ut doloribus! Iusto culpa nesciunt sint
          rerum.
        </div>

        <div className="footer-bottom-links">
          <div className="footer-term-link">terms and conditions</div>
          <div className="footer-term-link">privacy policy</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
