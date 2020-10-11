import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

import "./styles/BadgesList.css";

class BadgesOriginalListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesOriginalList extends React.Component {
  render() {
    let badgesList=null;

    /**validamos si vienen datos vacios */
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningun Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      );
    }
    else{
      //cuando almacenamos un nuevo badge este se va al final de lista con reverse() hacemos que el ultimo figure primero
      //si no queremos esas funcionalidad solo escribimos
      //this.props.badges.map(badge) en el return de abajo
      badgesList = [...this.props.badges].reverse();
    }

    //al hacer click en algun elemento de la lista nos dirigimos a la información detallada del Badge
    return (
      
      <div className="BadgesList">
        <ul className="list-unstyled">
          {badgesList.map((badge) => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesOriginalListItem badge={badge} />
                </Link>
                
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesOriginalList;
