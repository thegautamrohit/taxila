import React from "react";
import Image1 from "../../../Assets/images/Vinci/vinci-1.webp";
import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="contact__section__container">
      <div className="contact__section__section">
        <div className="contact__section__left__slab">
          <h4>SHOWROOM / SLAB WAREHOUSE</h4>
          <div className="contact___address">
            <p>Address</p>
            <p>2815 Barge Lane, Dallas, TX 75212</p>
          </div>
          <div className="contact___phone">
            <p>Phone Number</p>
            <p>+1 469-687-8050</p>
          </div>
          <div className="contact___hours">
            <p>Hours</p>
            <p>Monday to Friday: 9 am to 5 pm</p>
            <p>Saturday: 9 am to 3 pm</p>
            <p>Sunday closed</p>
          </div>
          <div className="contact___email">
            <p>Email</p>
            <p>info@taxilastone.com</p>
          </div>
        </div>
        <div className="contact__section__right__slab">
          <div className="contact__section__image__wrapper">
            <img src={Image1} alt="" />
          </div>

          <div className="contact__section__map__wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5655332052993!2d-96.92331428443194!3d32.77726099127923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e84b5324e2f55%3A0xd8028a06bd673c94!2s2815%20Barge%20Ln%2C%20Dallas%2C%20TX%2075212%2C%20USA!5e0!3m2!1sen!2sin!4v1651910325109!5m2!1sen!2sin"
              //   width="400"
              //   height="300"
              //   style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="contact__section__section_2">
        <div className="contact__section__left__slab_2">
          <h4>OPENING SUMMER 2022</h4>
          <div className="contact___address">
            <p>Address</p>
            <p>4843 Calvert Street, Dallas, TX 75247</p>
          </div>
          <div className="contact___phone">
            <p>Phone Number</p>
            <p>+1 469-687-8050</p>
          </div>
          <div className="contact___hours">
            <p>Hours</p>
            <p>Monday to Friday: 9 am to 5 pm</p>
            <p>Saturday: 9 am to 3 pm</p>
            <p>Sunday closed</p>
          </div>
          <div className="contact___email">
            <p>Email</p>
            <p>info@taxilastone.com</p>
          </div>
        </div>

        <div className="contact__section__right__slab">
          <div className="contact__section__image__wrapper">
            <img src={Image1} alt="" />
          </div>

          <div className="contact__section__map__wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.975846955995!2d-96.8201453844317!3d32.79289969048182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9948bcb5c615%3A0xd3320a9fb870014d!2s1436%20Slocum%20St%2C%20Dallas%2C%20TX%2075207%2C%20USA!5e0!3m2!1sen!2sin!4v1651912770904!5m2!1sen!2sin"
              //   width="400"
              //   height="300"
              //   style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contact__section__section">
        <div className="contact__section__left__slab">
          <h4>OPENING SUMMER 2022 - MINOTTICUCINE STORE</h4>
          <div className="contact___address">
            <p>Address</p>
            <p>1436 Slocum Street, Dallas, TX 75207</p>
          </div>
          <div className="contact___phone">
            <p>Phone Number</p>
            <p> +1 936-443-9846 (Josh Caballero, GM)</p>
          </div>
          <div className="contact___hours">
            <p>Hours</p>
            <p>Monday to Friday: 9 am to 5 pm</p>
            <p>Saturday: 9 am to 3 pm</p>
            <p>Sunday closed</p>
          </div>
          <div className="contact___email">
            <p>Email</p>
            <p> josh.caballero@taxilastone.com</p>
          </div>
        </div>
        <div className="contact__section__right__slab">
          <div className="contact__section__image__wrapper">
            <img src={Image1} alt="" />
          </div>

          <div className="contact__section__map__wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.498132880643!2d-96.87146508443145!3d32.80556398983558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9c798ff7e6ad%3A0xe9d6d6396c7556ea!2s4843%20Calvert%20St%2C%20Dallas%2C%20TX%2075247%2C%20USA!5e0!3m2!1sen!2sin!4v1651915800460!5m2!1sen!2sin"
              //   width="400"
              //   height="300"
              //   style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
