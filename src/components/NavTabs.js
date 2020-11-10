import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./styles/navStyle.css"

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item nav-text">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        <h5> Home </h5>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
           <h5> Portfolio</h5>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
           <h5> Resume</h5>
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
