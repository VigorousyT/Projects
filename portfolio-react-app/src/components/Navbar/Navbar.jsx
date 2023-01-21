import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { GiOvermind, GiAchievement } from "react-icons/gi";
import { AiOutlineContacts } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { SiAboutdotme } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/Logo.png";

function Navbar() {
  /*=============== Header ===============*/
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    //when the scroll is higher than 560vh height, add the scroll-header class to a tag with the scroll-top class
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== toogle menu ===============*/
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
                <AiOutlineHome size={15} className="navbar-icon" />
                <div className="link-text">Home</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                <SiAboutdotme size={15} className="navbar-icon" />
                <div className="link-text">About</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/skills" className="nav__link">
                <GiOvermind size={15} className="navbar-icon" />
                <div className="link-text">Skills</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/achievement" className="nav__link">
                <GiAchievement size={15} className="navbar-icon" />
                <div className="link-text">Actions</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/project" className="nav__link">
                <AiOutlineBulb size={15} className="navbar-icon" />
                <div className="link-text">Projects</div>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <AiOutlineContacts size={15} className="navbar-icon" />
                <div className="link-text">Contact</div>
              </Link>
            </li>
          </ul>
          <RxCross2 onClick={() => showMenu(!Toggle)} className="nav__close" />
        </div>
        <div className="nav__toggle">
          <FiMenu onClick={() => showMenu(!Toggle)} size={30} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
