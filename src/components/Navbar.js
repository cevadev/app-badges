import React from "react";
import logo from "../images/badge-header.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <a href="/">
          <img src={logo} alt="" />
          <span className="">Platzi</span>
          <span>Conf</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
