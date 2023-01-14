import React from "react";
import "./Home.css";
import Social from "./Social";
import Navbar from "../Navbar/Navbar";
import Data from "./Data";
import { Link } from "react-router-dom";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home-img"></div>
            <Data />
          </div>
          <div className="home-mouse">
            <Link to="/" className="home__scroll-button">
              <BsMouse size={70} />
            </Link>
          </div>
        </div>
      </section>
      <Navbar />
    </>
  );
}

export default Home;
