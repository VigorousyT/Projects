import { React, useState } from "react";
import "./Project.css";
import Navbar from "../Navbar/Navbar";
// import { Link } from "react-router-dom";
import { IoLogoDesignernews } from "react-icons/io";
import { SiReactos } from "react-icons/si";
import { GoTriangleRight } from "react-icons/go";
import WebWork1 from "../../assets/WebWork1.png";
import WebWork2 from "../../assets/WebWork2-2.png";
import WebWork3 from "../../assets/WebWork3.png";
import WebWork4 from "../../assets/WebWork4.jpg";
import WebWork5 from "../../assets/WebWork5.png";
import work4 from "../../assets/work4.jpg";

function Project() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <>
      <Navbar />
      <section className="work section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle"></span>

        <div className="project__container container">
          <div className="work__filters">
            {/* web Button */}
            <div
              className={
                toggle === 1
                  ? "work__item project__active button--flex"
                  : "work__item button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <SiReactos className="project__icon" size={20} />
              &nbsp;&nbsp;WEB
            </div>
            {/* Upto web Button */}

            {/* design Button */}
            <div
              className={
                toggle === 2
                  ? "work__item project__active button--flex"
                  : "work__item button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <IoLogoDesignernews className="project__icon" size={18} />
              &nbsp;&nbsp;Designs
            </div>
            {/* Upto design Button */}
          </div>

          {/* Web Projects Start */}
          <div className="work__container conatiner grid">
            <div
              className={
                toggle === 1
                  ? "work__content work__content-active"
                  : "work__content"
              }
            >
              <div className="work__card">
                <img src={WebWork1} alt="" className="work__img" />
                <h3 className="work__title">Coffee Menu Webpage</h3>
                <span className="work__subtitle"></span>
                <a
                  href="https://vigorousyt.blogspot.com/2022/10/coffee-webpage-code-representation-may.html"
                  className="work__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link To Code &nbsp; <GoTriangleRight />
                </a>
              </div>

              <div className="work__card">
                <img src={WebWork2} alt="" className="work__img" />
                <h3 className="work__title">Registration Form</h3>
                <span className="work__subtitle"></span>
                <a
                  href="https://vigorousyt.blogspot.com/2022/10/coffee-webpage-code-representation-may.html"
                  className="work__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link To Code &nbsp; <GoTriangleRight />
                </a>
              </div>

              <div className="work__card">
                <img src={WebWork3} alt="" className="work__img" />
                <h3 className="work__title">WakeCup Coffee App</h3>
                <span className="work__subtitle">
                  A wesite using HTML, CSS, Made this static web while
                  practicing Html and css. Attaching code for this.
                </span>
                <a
                  href="https://github.com/VigorousyT/WakeCup-Project"
                  className="work__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link To Code &nbsp; <GoTriangleRight />
                </a>
              </div>

              <div className="work__card">
                <img src={WebWork4} alt="" className="work__img" />
                <h3 className="work__title">Social Media Full Stack App</h3>
                <span className="work__subtitle">
                  Working on to deploy this website as soon as possible
                </span>
                <a
                  href="https://github.com/VigorousyT/WakeCup-Project"
                  className="work__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  No Code for this &nbsp; <GoTriangleRight />
                </a>
              </div>

              <div className="work__card">
                <img src={WebWork5} alt="" className="work__img" />
                <h3 className="work__title">Portfolio React App</h3>
                <span className="work__subtitle">
                  A app for me where to can represent my skills, Projects and
                  work
                </span>
                <a
                  href="https://harsh-portfolio-4op0dpj2h-vigorousyt.vercel.app/"
                  className="work__button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed App &nbsp; <GoTriangleRight />
                </a>
              </div>
            </div>
          </div>
          {/* Web Projects Starts */}

          {/* designs Projects Start */}
          <div className="work__container conatiner grid">
            <div
              className={
                toggle === 2
                  ? "work__content work__content-active"
                  : "work__content"
              }
            >
              {/* Design Cards */}

              <div className="work__card">
                <img src={work4} alt="" className="work__img" />
                <h3 className="work__title">Sports Edit</h3>
                <span className="work__subtitle"></span>
                {/* <a
                  href="https://vigorousyt.blogspot.com/2022/10/coffee-webpage-code-representation-may.html"
                  className="work__button"
                >
                  Link To Img &nbsp; <GoTriangleRight />
                </a> */}
              </div>

              <div className="work__card">
                <img
                  src="https://images.unsplash.com/photo-1674226709258-602c80f8a78a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="work__img"
                />
                <h3 className="work__title">Blue Tranquil</h3>
                <span className="work__subtitle"></span>
                {/* <a
                  href="https://vigorousyt.blogspot.com/2022/10/coffee-webpage-code-representation-may.html"
                  className="work__button"
                >
                  Link To Img &nbsp; <GoTriangleRight />
                </a> */}
              </div>

              <div className="work__card">
                <img
                  src="https://images.unsplash.com/photo-1674226709073-76a1c578e1d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="work__img"
                />
                <h3 className="work__title">Black and white</h3>
                <span className="work__subtitle"></span>
                {/* <a
                  href="https://vigorousyt.blogspot.com/2022/10/coffee-webpage-code-representation-may.html"
                  className="work__button"
                >
                  Link To Img &nbsp; <GoTriangleRight />
                </a> */}
              </div>

              <div className="work__card">
                <img
                  src="https://images.unsplash.com/photo-1674226709430-064f4f917516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="work__img"
                />
                <h3 className="work__title">A man in snow</h3>
                <span className="work__subtitle"></span>
                {/* <a
                  href="https://vigorousyt.blogspot.com/2022/10/coffee-webpage-code-representation-may.html"
                  className="work__button"
                >
                  Link To Img &nbsp; <GoTriangleRight />
                </a> */}
              </div>

              <div className="work__card">
                <img
                  src="https://images.unsplash.com/photo-1674226708927-99064554bf65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="work__img"
                  height={1000}
                />
                <h3 className="work__title">Cycling Man</h3>
                <span className="work__subtitle"></span>
                {/* <a
                  href="https://vigorousyt.blogspot.com/2022/10/coffee-webpage-code-representation-may.html"
                  className="work__button"
                >
                  Link To Img &nbsp; <GoTriangleRight />
                </a> */}
              </div>

              <div className="work__card">
                <img
                  src="https://images.unsplash.com/photo-1674227297214-f8c193ce92ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="work__img"
                  height={1000}
                />
                <h3 className="work__title">Lady on a Mountain</h3>
                <span className="work__subtitle"></span>
                {/* <a
                  href="https://vigorousyt.blogspot.com/2022/10/coffee-webpage-code-representation-may.html"
                  className="work__button"
                >
                  Link To Img &nbsp; <GoTriangleRight />
                </a> */}
              </div>

              {/* upto Design Cards */}
            </div>
          </div>
          {/* designs Projects Starts */}
        </div>
      </section>
    </>
  );
}

export default Project;
