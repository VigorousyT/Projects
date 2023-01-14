import React from "react";
import { GrSend } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./Home.css";

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home__title">Harsh Yadav</h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        Skilled JavaScript Full Stack web Developer eager to join a creative,
        problem solving team. Ablity to learn and implement new technologies
        quickly. My skills include Github, HTML, CSS, JavaScript, React, React
        Router, React Redux, Node.js, express.js, MongoDB.
      </p>
      <Link to="/contact" className="button button--flex">
        Text Me. &nbsp;&nbsp;
        <span>
          <GrSend />
        </span>
      </Link>
    </div>
  );
};

export default Data;
