import React from "react";
import LogoConf from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    //cuando hacemos render vamos a retornar un encabezado
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={LogoConf} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="foto del asistente"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h4>{this.props.email}</h4>
          <h4>{this.props.jobTitle}</h4>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">
          <strong>#PlatziConf</strong>
        </div>
      </div>
    );
  }
}

export default Badge;
