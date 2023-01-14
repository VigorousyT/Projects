import React from "react";
import "./About.css";
import HarshImg from "../../assets/logo.jpg";
import CV from "../../assets/Harsh-1.pdf";
import { BsGraphUp, BsFileEarmarkPdfFill } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { SiSitepoint } from "react-icons/si";
import Navbar from "../Navbar/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <section className="about section" id="about">
        <h2 className="section__title">Hello, it's Harsh Here</h2>
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
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptate delectus tenetur! Delectus atque eligendi ut
              dignissimos suscipit aspernatur id vel alias repellendus eaque,
              eos debitis! Molestiae eos soluta aspernatur.
            </p>

            <a download="" href={CV} className="button button--flex">
              Download CV &nbsp;&nbsp;
              <BsFileEarmarkPdfFill />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
