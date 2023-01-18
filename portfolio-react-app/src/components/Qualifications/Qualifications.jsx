import { React, useState } from "react";
import "./qualifications.css";
import { MdOutlineSchool } from "react-icons/md";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
// import { BsBriefcaseFill } from "react-icons/bs";

const Qualifications = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <>
      <section>
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Journey</span>

        {/* Qualifications Bar */}
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggle === 1
                  ? "qualification__button qualifications__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <MdOutlineSchool className="qualification__icon" size={20} />
              &nbsp;&nbsp;Education
            </div>

            {/* Experience Button */}
            {/* <div
              className={
                toggle === 2
                  ? "qualification__button qualifications__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <BsBriefcaseFill className="qualification__icon" size={18} />
              &nbsp;&nbsp;Experience
            </div> */}
            {/* Upto Experience Button */}
          </div>

          {/* Qualifications Timeline */}

          <div className="qualification__sections">
            <div
              className={
                toggle === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web development</h3>
                  <span className="qualification__subtitle">
                    Upgrad KnowledgeHut
                  </span>
                  <div className="qualification__calender">
                    <BsFillCalendar2CheckFill /> 27/June/2022 - 10/Nov/2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Bachlor of Science</h3>
                  <span className="qualification__subtitle">
                    Purvanchal University
                  </span>
                  <div className="qualification__calender">
                    <BsFillCalendar2CheckFill /> 2019 - 2022
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Intermediate</h3>
                  <span className="qualification__subtitle">
                    Sarvodaya Public School
                  </span>
                  <div className="qualification__calender">
                    <BsFillCalendar2CheckFill /> 2017 - 2019
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">High School</h3>
                  <span className="qualification__subtitle">
                    Sarvodaya Public School
                  </span>
                  <div className="qualification__calender">
                    <BsFillCalendar2CheckFill /> 2015 - 2017
                  </div>
                </div>
              </div>
            </div>

            {/* Upto Qualifications Timeline */}

            {/* Experience Timeline */}

            <div
              className={
                toggle === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {/* <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web development</h3>
                  <span className="qualification__subtitle">
                    Upgrad KnowledgeHut
                  </span>
                  <div className="qualification__calender">
                    <BsFillCalendar2CheckFill /> 27/June/2022 - 10/Nov/2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div> */}
            </div>

            {/* Upto Experience Timeline */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualifications;
