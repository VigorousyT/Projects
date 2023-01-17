import React from "react";
import "./Component.css";
import { IoMdCloudDone } from "react-icons/io";
import { Link } from "react-router-dom";

const Done = () => {
  return (
    <>
      <section>
        <h2 className="done__title1">THANKS FOR VISITING</h2>
        <span className="done__subtitle1">🙏🙏🙏</span>

        <div className="done__container grid">
          <div className="card">
            <div className="inner__card">
              <IoMdCloudDone className="done__icon" size={190} />
            </div>
            <h2 className="done__title2">SENDED TO HARSH</h2>

            <span className="done__subtitle2">
              Back to&nbsp;<Link to="/">Home</Link>
            </span>
            <br />
            <br />
            <p>
              We received your Message;
              <br /> we'll be in touch shortly!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Done;
