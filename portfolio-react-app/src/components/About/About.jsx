import React from "react";
import "./About.css";
import HarshImg from "../../assets/logo.jpg";
import CV from "../../assets/Harsh-1.pdf";
import { BsGraphUp, BsFileEarmarkPdfFill } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { SiSitepoint } from "react-icons/si";
import Navbar from "../Navbar/Navbar";
import Qualification from "../Qualifications/Qualifications";

function About() {
  return (
    <>
      <Navbar />
      <section className="about section" id="about">
        <h2 className="about1__title1">About Me!</h2>
        <h4 className="about2__title2">Hello, it's Harsh Here</h4>
        <br />
        <div className="about__container container grid">
          <img src={HarshImg} alt="" className="about__img" />
          <div className="about__data">
            <div className="about__info grid">
              <div className="about__box">
                <FcLikePlaceholder />
                <h3 className="about__title">What I like:</h3>
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle"></span>
                <br />
              </div>
              <div className="about__box">
                <BsGraphUp />
                <h3 className="about__title">What I'm Doing</h3>
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle"></span>
                <br />
              </div>
              <div className="about__box">
                <RiCharacterRecognitionLine />
                <h3 className="about__title">Recognition</h3>
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle"></span>
                <br />
              </div>
            </div>
            <p className="about__description">{/* Please Write About you */}</p>

            <div className="navigate">
              <a download="" href={CV} className="button button--flex">
                Download CV &nbsp;&nbsp;
                <BsFileEarmarkPdfFill size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <Qualification />
    </>
  );
}

export default About;
