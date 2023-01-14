import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
      <Link to="/" className="btn">
        HomePage
      </Link>
    </div>
  );
}
