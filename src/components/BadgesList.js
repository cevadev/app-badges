import React from "react";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.image}
          alt={`${this.props.badge.name} - ${this.props.badge.gender}`}
        />

        <div>
          <strong>
            {this.props.badge.name} - {this.props.badge.gender}
          </strong>
          <br />@{this.props.badge.name}
          <br />
          {this.props.badge.species}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
