import React from "react";
import { Link } from "react-router-dom";

import astro from "../images/astronauts.svg";
import logo from "../images/platziconf-logo.svg";
import "./styles/Home.css";

function BadgeHome() {
  return (
    <div className="Home">
      <div className="col-text">
        <img src={logo} alt="" />
        <h1>BADGE MANAGEMENT SYSTEM</h1>
        <p>
          <Link className="btn btn-primary" to="/badgesOriginal">
            Start Badges Original
          </Link>
        </p>
        <p>
          <Link className="btn btn-primary" to="/badges">
            Start Badges
          </Link>
        </p>
      </div>
      <div className="col-img">
        <img src={astro} alt="" />
      </div>
    </div>
  );
}

export default BadgeHome;
