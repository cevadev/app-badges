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

/**
 * Para crear un buscador de badges vamos a utilizar Hooks, pero lo Hooks solo funcionan dentro de 
 * componentes funcion y no dentro de clases, por lo que debemos convertir
 * class BadgesOriginalList extends React.Component   en una function
 * quitamos el metodo render(){}
 */
function BadgesOriginalList(props) {

    const badges = props.badges;
    //let badgesList=null;

    /**
     * Usamos useState
     * query -> lo que se escribe en la caja
     * setQuery() -> establecemos el valor
     * Para hacer el filtrado haremos una combinación entre la lista de los badges y el query
     */
    const [ query, setQuery] = React.useState('');
    //guardamos el resultado de los badges filtrados
    let filteredBadgesList = badges.filter( badge=>{
      //los badges que se deben retornar son los que se coincidan con nombre y apellido en el query
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    });

    //fin Hook

    /**validamos si vienen datos vacios */
    if (filteredBadgesList.length === 0) {
      return (
        <div>

          <div className="form-group">
          <label> Filter Badges</label>
          <input type="text" className="form-control" value={query} onChange={(event)=>{
            //debemos guardar el valor y pasarlo a la propiedad value para ello usamos Hooks
            //cuando sucedad el evento onChange leemos el valor del evento
            //console.info(event.target.value);
            setQuery(event.target.value)
          }}/>
        </div>

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
      //filteredBadgesList = [...badges].reverse();
    }

    //al hacer click en algun elemento de la lista nos dirigimos a la información detallada del Badge
    //cada vez que se escriba guardamos el valor que hay para luego utilizarlo pasandolo a traves del value
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label> Filter Badges</label>
          <input type="text" className="form-control" value={query} onChange={(event)=>{
            //debemos guardar el valor y pasarlo a la propiedad value para ello usamos Hooks
            //cuando sucedad el evento onChange leemos el valor del evento
            //console.info(event.target.value);
            setQuery(event.target.value)
          }}/>
        </div>

        <ul className="list-unstyled">
          {filteredBadgesList.map((badge) => {
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

export default BadgesOriginalList;
