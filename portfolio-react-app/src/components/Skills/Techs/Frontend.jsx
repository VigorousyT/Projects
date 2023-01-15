import React from "react";
import { BsCodeSquare } from "react-icons/bs";
import "../Skills.css";

const Frontend = () => {
  return (
    <div>
      <div className="skills__content">
        <h3 className="skills__title">Frontend Skills</h3>

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

export default Frontend;
