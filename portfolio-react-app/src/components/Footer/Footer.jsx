import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { TbCopyright } from "react-icons/tb";
import { BsDiscord, BsMessenger } from "react-icons/bs";
import {
  FaSnapchatSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Harsh</h1>

        <ul className="footer__list">
          <li>
            <Link to="/about" className="footer__link">
              About
            </Link>
          </li>

          <li>
            <Link to="/project" className="footer__link">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/achievement" className="footer__link">
              Certifications
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.snapchat.com/add/vigorous_yt?share_id=I2_SnSakHNo&locale=en-IN"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FaSnapchatSquare />
          </a>

          <a
            href="https://discord.gg/jWp9VKYp"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <BsDiscord />
          </a>

          <a
            href="https://passmyinterview.com/21-great-answers-to-tough-interview-questions/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <BsMessenger />
          </a>

          <a
            href="https://github.com/VigorousyT?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FaGithubSquare />
          </a>

          <a
            href="https://youtube.com/@vigorousyt765"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FaYoutubeSquare />
          </a>
        </div>

        <span className="footer__copyright">
          Copyright
          <TbCopyright className="footer__copyright-icon" size={20} />
          &nbsp; 2023;&nbsp; Harsh Yadav. All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
