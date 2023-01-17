import React from "react";
import "../Skills.css";
import { SiJavascript, SiReactrouter } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

const Frontend = () => {
  return (
    <div>
      <div className="skills__content">
        <h3 className="skills__title">Frontend Skills</h3>

        <div className="skills__box">
          <ul className="skills__group">
            <li className="skills__data">
              <FaHtml5 size={15} />

              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level"></span>
              </div>
            </li>

            <li className="skills__data">
              <FaCss3Alt size={15} />

              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills__level"></span>
              </div>
            </li>

            <li className="skills__data">
              <SiJavascript size={13} />

              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__level"></span>
              </div>
            </li>

            <li className="skills__data">
              <FaReact size={14} />

              <div>
                <h3 className="skills__name">React Library</h3>
                <span className="skills__level"></span>
              </div>
            </li>

            <li className="skills__data">
              <SiReactrouter size={14} />

              <div>
                <h3 className="skills__name">React Router</h3>
                <span className="skills__level"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
