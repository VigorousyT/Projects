import React from "react";
import "../Skills.css";
import { SiAdobephotoshop } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const OtherTechs = () => {
  return (
    <div>
      <div className="skills__content">
        <h3 className="skills__title">Other tech Skills</h3>

        <div className="skills__box">
          <ul className="skills__group">
            <li className="skills__data">
              <FaLinux size={11} />

              <div>
                <h3 className="skills__name">Linux</h3>
                <span className="skills__level"></span>
              </div>
            </li>

            <li className="skills__data">
              <AiOutlineGithub size={11} />

              <div>
                <h3 className="skills__name">GitHub</h3>
                <span className="skills__level"></span>
              </div>
            </li>

            <li className="skills__data">
              <SiAdobephotoshop size={11} />

              <div>
                <h3 className="skills__name">Adobe Photoshop</h3>
                <span className="skills__level"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherTechs;
