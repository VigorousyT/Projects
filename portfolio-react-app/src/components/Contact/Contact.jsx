import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight, AiOutlineMail } from "react-icons/ai";
import { GrContactInfo, GrSkype } from "react-icons/gr";
import { GiSubmarineMissile } from "react-icons/gi";

function Contact() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/done");
  // };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_hpyxrq8",
      "template_khbny3b",
      form.current,
      "m-Bf5EWjri5N0zMoN"
    );
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Page</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container contact grid">
          <div className="contact__content">
            <h3 className="contact__title">Direct Message</h3>

            <div className="contact__info">
              <div className="contact__card">
                <AiOutlineMail className="contact__card-icon" />
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">
                  dev.harshyadav.08@gmail.com
                </span>
                &nbsp;&nbsp;
                <Link to="/contact" className="contact__button">
                  Write Me!
                  <AiOutlineDoubleRight className="contact__button-icon" />
                </Link>
              </div>

              <div className="contact__card">
                <GrContactInfo className="contact__card-icon" />
                <h3 className="contact__card-title">Tel. No.</h3>
                <span className="contact__card-data">05462 358 801</span>
                &nbsp;&nbsp;
                <a
                  href="https://wa.me/qr/G57TB6VZ7GMYO1"
                  className="contact__button"
                >
                  Write Me!
                  <AiOutlineDoubleRight className="contact__button-icon" />
                </a>
              </div>

              <div className="contact__card">
                <GrSkype className="contact__card-icon" />
                <h3 className="contact__card-title">Skype</h3>
                <span className="contact__card-data">Harsh</span>
                &nbsp;&nbsp;
                <a
                  href="https://join.skype.com/invite/wI9MQAXZuOIj"
                  className="contact__button"
                >
                  Write Me!
                  <AiOutlineDoubleRight className="contact__button-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Detailed Form</h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your Name"
                  maxLength={30}
                  required
                />
              </div>

              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">
                  Email address:
                </label>
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Insert your Email address"
                  maxLength={80}
                  required
                />
              </div>

              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="contact__form-input"
                  placeholder="Insert your Phone Number"
                  maxLength={18}
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label htmlFor="" className="contact__form-tag">
                  Notion:
                </label>
                <textarea
                  type="text"
                  name="notion"
                  id=""
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="what you have in your mind?"
                  required
                ></textarea>
              </div>

              <button className="button button--flex">
                Submit &nbsp;&nbsp; <GiSubmarineMissile size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="contact__address">
          <h3 className="contact__title">Address</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458879.28205545933!2d82.90417809367219!3d26.03373954478361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991bd4c55c8f843%3A0xeae963c8d2194a57!2sHARSH%20YADAV!5e0!3m2!1sen!2sin!4v1674304503599!5m2!1sen!2sin"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
