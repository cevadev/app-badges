import React from "react";
import Badge from "../components/Badge.js";
import Navbar from "../components/Navbar.js";
import BadgeForm from "../components/BadgeForm.js";
import header from "../images/badge-header.svg";

import "./styles/BadgeNew.css";
class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Carlos"
                lastName="Villanueva"
                jobTitle="Fullstack developer"
                twitter="harpazos"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
