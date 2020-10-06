import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li className="BadgesListItem" key={badge.id}>
              <img className="BadgesListItem__avatar" src={badge.avatarUrl} />
              <div>
                <div>
                  <strong>
                    {badge.firstName} {badge.lastName}
                  </strong>
                </div>
                <div>
                  <div className="Twitter__name">
                    <span className="Twitter__logo">@{badge.twitter}</span>
                  </div>
                </div>
                <div>
                  <p>{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
