import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { GiOvermind } from "react-icons/gi";
import { AiOutlineContacts } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { SiAboutdotme } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/Logo.png";

function Navbar() {
  /*=============== MENU ===============*/
  const [Toggle, showMenu] = useState();

  return (
    <div className="header">
      <nav className="nav container">
        <Link to="/" className="">
          <img className="nav__logo" src={logo} alt="HY" />
        </Link>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <AiOutlineHome className="navbar-icon" />
                <div className="link-text">Home</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <SiAboutdotme className="navbar-icon" />
                <div className="link-text">About</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/skills" className="nav__link">
                <GiOvermind className="navbar-icon" />
                <div className="link-text">Skills</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/project" className="nav__link">
                <AiOutlineBulb className="navbar-icon" />
                <div className="link-text">Projects</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <AiOutlineContacts className="navbar-icon" />
                <div className="link-text">Contact</div>
              </Link>
            </li>
          </ul>
          <RxCross2 onClick={() => showMenu(!Toggle)} className="nav__close" />
        </div>
        <div className="nav__toggle">
          <GiHamburgerMenu onClick={() => showMenu(!Toggle)} size={25} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
