import React from "react";
import { SiExpress, SiMongodb } from "react-icons/si";
import "../Skills.css";
import { FaNodeJs } from "react-icons/fa";

const Backend = () => {
  return (
    <div>
      <div className="skills__content">
        <h3 className="skills__title">Backend Skills</h3>

        <div className="skills__box">
          <ul className="skills__group">
            <li className="skills__data">
              <FaNodeJs size={14} />

              <div>
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__level"></span>
              </div>
            </li>

            <li className="skills__data">
              <SiExpress size={11} />

              <div>
                <h3 className="skills__name">Express.js</h3>
                <span className="skills__level"></span>
              </div>
            </li>

            <li className="skills__data">
              <SiMongodb size={11} />

              <div>
                <h3 className="skills__name">MongoDb</h3>
                <span className="skills__level"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Backend;
