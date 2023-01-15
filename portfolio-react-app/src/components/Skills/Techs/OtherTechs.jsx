import React from "react";
import "../Skills.css";
import { BsCodeSquare } from "react-icons/bs";

const OtherTechs = () => {
  return (
    <div>
      <div className="skills__content">
        <h3 className="skills__title">Other tech Skills</h3>

        <div className="skills__box">
          <ul className="skills__group">
            <li className="skills__data">
              <BsCodeSquare size={11} />

              <div>
                <h3 className="skills__name">HTML</h3>
              </div>
            </li>

            <li className="skills__data">
              <BsCodeSquare size={11} />

              <div>
                <h3 className="skills__name">CSS</h3>
              </div>
            </li>

            <li className="skills__data">
              <BsCodeSquare size={11} />

              <div>
                <h3 className="skills__name">JavaScript</h3>
              </div>
            </li>

            <li className="skills__data">
              <BsCodeSquare size={11} />

              <div>
                <h3 className="skills__name">HTML</h3>
              </div>
            </li>

            <li className="skills__data">
              <BsCodeSquare size={11} />

              <div>
                <h3 className="skills__name">HTML</h3>
              </div>
            </li>

            <li className="skills__data">
              <BsCodeSquare size={11} />

              <div>
                <h3 className="skills__name">HTML</h3>
              </div>
            </li>

            <li className="skills__data">
              <BsCodeSquare size={11} />

              <div>
                <h3 className="skills__name">HTML</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherTechs;
