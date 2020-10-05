import React from "react";
import Badge from "../components/Badge.js";
import Navbar from "../components/Navbar.js";
import BadgeForm from "../components/BadgeForm.js";
import header from "../images/badge-header.svg";

import "./styles/BadgeNew.css";
class BadgeNew extends React.Component {
  //inicializamos un state
  state = {
    form: {},
  };

  //este metodo recibe el evento y luego realiza un setState
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

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
              <BadgeForm onChange={this.handleChange} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
