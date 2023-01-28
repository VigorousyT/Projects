import React from "react";
import "./About.css";
import HarshImg from "../../assets/My project-1.png";
import { BsGraphUp, BsFileEarmarkPdfFill } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { SiSitepoint, SiGooglechat } from "react-icons/si";
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
          <div className="about__img">
            <img src={HarshImg} alt="" className="about__img__img" />
          </div>

          <div className="about__data">
            <p className="about__description">
              As a recent graduate with a degree in Bachlor of science(Bsc), I
              am excited to begin my career in IT industry as a Full stack
              developer. I have gained valuable skills through my coursework,
              including &nbsp;
              <a href="/skills" style={{ color: "#a00050" }}>
                skills
              </a>
              . I am eager to apply these skills in a professional setting and
              continue to learn and grow in my field.
            </p>
            <span
              style={{
                color: "hwb(331 5% 15%)",
                textAlign: "center",
              }}
            >
              Put my Gmail account and start a Google chat with me. :--
              <span style={{ color: "red" }}>Harshyadav082000@gmail.com</span>
            </span>

            <div className="about__info grid">
              <div className="about__box">
                <FcLikePlaceholder />
                <h3 className="about__title">Hobbies</h3>
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">Watching Sci-fi movies</span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">Playing OutDoor Games</span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">Playing Video Games</span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">Going through A.I</span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">
                  Knowing about the technology
                </span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">Soft Bhajans/Kirtans</span>
                <br />
              </div>

              <div className="about__box">
                <BsGraphUp />
                <h3 className="about__title">What I'm Doing</h3>
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">
                  Working to Improve my communication skills.
                </span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">
                  Searching For a Job in IT Sector as a FSD
                </span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">
                  Reading a book{" "}
                  <span style={{ color: "lightsalmon" }}>
                    [21 Lessons for the 21st Century]
                  </span>{" "}
                  by{" "}
                  <span style={{ color: "lightpink" }}>Yuval Noah Harari</span>
                </span>
                <br />
                {/* <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle"></span>
                <br /> */}
              </div>

              <div className="about__box">
                <RiCharacterRecognitionLine />
                <h3 className="about__title">Recent Accomplishments</h3>
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">
                  Qwiklabs Mention in December Hall of Fame
                </span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">
                  Achieved a FSD certificate from UpGrad
                </span>
                <br />
                <SiSitepoint size={10} />
                &nbsp;
                <span className="about__subtitle">
                  Deployed my front-end app
                </span>
                <br />
              </div>
            </div>

            <div className="navigate">
              <div className="navigate__1">
                <a
                  download=""
                  href="https://drive.google.com/file/d/1jTZdLklwYHBG26V8hxsVTvCz7dkRFKZQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--flex"
                >
                  Download CV &nbsp;&nbsp;
                  <BsFileEarmarkPdfFill size={15} />
                </a>
              </div>

              <div className="navigate__1">
                <a
                  download=""
                  href="https://mail.google.com/chat/u/0/#chat/space/AAAAaKrm5zg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--flex"
                >
                  Google Chat &nbsp;&nbsp;
                  <SiGooglechat size={15} />
                </a>
              </div>
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
