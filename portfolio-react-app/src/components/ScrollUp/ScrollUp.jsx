import React from "react";
import "./Scroll.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");
    //when the scroll is higher than 560vh height, add the show-scrollclass to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="/" className="scrollup">
      <AiOutlineArrowUp size={30} />
    </a>
  );
};

export default ScrollUp;
