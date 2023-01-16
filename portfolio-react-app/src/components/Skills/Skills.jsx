import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Skills.css";
import Frontend from "./Techs/Frontend.jsx";
import Backend from "./Techs/Backend.jsx";
import OtherTechs from "./Techs/OtherTechs.jsx";

function Skills() {
  return (
    <>
      <Navbar />
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle"></span>

        <div className="skills__container container grid">
          <Frontend />
          <Backend />
          <OtherTechs />
        </div>
      </section>
    </>
  );
}

export default Skills;
