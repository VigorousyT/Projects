import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <h1>Hello Blog...</h1>
      <h2>
        See <Link to="/blog">My Blog</Link>
      </h2>
    </div>
  );
}

export default Portfolio;
