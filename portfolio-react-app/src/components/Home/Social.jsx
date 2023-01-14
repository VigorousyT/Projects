import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMedium,
  BsTelegram,
} from "react-icons/bs";
import "./Home.css";

const Social = () => {
  return (
    <div className="home__social">
      <ul className="">
        <li className="home_social_list">
          <a
            href="https://www.linkedin.com/in/h-a-r-s-h-y-a-d-a-v/"
            className="home__social-icon"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="home_social_list">
          <a
            href="https://www.instagram.com/_h_a_rs__h_/"
            className="home__social-icon"
          >
            <BsInstagram />
          </a>
        </li>
        <li className="home_social_list">
          <a href="https://t.me/dev_harsh_08" className="home__social-icon">
            <BsTelegram />
          </a>
        </li>
        <li className="home_social_list">
          <a
            href="https://github.com/VigorousyT/Projects"
            className="home__social-icon"
          >
            <BsGithub />
          </a>
        </li>
        <li className="home_social_list">
          <a
            href="https://medium.com/@harshyadav082000"
            className="home_social_link"
          >
            <BsMedium />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
